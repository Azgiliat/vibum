import { chartGradientStart, chartGradientFinish, chartGradientAngle } from '@/assets/css/vars.scss'

export default function createCanvasGradient (canvas) {
  const ctx = canvas.getContext('2d')
  const height = canvas.clientHeight
  const width = canvas.clientWidth
  const angle = chartGradientAngle
  const x0 = 0, y0 = 0
  const x1 = width, y1 = height
  const length = Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0))
  const gradient = ctx.createLinearGradient(x0, y0, x0 + Math.cos(angle) * length, y0 + Math.sin(angle) * length)

  gradient.addColorStop(0.5, chartGradientStart)
  gradient.addColorStop(1, chartGradientFinish)

  return gradient
}
