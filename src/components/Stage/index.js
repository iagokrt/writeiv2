import React, { Suspense, useRef, useState } from 'react'
import { FrontSide } from 'three'
import { Canvas } from 'react-three-fiber'
import { MeshWobbleMaterial } from 'drei'
import { AmbientLight } from './Assets/AmbientLight'

const Stage = () => {
  const mesh = useRef()

  // const [toggle, setToggle] = useState(false)
  const [active, setActive] = useState(false)

  return (
    <>
      <Canvas colorManagement camera={{ position: [0, 0, -4], fov: 67 }}>
        <Suspense fallback={null}>
          <AmbientLight />

          <group>
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
            <pointLight position={[20, -10, 0]} intensity={1.5} />
          </group>

          <group>
            <mesh ref={mesh} onPointerOver={(e) => setActive(!active)}>
              <sphereBufferGeometry
                args={active ? [19, 20, 55] : [15, 2, 55]}
                attach="geometry"
              />
              <MeshWobbleMaterial
                attach="material"
                side={FrontSide}
                metalness={0.12}
                speed={active ? Math.PI / 1.1 : Math.E / 2}
                color={active ? 'crimson' : 'blue'}
              />
            </mesh>
          </group>
        </Suspense>
      </Canvas>
    </>
  )
}
export { Stage }
