import { Suit } from "./Suit";
import { Sky } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

function Scene() {
   return (
       <>
       <OrbitControls />
       <Sky />
        <Suit position={[0,-1,1]}/>
        {/* <Suit position={[0,0,0]}/> */}
       </>
   )
}
export default Scene;
// https://www.linkedin.com/pulse/react-three-fiber-tutorial-rafael-barbosa-o8hre/