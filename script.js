// --- Malla completa con prerrequisitos ---
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
    { nombre: "Lengua Extranjera II", prerrequisitos: ["Lengua Extranjera I"] },
    { nombre: "Identidad Universitaria II", prerrequisitos: ["Identidad Universitaria I"] },
    { nombre: "Gestión del Cuidado en Enfermería II", prerrequisitos: ["Gestión del Cuidado en Enfermería I"] },
    { nombre: "Matemáticas y Herramientas Informáticas para la Gestión en Salud", prerrequisitos: ["Educación en Enfermería"] },
    { nombre: "Práctica Integrada en Enfermería II", prerrequisitos: ["Práctica Integrada en Enfermería I"] },
    { nombre: "Morfología Micro y Macroscópica", prerrequisitos: ["Fundamentos de Biología y Genética Humana"] },
    { nombre: "Microbiología y Agentes Infecciosos", prerrequisitos: ["Bases Químicas y Bioquímicas de la Vida"] }
  ],
  "Tercer semestre": [
    { nombre: "Lengua Extranjera III", prerrequisitos: ["Lengua Extranjera II"] },
    { nombre: "Gestión del Cuidado en Enfermería III", prerrequisitos: ["Gestión del Cuidado en Enfermería II"] },
    { nombre: "Práctica Integrada en Enfermería III", prerrequisitos: ["Práctica Integrada en Enfermería II"] },
    { nombre: "Integrado Fisiología, Fisiopatología y Farmacología I", prerrequisitos: ["Morfología Micro y Macroscópica"] }
  ],
  "Cuarto semestre": [
    { nombre: "Lengua Extranjera IV", prerrequisitos: ["Lengua Extranjera III"] },
    { nombre: "Responsabilidad Social Universitaria" },
    { nombre: "Gestión del Cuidado en Enfermería IV", prerrequisitos: ["Gestión del Cuidado en Enfermería III","Práctica Integrada en Enfermería III"] },
    { nombre: "Enfermería en Salud Pública y Determinantes Sociales", prerrequisitos: ["Matemáticas y Herramientas Informáticas para la Gestión en Salud"] },
    { nombre: "Integrado Fisiología, Fisiopatología y Farmacología II", prerrequisitos: ["Integrado Fisiología, Fisiopatología y Farmacología I"] },
    { nombre: "Práctica Integrada en Enfermería IV", prerrequisitos: ["Práctica Integrada en Enfermería III","Gestión del Cuidado en Enfermería III"] }
  ],
  "Quinto semestre": [
    { nombre: "Ética y Bioética en Enfermería", prerrequisitos: ["Gestión del Cuidado en Enfermería IV"] },
    { nombre: "Gestión del Cuidado en Comunidades I", prerrequisitos: ["Enfermería en Salud Pública y Determinantes Sociales","Integrado Fisiología, Fisiopatología y Farmacología II"] },
    { nombre: "Gestión del Cuidado en el Adulto", prerrequisitos: ["Integrado Fisiología, Fisiopatología y Farmacología II","Gestión del Cuidado en Enfermería IV","Práctica Integrada en Enfermería IV"] },
    { nombre: "Gestión del Cuidado en la Persona Mayor", prerrequisitos: ["Integrado Fisiología, Fisiopatología y Farmacología II","Gestión del Cuidado en Enfermería IV","Práctica Integrada en Enfermería IV"] },
    { nombre: "Planificación Estratégica I", prerrequisitos: ["Gestión del Cuidado en Enfermería IV"] },
    { nombre: "Práctica Integrada en Enfermería V", prerrequisitos: ["Práctica Integrada en Enfermería IV","Enfermería en Salud Pública y Determinantes Sociales"] }
  ],
  "Sexto semestre": [
    { nombre: "Metodología de la Investigación", prerrequisitos: ["Ética y Bioética en Enfermería"] },
    { nombre: "Gestión del Cuidado en Comunidades II", prerrequisitos: ["Gestión del Cuidado en Comunidades I","Práctica Integrada en Enfermería V"] },
    { nombre: "Salud Ocupacional", prerrequisitos: ["Gestión del Cuidado en el Adulto"] },
    { nombre: "Planificación Estratégica II", prerrequisitos: ["Planificación Estratégica I"] },
    { nombre: "Práctica Integrada en Enfermería VI", prerrequisitos: ["Práctica Integrada en Enfermería V","Gestión del Cuidado en Comunidades I"] }
  ],
  "Séptimo semestre": [
    { nombre: "Seminario de Investigación en Enfermería I", prerrequisitos: ["Metodología de la Investigación"] },
    { nombre: "Gestión del Cuidado en Comunidades III", prerrequisitos: ["Gestión del Cuidado en Comunidades II","Práctica Integrada en Enfermería VI"] },
    { nombre: "Gestión del Cuidado en la infancia y adolescencia I", prerrequisitos: ["Salud Ocupacional","Gestión del Cuidado en Comunidades II"] },
    { nombre: "Bienestar Profesional", prerrequisitos: ["Salud Ocupacional"] },
    { nombre: "Práctica Integrada en Enfermería VII", prerrequisitos: ["Salud Ocupacional","Práctica Integrada en Enfermería VI"] }
  ],
  "Octavo semestre": [
    { nombre: "Seminario de Investigación en Enfermería II", prerrequisitos: ["Seminario de Investigación en Enfermería I"] },
    { nombre: "Gestión del Cuidado en la Infancia y Adolescencia II", prerrequisitos: ["Gestión del Cuidado en la infancia y adolescencia I","Práctica Integrada en Enfermería VII"] },
    { nombre: "Gestión del Cuidado en Urgencias", prerrequisitos: ["Gestión del Cuidado en la infancia y adolescencia I","Práctica Integrada en Enfermería VII"] },
    { nombre: "Gestión del Cuidado en Salud Mental y Psiquiatría", prerrequisitos: ["Gestión del Cuidado en la infancia y adolescencia I","Práctica Integrada en Enfermería VII"] },
    { nombre: "Gestión del Cuidado en Oncología y Cuidados Paliativos", prerrequisitos: ["Gestión del Cuidado en la infancia y adolescencia I","Gestión del Cuidado en Comunidades III","Práctica Integrada en Enfermería VII"] },
    { nombre: "Práctica Integrada en Enfermería VIII", prerrequisitos: ["Práctica Integrada en Enfermería VII","Gestión del Cuidado en la infancia y adolescencia I"] }
  ]
};

