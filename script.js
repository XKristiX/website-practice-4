document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');
    const contactForm = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');
  
    // Smooth scroll to sections when clicking on navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSectionId = link.getAttribute('href');
        const targetSection = document.querySelector(targetSectionId);
  
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  
    // Handle form submission
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(contactForm);
  
      // Simulate sending form data to the server
      setTimeout(() => {
        responseMessage.textContent = 'Thank you for your message!';
        contactForm.reset();
      }, 1000);
    });
  
    // Highlight active navigation link based on the scrolled section
    window.addEventListener('scroll', function() {
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
  
        if (window.scrollY >= sectionTop) {
          navLinks.forEach(link => link.classList.remove('active'));
          navLink.classList.add('active');
        }
      });
    });
  
    // Create a 3D cube in the cube container
    const cubeContainer = document.getElementById('cube-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(300, 300);
    cubeContainer.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
  
    // Create an animation loop for the cube
    const animateCube = () => {
      requestAnimationFrame(animateCube);
  
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
  
      renderer.render(scene, camera);
    };
  
    animateCube();
  });
  