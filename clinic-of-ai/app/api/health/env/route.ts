import { NextResponse } from 'next/server'
import { getEnvReadinessReport } from '@/lib/env'

export async function GET() {
  const report = getEnvReadinessReport()
  return NextResponse.json(report, { status: report.ready ? 200 : 500 })
}

