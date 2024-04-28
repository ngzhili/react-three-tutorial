import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, useScroll } from '@react-three/drei'
import { getProject, val } from '@theatre/core'
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from '@theatre/r3f'
import FantasyBook from './modelComponents/FantasyBook'

import flyThroughState from './fly3.json' 

function App() {
  // retrieves our animation sheet. Sheets are containers for animatable objects. We are going to make this sheet available to Theatre.js’ r3f extension through SheetProvider, which will automatically use it, so we don’t have to worry about its specifics here.
  const sheet = getProject('Fly Through', { state: flyThroughState }).sheet(
    'Scene'
  )
  return (
    <>
    {/* The Canvas component from r3f creates WebGL canvas element that stretches to its parent element (the body element that we sized to fill the entire screen in the previous step), and sets up a render loop. We will hook into this render loop later using the useFrame hook. */}
      <Canvas gl={{ preserveDrawingBuffer: true }}>
      {/* The ScrollControls component from Drei sets up the invisible scroll container we are going to use to bind the scroll position to the animation playback without actually scrolling any visible HTML element. */}
        <ScrollControls pages={10} damping={1} maxSpeed={0.1}>
          <SheetProvider sheet={sheet}>
            <Scene />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </>
  )
}

export default App

//
//
//

// We use useCurrentSheet(), useScroll() and useFrame() to update our animation position with the up-to-date scroll position on every frame.
function Scene() {
  const sheet = useCurrentSheet()
  const scroll = useScroll()

  // our callback will run on every animation frame
  useFrame(() => {
    // the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length)
    // update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength
  })

  const bgColor = "#84a4f4";


  return (
    <>
      {/* <color attach='background' args={['black']} /> */}
      {/* We create a sky-like ambiance using the color and fog objects (lines 41-42). */}
      <color attach="background" args={[bgColor]} />
      <fog attach="fog" color={bgColor} near={10} far={100} />
      {/* <ambientLight /> */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[-5, 5, -5]} intensity={1.5} />
      <FantasyBook />
      <PerspectiveCamera
        theatreKey='Camera'
        makeDefault
        position={[0, 0, 0]}
        fov={90}
        near={0.1}
        far={70}
      />
    </>
  )
}
