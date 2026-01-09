"use client"

import { Canvas } from "@react-three/fiber"
import { ShaderPlane, EnergyRing } from "./background-paper-shaders"

export function HeroBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Canvas>
        <ShaderPlane position={[0, 0, 0]} color1="#c1ea6f" color2="#ff7cac" />
        <EnergyRing position={[0, 0, 0.5]} />
      </Canvas>
    </div>
  )
}
