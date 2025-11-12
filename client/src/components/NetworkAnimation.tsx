import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  z: number; // depth (0-1, where 1 is closest)
  vx: number;
  vy: number;
  vz: number;
  baseRadius: number;
  pulse: boolean; // whether this node has pulse effect
  pulseOffset: number; // random offset for pulse timing
}

export default function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create nodes
    const nodeCount = 40;
    const nodes: Node[] = [];
    const maxDistance = 200;
    const baseSpeed = 0.2;

    // 80% of nodes on the right side (x > 40%), 20% on the left
    const rightNodeCount = Math.floor(nodeCount * 0.8);

    for (let i = 0; i < nodeCount; i++) {
      const isRightSide = i < rightNodeCount;
      const xMin = isRightSide ? canvas.width * 0.4 : 0;
      const xMax = isRightSide ? canvas.width : canvas.width * 0.4;

      const z = Math.random(); // depth: 0 (far) to 1 (near)

      nodes.push({
        x: xMin + Math.random() * (xMax - xMin),
        y: Math.random() * canvas.height,
        z: z,
        vx: (Math.random() - 0.5) * baseSpeed * (0.5 + z * 0.5), // closer nodes move faster
        vy: (Math.random() - 0.5) * baseSpeed * (0.5 + z * 0.5),
        vz: (Math.random() - 0.5) * 0.001, // very slow z movement
        baseRadius: 4 + Math.random() * 4, // 4-8px base radius
        pulse: Math.random() > 0.6, // 40% of nodes have pulse effect
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // Animation loop
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.fillStyle = 'rgba(10, 10, 15, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        if (node.z < 0.2 || node.z > 1) node.vz *= -1;

        // Keep within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
        node.z = Math.max(0.2, Math.min(1, node.z));

        // Calculate size and opacity based on depth
        const depthScale = 0.3 + node.z * 0.7; // 0.3 to 1.0
        const opacity = 0.3 + node.z * 0.7; // far = 0.3, near = 1.0

        // Pulse effect
        let pulseScale = 1;
        if (node.pulse) {
          pulseScale = 1 + Math.sin(time * 2 + node.pulseOffset) * 0.2;
        }

        const radius = node.baseRadius * depthScale * pulseScale;

        // Apply blur based on depth (far = more blur)
        const blurAmount = (1 - node.z) * 2;
        ctx.filter = `blur(${blurAmount}px)`;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();

        // Add glow effect
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          radius * 3
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.4})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Reset filter for lines
        ctx.filter = 'none';
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dz = nodes[i].z - nodes[j].z;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            // Consider z-depth for connection visibility
            const avgZ = (nodes[i].z + nodes[j].z) / 2;
            const depthOpacity = 0.3 + avgZ * 0.7;
            const distanceOpacity = (1 - distance / maxDistance) * 0.25;
            const finalOpacity = distanceOpacity * depthOpacity;

            // Thicker lines for connections
            const lineWidth = 2.5 + avgZ * 3.5;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(200, 200, 200, ${finalOpacity})`;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: '#0a0a0f' }}
    />
  );
}
