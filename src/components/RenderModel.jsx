"use client"
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import React, { Suspense } from 'react'
import { Environment } from "@react-three/drei";


const RenderModel = ({children, className}) => {
  return (
    <Canvas
        className={clsx("w-screen h-screen -h-10 relative", className)}
    >
        <Suspense fallback={null} >
            {children}
        </Suspense>
        <Environment preset="dawn"/>
    </Canvas>
  )
}

export default RenderModel