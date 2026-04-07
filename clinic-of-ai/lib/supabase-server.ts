import { createClient } from '@supabase/supabase-js'
import { requireEnv } from '@/lib/env'

const supabaseUrl = requireEnv('NEXT_PUBLIC_SUPABASE_URL')
const supabaseServiceKey = requireEnv('SUPABASE_SERVICE_ROLE_KEY')

// Server-only client with elevated privileges; never import in client components
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { persistSession: false },
})
