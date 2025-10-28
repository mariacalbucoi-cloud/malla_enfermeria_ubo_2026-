const malla = {
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
    { nombre: "Integrado de Fisiología, Fisiopatología y Farmacología en Enfermería I", prerequisitos: ["Morfología Micro y Macroscópica"] },
    { nombre: "Gestión del Cuidado en Enfermería III", prerequisitos: ["Gestión del Cuidado en Enfermería II"] },
    { nombre: "Formación Ética para el Desarrollo Sostenible" },
    { nombre: "Lengua Extranjera III", prerequisitos: ["Lengua Extranjera II"] },
    { nombre: "Electivo de Formación General I" },
    { nombre: "Práctica Integrada en Enfermería III", prerequisitos: ["Práctica Integrada en Enfermería II"] }
  ],
  "Cuarto semestre": [
    { nombre: "Lengua Extranjera IV", prerequisitos: ["Lengua Extranjera III"] },
    { nombre: "Responsabilidad Social Universitaria", prerequisitos: ["Formación Ética para el Desarrollo Sostenible"] },
    { nombre: "Gestión del Cuidado en Enfermería IV", prerequisitos: ["Gestión del Cuidado en Enfermería III", "Práctica Integrada en Enfermería III"] },
    { nombre: "Enfermería en Salud Pública y Determinantes Sociales", prerequisitos: ["Matemáticas y Herramientas Informáticas para la Gestión en Salud"] },
    { nombre: "Integrado de Fisiología, Fisiopatología y Farmacología en Enfermería II", prerequisitos: ["Integrado de Fisiología, Fisiopatología y Farmacología en Enfermería I"] },
    { nombre: "Práctica Integrada en Enfermería IV", prerequisitos: ["Práctica Integrada en Enfermería III", "Gestión del Cuidado en Enfermería III"] }
  ],
  "Quinto semestre": [
    { nombre: "Ética y Bioética en Enfermería", prerequisitos: ["Gestión del Cuidado en Enfermería IV"] },
    { nombre: "Gestión del Cuidado en Comunidades I", prerequisitos: ["Enfermería en Salud Pública y Determinantes Sociales", "Integrado de Fisiología, Fisiopatología y Farmacología en Enfermería II"] },
    { nombre: "Gestión del Cuidado en el Adulto", prerequisitos: ["Integrado de Fisiología, Fisiopatología y Farmacología en Enfermería II", "Gestión del Cuidado en Enfermería IV", "Práctica Integrada en Enfermería IV"] },
    { nombre: "Gestión del Cuidado en la Persona Mayor", prerequisitos: ["Integrado de Fisiología, Fisiopatología y Farmacología en Enfermería II", "Gestión del Cuidado en Enfermería IV", "Práctica Integrada en Enfermería IV"] },
    { nombre: "Planificación Estratégica I", prerequisitos: ["Gestión del Cuidado en Enfermería IV"] },
    { nombre: "Práctica Integrada en Enfermería V", prerequisitos: ["Práctica Integrada en Enfermería IV", "Enfermería en Salud Pública y Determinantes Sociales"] }
  ],
  "Sexto semestre": [
    { nombre: "Metodología de la Investigación", prerequisitos: ["Ética y Bioética en Enfermería"] },
    { nombre: "Gestión del Cuidado en Comunidades II", prerequisitos: ["Gestión del Cuidado en Comunidades I", "Práctica Integrada en Enfermería V"] },
    { nombre: "Salud Ocupacional", prerequisitos: ["Gestión del Cuidado en el Adulto"] },
    { nombre: "Planificación Estratégica II", prerequisitos: ["Planificación Estratégica I"] },
    { nombre: "Práctica Integrada en Enfermería VI", prerequisitos: ["Práctica Integrada en Enfermería V", "Gestión del Cuidado en Comunidades I"] },
    { nombre: "Electivo de Formación General II", prerequisitos: ["Electivo de Formación General I"] }
  ],
  "Séptimo semestre": [
    { nombre: "Seminario de Investigación en Enfermería I", prerequisitos: ["Metodología de la Investigación"] },
    { nombre: "Gestión del Cuidado en Comunidades III", prerequisitos: ["Gestión del Cuidado en Comunidades II", "Práctica Integrada en Enfermería VI"] },
    { nombre: "Gestión del Cuidado en la Infancia y Adolescencia I", prerequisitos: ["Salud Ocupacional", "Gestión del Cuidado en Comunidades II"] },
    { nombre: "Bienestar Profesional", prerequisitos: ["Salud Ocupacional"] },
    { nombre: "Práctica Integrada en Enfermería VII", prerequisitos: ["Salud Ocupacional", "Práctica Integrada en Enfermería VI"] }
  ],
  "Octavo semestre": [
    { nombre: "Seminario de Investigación en Enfermería II", prerequisitos: ["Seminario de Investigación en Enfermería I"] },
    { nombre: "Gestión del Cuidado en la Infancia y Adolescencia II", prerequisitos: ["Gestión del Cuidado en la Infancia y Adolescencia I", "Práctica Integrada en Enfermería VII"] },
    { nombre: "Gestión del Cuidado en Urgencias", prerequisitos: ["Gestión del Cuidado en la Infancia y Adolescencia I", "Práctica Integrada en Enfermería VII"] },
    { nombre: "Gestión del Cuidado en Salud Mental y Psiquiatría", prerequisitos: ["Gestión del Cuidado en la Infancia y Adolescencia I", "Práctica Integrada en Enfermería VII"] },
    { nombre: "Gestión del Cuidado en Oncología y Cuidados Paliativos", prerequisitos: ["Gestión del Cuidado en la Infancia y Adolescencia I", "Gestión del Cuidado en Comunidades III", "Práctica Integrada en Enfermería VII"] },
    { nombre: "Práctica Integrada en Enfermería VIII", prerequisitos: ["Práctica Integrada en Enfermería VII", "Gestión del Cuidado en la Infancia y Adolescencia I"] }
  ],
  "Noveno semestre": [
    { nombre: "Intervención de Enfermería en Salud Comunitaria", prerequisitos: ["todas las anteriores"] },
    { nombre: "Enfermería en Salud Familiar", prerequisitos: ["todas las anteriores"] },
    { nombre: "Cudados de Enfermería en Adulto Crítico", prerequisitos: ["todas las anteriores"] },
    { nombre: "Enfermería en Unidades Quirúrgicas del Adulto", prerequisitos: ["todas las anteriores"] },
    { nombre: "Práctica Profesional en Enfermería Hospitalaria", prerequisitos: ["todas las anteriores"] }
  ],
  "Décimo semestre": [
    { nombre: "Práctica Profesional en Enfermería en Atención Primaria de Salud", prerequisitos: ["Intervención de Enfermería en Salud Comunitaria", "Enfermería en Salud Familiar"] }
  ]
};

