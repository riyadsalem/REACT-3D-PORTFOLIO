import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Programming(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/programming-transformed.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.05}
        >
          <group
            name="1a119acdb01b4da285ad18e4813af83ffbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="chopper_body"
                  position={[0, 83.43, 5.16]}
                  rotation={[-1.84, 0.12, -1.66]}
                >
                  <group
                    name="chopper_rotors"
                    position={[-3.85, 0, 5.59]}
                    rotation={[0.09, 0, Math.PI / 2]}
                    scale={1.08}
                  >
                    <group
                      name="chopper_rotor_blades_top"
                      position={[0, 0.05, 6.38]}
                      scale={[2.09, 2.09, 0.93]}
                    >
                      <mesh
                        name="chopper_rotor_blades_top_rotor_blades_material_0"
                        geometry={
                          nodes.chopper_rotor_blades_top_rotor_blades_material_0
                            .geometry
                        }
                        material={materials.rotor_blades_material}
                      />
                    </group>
                    <group
                      name="chopper_rotor_disc"
                      position={[0, 0, 2.37]}
                      scale={[0.7, 0.7, 0.66]}
                    >
                      <mesh
                        name="chopper_rotor_disc_Chopper_material_0"
                        geometry={
                          nodes.chopper_rotor_disc_Chopper_material_0.geometry
                        }
                        material={materials.Chopper_material}
                      />
                    </group>
                    <mesh
                      name="chopper_rotors_chopper_rotors_0"
                      geometry={nodes.chopper_rotors_chopper_rotors_0.geometry}
                      material={materials.chopper_rotors}
                    />
                  </group>
                  <group
                    name="chopper_gun_turret"
                    position={[-35.25, 0, -34.36]}
                    rotation={[0, 0.17, 1.67]}
                  >
                    <group
                      name="chopper_gun_barrel"
                      position={[0, 3.01, -3.55]}
                    >
                      <group name="Object_18" position={[0, -3.01, 3.55]}>
                        <mesh
                          name="chopper_gun_barrel_Chopper_material_0"
                          geometry={
                            nodes.chopper_gun_barrel_Chopper_material_0.geometry
                          }
                          material={materials.Chopper_material}
                        />
                      </group>
                    </group>
                    <mesh
                      name="chopper_gun_turret_Chopper_material_0"
                      geometry={
                        nodes.chopper_gun_turret_Chopper_material_0.geometry
                      }
                      material={materials.Chopper_material}
                    />
                  </group>
                  <group
                    name="chopper_wing_left"
                    position={[53.44, 0, -8.39]}
                    rotation={[0, 0.07, Math.PI / 2]}
                    scale={[1, 1, 0.66]}
                  >
                    <group name="Object_21" position={[-12.29, 3.93, -0.99]}>
                      <mesh
                        name="chopper_wing_left_Chopper_material_0"
                        geometry={
                          nodes.chopper_wing_left_Chopper_material_0.geometry
                        }
                        material={materials.Chopper_material}
                      />
                    </group>
                  </group>
                  <group
                    name="chopper_wing_left001"
                    position={[53.44, 0, -8.39]}
                  >
                    <mesh
                      name="chopper_wing_left001_Chopper_material_0"
                      geometry={
                        nodes.chopper_wing_left001_Chopper_material_0.geometry
                      }
                      material={materials.Chopper_material}
                    />
                  </group>
                  <group
                    name="chopper_rotor_blades_rear"
                    position={[70.55, 0, -13.69]}
                    rotation={[Math.PI / 2, 0, -Math.PI]}
                    scale={[0.59, 0.59, 1]}
                  >
                    <mesh
                      name="chopper_rotor_blades_rear_rear_rotors_0"
                      geometry={
                        nodes.chopper_rotor_blades_rear_rear_rotors_0.geometry
                      }
                      material={materials.rear_rotors}
                    />
                  </group>
                  <group name="Object_5" position={[-0.87, 0, -19.83]}>
                    <mesh
                      name="chopper_body_Chopper_material_0"
                      geometry={nodes.chopper_body_Chopper_material_0.geometry}
                      material={materials.Chopper_material}
                    />
                  </group>
                  <group
                    name="chopper_gun_base"
                    position={[-35.25, 0, -34.36]}
                    rotation={[0, 0.17, Math.PI / 2]}
                  >
                    <mesh
                      name="chopper_gun_base_Chopper_material_0"
                      geometry={
                        nodes.chopper_gun_base_Chopper_material_0.geometry
                      }
                      material={materials.Chopper_material}
                    />
                  </group>
                  <group
                    name="Hud"
                    position={[-92.78, 0, -10.9]}
                    rotation={[Math.PI, 1.31, -Math.PI / 2]}
                    scale={1.62}
                  >
                    <group
                      name="Hud2"
                      position={[0, 0, -0.09]}
                      rotation={[0, 0, 0.08]}
                      scale={0.46}
                    >
                      <mesh
                        name="Hud2_HUD2_0"
                        geometry={nodes.Hud2_HUD2_0.geometry}
                        material={materials.HUD2}
                      />
                    </group>
                    <mesh
                      name="Hud_HUD1_0"
                      geometry={nodes.Hud_HUD1_0.geometry}
                      material={materials.HUD1}
                    />
                  </group>
                </group>
                <group
                  name="Cylinder005"
                  position={[-43.35, 7.67, -153.92]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.12}
                >
                  <mesh
                    name="Cylinder005_landscape_black_0"
                    geometry={nodes.Cylinder005_landscape_black_0.geometry}
                    material={materials.landscape_black}
                  />
                  <mesh
                    name="Cylinder005_landscape_blue_0"
                    geometry={nodes.Cylinder005_landscape_blue_0.geometry}
                    material={materials.landscape_blue}
                  />
                </group>
                <group
                  name="Box005"
                  position={[81.03, 26.55, -145.69]}
                  rotation={[-Math.PI / 2, -0.44, 0]}
                  scale={0.06}
                >
                  <group name="Object_35" position={[-83.58, 555.06, 0]}>
                    <mesh
                      name="Box005_landscape_black_0"
                      geometry={nodes.Box005_landscape_black_0.geometry}
                      material={materials.landscape_black}
                    />
                    <mesh
                      name="Box005_landscape_blue_0"
                      geometry={nodes.Box005_landscape_blue_0.geometry}
                      material={materials.landscape_blue}
                    />
                  </group>
                </group>
                <group
                  name="Box006"
                  position={[-80.99, 26.55, -145.69]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="Box006_landscape_black_0"
                    geometry={nodes.Box006_landscape_black_0.geometry}
                    material={materials.landscape_black}
                  />
                  <mesh
                    name="Box006_landscape_blue_0"
                    geometry={nodes.Box006_landscape_blue_0.geometry}
                    material={materials.landscape_blue}
                  />
                </group>
                <group
                  name="Box007"
                  position={[81.03, 26.55, 52.93]}
                  rotation={[-Math.PI / 2, -0.44, 0]}
                  scale={0.06}
                >
                  <group name="Object_46" position={[-83.58, 555.06, 0]}>
                    <mesh
                      name="Box007_landscape_black_0"
                      geometry={nodes.Box007_landscape_black_0.geometry}
                      material={materials.landscape_black}
                    />
                    <mesh
                      name="Box007_landscape_blue_0"
                      geometry={nodes.Box007_landscape_blue_0.geometry}
                      material={materials.landscape_blue}
                    />
                  </group>
                </group>
                <group
                  name="Box008"
                  position={[81.03, 26.55, -46.38]}
                  rotation={[-Math.PI / 2, -0.44, 0]}
                  scale={0.06}
                >
                  <group name="Object_50" position={[-83.58, 555.06, 0]}>
                    <mesh
                      name="Box008_landscape_black_0"
                      geometry={nodes.Box008_landscape_black_0.geometry}
                      material={materials.landscape_black}
                    />
                    <mesh
                      name="Box008_landscape_blue_0"
                      geometry={nodes.Box008_landscape_blue_0.geometry}
                      material={materials.landscape_blue}
                    />
                  </group>
                </group>
                <group
                  name="Box009"
                  position={[-80.89, 26.55, -46.38]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="Box009_landscape_black_0"
                    geometry={nodes.Box009_landscape_black_0.geometry}
                    material={materials.landscape_black}
                  />
                  <mesh
                    name="Box009_landscape_blue_0"
                    geometry={nodes.Box009_landscape_blue_0.geometry}
                    material={materials.landscape_blue}
                  />
                </group>
                <group
                  name="Box010"
                  position={[-80.95, 26.55, 52.93]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="Box010_landscape_black_0"
                    geometry={nodes.Box010_landscape_black_0.geometry}
                    material={materials.landscape_black}
                  />
                  <mesh
                    name="Box010_landscape_blue_0"
                    geometry={nodes.Box010_landscape_blue_0.geometry}
                    material={materials.landscape_blue}
                  />
                </group>
                <group
                  name="Cylinder006"
                  position={[-43.35, 7.67, 97]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.12}
                >
                  <mesh
                    name="Cylinder006_landscape_black_0"
                    geometry={nodes.Cylinder006_landscape_black_0.geometry}
                    material={materials.landscape_black}
                  />
                  <mesh
                    name="Cylinder006_landscape_blue_0"
                    geometry={nodes.Cylinder006_landscape_blue_0.geometry}
                    material={materials.landscape_blue}
                  />
                </group>
                <group
                  name="Cylinder007"
                  position={[-43.35, 7.67, 34.27]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.12}
                >
                  <mesh
                    name="Cylinder007_landscape_black_0"
                    geometry={nodes.Cylinder007_landscape_black_0.geometry}
                    material={materials.landscape_black}
                  />
                  <mesh
                    name="Cylinder007_landscape_blue_0"
                    geometry={nodes.Cylinder007_landscape_blue_0.geometry}
                    material={materials.landscape_blue}
                  />
                </group>
                <group
                  name="Cylinder008"
                  position={[-43.35, 7.67, -28.46]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.12}
                >
                  <mesh
                    name="Cylinder008_landscape_black_0"
                    geometry={nodes.Cylinder008_landscape_black_0.geometry}
                    material={materials.landscape_black}
                  />
                  <mesh
                    name="Cylinder008_landscape_blue_0"
                    geometry={nodes.Cylinder008_landscape_blue_0.geometry}
                    material={materials.landscape_blue}
                  />
                </group>
                <group
                  name="Cylinder009"
                  position={[-43.35, 7.67, -91.19]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.12}
                >
                  <mesh
                    name="Cylinder009_landscape_black_0"
                    geometry={nodes.Cylinder009_landscape_black_0.geometry}
                    material={materials.landscape_black}
                  />
                  <mesh
                    name="Cylinder009_landscape_blue_0"
                    geometry={nodes.Cylinder009_landscape_blue_0.geometry}
                    material={materials.landscape_blue}
                  />
                </group>
                <group
                  name="Cylinder010"
                  position={[43.78, 7.67, -28.46]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.12}
                >
                  <mesh
                    name="Cylinder010_landscape_black_0"
                    geometry={nodes.Cylinder010_landscape_black_0.geometry}
                    material={materials.landscape_black}
                  />
                  <mesh
                    name="Cylinder010_landscape_blue_0"
                    geometry={nodes.Cylinder010_landscape_blue_0.geometry}
                    material={materials.landscape_blue}
                  />
                </group>
                <group
                  name="Cylinder011"
                  position={[43.78, 7.67, -91.19]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.12}
                >
                  <mesh
                    name="Cylinder011_landscape_black_0"
                    geometry={nodes.Cylinder011_landscape_black_0.geometry}
                    material={materials.landscape_black}
                  />
                  <mesh
                    name="Cylinder011_landscape_blue_0"
                    geometry={nodes.Cylinder011_landscape_blue_0.geometry}
                    material={materials.landscape_blue}
                  />
                </group>
                <group
                  name="Cylinder012"
                  position={[43.78, 7.67, 97]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.12}
                >
                  <mesh
                    name="Cylinder012_landscape_black_0"
                    geometry={nodes.Cylinder012_landscape_black_0.geometry}
                    material={materials.landscape_black}
                  />
                  <mesh
                    name="Cylinder012_landscape_blue_0"
                    geometry={nodes.Cylinder012_landscape_blue_0.geometry}
                    material={materials.landscape_blue}
                  />
                </group>
                <group
                  name="Cylinder013"
                  position={[43.78, 7.67, 34.27]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.12}
                >
                  <mesh
                    name="Cylinder013_landscape_black_0"
                    geometry={nodes.Cylinder013_landscape_black_0.geometry}
                    material={materials.landscape_black}
                  />
                  <mesh
                    name="Cylinder013_landscape_blue_0"
                    geometry={nodes.Cylinder013_landscape_blue_0.geometry}
                    material={materials.landscape_blue}
                  />
                </group>
                <group
                  name="Cylinder014"
                  position={[43.78, 7.67, -153.92]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.12}
                >
                  <mesh
                    name="Cylinder014_landscape_black_0"
                    geometry={nodes.Cylinder014_landscape_black_0.geometry}
                    material={materials.landscape_black}
                  />
                  <mesh
                    name="Cylinder014_landscape_blue_0"
                    geometry={nodes.Cylinder014_landscape_blue_0.geometry}
                    material={materials.landscape_blue}
                  />
                </group>
                <group name="Hud3" position={[18, 55.47, -81.32]} scale={0.37}>
                  <mesh
                    name="Hud3_HUD3_0"
                    geometry={nodes.Hud3_HUD3_0.geometry}
                    material={materials.HUD3}
                  />
                </group>
                <group
                  name="Plane053"
                  position={[-0.1, 18.28, 3.28]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.14}
                >
                  <group name="Object_39" position={[-455.1, -5, -75.59]}>
                    <mesh
                      name="Plane053_landscape_black_0"
                      geometry={nodes.Plane053_landscape_black_0.geometry}
                      material={materials.landscape_black}
                    />
                    <mesh
                      name="Plane053_landscape_blue_0"
                      geometry={nodes.Plane053_landscape_blue_0.geometry}
                      material={materials.landscape_blue}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/programming-transformed.glb");
