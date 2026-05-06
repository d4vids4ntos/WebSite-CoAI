'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

type ThreeGlobeProps = {
  textureSrc: string
  className?: string
  ariaLabel?: string
}

export default function ThreeGlobe({
  textureSrc,
  className = '',
  ariaLabel = 'Interactive 3D globe',
}: ThreeGlobeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const globeRef = useRef<THREE.Mesh | null>(null)
  const angularVelocityRef = useRef({ x: 0, y: 0 })
  const isDraggingRef = useRef(false)
  const pointerRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) {
      return
    }

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
    camera.position.set(0, 0, 3.4)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setClearAlpha(0)
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.display = 'block'
    container.appendChild(renderer.domElement)

    const textureLoader = new THREE.TextureLoader()
    const texture = textureLoader.load(textureSrc)
    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy())

    const globeGeometry = new THREE.SphereGeometry(1, 96, 96)
    const globeMaterial = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.95,
      metalness: 0.04,
    })
    const globe = new THREE.Mesh(globeGeometry, globeMaterial)
    globeRef.current = globe
    scene.add(globe)

    const atmosphereGeometry = new THREE.SphereGeometry(1.03, 64, 64)
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: '#ffb287',
      transparent: true,
      opacity: 0.18,
      side: THREE.BackSide,
    })
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
    scene.add(atmosphere)

    const ambient = new THREE.AmbientLight(0xffffff, 1.05)
    const keyLight = new THREE.DirectionalLight(0xfff4ea, 1.0)
    keyLight.position.set(2, 1.8, 3)
    const rimLight = new THREE.DirectionalLight(0xff7a32, 0.55)
    rimLight.position.set(-2, -1.2, -2.8)
    scene.add(ambient, keyLight, rimLight)

    const resize = () => {
      const { clientWidth, clientHeight } = container
      if (!clientWidth || !clientHeight) {
        return
      }
      renderer.setSize(clientWidth, clientHeight, false)
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
    }

    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)

    let raf = 0
    const animate = () => {
      raf = window.requestAnimationFrame(animate)

      const globeMesh = globeRef.current
      if (globeMesh) {
        if (!isDraggingRef.current) {
          globeMesh.rotation.y += angularVelocityRef.current.x
          globeMesh.rotation.x += angularVelocityRef.current.y
          angularVelocityRef.current.x *= 0.92
          angularVelocityRef.current.y *= 0.92
        }

        atmosphere.rotation.copy(globeMesh.rotation)
      }

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      window.cancelAnimationFrame(raf)
      resizeObserver.disconnect()
      globeRef.current = null
      globeGeometry.dispose()
      globeMaterial.dispose()
      atmosphereGeometry.dispose()
      atmosphereMaterial.dispose()
      texture.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [textureSrc])

  return (
    <div
      ref={containerRef}
      className={className}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      onPointerDown={(event) => {
        isDraggingRef.current = true
        pointerRef.current = { x: event.clientX, y: event.clientY }
        angularVelocityRef.current = { x: 0, y: 0 }
        event.currentTarget.style.cursor = 'grabbing'
        event.currentTarget.setPointerCapture(event.pointerId)
      }}
      onPointerMove={(event) => {
        if (!isDraggingRef.current) {
          return
        }
        const deltaX = event.clientX - pointerRef.current.x
        const deltaY = event.clientY - pointerRef.current.y
        pointerRef.current = { x: event.clientX, y: event.clientY }
        if (globeRef.current) {
          const yawDelta = deltaX * 0.008
          const pitchDelta = deltaY * 0.008
          globeRef.current.rotation.y += yawDelta
          globeRef.current.rotation.x += pitchDelta
          angularVelocityRef.current = {
            x: yawDelta * 0.18,
            y: pitchDelta * 0.18,
          }
        }
      }}
      onPointerUp={(event) => {
        isDraggingRef.current = false
        event.currentTarget.style.cursor = 'grab'
        event.currentTarget.releasePointerCapture(event.pointerId)
      }}
      onPointerCancel={() => {
        isDraggingRef.current = false
        if (containerRef.current) {
          containerRef.current.style.cursor = 'grab'
        }
      }}
      onKeyDown={(event) => {
        if (!globeRef.current) {
          return
        }
        if (event.key === 'ArrowLeft') {
          globeRef.current.rotation.y -= 0.14
        }
        if (event.key === 'ArrowRight') {
          globeRef.current.rotation.y += 0.14
        }
        if (event.key === 'ArrowUp') {
          globeRef.current.rotation.x -= 0.14
        }
        if (event.key === 'ArrowDown') {
          globeRef.current.rotation.x += 0.14
        }
      }}
      style={{ touchAction: 'none', cursor: 'grab' }}
    />
  )
}
