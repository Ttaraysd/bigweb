// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('minecraftCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Set up the camera position and look at the scene
camera.position.z = 5;
camera.position.y = 5;
camera.lookAt(scene.position);

// Set up controls
let isPlacingBlock = true;  // Toggle between placing and removing blocks

// Create block geometry and material
const blockGeometry = new THREE.BoxGeometry(1, 1, 1);
const blockMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });  // Brown for blocks

// Array to hold the blocks
const blocks = [];

// Function to create a block at a specific position
function createBlock(x, y, z) {
  const block = new THREE.Mesh(blockGeometry, blockMaterial);
  block.position.set(x, y, z);
  scene.add(block);
  blocks.push(block);
}

// Initialize a simple grid of blocks
for (let x = -5; x < 5; x++) {
  for (let z = -5; z < 5; z++) {
    createBlock(x, 0, z);  // Create a floor grid of blocks
  }
}

// Function to remove a block
function removeBlock(x, y, z) {
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.position.x === x && block.position.y === y && block.position.z === z) {
      scene.remove(block);
      blocks.splice(i, 1);
      break;
    }
  }
}

// Handle mouse click to place or remove blocks
document.addEventListener('mousedown', (event) => {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

  // Raycasting to detect where the user clicks
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2(mouseX, mouseY);
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    const intersect = intersects[0];
    const position = intersect.object.position;

    if (isPlacingBlock) {
      createBlock(position.x + Math.round(mouseX), position.y, position.z + Math.round(mouseY));
    } else {
      removeBlock(position.x, position.y, position.z);
    }
  }
});

// Toggle between placing and removing blocks
document.addEventListener('keydown', (event) => {
  if (event.key === ' ') {  // Space bar toggles between placing/removing blocks
    isPlacingBlock = !isPlacingBlock;
  }
});

// Function to animate the scene
function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

// Start the animation loop
animate();

// Resize the canvas on window resize
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
