import { useBox, BoxProps } from "@react-three/cannon";
import * as THREE from "three";
import React, { useRef } from "react";
import { useRecoilValue } from "recoil";
import { unitState } from "../atoms";

const geometry = new THREE.BoxGeometry(8, 10, 8);
const matarial = new THREE.MeshPhongMaterial({ color: "#071d28" });

const Pillar = React.memo(() => {
  console.log("pillar");
  const { glassSize } = useRecoilValue(unitState);
  function PillarMesh({ position, userData }: BoxProps) {
    const [ref] = useBox(
      () => ({
        args: [8, 10, 8],
        type: "Static",
        userData: { point: userData?.point },
        position,
      }),
      useRef<THREE.Mesh>(null)
    );
    return <mesh ref={ref} geometry={geometry} material={matarial}></mesh>;
  }
  return (
    <group>
      <PillarMesh
        position={[0, 5.5, -glassSize * 12 - glassSize / 2]}
        userData={{ point: "end" }}
      />
      <PillarMesh
        position={[0, 5.5, glassSize * 12 + glassSize / 2]}
        userData={{ point: "start" }}
      />
    </group>
  );
});

export default React.memo(Pillar);
