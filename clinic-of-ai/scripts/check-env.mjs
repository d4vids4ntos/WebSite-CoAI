import fs from 'node:fs'
import path from 'node:path'

const cwd = process.cwd()
const files = ['.env.local', '.env']

for (const file of files) {
  const fullPath = path.join(cwd, file)
  if (!fs.existsSync(fullPath)) continue

  const content = fs.readFileSync(fullPath, 'utf8')
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const idx = trimmed.indexOf('=')
    if (idx <= 0) continue
    const key = trimmed.slice(0, idx).trim()
    const value = trimmed.slice(idx + 1).trim().replace(/^['"]|['"]$/g, '')
    if (!(key in process.env)) {
      process.env[key] = value
    }
  }
}

const baseRequired = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'SUPABASE_SERVICE_ROLE_KEY',
  'RESEND_API_KEY',
  'RESEND_FROM_EMAIL',
  'PHILIPPE_EMAIL',
]

const isProduction = process.env.NODE_ENV === 'production' || process.argv.includes('--production')
const required = isProduction ? [...baseRequired, 'NEXT_PUBLIC_SITE_URL'] : baseRequired
const missing = required.filter((key) => !process.env[key] || process.env[key].trim().length === 0)

if (missing.length > 0) {
  console.error('Environment check failed. Missing variables:')
  for (const key of missing) {
    console.error(`- ${key}`)
  }
  process.exit(1)
}

console.log('Environment check passed.')

