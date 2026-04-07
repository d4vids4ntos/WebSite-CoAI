import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 1200,
  height: 600,
}
export const contentType = 'image/png'

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 18,
          padding: '56px',
          background: '#fff8f3',
          color: '#001215',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ fontSize: 56, lineHeight: 1.05, fontWeight: 700 }}>Clinic of AI</div>
        <div style={{ fontSize: 34, lineHeight: 1.2, maxWidth: 980 }}>
          Forward Deployed AI Engineers for teams that need production outcomes, not pilots.
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

