"use client"

import { useEffect, useRef } from "react"

export default function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let t = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawGradient = () => {
      t += 0.003

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)

      // Add color stops with slight movement based on time
      const greenOffset1 = Math.sin(t * 0.3) * 0.05 + 0.3
      const greenOffset2 = Math.cos(t * 0.2) * 0.05 + 0.7

      gradient.addColorStop(0, "rgba(236, 252, 243, 1)")
      gradient.addColorStop(greenOffset1, "rgba(220, 250, 235, 1)")
      gradient.addColorStop(greenOffset2, "rgba(200, 245, 220, 1)")
      gradient.addColorStop(1, "rgba(180, 240, 210, 1)")

      // Fill with gradient
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add some subtle floating particles
      const numParticles = 15
      for (let i = 0; i < numParticles; i++) {
        const x = canvas.width * (0.1 + 0.8 * Math.sin(t * 0.1 + i * 0.5))
        const y = canvas.height * (0.1 + 0.8 * Math.cos(t * 0.2 + i * 0.3))
        const size = 1.5 + Math.sin(t + i) * 0.5

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(drawGradient)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    drawGradient()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 h-full w-full -z-10" aria-hidden="true" />
}

