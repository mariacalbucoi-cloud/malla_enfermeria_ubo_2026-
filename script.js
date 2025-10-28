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
    { nombre: "Responsabilidad Social Universitaria", prerequisitos: ["Formación Ética para el Desarrollo Sostenible"] },
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
    { nombre: "Práctica Profesional en Enfermería I", prerequisitos: ["Práctica Integrada en Enfermería VIII"] }
  ],
  "Décimo semestre": [
    { nombre: "Práctica Profesional en Enfermería II", prerequisitos: ["Práctica Integrada en Enfermería VIII"] }
  ]
};

const aprobados = new Set();
let jeringas = [];

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
  checkMallaCompleta();
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
  crearJeringas();
}

function crearJeringas() {
  const cantidad = 100;
  for (let i = 0; i < cantidad; i++) {
    const jeringa = document.createElement("div");
    jeringa.className = "jeringa";
    jeringa.style.left = Math.random() * window.innerWidth + "px";
    jeringa.style.top = Math.random() * window.innerHeight + "px";
    jeringa.style.animation = `caer ${3 + Math.random()*5}s linear infinite`;
    document.body.appendChild(jeringa);
    jeringas.push(jeringa);
  }
}

function checkMallaCompleta() {
  const totalRamos = Object.values(malla).flat().length;
  if (aprobados.size === totalRamos) {
    // Borrar malla
    document.getElementById("malla-container").remove();
    document.querySelectorAll('.jeringa').forEach(j => j.remove());

    // Mostrar felicitaciones y serpentinas
    const fel = document.getElementById("felicitaciones");
    fel.classList.remove("hidden");
    crearSerpentinas();
  }
}

function crearSerpentinas() {
  const cantidad = 150;
  const alturaMax = window.innerHeight/2;
  for (let i = 0; i < cantidad; i++) {
    const s = document.createElement("div");
    s.className = "serpentina";
    s.style.left = Math.random()*window.innerWidth + "px";
    s.style.top = -50 + "px";
    s.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    document.body.appendChild(s);

    let pos = -50;
    const velocidad = 2 + Math.random()*3;
    const int = setInterval(() => {
      pos += velocidad;
      s.style.top = pos + "px";
      if(pos >= alturaMax) clearInterval(int);
    }, 16);
  }
}

document.addEventListener("DOMContentLoaded", crearMallaInteractiva);
