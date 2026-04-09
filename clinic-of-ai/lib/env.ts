type EnvCheck = {
  key: string
  required: boolean
  present: boolean
}

export type EnvReadinessReport = {
  ready: boolean
  environment: string
  missing: string[]
  checks: EnvCheck[]
}

const BASE_REQUIRED_KEYS = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'SUPABASE_SERVICE_ROLE_KEY',
  'RESEND_API_KEY',
  'RESEND_FROM_EMAIL',
  'PHILIPPE_EMAIL',
] as const

const PROD_REQUIRED_KEYS = ['NEXT_PUBLIC_SITE_URL'] as const

function hasValue(value: string | undefined): boolean {
  return Boolean(value && value.trim().length > 0)
}

/**
 * Get an environment variable value.
 * Returns the value if present, or an empty string if missing.
 * Logs a warning in development when a required variable is missing.
 */
export function requireEnv(key: string): string {
  const value = process.env[key]
  if (!hasValue(value)) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`⚠ Missing environment variable: ${key}`)
    }
    return ''
  }
  return value!
}

export function getEnvReadinessReport(): EnvReadinessReport {
  const environment = process.env.NODE_ENV ?? 'development'
  const isProduction = environment === 'production'

  const checks: EnvCheck[] = [
    ...BASE_REQUIRED_KEYS.map((key) => ({
      key,
      required: true,
      present: hasValue(process.env[key]),
    })),
    ...PROD_REQUIRED_KEYS.map((key) => ({
      key,
      required: isProduction,
      present: hasValue(process.env[key]),
    })),
  ]

  const missing = checks.filter((item) => item.required && !item.present).map((item) => item.key)

  return {
    ready: missing.length === 0,
    environment,
    missing,
    checks,
  }
}