const aprobados = new Set();

function puedeDesbloquear(prerequisitos) {
  if (!prerequisitos || prerequisitos.length === 0) return true;
  if (prerequisitos.includes("Todas las anteriores")) {
    return Object.keys(malla).flatMap(s => malla[s].map(r => r.nombre)).every(r => aprobados.has(r));
  }
  return prerequisitos.every(req => aprobados.has(req));
}

function actualizarEstadoRamos() {
  document.querySelectorAll('.ramo').forEach(divRamo => {
    const nombre = divRamo.dataset.nombre;
    const prerequisitos = JSON.parse(divRamo.dataset.prerequisitos || '[]');
    if (aprobados.has(nombre)) {
      divRamo.classList.remove('bloqueado');
      divRamo.classList.add('aprobado');
    } else if (puedeDesbloquear(prerequisitos)) {
      divRamo.classList.remove('bloqueado');
      divRamo.classList.remove('aprobado');
    } else {
      divRamo.classList.add('bloqueado');
      divRamo.classList.remove('aprobado');
    }
  });
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
        } else {
          alert("Aún no cumples con los prerrequisitos para: " + ramo.nombre);
        }
      });

      divSemestre.appendChild(divRamo);
    });

    contenedor.appendChild(divSemestre);
  }
  actualizarEstadoRamos();
}

// Fondo animado con emojis de jeringa
function animarFondo() {
  const canvas = document.getElementById('fondo');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const emojis = [];
  for (let i = 0; i < 200; i++) {
    emojis.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 20 + Math.random() * 20,
      speed: 0.5 + Math.random()
    });
  }

  function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    emojis.forEach(e => {
      ctx.font = `${e.size}px Arial`;
      ctx.fillText("💉", e.x, e.y);
      e.y += e.speed;
      if (e.y > canvas.height) e.y = -20;
    });
    requestAnimationFrame(dibujar);
  }
  dibujar();
}

document.addEventListener("DOMContentLoaded", () => {
  crearMallaInteractiva();
  animarFondo();
});
