import { supabaseServer } from '@/lib/supabase';
export default async function Home() {
  const supabase = supabaseServer();
  const { data } = await supabase.from('public_jobs').select('*').limit(10);
  return (<div>{data?.map(job => <div key={job.id}>{job.title}</div>)}</div>);
}