// --- Manejo de aprobados ---
const aprobados = new Set();

function puedeDesbloquear(prerequisitos) {
  return (prerequisitos || []).every(req => aprobados.has(req));
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

  // Crear emojis de fondo
  for (let i = 0; i < 30; i++) {
    const emoji = document.createElement("div");
    emoji.className = "fondo-emoji";
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = (5 + Math.random() * 5) + "s";
    emoji.textContent = Math.random() > 0.5 ? "💉" : "🩸";
    document.body.appendChild(emoji);
  }

  for (const [semestre, ramos] of Object.entries(malla)) {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";
    divSemestre.innerHTML = `<h2>${semestre}</h2>`;

    ramos.forEach(ramo => {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo bloqueado";
      divRamo.textContent = ramo.nombre;
      divRamo.dataset.nombre = ramo.nombre;
      divRamo.dataset.prerequisitos = JSON.stringify(ramo.prerrequisitos || []);

      divRamo.addEventListener("click", () => {
        if (puedeDesbloquear(ramo.prerrequisitos)) {
          if (aprobados.has(ramo.nombre)) {
            aprobados.delete(ramo.nombre);
          } else {
            aprobados.add(ramo.nombre);
          }
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

document.addEventListener("DOMContentLoaded", crearMallaInteractiva);
