<template> 
    <canvas id="exprize1" width="900" height="600"></canvas>
</template>  
<script setup> 
    import { onMounted } from 'vue'
    import leftMenu from '@/layout/menu.vue'
    import * as THREE from 'three'
 
    function main() {
        const canvas = document.querySelector('#exprize1');
        const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

        const fov = 25;
        const aspect = 2; // the canvas default
        const near = 0.1;
        const far = 100;    
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0, 10, 20);
        camera.lookAt(0, 0, 0);
        const scene = new THREE.Scene(); 
        scene.background = new THREE.Color('black');
        const loader = new THREE.TextureLoader();
       
        const shadowTexture = loader.load('https://threejs.org/manual/examples/resources/images/roundshadow.png');
        const sphereShadowBases = [];
        {
            const sphereRadius = 1; 
            const sphereWidthDivisions = 62;
            const sphereHeightDivisions = 16;
            const sphereGeo = new THREE.SphereGeometry(sphereRadius, sphereWidthDivisions, sphereHeightDivisions);
            const planeSize = .9; 
            const shadowGeo = new THREE.PlaneGeometry(planeSize, planeSize);
            const numSpheres = 15;
            for (let i = 0; i < numSpheres; ++i) { 
                const base = new THREE.Object3D();
                scene.add(base);
                const shadowMat = new THREE.MeshBasicMaterial({
                    map: shadowTexture,
                    transparent: true, // so we can see the ground
                    depthWrite: false, // so we don't have to sort
                });
                const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
                shadowMesh.position.y = 0.001; // so we're above the ground slightly
                shadowMesh.rotation.x = Math.PI * - .5;
                const shadowSize = sphereRadius * 4;
                shadowMesh.scale.set(shadowSize, shadowSize, shadowSize);
                base.add(shadowMesh);
                const u = i / numSpheres;
                const sphereMat = new THREE.MeshPhongMaterial();
                sphereMat.color.setHSL(u, 1, .75);
                const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
                sphereMesh.position.set(0, sphereRadius + 2, 0);
                base.add(sphereMesh);
                sphereShadowBases.push({ base, sphereMesh, shadowMesh, y: sphereMesh.position.y });
            }
        }

        { 
            const skyColor = 0xB1E1FF; // light blue
            const groundColor = 0xB97A20; // brownish orange
            const intensity = 1;  
            const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
            scene.add(light);
        }

        {
            const color = 0xFFFFFF;
            const intensity = 2.5;
            const light = new THREE.DirectionalLight(color, intensity);
            light.position.set(0, 10, 5);
            light.target.position.set(- 5, 0, 0);
            scene.add(light);
            scene.add(light.target);

        }

        function resizeRendererToDisplaySize(renderer) {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            if (needResize) {
                renderer.setSize(width, height, false);
            }
            return needResize;
        }

        function render(time) {
            time *= 0.001; // convert to seconds
            resizeRendererToDisplaySize(renderer);
            {
                const canvas = renderer.domElement;
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();
            }
            sphereShadowBases.forEach((sphereShadowBase, ndx) => {
                const { base, sphereMesh, shadowMesh, y } = sphereShadowBase;
                const u = ndx / sphereShadowBases.length;
                const speed = time * .2;
                const angle = speed + u * Math.PI * 2 * (ndx % 1 ? 1 : - 1);
                const radius = Math.sin(speed - ndx) * 10;
                base.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
                const yOff = Math.abs(Math.sin(time * 2 + ndx));
                sphereMesh.position.y = y + THREE.MathUtils.lerp(- 2, 2, yOff);
                shadowMesh.material.opacity = THREE.MathUtils.lerp(1, .25, yOff);
            });
            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);
    }

    onMounted(() => {
        main();
    })

</script>

<style lang="scss" scoped>
   
</style>