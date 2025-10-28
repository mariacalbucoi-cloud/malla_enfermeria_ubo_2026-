// ----------------------
// Malla completa
// ----------------------
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
    { nombre: "Lengua Extranjera III", prerequisitos: ["Lengua Extranjera II"] },
    { nombre: "Gestión del Cuidado en Enfermería III", prerequisitos: ["Gestión del Cuidado en Enfermería II"] },
    { nombre: "Práctica Integrada en Enfermería III", prerequisitos: ["Práctica Integrada en Enfermería II"] },
    { nombre: "Integrado de Fisiología, Fisiopatología y Farmacología en Enfermería I", prerequisitos: ["Morfología Micro y Macroscópica"] }
  ],
  "Cuarto semestre": [
    { nombre: "Lengua Extranjera IV", prerequisitos: ["Lengua Extranjera III"] },
    { nombre: "Responsabilidad Social Universitaria" },
    { nombre: "Gestión del Cuidado en Enfermería IV", prerequisitos: ["Gestión del Cuidado en Enfermería III","Práctica Integrada en Enfermería III"] },
    { nombre: "Enfermería en Salud Pública y Determinantes Sociales", prerequisitos: ["Matemáticas y Herramientas Informáticas para la Gestión en Salud"] },
    { nombre: "Integrado de Fisiología, Fisiopatología y Farmacología en Enfermería II", prerequisitos: ["Integrado de Fisiología, Fisiopatología y Farmacología en Enfermería I"] },
    { nombre: "Práctica Integrada en Enfermería IV", prerequisitos: ["Práctica Integrada en Enfermería III","Gestión del Cuidado en Enfermería III"] }
  ],
  "Quinto semestre": [
    { nombre: "Ética y Bioética en Enfermería", prerequisitos: ["Gestión del Cuidado en Enfermería IV"] },
    { nombre: "Gestión del Cuidado en Comunidades I", prerequisitos: ["Enfermería en Salud Pública y Determinantes Sociales","Integrado de Fisiología, Fisiopatología y Farmacología en Enfermería II"] },
    { nombre: "Gestión del Cuidado en el Adulto", prerequisitos: ["Integrado de Fisiología, Fisiopatología y Farmacología en Enfermería II","Gestión del Cuidado en Enfermería IV","Práctica Integrada en Enfermería IV"] },
    { nombre: "Gestión del Cuidado en la Persona Mayor", prerequisitos: ["Integrado de Fisiología, Fisiopatología y Farmacología en Enfermería II","Gestión del Cuidado en Enfermería IV","Práctica Integrada en Enfermería IV"] },
    { nombre: "Planificación Estratégica I", prerequisitos: ["Gestión del Cuidado en Enfermería IV"] },
    { nombre: "Práctica Integrada en Enfermería V", prerequisitos: ["Práctica Integrada en Enfermería IV","Enfermería en Salud Pública y Determinantes Sociales"] }
  ],
  "Sexto semestre": [
    { nombre: "Metodología de la Investigación", prerequisitos: ["Ética y Bioética en Enfermería"] },
    { nombre: "Gestión del Cuidado en Comunidades II", prerequisitos: ["Gestión del Cuidado en Comunidades I","Práctica Integrada en Enfermería V"] },
    { nombre: "Salud Ocupacional", prerequisitos: ["Gestión del Cuidado en el Adulto"] },
    { nombre: "Planificación Estratégica II", prerequisitos: ["Planificación Estratégica I"] },
    { nombre: "Práctica Integrada en Enfermería VI", prerequisitos: ["Práctica Integrada en Enfermería V","Gestión del Cuidado en Comunidades I"] }
  ],
  "Séptimo semestre": [
    { nombre: "Seminario de Investigación en Enfermería I", prerequisitos: ["Metodología de la Investigación"] },
    { nombre: "Gestión del Cuidado en Comunidades III", prerequisitos: ["Gestión del Cuidado en Comunidades II","Práctica Integrada en Enfermería VI"] },
    { nombre: "Gestión del Cuidado en la Infancia y Adolescencia I", prerequisitos: ["Salud Ocupacional","Gestión del Cuidado en Comunidades II"] },
    { nombre: "Bienestar Profesional", prerequisitos: ["Salud Ocupacional"] },
    { nombre: "Práctica Integrada en Enfermería VII", prerequisitos: ["Salud Ocupacional","Práctica Integrada en Enfermería VI"] }
  ],
  "Octavo semestre": [
    { nombre: "Seminario de Investigación en Enfermería II", prerequisitos: ["Seminario de Investigación en Enfermería I"] },
    { nombre: "Gestión del Cuidado en la Infancia y Adolescencia II", prerequisitos: ["Gestión del Cuidado en la Infancia y Adolescencia I","Práctica Integrada en Enfermería VII"] },
    { nombre: "Gestión del Cuidado en Urgencias", prerequisitos: ["Gestión del Cuidado en la Infancia y Adolescencia I","Práctica Integrada en Enfermería VII"] },
    { nombre: "Gestión del Cuidado en Salud Mental y Psiquiatría", prerequisitos: ["Gestión del Cuidado en la Infancia y Adolescencia I","Práctica Integrada en Enfermería VII"] },
    { nombre: "Gestión del Cuidado en Oncología y Cuidados Paliativos", prerequisitos: ["Gestión del Cuidado en la Infancia y Adolescencia I","Gestión del Cuidado en Comunidades III","Práctica Integrada en Enfermería VII"] },
    { nombre: "Práctica Integrada en Enfermería VIII", prerequisitos: ["Práctica Integrada en Enfermería VII","Gestión del Cuidado en la Infancia y Adolescencia I"] }
  ],
  "Noveno semestre": [
    { nombre: "Intervención de Enfermería en Salud Comunitaria", prerequisitos: ["Práctica Integrada en Enfermería VIII"] },
    { nombre: "Enfermería en Salud Familiar", prerequisitos: ["Práctica Integrada en Enfermería VIII"] },
    { nombre: "Práctica Profesional en Enfermería Hospitalaria", prerequisitos: ["Práctica Integrada en Enfermería VIII"] }
  ],
  "Décimo semestre": [
    { nombre: "Práctica Profesional en Enfermería en Atención Primaria de Salud", prerequisitos: ["Intervención de Enfermería en Salud Comunitaria","Enfermería en Salud Familiar"] }
  ]
};

