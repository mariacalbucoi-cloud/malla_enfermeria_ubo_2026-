// ------------------ Variables ------------------
const aprobados = new Set();
let opcionElegida = null;
let opcionMostrada = false;

const mallaBase = {
  "Primer semestre": [
    { nombre: "Fundamentos de Biología y Genética Humana" },
    { nombre: "Bases Químicas y Bioquímicas de la Vida" },
    { nombre: "Gestión del Cuidado en Enfermería I" },
    { nombre: "Educación en Enfermería" },
    { nombre: "Identidad Universitaria I" },
    { nombre: "Lengua Extranjera I" },
    { nombre: "Práctica Integrada en Enfermería I" }
  ],
  "Segundo semestre": [
    { nombre: "Lengua Extranjera II", prerequisitos: ["Lengua Extranjera I"] },
    { nombre: "Identidad Universitaria II", prerequisitos: ["Identidad Universitaria I"] },
    { nombre: "Gestión del Cuidado en Enfermería II", prerequisitos: ["Gestión del Cuidado en Enfermería I"] },
    { nombre: "Matemáticas y Herramientas Informáticas para la Gestión en Salud", prerequisitos: ["Educación en Enfermería"] },
    { nombre: "Práctica Integrada en Enfermería II", prerequisitos: ["Práctica Integrada en Enfermería I"] },
    { nombre: "Morfología Micro y Macroscópica", prerequisitos: ["Fundamentos de Biología y Genética Humana"] },
    { nombre: "Microbiología y Agentes Infecciosos", prerequisitos: ["Bases Químicas y Bioquímicas de la Vida"] }
  ],
  "Tercer semestre": [
    { nombre: "Lengua Extranjera III", prerequisitos: ["Lengua Extranjera II"] },
    { nombre: "Gestión del Cuidado en Enfermería III", prerequisitos: ["Gestión del Cuidado en Enfermería II"] },
    { nombre: "Práctica Integrada en Enfermería III", prerequisitos: ["Práctica Integrada en Enfermería II"] },
    { nombre: "Integrado de Fisiología, Fisiopatología y Farmacología en Enfermería I", prerequisitos: ["Morfología Micro y Macroscópica"] }
  ],
  "Cuarto semestre": [
    { nombre: "Lengua Extranjera IV", prerequisitos: ["Lengua Extranjera III"] },
    { nombre: "Responsabilidad Social Universitaria", prerequisitos: ["Formación Ética para el Desarrollo Sostenible"] },
    { nombre: "Gestión del Cuidado en Enfermería IV", prerequisitos: ["Gestión del Cuidado en Enfermería III", "Práctica Integrada en Enfermería III"] },
    { nombre: "Enfermería en Salud Pública y Determinantes Sociales", prerequisitos: ["Matemáticas y Herramientas Informáticas para la Gestión en Salud"] },
    { nombre: "Integrado de Fisiología, Fisiopatología y Farmacología en Enfermería II", prerequisitos: ["Integrado de Fisiología, Fisiopatología y Farmacología en Enfermería I"] },
    { nombre: "Práctica Integrada en Enfermería IV", prerequisitos: ["Práctica Integrada en Enfermería III", "Gestión del Cuidado en Enfermería III"] }
  ],
  "Quinto semestre": [],
  "Sexto semestre": [],
  "Séptimo semestre": [],
  "Octavo semestre": []
};

// Opciones A y B
const opcionA = [
  { nombre: "Opción A: Gestión del Cuidado en Comunidades I", prerequisitos: ["Enfermería en Salud Pública y Determinantes Sociales"] },
  { nombre: "Opción A: Práctica Integrada en Comunidades", prerequisitos: ["Opción A: Gestión del Cuidado en Comunidades I"] }
];
const opcionB = [
  { nombre: "Opción B: Gestión del Cuidado en Adultos Críticos", prerequisitos: ["Integrado de Fisiología, Fisiopatología y Farmacología II"] },
  { nombre: "Opción B: Práctica Integrada en Adultos Críticos", prerequisitos: ["Opción B: Gestión del Cuidado en Adultos Críticos"] }
];

// ------------------ Funciones ------------------
function puedeDesbloquear(prerequisitos) {
  return (prerequisitos || []).every(req => aprobados.has(req));
}

function actualizarEstadoRamos() {
  let todosAprobados = true;
  document.querySelectorAll('.ramo').forEach(divRamo => {
    const nombre = divRamo.dataset.nombre;
    const prerequisitos = JSON.parse(divRamo.dataset.prerequisitos || '[]');
    if (aprobados.has(nombre)) {
      divRamo.classList.remove('bloqueado');
      divRamo.classList.add('aprobado');
    } else if (puedeDesbloquear(prerequisitos)) {
      divRamo.classList.remove('bloqueado');
      divRamo.classList.remove('aprobado');
      todosAprobados = false;
    } else {
      divRamo.classList.add('bloqueado');
      divRamo.classList.remove('aprobado');
      todosAprobados = false;
    }
  });

  // Mostrar opción A/B después de 8vo semestre
  if (!opcionMostrada && verificar8voCompletado()) {
    mostrarEleccionOpcion();
    opcionMostrada = true;
  }

  // Celebración al completar toda la malla
  if (todosAprobados && opcionMostrada && opcionElegida !== null) {
    mostrarCelebracion();
  }
}

