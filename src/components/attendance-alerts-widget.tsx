'use client';

import { useEffect, useState } from 'react';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, AlertCircle } from 'lucide-react';
import type { UserProfile } from '@/lib/data';
import { checkStudentAttendanceAlert } from '@/lib/attendance-alerts';
import type { AttendanceAlert } from '@/lib/attendance-alerts';
import { Skeleton } from '@/components/ui/skeleton';

export function AttendanceAlertsWidget() {
  const firestore = useFirestore();
  const [alerts, setAlerts] = useState<AttendanceAlert[]>([]);
  const [loading, setLoading] = useState(true);

  const { data: students } = useCollection<UserProfile>(
    firestore ? query(collection(firestore, 'users'), where('role', '==', 'student')) : null
  );

  useEffect(() => {
    if (!firestore || !students || students.length === 0) {
      setLoading(false);
      return;
    }

    const checkAttendance = async () => {
      setLoading(true);
      const newAlerts: AttendanceAlert[] = [];

      for (const student of students) {
        const alert = await checkStudentAttendanceAlert(
          firestore,
          student.id,
          student.name,
          3 // Required 3 days per week
        );
        if (alert) {
          newAlerts.push(alert);
        }
      }

      // Sort by severity (critical first) then by attendance days (lowest first)
      newAlerts.sort((a, b) => {
        if (a.severity !== b.severity) {
          return a.severity === 'critical' ? -1 : 1;
        }
        return a.attendanceDays - b.attendanceDays;
      });

      setAlerts(newAlerts);
      setLoading(false);
    };

    checkAttendance();
  }, [firestore, students]);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Low Attendance Alerts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Low Attendance Alerts
          {alerts.length > 0 && (
            <Badge variant="destructive">{alerts.length}</Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {alerts.length === 0 ? (
          <p className="text-sm text-muted-foreground">All students are meeting attendance requirements.</p>
        ) : (
          <div className="space-y-3">
            {alerts.map((alert) => (
              <Alert key={alert.studentId} variant={alert.severity === 'critical' ? 'destructive' : 'default'}>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className="ml-2">
                  {alert.studentName}
                </AlertTitle>
                <AlertDescription className="ml-6">
                  Attendance: {alert.attendanceDays}/{alert.requiredDays} days this week
                  {alert.severity === 'critical' && (
                    <span className="block mt-1 font-semibold">⚠️ No attendance recorded this week</span>
                  )}
                </AlertDescription>
              </Alert>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
