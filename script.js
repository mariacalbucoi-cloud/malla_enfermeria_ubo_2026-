// Fondo con emojis flotantes (jeringas)
const background = document.querySelector('.background-emojis');
for (let i = 0; i < 20; i++) {
  const emoji = document.createElement('span');
  emoji.textContent = '💉';
  emoji.style.left = Math.random() * 100 + 'vw';
  emoji.style.animationDuration = 10 + Math.random() * 10 + 's';
  emoji.style.fontSize = 20 + Math.random() * 20 + 'px';
  background.appendChild(emoji);
}

// Malla completa actualizada
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
    { nombre: "Práctica Integrada en Enfermería III", prerequisitos: ["Práctica Integrada en Enfermería II","Gestión del Cuidado en Enfermería II"] }
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
    { nombre: "Gestión del Cuidado en el Adulto", prerequisitos: ["Gestión del Cuidado en Enfermería IV","Práctica Integrada en Enfermería IV"] },
    { nombre: "Gestión del Cuidado en la Persona Mayor", prerequisitos: ["Gestión del Cuidado en Enfermería IV","Práctica Integrada en Enfermería IV"] },
    { nombre: "Planificación Estratégica I", prerequisitos: ["Gestión del Cuidado en Enfermería IV"] },
    { nombre: "Práctica Integrada en Enfermería V", prerequisitos: ["Práctica Integrada en Enfermería IV","Enfermería en Salud Pública y Determinantes Sociales"] }
  ],
  "Sexto semestre": [
    { nombre: "Metodología de la Investigación", prerequisitos: ["Ética y Bioética en Enfermería"] },
    { nombre: "Gestión del Cuidado en Comunidades II", prerequisitos: ["Gestión del Cuidado en Comunidades I","Práctica Integrada en Enfermería V"] },
    { nombre: "Salud Ocupacional", prerequisitos: ["Gestión del Cuidado en el Adulto"] },
    { nombre: "Planificación Estratégica II", prerequisitos: ["Planificación Estratégica I"] },
    { nombre: "Electivo de Formación General II", prerequisitos: ["Electivo de Formación General I"] },
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
    { nombre: "Práctica Profesional en Enfermería en Atención Primaria de Salud", prerequisitos: ["Práctica Profesional en Enfermería Hospitalaria"] }
  ]
};

// Renderizado
const contenedor = document.getElementById('malla');
const completadas = new Set();

for (const [semestre, asignaturas] of Object.entries(malla)) {
  const card = document.createElement('div');
  card.className = 'semestre';
  card.innerHTML = `<h2>${semestre}</h2>`;

  asignaturas.forEach(asig => {
    const div = document.createElement('div');
    div.className = asig.prerequisitos ? 'asignatura locked' : 'asignatura unlocked';
    div.textContent = asig.nombre;
    div.addEventListener('click', () => toggleAsignatura(div, asig));
    card.appendChild(div);
  });

  contenedor.appendChild(card);
}

function toggleAsignatura(div, asig) {
  if (div.classList.contains('locked')) return;
  const nombre = asig.nombre;
  if (completadas.has(nombre)) {
    completadas.delete(nombre);
    div.classList.remove('completed');
  } else {
    completadas.add(nombre);
    div.classList.add('completed');
  }
  actualizarBloqueos();
}

function actualizarBloqueos() {
  document.querySelectorAll('.asignatura').forEach(div => {
    const asig = buscarAsignatura(div.textContent);
    if (!asig) return;
    if (!asig.prerequisitos || asig.prerequisitos.every(p => completadas.has(p))) {
      div.classList.remove('locked');
      div.classList.add('unlocked');
    } else {
      div.classList.add('locked');
      div.classList.remove('unlocked');
    }
  });
}

function buscarAsignatura(nombre) {
  for (const lista of Object.values(malla)) {
    for (const a of lista) if (a.nombre === nombre) return a;
  }
  return null;
}
