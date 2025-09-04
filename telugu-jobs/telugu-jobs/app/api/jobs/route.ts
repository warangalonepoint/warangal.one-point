import { supabaseServer } from '@/lib/supabase';
export async function POST(req){ const form = await req.formData(); return Response.json({ok:true}); }