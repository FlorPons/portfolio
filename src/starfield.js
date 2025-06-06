function startStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) {
    setTimeout(startStarfield, 100); // Espera y vuelve a intentar
    return;
  }
  const ctx = canvas.getContext('2d');
  let w = window.innerWidth;
  let h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;

  let stars = [];
  for (let i = 0; i < 150; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.5,
      d: Math.random() * 0.5 + 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "white";
    for (let i = 0; i < stars.length; i++) {
      let s = stars[i];
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2, false);
      ctx.fill();
    }
    update();
  }

  function update() {
    for (let i = 0; i < stars.length; i++) {
      let s = stars[i];
      s.y += s.d;
      if (s.y > h) {
        s.y = 0;
        s.x = Math.random() * w;
      }
    }
  }

  function animate() {
    draw();
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  });
}

startStarfield();