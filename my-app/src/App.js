
import './App.css';
import React from 'react'

import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";
import { TorusGeometry } from 'three';
// https://docs.pmnd.rs/react-three-fiber/tutorials/basic-animations
function MyAnimatedBox() {
  const myMesh = React.useRef()
  useFrame(({ clock }) => {
    // myMesh.current.rotation.x = clock.getElapsedTime()
    // myMesh.current.rotation.x = Math.sin(clock.getElapsedTime())
    myMesh.current.rotation.y = clock.getElapsedTime()
    // myMesh.current.rotation.z = clock.getElapsedTime()

  })
  return (
    <>
    <OrbitControls />
    <mesh ref={myMesh}>
      <boxGeometry args={[5, 2, 2]} />
      <meshBasicMaterial color="royalblue" />
    </mesh>
    </>
    
  )
}

function AnimatedBox() {
  const myMesh = React.useRef()
  useFrame(({ clock }) => {
    // myMesh.current.rotation.x = clock.getElapsedTime()
    // myMesh.current.rotation.x = Math.sin(clock.getElapsedTime())
    myMesh.current.rotation.y = clock.getElapsedTime() * 2
    // myMesh.current.rotation.z = clock.getElapsedTime()
    
    myMesh.current.position.z = Math.sin(clock.getElapsedTime()) * 2
  })
  return (
    <>
     {/* An Orbit Control allows an user to modify the camera */}
     <OrbitControls />
      {/* ambient light is illumination in all directions */}
      <ambientLight intensity={0.5} />
      {/* directional light is light coming from a direction */}
      <directionalLight color="white" position={[0, 2, 5]} />
      {/* A mesh is a 3d object */}
      <mesh ref={myMesh}>
        {/* boxGeometry creates a simple box  */}
        <boxGeometry args={[2, 2, 2]} />
        {/* meshBasicMaterial makes the cube geometry red */}
        <meshStandardMaterial color={0xff0000} />
      </mesh>
    </>
  )
}

function Sphere() {
  const myMesh = React.useRef()
  useFrame(({ clock }) => {
    // myMesh.current.rotation.x = clock.getElapsedTime()
    // myMesh.current.rotation.x = Math.sin(clock.getElapsedTime())
    myMesh.current.rotation.y = clock.getElapsedTime() * 2
    // myMesh.current.rotation.z = clock.getElapsedTime()
    
    myMesh.current.position.z = Math.sin(clock.getElapsedTime()) * 2
  })
  return (
    <>
     {/* An Orbit Control allows an user to modify the camera */}
     <OrbitControls />
      {/* ambient light is illumination in all directions */}
      <ambientLight intensity={0.5} />
      {/* directional light is light coming from a direction */}
      <directionalLight color="white" position={[0, 2, 5]} />
      {/* A mesh is a 3d object */}
      <mesh>
      <sphereGeometry position={[0, -5, 0]}/>
      </mesh>
      <mesh ref={myMesh}>
        {/* boxGeometry creates a simple box  */}
        
        <torusGeometry position={[ 0, 2, 0]}/>
        {/* meshBasicMaterial makes the cube geometry red */}
        <meshStandardMaterial color={"blue"} />
      </mesh>
    </>
  )
}

function App() {
  return (
    <>
    {/* <div style={{ height: "500px" }}>
    <Canvas>
    <directionalLight color="white" position={[0, 2, 5]} />
      <Scene />
    </Canvas>
    </div> */}
    <div  style={{ height: "500px" }} className="scene">
      <Canvas>
        <Sphere />
      </Canvas>
    </div>
    {/* <div  style={{ height: "500px" }} className="scene">
      <Canvas>
        <AnimatedBox />
      </Canvas>
    </div> */}
    {/* <div id="canvas-container">
      <Canvas>
        <MyAnimatedBox />
      </Canvas>
    </div> */}
    {/* <div id="canvas-container">
      <Canvas>
      <ambientLight intensity={0.1} />
       <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry  args={[2, 2, 2]}/>
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
    <div id="canvas-container">
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <mesh>
        <sphereGeometry args={[1, 32]} />
        <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
      
    </div> */}
    
    
    </>
    
  )
}

createRoot(document.getElementById('root')).render(<App />)
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
