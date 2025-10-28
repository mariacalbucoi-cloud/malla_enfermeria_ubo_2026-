// ------------------ Variables ------------------
const aprobados = new Set();

const malla = {
  "Primer semestre": [
    { nombre: "Habilidades Académicas I" },
    { nombre: "Inglés I" },
    { nombre: "Fundamentos de Biología y Genética Humana" },
    { nombre: "Bases Químicas y Bioquímicas de la Vida" },
    { nombre: "Gestión del Cuidado en Enfermería I" },
    { nombre: "Educación en Enfermería I" }
  ],
  "Segundo semestre": [
    { nombre: "Habilidades Académicas II", prerequisitos: ["Habilidades Académicas I"] },
    { nombre: "Inglés II", prerequisitos: ["Inglés I"] },
    { nombre: "Morfología Micro y Macroscópica", prerequisitos: ["Fundamentos de Biología y Genética Humana"] },
    { nombre: "Microbiología y Agentes Infecciosos", prerequisitos: ["Bases Químicas y Bioquímicas de la Vida"] },
    { nombre: "Gestión del Cuidado en Enfermería II", prerequisitos: ["Gestión del Cuidado en Enfermería I"] },
    { nombre: "Educación en Enfermería II", prerequisitos: ["Educación en Enfermería I"] }
  ],
  "Tercer semestre": [
    { nombre: "Ética y Ciudadanía" },
    { nombre: "Inglés III", prerequisitos: ["Inglés II"] },
    { nombre: "Fisiología y Fisiopatología de Sistemas I", prerequisitos: ["Morfología Micro y Macroscópica"] },
    { nombre: "Gestión del Cuidado en Enfermería III", prerequisitos: ["Gestión del Cuidado en Enfermería II"] },
    { nombre: "Enfermería en Salud Pública y Determinantes Sociales en Salud", prerequisitos: ["Educación en Enfermería II"] },
    { nombre: "Socio Antropología en Humanización del Cuidado" },
    { nombre: "Práctica Integrada en Enfermería I", prerequisitos: ["Gestión del Cuidado en Enfermería II"] }
  ],
  "Cuarto semestre": [
    { nombre: "Responsabilidad Social Universitaria", prerequisitos: ["Ética y Ciudadanía"] },
    { nombre: "Inglés IV", prerequisitos: ["Inglés III"] },
    { nombre: "Fisiología y Fisiopatología de Sistemas II", prerequisitos: ["Fisiología y Fisiopatología de Sistemas I"] },
    { nombre: "Farmacología Clínica Fundamental", prerequisitos: ["Microbiología y Agentes Infecciosos"] },
    { nombre: "Gestión en Servicios de Salud", prerequisitos: ["Gestión del Cuidado en Enfermería III"] },
    { nombre: "Matemáticas, TICs e Informática" },
    { nombre: "Práctica Integrada en Enfermería II", prerequisitos: ["Gestión del Cuidado en Enfermería III", "Práctica Integrada en Enfermería I"] }
  ],
  "Quinto semestre": [
    { nombre: "Gestión del Cuidado en Comunidades I", prerequisitos: ["Enfermería en Salud Pública y Determinantes Sociales en Salud"] },
    { nombre: "Gestión del Cuidado en el Adulto I", prerequisitos: ["Gestión del Cuidado en Enfermería III"] },
    { nombre: "Metodología de la Investigación y Bioética", prerequisitos: ["Matemáticas, TICs e Informática"] },
    { nombre: "Gestión del Cuidado en la Persona Mayor", prerequisitos: ["Gestión del Cuidado en Enfermería III", "Farmacología Clínica Fundamental", "Fisiología y Fisiopatología de Sistemas II"] },
    { nombre: "Calidad y Gestión en el Cuidado", prerequisitos: ["Gestión en Servicios de Salud"] },
    { nombre: "Práctica Integrada en Enfermería III", prerequisitos: ["Farmacología Clínica Fundamental", "Fisiología y Fisiopatología de Sistemas II", "Práctica Integrada en Enfermería II"] }
  ],
  "Sexto semestre": [
    { nombre: "Proyecto de Investigación I", prerequisitos: ["Metodología de la Investigación y Bioética"] },
    { nombre: "Gestión del Cuidado en Comunidades II", prerequisitos: ["Gestión del Cuidado en Comunidades I"] },
    { nombre: "Gestión del Cuidado en el Adulto II", prerequisitos: ["Gestión del Cuidado en el Adulto I"] },
    { nombre: "Gestión del Cuidado en la Mujer", prerequisitos: ["Farmacología Clínica Fundamental", "Fisiología y Fisiopatología de Sistemas II"] },
    { nombre: "Electivo Formación General I" },
    { nombre: "Práctica Integrada en Enfermería IV", prerequisitos: ["Gestión del Cuidado en Comunidades I"] }
  ],
  "Séptimo semestre": [
    { nombre: "Proyecto de Investigación II", prerequisitos: ["Metodología de la Investigación y Bioética"] },
    { nombre: "Gestión del Cuidado en Comunidades III", prerequisitos: ["Gestión del Cuidado en Comunidades II"] },
    { nombre: "Gestión del Cuidado en Urgencias", prerequisitos: ["Gestión del Cuidado en el Adulto II"] },
    { nombre: "Gestión del Cuidado en Niño y Adolescente I", prerequisitos: ["Gestión del Cuidado en la Mujer"] },
    { nombre: "Gestión del Cuidado en Salud Mental I", prerequisitos: ["Gestión del Cuidado en el Adulto II"] },
    { nombre: "Práctica Integrada en Enfermería V", prerequisitos: ["Gestión del Cuidado en la Mujer"] }
  ],
  "Octavo semestre": [
    { nombre: "Gestión del Cuidado en Niño y Adolescente II", prerequisitos: ["Gestión del Cuidado en Niño y Adolescente I"] },
    { nombre: "Gestión del Cuidado en Salud Mental II", prerequisitos: ["Gestión del Cuidado en Salud Mental I"] },
    { nombre: "Cuidados de la Salud e Interculturalidad", prerequisitos: ["Gestión del Cuidado en Comunidades III"] },
    { nombre: "Electivo Formación General II" },
    { nombre: "Práctica Integrada en Enfermería VI", prerequisitos: ["Gestión del Cuidado en Urgencias"] }
  ],
  "Noveno semestre": [
    { nombre: "Práctica Profesional de Enfermería I", prerequisitos: ["Práctica Integrada en Enfermería VI"] }
  ],
  "Décimo semestre": [
    { nombre: "Electivo de Profundización", prerequisitos: ["Práctica Integrada en Enfermería VI"] },
    { nombre: "Práctica Profesional en Enfermería II", prerequisitos: ["Práctica Integrada en Enfermería VI"] }
  ]
};

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

  if (todosAprobados) mostrarCelebracion();
}

function crearMallaInteractiva() {
  const contenedor = document.getElementById("malla-container");
  contenedor.innerHTML = "";
  for (const [semestre, ramos] of Object.entries(malla)) {
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
  // Borrar malla
  document.getElementById("malla-container").innerHTML = "";
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
