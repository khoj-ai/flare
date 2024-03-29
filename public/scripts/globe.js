// Scene
const scene = new THREE.Scene();

// Create a geometry for the particles
const particles = 10000; // Increased number of particles
const geometryStars = new THREE.BufferGeometry();
const positions = new Float32Array(particles * 3); // 3 coordinates per point
const opacities = new Float32Array(particles); // 1 opacity per point
const colors = new Float32Array(particles * 3); // RGB color for each particle

// Generate star positions with clusters
// Generate cluster centers
const clusterCount = 10;
const clusterRadius = 30;
const clusterCenters = [];

const goldenRatio = (1 + Math.sqrt(5)) / 2;
const angleIncrement = Math.PI * 2 * goldenRatio;

for (let i = 0; i < clusterCount; i++) {
    const y = 1 - (i / (clusterCount - 1)) * 2; // y goes from 1 to -1
    const radius = Math.sqrt(1 - y*y); // radius at y

    const phi = angleIncrement * i;
    
    const x = Math.cos(phi) * radius;
    const z = Math.sin(phi) * radius;

    clusterCenters.push([x * 100, y * 100, z * 100]); // Multiply by 100 to spread the clusters out more
}

for (let i = 0; i < particles; i++) {
  let x, y, z;

  // Decide whether to generate a star within a cluster or randomly
  if (Math.random() < 0.7) {
    // Generate a star within a cluster
    const clusterIndex = Math.floor(Math.random() * clusterCount);
    const [cx, cy, cz] = clusterCenters[clusterIndex];
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * clusterRadius;
    x = cx + radius * Math.cos(angle);
    y = cy + radius * Math.sin(angle);
    z = cz + (Math.random() - 0.5) * 3; // Spread the cluster along the z-axis
  } else {
    // Generate a random star
    const phi = Math.random() * 2 * Math.PI;
    const costheta = Math.random() * 2 - 1;
    const theta = Math.acos(costheta);
    const r = Math.cbrt(Math.random()) * 150; // Cube root for uniform distribution
    x = r * Math.sin(theta) * Math.cos(phi);
    y = r * Math.sin(theta) * Math.sin(phi);
    z = r * Math.cos(theta);
  }

  positions[i * 3] = x;
  positions[i * 3 + 1] = y;
  positions[i * 3 + 2] = z;
  opacities[i] = Math.random() * 0.8 + 0.2; // Opacity between 0.2 and 1.0

  // Assign light blue colors to the particles
  const color = new THREE.Color();
  color.setHSL(0.55, 0.75, 0.7 + 0.3 * Math.random()); // Light blue hue, variable saturation, lightness between 0.7 and 1.0
  colors[i * 3] = color.r;
  colors[i * 3 + 1] = color.g;
  colors[i * 3 + 2] = color.b;
}

geometryStars.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometryStars.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));
geometryStars.setAttribute('color', new THREE.BufferAttribute(colors, 3));

// Load a star texture
const starTexture = new THREE.TextureLoader().load('stars.png'); // Replace 'star.png' with your texture path

// Create a material for the particles
const materialStars = new THREE.ShaderMaterial({
uniforms: {
    color: { value: new THREE.Color('white') },
    starTexture: { value: starTexture },
    time: { value: 0.0 }, // Define the time uniform
    },
  vertexShader: `
    attribute float opacity;
    attribute vec3 color;
    varying float vOpacity;
    varying vec3 vColor;
    varying vec2 vUv;
    uniform float time;

    void main() {
      vOpacity = opacity;
      vColor = color;
      vUv = vec2(position.x, position.y) / 100.0 + 0.5; // Normalize UV coordinates

      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = 5.0 * (300.0 / -mvPosition.z); // Increase point size
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    uniform vec3 color;
    uniform sampler2D starTexture;
    varying float vOpacity;
    varying vec3 vColor;
    varying vec2 vUv;

    void main() {
      float r = 0.0, delta = 0.0, alpha = 1.0;
      vec2 cxy = 2.0 * gl_PointCoord - 1.0;
      r = dot(cxy, cxy);
      if (r > 0.25) { // Adjust radius for sharper stars
        discard;
      }

      // Use star texture
      vec4 starColor = texture2D(starTexture, vUv);
      gl_FragColor = vec4(vColor * starColor.rgb, (1.0 - smoothstep(0.2, 0.25, r)) * vOpacity * starColor.a);
    }
  `,
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
});

// Create the particle system
const stars = new THREE.Points(geometryStars, materialStars);
scene.add(stars);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
const container = document.getElementById('globe');
container.appendChild(renderer.domElement);

let time = 0;

// Mouse interaction
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(stars);
  
    if (intersects.length > 0) {
      const { x, y, z } = intersects[0].point; // Ignore the z component
      const positions = stars.geometry.attributes.position.array;
      const moveRadius = 5; // Adjust this value to control the move radius
      const moveSpeed = 0.1; // Adjust this value to control the move speed
  
      for (let i = 0; i < positions.length; i += 3) {
        const dx = positions[i] - x;
        const dy = positions[i + 1] - y;
        const dz = positions[i + 2] - z;
  
        // Ignore the z component when calculating the distance
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < moveRadius) {
          // Move the star towards the intersection point
          positions[i] -= dx * moveSpeed;
          positions[i + 1] -= dy * moveSpeed;
          positions[i + 2] -= dz * moveSpeed;
        }
      }
  
      stars.geometry.attributes.position.needsUpdate = true;
    }
});

// Animate
function animate() {
    requestAnimationFrame(animate);

    time += 0.001;

    // Rotate the camera
    camera.position.x = Math.cos(time) * 5;
    camera.position.z = Math.sin(time) * 5;
    camera.lookAt(scene.position); // Make the camera always point to the center

    // Twinkle the stars
    const opacities = stars.geometry.attributes.opacity.array;
    for (let i = 0; i < particles; i++) {
        const twinkleSpeed = 0.5 + Math.random() * 2; // Random twinkle speed for each star
        const twinkleAmplitude = 0.2 + Math.random() * 0.4; // Random twinkle amplitude for each star
        opacities[i] = (Math.sin(time * twinkleSpeed + i * 0.5) + 1) / 2 * twinkleAmplitude + (1 - twinkleAmplitude); // Oscillate between 1 - twinkleAmplitude and 1 with varying frequencies
    }
    stars.geometry.attributes.opacity.needsUpdate = true;

    // Update uniforms
    materialStars.uniforms.time.value = time; // Update the time uniform

    renderer.render(scene, camera);
}

animate();