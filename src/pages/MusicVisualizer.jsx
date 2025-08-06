import { useEffect, useRef, useState } from "react";

const MusicVisualizer = () => {
  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const bgRef = useRef({ r: 0, g: 0, b: 0 });
  const dbRef = useRef(0);
  const trailRef = useRef([]);
  const [mode, setMode] = useState("bar");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    trailRef.current = [];

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioCtxRef.current.createMediaStreamSource(stream);

      analyserRef.current = audioCtxRef.current.createAnalyser();
      analyserRef.current.fftSize = 2048;

      source.connect(analyserRef.current);

      const bufferLength = analyserRef.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const WIDTH = canvas.width;
      const HEIGHT = canvas.height;

      const draw = () => {
        requestAnimationFrame(draw);
        analyserRef.current.getByteFrequencyData(dataArray);

        const sum = dataArray.reduce((a, b) => a + b, 0);
        const avg = sum / dataArray.length;
        dbRef.current = avg.toFixed(0);

        bgRef.current.r = Math.floor(avg);
        bgRef.current.g = Math.floor(avg * 0.5);
        bgRef.current.b = Math.floor(avg * 0.25);

        ctx.fillStyle = `rgb(0, 0, 0)`;
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        if (mode === "bar" || mode === "bassTreble") {
          const barWidth = (WIDTH / bufferLength) * 1.5;
          let x = 0;
          for (let i = 0; i < bufferLength; i++) {
            const barHeight = dataArray[i];
            ctx.fillStyle = `rgb(${barHeight + 100}, 50, 200)`;
            ctx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);
            x += barWidth + 1;
          }

          if (mode === "bassTreble") {
            const bass = dataArray.slice(0, bufferLength / 3);
            const mid = dataArray.slice(bufferLength / 3, (2 * bufferLength) / 3);
            const treble = dataArray.slice((2 * bufferLength) / 3);

            const avgBass = bass.reduce((a, b) => a + b, 0) / bass.length;
            const avgMid = mid.reduce((a, b) => a + b, 0) / mid.length;
            const avgTreble = treble.reduce((a, b) => a + b, 0) / treble.length;

            ctx.fillStyle = "#0f0";
            ctx.fillRect(WIDTH - 80, HEIGHT - avgBass, 20, avgBass);
            ctx.fillStyle = "#ff0";
            ctx.fillRect(WIDTH - 55, HEIGHT - avgMid, 20, avgMid);
            ctx.fillStyle = "#f0f";
            ctx.fillRect(WIDTH - 30, HEIGHT - avgTreble, 20, avgTreble);

            ctx.fillStyle = "#fff";
            ctx.fillText("Bass", WIDTH - 80, HEIGHT - avgBass - 5);
            ctx.fillText("Mid", WIDTH - 55, HEIGHT - avgMid - 5);
            ctx.fillText("Treble", WIDTH - 30, HEIGHT - avgTreble - 5);
          }
        }

        if (mode === "circle") {
          const centerX = WIDTH / 2;
          const centerY = HEIGHT / 2;
          const radius = 80;

          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
          ctx.strokeStyle = "#fff";
          ctx.lineWidth = 1;
          ctx.stroke();

          const bars = 64;
          for (let i = 0; i < bars; i++) {
            const angle = (i / bars) * 2 * Math.PI;
            const barLen = dataArray[i] / 2;

            const x1 = centerX + Math.cos(angle) * radius;
            const y1 = centerY + Math.sin(angle) * radius;

            const x2 = centerX + Math.cos(angle) * (radius + barLen);
            const y2 = centerY + Math.sin(angle) * (radius + barLen);

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgb(255, ${dataArray[i]}, 180)`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }

        if (mode === "pulseCircle") {
          const centerX = WIDTH / 2;
          const centerY = HEIGHT / 2;
          const radius = 60 + avg;

          const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.8, centerX, centerY, radius * 1.6);
          gradient.addColorStop(0, `rgba(${avg + 100}, ${avg}, 255, 0.3)`);
          gradient.addColorStop(1, `rgba(0, 0, 0, 0)`);
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius * 1.6, 0, 2 * Math.PI);
          ctx.fill();

          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
          ctx.strokeStyle = `rgb(${255 - avg}, ${avg + 50}, ${avg})`;
          ctx.lineWidth = 6;
          ctx.stroke();
        }

        if (mode === "waveform") {
          analyserRef.current.getByteTimeDomainData(dataArray);
          ctx.beginPath();
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#0ff';
          ctx.moveTo(0, HEIGHT / 2);

          for (let i = 0; i < bufferLength; i++) {
            const y = (dataArray[i] / 128.0) * (HEIGHT / 2);
            const x = (i / bufferLength) * WIDTH;
            ctx.lineTo(x, y);
          }

          ctx.stroke();
        }

        if (mode === "spectrum") {
          for (let i = 0; i < bufferLength; i++) {
            const barHeight = dataArray[i];
            const hue = i / bufferLength * 360;
            ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
            ctx.fillRect(i * 2, HEIGHT - barHeight, 1.5, barHeight);
          }
        }

        if (mode === "dotTrail") {
          const centerX = WIDTH / 2;
          const centerY = HEIGHT / 2;
          const dotY = centerY - avg * 4;

          const lastY = trailRef.current[0] ?? dotY;
          const smoothY = lastY + (dotY - lastY) * 0.2;

          trailRef.current.unshift(smoothY);
          if (trailRef.current.length > WIDTH) trailRef.current.pop();

          ctx.save();
          ctx.translate(centerX, 0);

          ctx.beginPath();
          for (let i = 0; i < trailRef.current.length; i++) {
            const x = -i;
            const y = trailRef.current[i];
            ctx.lineTo(x, y);
          }
          ctx.strokeStyle = `rgba(0,255,255,0.8)`;
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(0, smoothY, 6, 0, Math.PI * 2);
          ctx.fillStyle = "#fff";
          ctx.fill();

          ctx.restore();
        }

        const dbHeight = (avg / 255) * 250;
        const meterX = 20;
        const meterY = 20;
        const meterWidth = 14;
        const meterHeight = 100;

        const gradient = ctx.createLinearGradient(0, meterY + meterHeight, 0, meterY);
        gradient.addColorStop(0, "red");
        gradient.addColorStop(0.5, "yellow");
        gradient.addColorStop(1, "lime");

        ctx.fillStyle = gradient;
        ctx.fillRect(meterX, meterY + (meterHeight - dbHeight), meterWidth, dbHeight);

        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(meterX, meterY, meterWidth, meterHeight);

        ctx.font = "bold 14px monospace";
        ctx.fillStyle = "#fff";
        ctx.fillText(`dB: ${dbRef.current}`, meterX + 20, meterY + 20);
      };

      draw();
    });

    return () => {
      audioCtxRef.current?.close();
      trailRef.current = [];
    };
  }, [mode]);

  return (
    <div style={{ background: "#000", height: "100vh", overflow: "hidden" }}>
      <h2 style={{ color: "white", textAlign: "center", padding: "10px" }}>
        Visualizer Musik Langsung 🎵
      </h2>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <button onClick={() => setMode("bar")} style={{ marginRight: 5 }}>Bar</button>
        <button onClick={() => setMode("circle")} style={{ marginRight: 5 }}>Circle</button>
        <button onClick={() => setMode("waveform")} style={{ marginRight: 5 }}>Waveform</button>
        <button onClick={() => setMode("spectrum")} style={{ marginRight: 5 }}>Spectrum</button>
        <button onClick={() => setMode("pulseCircle")} style={{ marginRight: 5 }}>Pulse Circle</button>
        <button onClick={() => setMode("dotTrail")} style={{ marginRight: 5 }}>Dot Trail</button>
        <button onClick={() => setMode("bassTreble")} style={{ marginRight: 5 }}>Bass/Treble</button>
      </div>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight - 120}
      />
    </div>
  );
};

export default MusicVisualizer;
