function hexToRgb(hex) {
  const cleaned = hex.replace('#', '').trim()
  if (cleaned.length !== 6) {
    throw new Error(`Invalid hex color: ${hex}`)
  }

  const r = parseInt(cleaned.slice(0, 2), 16)
  const g = parseInt(cleaned.slice(2, 4), 16)
  const b = parseInt(cleaned.slice(4, 6), 16)
  return { r, g, b }
}

function linearizeChannel(value) {
  const channel = value / 255
  return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
}

function luminance(hex) {
  const { r, g, b } = hexToRgb(hex)
  const R = linearizeChannel(r)
  const G = linearizeChannel(g)
  const B = linearizeChannel(b)
  return 0.2126 * R + 0.7152 * G + 0.0722 * B
}

function contrastRatio(fg, bg) {
  const l1 = luminance(fg)
  const l2 = luminance(bg)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return (lighter + 0.05) / (darker + 0.05)
}

const checks = [
  { fg: '#001215', bg: '#fff8f3', min: 4.5, label: 'Primary text on surface' },
  { fg: '#2d4a4d', bg: '#fff8f3', min: 4.5, label: 'Body variant text on surface' },
  { fg: '#a14000', bg: '#fff8f3', min: 4.5, label: 'Secondary accent text on surface' },
  { fg: '#fff8f3', bg: '#001215', min: 4.5, label: 'Inverse text on primary background' },
  { fg: '#fff8f3', bg: '#a14000', min: 4.5, label: 'Button text on secondary button' },
  { fg: '#2d4a4d', bg: '#fff5e8', min: 4.5, label: 'Body text on surface container' },
]

const failures = []

for (const check of checks) {
  const ratio = contrastRatio(check.fg, check.bg)
  const pass = ratio >= check.min
  const status = pass ? 'PASS' : 'FAIL'
  console.log(`${status} ${check.label}: ${ratio.toFixed(2)} (min ${check.min})`)
  if (!pass) {
    failures.push(check.label)
  }
}

if (failures.length > 0) {
  console.error('\nContrast check failed for:')
  for (const failure of failures) {
    console.error(`- ${failure}`)
  }
  process.exit(1)
}

console.log('\nContrast check passed.')

