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
      t += 0.002

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)

      // Add color stops with slight movement based on time
      const greenOffset1 = Math.sin(t * 0.3) * 0.05 + 0.3
      const greenOffset2 = Math.cos(t * 0.2) * 0.05 + 0.7

      // Slightly more vibrant gradient
      gradient.addColorStop(0, "rgba(240, 253, 244, 1)")
      gradient.addColorStop(greenOffset1, "rgba(220, 252, 231, 1)")
      gradient.addColorStop(greenOffset2, "rgba(187, 247, 208, 0.8)")
      gradient.addColorStop(1, "rgba(167, 243, 208, 0.9)")

      // Fill with gradient
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add decorative geometric shapes
      const numShapes = 20
      
      // Draw circles
      for (let i = 0; i < numShapes; i++) {
        const x = canvas.width * (0.1 + 0.8 * Math.sin(t * 0.1 + i * 0.5))
        const y = canvas.height * (0.1 + 0.8 * Math.cos(t * 0.15 + i * 0.3))
        const size = 2 + Math.sin(t + i) * 1

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(52, 211, 153, 0.2)" // Green-400 with low opacity
        ctx.fill()
      }
      
      // Draw triangles
      for (let i = 0; i < numShapes / 2; i++) {
        const x = canvas.width * (0.2 + 0.6 * Math.cos(t * 0.05 + i * 0.4))
        const y = canvas.height * (0.2 + 0.6 * Math.sin(t * 0.1 + i * 0.5))
        const size = 8 + Math.sin(t * 0.2 + i) * 3
        
        ctx.beginPath()
        ctx.moveTo(x, y - size)
        ctx.lineTo(x + size, y + size)
        ctx.lineTo(x - size, y + size)
        ctx.closePath()
        ctx.fillStyle = "rgba(16, 185, 129, 0.05)" // Green-500 with low opacity
        ctx.fill()
      }
      
      // Draw small dots
      for (let i = 0; i < numShapes * 3; i++) {
        const x = canvas.width * Math.random()
        const y = canvas.height * Math.random()
        const size = 0.5 + Math.random() * 1
        
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)"
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

