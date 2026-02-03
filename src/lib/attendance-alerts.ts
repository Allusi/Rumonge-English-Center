import { Query, query, collection, where, getDocs } from 'firebase/firestore';
import type { Firestore } from 'firebase/firestore';
import { subDays, format } from 'date-fns';

export interface AttendanceAlert {
  studentId: string;
  studentName: string;
  attendanceDays: number;
  requiredDays: number;
  severity: 'warning' | 'critical';
}

/**
 * Check if a student has attended at least the required number of days this week
 * @param firestore - Firestore instance
 * @param studentId - Student ID to check
 * @param requiredDays - Minimum days required (default: 3)
 * @returns AttendanceAlert if student is below threshold, null otherwise
 */
export async function checkStudentAttendanceAlert(
  firestore: Firestore,
  studentId: string,
  studentName: string,
  requiredDays: number = 3
): Promise<AttendanceAlert | null> {
  try {
    // Get attendance records for the past 7 days
    const sevenDaysAgo = subDays(new Date(), 7);
    const startDateString = format(sevenDaysAgo, 'yyyy-MM-dd');
    const today = format(new Date(), 'yyyy-MM-dd');

    const attendanceQuery = query(
      collection(firestore, 'attendance'),
      where('studentId', '==', studentId),
      where('date', '>=', startDateString),
      where('date', '<=', today),
      where('status', '==', 'present')
    );

    const querySnapshot = await getDocs(attendanceQuery);
    const attendanceDays = querySnapshot.size;

    if (attendanceDays < requiredDays) {
      const severity = attendanceDays === 0 ? 'critical' : 'warning';
      return {
        studentId,
        studentName,
        attendanceDays,
        requiredDays,
        severity,
      };
    }

    return null;
  } catch (error) {
    console.error('Error checking attendance alert:', error);
    return null;
  }
}

/**
 * Check all students for low attendance
 * @param firestore - Firestore instance
 * @param studentIds - Array of student IDs to check
 * @param studentNames - Map of student IDs to names
 * @param requiredDays - Minimum days required (default: 3)
 * @returns Array of alerts for students below threshold
 */
export async function checkAllStudentsAttendance(
  firestore: Firestore,
  studentIds: string[],
  studentNames: Map<string, string>,
  requiredDays: number = 3
): Promise<AttendanceAlert[]> {
  const alerts: AttendanceAlert[] = [];

  for (const studentId of studentIds) {
    const studentName = studentNames.get(studentId) || 'Unknown';
    const alert = await checkStudentAttendanceAlert(
      firestore,
      studentId,
      studentName,
      requiredDays
    );
    if (alert) {
      alerts.push(alert);
    }
  }

  return alerts;
}