function verificar8voCompletado() {
  const ramos8vo = mallaBase["Octavo semestre"];
  return ramos8vo.every(r => aprobados.has(r.nombre));
}

function mostrarEleccionOpcion() {
  opcionElegida = null;
  while(opcionElegida !== "A" && opcionElegida !== "B") {
    opcionElegida = prompt("¡Has completado 8vo semestre! Elige opción A o B").toUpperCase();
  }
  const contenedor = document.getElementById("malla-container");
  const divSemestre = document.createElement("div");
  divSemestre.className = "semestre";
  divSemestre.innerHTML = `<h2>Asignaturas de la Opción ${opcionElegida}</h2>`;
  const ramos = opcionElegida === "A" ? opcionA : opcionB;
  ramos.forEach(ramo => {
    const divRamo = document.createElement("div");
    divRamo.className = "ramo bloqueado";
    divRamo.textContent = ramo.nombre;
    divRamo.dataset.nombre = ramo.nombre;
    divRamo.dataset.prerequisitos = JSON.stringify(ramo.prerequisitos || []);
    divRamo.addEventListener("click", () => {
      if (puedeDesbloquear(ramo.prerequisitos)) {
        if (aprobados.has(ramo.nombre)) aprobados.delete(ramo.nombre);
        else aprobados.add(ramo.nombre);
        actualizarEstadoRamos();
      } else alert("Aún no cumples con los prerrequisitos para: " + ramo.nombre);
    });
    divSemestre.appendChild(divRamo);
  });
  contenedor.appendChild(divSemestre);
  actualizarEstadoRamos();
}

function crearMallaInteractiva() {
  const contenedor = document.getElementById("malla-container");
  contenedor.innerHTML = "";
  for (const [semestre, ramos] of Object.entries(mallaBase)) {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";
    divSemestre.innerHTML = `<h2>${semestre}</h2>`;
    ramos.forEach(ramo => {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo bloqueado";
      divRamo.textContent = ramo.nombre;
      divRamo.dataset.nombre = ramo.nombre;
      divRamo.dataset.prerequisitos = JSON.stringify(ramo.prerequisitos || []);
      divRamo.addEventListener("click", () => {
        if (puedeDesbloquear(ramo.prerequisitos)) {
          if (aprobados.has(ramo.nombre)) aprobados.delete(ramo.nombre);
          else aprobados.add(ramo.nombre);
          actualizarEstadoRamos();
        } else alert("Aún no cumples con los prerrequisitos para: " + ramo.nombre);
      });
      divSemestre.appendChild(divRamo);
    });
    contenedor.appendChild(divSemestre);
  }
  actualizarEstadoRamos();
}

// ------------------- Jeringas -------------------
const jeringasCanvas = document.getElementById("jeringas-canvas");
const jctx = jeringasCanvas.getContext("2d");
let jeringas = [];
function iniciarJeringas() {
  jeringasCanvas.width = window.innerWidth;
  jeringasCanvas.height = window.innerHeight;
  for (let i = 0; i < 100; i++) {
    jeringas.push({
      x: Math.random() * jeringasCanvas.width,
      y: Math.random() * jeringasCanvas.height,
      dy: 0.5 + Math.random() * 1.5,
      size: 20 + Math.random() * 15
    });
  }
  animarJeringas();
}
function animarJeringas() {
  jctx.clearRect(0,0,jeringasCanvas.width,jeringasCanvas.height);
  jctx.font = "20px Times New Roman";
  jeringas.forEach(j => {
    jctx.fillText("💉", j.x, j.y);
    j.y += j.dy;
    if (j.y > jeringasCanvas.height) j.y = -20;
  });
  requestAnimationFrame(animarJeringas);
}

// ------------------- Celebración -------------------
const serpentinasCanvas = document.getElementById("serpentinas-canvas");
const sctx = serpentinasCanvas.getContext("2d");
let serpentinas = [];

function mostrarCelebracion() {
  document.body.style.backgroundColor = "#b3d9ff";
  document.getElementById("felicitaciones").style.display = "block";
  serpentinasCanvas.width = window.innerWidth;
  serpentinasCanvas.height = window.innerHeight;
  for (let i = 0; i < 200; i++) {
    serpentinas.push({
      x: Math.random() * window.innerWidth,
      y: -Math.random() * window.innerHeight,
      dy: 2 + Math.random() * 3,
      color: `hsl(${Math.random()*360}, 100%, 50%)`,
      width: 5 + Math.random() * 5,
      height: 15 + Math.random() * 10
    });
  }
  animarSerpentinas();
}

function animarSerpentinas() {
  sctx.clearRect(0,0,serpentinasCanvas.width,serpentinasCanvas.height);
  serpentinas.forEach(s => {
    sctx.fillStyle = s.color;
    sctx.fillRect(s.x, s.y, s.width, s.height);
    s.y += s.dy;
    if (s.y > serpentinasCanvas.height/2) s.y = serpentinasCanvas.height/2;
  });
  requestAnimationFrame(animarSerpentinas);
}

// ------------------- Inicio -------------------
document.addEventListener("DOMContentLoaded", () => {
  crearMallaInteractiva();
  iniciarJeringas();
});
