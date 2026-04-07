import React from 'react'

interface IconProps {
  name: string
  className?: string
  style?: React.CSSProperties
}

const aliasMap: Record<string, string> = {
  arrow_right: 'arrow_forward',
}

export default function Icon({ name, className, style }: IconProps) {
  const fileName = aliasMap[name] ?? name
  const maskUrl = `/icons/material/${fileName}.svg`

  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        width: '1em',
        height: '1em',
        verticalAlign: 'middle',
        backgroundColor: 'currentColor',
        WebkitMaskImage: `url(${maskUrl})`,
        maskImage: `url(${maskUrl})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        ...style,
      }}
      aria-hidden="true"
    />
  )
}
