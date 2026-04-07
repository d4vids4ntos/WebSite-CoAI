import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px',
          background: '#fff8f3',
          color: '#001215',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#a14000',
          }}
        >
          Systems Architected
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 1000 }}>
          <div style={{ fontSize: 76, lineHeight: 1.06, fontWeight: 700 }}>Clinic of AI</div>
          <div style={{ fontSize: 40, lineHeight: 1.2 }}>
            AI adoption fails when you add tools without upgrading people.
          </div>
        </div>

        <div style={{ fontSize: 24, color: '#2d4a4d' }}>
          Forward Deployed AI Engineers for measurable operational transformation
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