// ----------------------
// Funciones de interacción
// ----------------------
const aprobados = new Set();

function puedeDesbloquear(prerequisitos) {
  return (prerequisitos || []).every(req => aprobados.has(req));
}

function actualizarEstadoRamos() {
  document.querySelectorAll(".ramo").forEach(r => {
    const nombre = r.dataset.nombre;
    const prerequisitos = JSON.parse(r.dataset.prerequisitos || "[]");
    if (aprobados.has(nombre)) {
      r.classList.remove("bloqueado");
      r.classList.add("aprobado");
    } else if (puedeDesbloquear(prerequisitos)) {
      r.classList.remove("bloqueado");
      r.classList.remove("aprobado");
    } else {
      r.classList.add("bloqueado");
      r.classList.remove("aprobado");
    }
  });
}

function crearMalla() {
  const cont = document.getElementById("malla-container");
  cont.innerHTML = "";

  for (const [sem, ramos] of Object.entries(malla)) {
    const dSem = document.createElement("div");
    dSem.className = "semestre";
    dSem.innerHTML = `<h2>${sem}</h2>`;
    ramos.forEach(r => {
      const div = document.createElement("div");
      div.className = "ramo bloqueado";
      div.textContent = r.nombre;
      div.dataset.nombre = r.nombre;
      div.dataset.prerequisitos = JSON.stringify(r.prerequisitos || []);
      div.addEventListener("click", () => {
        if (puedeDesbloquear(r.prerequisitos)) {
          if (aprobados.has(r.nombre)) aprobados.delete(r.nombre);
          else aprobados.add(r.nombre);
          actualizarEstadoRamos();
        } else {
          alert("Aún no cumples con los prerrequisitos para: " + r.nombre);
        }
      });
      dSem.appendChild(div);
    });
    cont.appendChild(dSem);
  }

  actualizarEstadoRamos();
  crearJeringas();
}

// ----------------------
// Fondo de jeringas flotando
// ----------------------
function crearJeringas() {
  const total = 80;
  for (let i = 0; i < total; i++) {
    const j = document.createElement("div");
    j.textContent = "💉";
    j.className = "jeringa";
    j.style.left = Math.random() * window.innerWidth + "px";
    j.style.top = Math.random() * window.innerHeight + "px";
    j.style.fontSize = 14 + Math.random() * 18 + "px";
    j.style.animationDuration = 10 + Math.random() * 25 + "s";
    document.body.appendChild(j);
  }
}

document.addEventListener("DOMContentLoaded", crearMalla);
