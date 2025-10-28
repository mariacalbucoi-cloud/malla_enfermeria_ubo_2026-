const malla = {
  "Primer semestre": [
    { nombre: "Fundamentos de Biología y Genética Humana" },
    { nombre: "Bases Químicas y Bioquímicas de la Vida" },
    { nombre: "Gestión del Cuidado en Enfermería I" },
    { nombre: "Educación en Enfermería" },
    { nombre: "Identidad Universitaria I" },
    { nombre: "Lengua Extranjera I" }
  ],
  "Segundo semestre": [
    { nombre: "Morfología Micro y Macroscópica", prerequisitos: ["Fundamentos de Biología y Genética Humana"] },
    { nombre: "Biofísica y Bioquímica Aplicada", prerequisitos: ["Bases Químicas y Bioquímicas de la Vida"] },
    { nombre: "Gestión del Cuidado en Enfermería II", prerequisitos: ["Gestión del Cuidado en Enfermería I"] },
    { nombre: "Responsabilidad Social Universitaria", prerequisitos: [] },
    { nombre: "Práctica Integrada en Enfermería II", prerequisitos: ["Gestión del Cuidado en Enfermería I"] },
    { nombre: "Lengua Extranjera II", prerequisitos: ["Lengua Extranjera I"] }
  ],
  "Tercer semestre": [
    { nombre: "Integrado de Fisiología, Fisiopatología y Farmacología en Enfermería I", prerequisitos: ["Morfología Micro y Macroscópica"] },
    { nombre: "Gestión del Cuidado en Enfermería III", prerequisitos: ["Gestión del Cuidado en Enfermería II"] },
    { nombre: "Formación Ética para el Desarrollo Sostenible" },
    { nombre: "Lengua Extranjera III", prerequisitos: ["Lengua Extranjera II"] },
    { nombre: "Electivo de Formación General I" },
    { nombre: "Práctica Integrada en Enfermería III", prerequisitos: ["Práctica Integrada en Enfermería II", "Gestión del Cuidado en Enfermería II"] }
  ],
  "Cuarto semestre": [
    { nombre: "Gestión del Cuidado en Enfermería IV", prerequisitos: ["Gestión del Cuidado en Enfermería III"] },
    { nombre: "Enfermería en Salud Pública y Determinantes Sociales en Salud", prerequisitos: ["Responsabilidad Social Universitaria"] },
    { nombre: "Práctica Integrada en Enfermería IV", prerequisitos: ["Práctica Integrada en Enfermería III"] },
    { nombre: "Lengua Extranjera IV", prerequisitos: ["Lengua Extranjera III"] }
  ],
  "Quinto semestre": [
    { nombre: "Gestión del Cuidado en Enfermería V", prerequisitos: ["Gestión del Cuidado en Enfermería IV"] },
    { nombre: "Práctica Integrada en Enfermería V", prerequisitos: ["Práctica Integrada en Enfermería IV"] },
    { nombre: "Investigación en Enfermería I" },
    { nombre: "Electivo de Formación General II", prerequisitos: ["Electivo de Formación General I"] }
  ],
  "Sexto semestre": [
    { nombre: "Gestión del Cuidado en Enfermería VI", prerequisitos: ["Gestión del Cuidado en Enfermería V"] },
    { nombre: "Práctica Integrada en Enfermería VI", prerequisitos: ["Práctica Integrada en Enfermería V"] },
    { nombre: "Investigación en Enfermería II", prerequisitos: ["Investigación en Enfermería I"] },
    { nombre: "Enfermería en Salud Mental y Psiquiatría" }
  ],
  "Séptimo semestre": [
    { nombre: "Gestión del Cuidado en Enfermería VII", prerequisitos: ["Gestión del Cuidado en Enfermería VI"] },
    { nombre: "Práctica Integrada en Enfermería VII", prerequisitos: ["Práctica Integrada en Enfermería VI"] },
    { nombre: "Ética Profesional en Enfermería", prerequisitos: ["Formación Ética para el Desarrollo Sostenible"] },
    { nombre: "Investigación en Enfermería III", prerequisitos: ["Investigación en Enfermería II"] }
  ],
  "Octavo semestre": [
    { nombre: "Gestión del Cuidado en Enfermería VIII", prerequisitos: ["Gestión del Cuidado en Enfermería VII"] },
    { nombre: "Práctica Integrada en Enfermería VIII", prerequisitos: ["Práctica Integrada en Enfermería VII"] },
    { nombre: "Gestión y Liderazgo en Enfermería", prerequisitos: ["Gestión del Cuidado en Enfermería VII"] },
    { nombre: "Seminario de Investigación en Enfermería", prerequisitos: ["Investigación en Enfermería III"] },
    { nombre: "Rol Profesional y Empleabilidad" },
    { nombre: "Electivo Profesional" }
  ],
  "Noveno semestre": [
    { nombre: "Internado Profesional I", prerequisitos: ["Gestión del Cuidado en Enfermería VIII"] }
  ],
  "Décimo semestre": [
    { nombre: "Internado Profesional II", prerequisitos: ["Internado Profesional I"] }
  ]
};

const aprobadas = new Set();

function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  for (const [semestre, asignaturas] of Object.entries(malla)) {
    const divSemestre = document.createElement("div");
    divSemestre.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    divSemestre.appendChild(titulo);

    asignaturas.forEach(asig => {
      const divAsig = document.createElement("div");
      divAsig.classList.add("asignatura");
      divAsig.textContent = asig.nombre;

      if (asig.prerequisitos && asig.prerequisitos.length > 0 &&
          !asig.prerequisitos.every(p => aprobadas.has(p))) {
        divAsig.classList.add("bloqueada");
      }

      divAsig.addEventListener("click", () => {
        if (divAsig.classList.contains("bloqueada")) return;

        if (divAsig.classList.contains("aprobada")) {
          divAsig.classList.remove("aprobada");
          aprobadas.delete(asig.nombre);
        } else {
          divAsig.classList.add("aprobada");
          aprobadas.add(asig.nombre);
        }
        crearMalla();
      });

      divSemestre.appendChild(divAsig);
    });

    contenedor.appendChild(divSemestre);
  }
}

// Generar jeringas flotantes
function generarJeringas() {
  const fondo = document.querySelector(".emoji-background");
  for (let i = 0; i < 25; i++) {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.textContent = "💉";
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = 8 + Math.random() * 5 + "s";
    fondo.appendChild(emoji);
  }
}

generarJeringas();
crearMalla();
