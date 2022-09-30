import { Vector3 } from "@react-three/fiber";
import SideLight from "./SideLight";
import { useBox, Triplet } from "@react-three/cannon";
function Bar(props: JSX.IntrinsicElements["mesh"]) {
  const sideLights: { position: Vector3 }[] = [];
  for (let i = 0; i < 49; i++) {
    sideLights.push({ position: [0, 0, i * 0.5 - 1.2 * 10] });
  }
  const [ref, api] = useBox<THREE.Mesh>(() => ({
    position: props.position as Triplet,
  }));
  console.log("Bar");
  return (
    <mesh ref={ref} receiveShadow castShadow {...props}>
      <boxGeometry args={[0.1, 0.3, 1.2 * 21]} />
      <meshPhongMaterial color="#441c1d" />
      {props.name === "0" || props.name === "3"
        ? sideLights.map((sideLight, i) => (
            <SideLight key={i} position={sideLight.position} />
          ))
        : null}
    </mesh>
  );
}

export default Bar;
