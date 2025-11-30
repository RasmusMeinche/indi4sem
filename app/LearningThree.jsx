'use client';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

console.log(OrbitControls)

export default function LearningThree() {

  const init = (canvas) => {
    if (!canvas) return;                 // venter til canvas findes
    if (canvas.dataset.ready) return;    // undgår dobbelt kørsel i dev-mode
    canvas.dataset.ready = '1';

    const scene = new THREE.Scene();

    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 'red' });
    const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cubeMesh);
    
    // grupper
    /*  const cubeMesh2 = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cubeMesh2.position.x = 2
        const cubeMesh3 = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cubeMesh3.position.x = -2

        const group = new THREE.Group();
        group.add(cubeMesh)
        group.add(cubeMesh2)
        group.add(cubeMesh3)

        scene.add(group) */


   //Akse hjælper

    const axesHelper = new THREE.AxesHelper(2)
    scene.add(axesHelper)

    //Opsæt camera
      const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      30
    );

/*     const apectRatio = window.innerWidth / window.innerHeight

    const camera = new THREE.OrthographicCamera(
      -1*apectRatio,
      1*apectRatio,
      1,
      -1,
      0.1,
      200
    ) */

camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    const maxPixelRatio = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(maxPixelRatio)
    
    //Opsæt controls
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.autoRotate = false
    
    window.addEventListener('resize', () =>{
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight);
    })

    const renderloop = () => {
    controls.update()
    renderer.render(scene, camera);
    window.requestAnimationFrame(renderloop)
    }

    renderloop()

  };

  return <canvas className="threejs" ref={init}></canvas>;
}
