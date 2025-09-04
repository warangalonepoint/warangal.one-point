import { supabaseServer } from '@/lib/supabase';
export default async function JobPage({ params }) {
  const supabase = supabaseServer();
  const { data: job } = await supabase.from('public_jobs').select('*').eq('id', params.id).single();
  return job ? <div><h1>{job.title}</h1><p>{job.description}</p></div> : <div>Not found</div>;
}