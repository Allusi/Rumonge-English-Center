import SubmitAssignmentClient from './SubmitAssignmentClient';
export const dynamic = 'force-dynamic';

// Export an empty generateStaticParams so `next export` (output: 'export') succeeds.
export async function generateStaticParams() {
  return [];
}

export default function Page() {
  return <SubmitAssignmentClient />;
}
