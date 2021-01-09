import React, { Suspense } from 'react'
import { AmbientLight } from './Assets/AmbientLight'
import { Canvas } from 'react-three-fiber'

const Stage = () => {
  return (
    <>
      <Canvas colorManagement camera={{ position: [0, 0, -4], fov: 67 }}>
        <Suspense fallback={null}>
          <AmbientLight />
        </Suspense>
      </Canvas>
    </>
  )
}
export { Stage }
