'use client';

import { useEffect, useState, useMemo } from 'react';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, AlertCircle } from 'lucide-react';
import type { UserProfile, Attendance } from '@/lib/data';
import type { AttendanceAlert } from '@/lib/attendance-alerts';
import { Skeleton } from '@/components/ui/skeleton';
import { subDays, format } from 'date-fns';

export function AttendanceAlertsWidget() {
  const firestore = useFirestore();
  const [alerts, setAlerts] = useState<AttendanceAlert[]>([]);
  const [loading, setLoading] = useState(true);

  const { data: students } = useCollection<UserProfile>(
    firestore ? query(collection(firestore, 'users'), where('role', '==', 'student')) : null
  );

  // Fetch all attendance records for the past 7 days at once (much more efficient)
  const sevenDaysAgo = subDays(new Date(), 7);
  const startDateString = format(sevenDaysAgo, 'yyyy-MM-dd');
  const today = format(new Date(), 'yyyy-MM-dd');

  const { data: attendanceRecords, loading: attendanceLoading } = useCollection<Attendance>(
    firestore
      ? query(
          collection(firestore, 'attendance'),
          where('date', '>=', startDateString),
          where('date', '<=', today),
          where('status', '==', 'present')
        )
      : null
  );

  // Process alerts in a useMemo to avoid recalculating on every render
  useMemo(() => {
    if (attendanceLoading || !students || !attendanceRecords) {
      return;
    }

    // Group attendance by student ID and count days
    const attendanceByStudent = new Map<string, number>();
    attendanceRecords.forEach((record) => {
      const count = attendanceByStudent.get(record.studentId) || 0;
      attendanceByStudent.set(record.studentId, count + 1);
    });

    // Build alerts for students below threshold
    const newAlerts: AttendanceAlert[] = [];
    students.forEach((student) => {
      const attendanceDays = attendanceByStudent.get(student.id) || 0;
      const requiredDays = 3;

      if (attendanceDays < requiredDays) {
        const severity = attendanceDays === 0 ? 'critical' : 'warning';
        newAlerts.push({
          studentId: student.id,
          studentName: student.name,
          attendanceDays,
          requiredDays,
          severity,
        });
      }
    });

    // Sort by severity (critical first) then by attendance days (lowest first)
    newAlerts.sort((a, b) => {
      if (a.severity !== b.severity) {
        return a.severity === 'critical' ? -1 : 1;
      }
      return a.attendanceDays - b.attendanceDays;
    });

    setAlerts(newAlerts);
    setLoading(false);
  }, [students, attendanceRecords, attendanceLoading]);

  if (loading || attendanceLoading) {
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
          <div className="space-y-3 max-h-96 overflow-y-auto">
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

