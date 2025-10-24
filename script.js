// --- Malla Interactiva Enfermería UBO 2025 ---
// --- Generado automáticamente desde tu malla ---

export const COURSES = [
  // 1° Semestre
  { semestre: "1° Semestre", nombre: "Fundamentos de Biología y Genética Humana", prerreq: [] },
  { semestre: "1° Semestre", nombre: "Bases Químicas y Bioquímicas de la Vida", prerreq: [] },
  { semestre: "1° Semestre", nombre: "Gestión del Cuidado en Enfermería I", prerreq: [] },
  { semestre: "1° Semestre", nombre: "Educación en Enfermería", prerreq: [] },
  { semestre: "1° Semestre", nombre: "Identidad Universitaria I", prerreq: [] },
  { semestre: "1° Semestre", nombre: "Lengua Extranjera I", prerreq: [] },
  { semestre: "1° Semestre", nombre: "Práctica Integrada en Enfermería I", prerreq: [] },

  // 2° Semestre
  { semestre: "2° Semestre", nombre: "Lengua Extranjera II", prerreq: ["Lengua Extranjera I"] },
  { semestre: "2° Semestre", nombre: "Identidad Universitaria II", prerreq: ["Identidad Universitaria I"] },
  { semestre: "2° Semestre", nombre: "Gestión del Cuidado en Enfermería II", prerreq: ["Gestión del Cuidado en Enfermería I"] },
  { semestre: "2° Semestre", nombre: "Matemáticas y Herramientas Informáticas para la Gestión en Salud", prerreq: ["Educación en Enfermería"] },
  { semestre: "2° Semestre", nombre: "Práctica Integrada en Enfermería II", prerreq: ["Práctica Integrada en Enfermería I"] },
  { semestre: "2° Semestre", nombre: "Morfología Micro y Macroscópica", prerreq: ["Fundamentos de Biología y Genética Humana"] },
  { semestre: "2° Semestre", nombre: "Microbiología y Agentes Infecciosos", prerreq: ["Bases Químicas y Bioquímicas de la Vida"] },

  // 3° Semestre
  { semestre: "3° Semestre", nombre: "Lengua Extranjera III", prerreq: ["Lengua Extranjera II"] },
  { semestre: "3° Semestre", nombre: "Gestión del Cuidado en Enfermería III", prerreq: ["Gestión del Cuidado en Enfermería II"] },
  { semestre: "3° Semestre", nombre: "Práctica Integrada en Enfermería III", prerreq: ["Práctica Integrada en Enfermería II"] },
  { semestre: "3° Semestre", nombre: "Integrado Fisiología, Fisiopatología y Farmacología en Enfermería I", prerreq: ["Morfología Micro y Macroscópica"] },

  // 4° Semestre
  { semestre: "4° Semestre", nombre: "Lengua Extranjera IV", prerreq: ["Lengua Extranjera III"] },
  { semestre: "4° Semestre", nombre: "Responsabilidad Social Universitaria", prerreq: ["Formación Ética para el Desarrollo Sostenible"] },
  { semestre: "4° Semestre", nombre: "Gestión del Cuidado en Enfermería IV", prerreq: ["Gestión del Cuidado en Enfermería III","Práctica Integrada en Enfermería III"] },
  { semestre: "4° Semestre", nombre: "Enfermería en Salud Pública y Determinantes Sociales", prerreq: ["Matemáticas y Herramientas Informáticas para la Gestión en Salud"] },
  { semestre: "4° Semestre", nombre: "Integrado Fisiología, Fisiopatología y Farmacología en Enfermería II", prerreq: ["Integrado Fisiología, Fisiopatología y Farmacología en Enfermería I"] },
  { semestre: "4° Semestre", nombre: "Práctica Integrada en Enfermería IV", prerreq: ["Práctica Integrada en Enfermería III","Gestión del Cuidado en Enfermería III"] },

  // 5° Semestre
  { semestre: "5° Semestre", nombre: "Ética y Bioética en Enfermería", prerreq: ["Gestión del Cuidado en Enfermería IV"] },
  { semestre: "5° Semestre", nombre: "Gestión del Cuidado en Comunidades I", prerreq: ["Enfermería en Salud Pública y Determinantes Sociales","Integrado Fisiología, Fisiopatología y Farmacología en Enfermería II"] },
  { semestre: "5° Semestre", nombre: "Gestión del Cuidado en el Adulto", prerreq: ["Integrado Fisiología, Fisiopatología y Farmacología en Enfermería II","Gestión del Cuidado en Enfermería IV","Práctica Integrada en Enfermería IV"] },
  { semestre: "5° Semestre", nombre: "Gestión del Cuidado en la Persona Mayor", prerreq: ["Integrado Fisiología Fisiopatología y Farmacología en Enfermería II","Gestión del Cuidado en Enfermería IV","Práctica Integrada en Enfermería IV"] },
  { semestre: "5° Semestre", nombre: "Planificación Estratégica I", prerreq: ["Gestión del Cuidado en Enfermería IV"] },
  { semestre: "5° Semestre", nombre: "Práctica Integrada en Enfermería V", prerreq: ["Práctica Integrada en Enfermería IV","Enfermería en Salud Pública y Determinantes Sociales"] },

  // 6° Semestre
  { semestre: "6° Semestre", nombre: "Metodología de la Investigación", prerreq: ["Ética y Bioética en Enfermería"] },
  { semestre: "6° Semestre", nombre: "Gestión del Cuidado en Comunidades II", prerreq: ["Gestión del Cuidado en Comunidades I","Práctica Integrada en Enfermería V"] },
  { semestre: "6° Semestre", nombre: "Salud Ocupacional", prerreq: ["Gestión del Cuidado en el Adulto"] },
  { semestre: "6° Semestre", nombre: "Planificación Estratégica II", prerreq: ["Planificación Estratégica I"] },
  { semestre: "6° Semestre", nombre: "Práctica Integrada en Enfermería VI", prerreq: ["Práctica Integrada en Enfermería V","Gestión del Cuidado en Comunidades I"] },

  // 7° Semestre
  { semestre: "7° Semestre", nombre: "Seminario de investigación en Enfermería I", prerreq: ["Metodología de la Investigación"] },
  { semestre: "7° Semestre", nombre: "Gestión del Cuidado en Comunidades III", prerreq: ["Gestión del Cuidado en Comunidades II","Práctica Integrada en Enfermería VI"] },
  { semestre: "7° Semestre", nombre: "Gestión del Cuidado en la infancia y adolescencia I", prerreq: ["Salud Ocupacional","Gestión del Cuidado en Comunidades II"] },
  { semestre: "7° Semestre", nombre: "Bienestar Profesional", prerreq: ["Salud Ocupacional"] },
  { semestre: "7° Semestre", nombre: "Práctica Integrada en Enfermería VII", prerreq: ["Salud Ocupacional","Práctica Integrada en Enfermería VI"] },

  // 8° Semestre
  { semestre: "8° Semestre", nombre: "Seminario de Investigación en Enfermería II", prerreq: ["Seminario de Investigación en Enfermería I"] },
  { semestre: "8° Semestre", nombre: "Gestión del Cuidado en la Infancia y Adolescencia II", prerreq: ["Gestión del Cuidado en la Infancia y Adolescencia I","Práctica Integrada en Enfermería VII"] },
  { semestre: "8° Semestre", nombre: "Gestión del Cuidado en Urgencias", prerreq: ["Gestión del Cuidado en la Infancia y Adolescencia I","Práctica Integrada en Enfermería VII"] },
  { semestre: "8° Semestre", nombre: "Gestión del Cuidado en Salud Mental y Psiquiatría", prerreq: ["Gestión del Cuidado en la Infancia y Adolescencia I","Práctica Integrada en Enfermería VII"] },
  { semestre: "8° Semestre", nombre: "Gestión del Cuidado en Oncología y Cuidados Paliativos", prerreq: ["Gestión del Cuidado en la Infancia y Adolescencia I","Gestión del Cuidado en Comunidades III","Práctica Integrada en Enfermería VII"] },
  { semestre: "8° Semestre", nombre: "Práctica Integrada en Enfermería VIII", prerreq: ["Práctica Integrada en Enfermería VII","Gestión del Cuidado en la Infancia y Adolescencia I"] },

  // 9° Semestre
  { semestre: "9° Semestre", nombre: "Intervención de Enfermería en Salud Comunitaria (Opción A)", prerreq: ["Aprobadas asignaturas de 1er a 8vo semestre inclusive"] },
  { semestre: "9° Semestre", nombre: "Enfermería en Salud Familiar (Opción A)", prerreq: ["Aprobadas asignaturas de 1er a 8vo semestre inclusive"] },
  { semestre: "9° Semestre", nombre: "Práctica profesional en Enfermería Hospitalaria (Opción A)", prerreq: ["Aprobadas asignaturas de 1er a 8vo semestre inclusive"] },
  { semestre: "9° Semestre", nombre: "Cuidados de Enfermería en Adulto Crítico (Opción B)", prerreq: ["Aprobadas asignaturas de 1er a 8vo semestre inclusive"] },
  { semestre: "9° Semestre", nombre: "Enfermería en Unidades Quirúrgicas del Adulto (Opción B)", prerreq: ["Aprobadas asignaturas de 1er a 8vo semestre inclusive"] },
  { semestre: "9° Semestre", nombre: "Práctica Profesional en Enfermería en Atención Primaria de Salud (Opción B)", prerreq: ["Aprobadas asignaturas de 1er a 8vo semestre inclusive"] },

  // 10° Semestre
  { semestre: "10° Semestre", nombre: "Práctica Profesional en Enfermería en Atención Primaria de Salud (Opción A)", prerreq: ["Intervención de Enfermería en Salud Comunitaria (Opción A)","Enfermería en Salud Familiar (Opción A)"] },
  { semestre: "10° Semestre", nombre: "Práctica Profesional en Enfermería Hospitalaria (Opción B)", prerreq: ["Cuidados de Enfermería en Adulto Crítico (Opción B)","Enfermería en Unidades Quirúrgicas del Adulto (Opción B)"] }
];
// --- Renderizado Malla ---
const semestersDiv = document.getElementById("semesters");
const resetBtn = document.getElementById("resetBtn");
const selectedCount = document.getElementById("selectedCount");
let state = JSON.parse(localStorage.getItem("mallaState")) || {};

function saveState() { localStorage.setItem("mallaState", JSON.stringify(state)); }
function updateCount() { selectedCount.textContent = `Seleccionados: ${Object.values(state).filter(v=>v==="done").length}`; }

const semestres = {};
COURSES.forEach(c => { if(!semestres[c.semestre]) semestres[c.semestre]=[]; semestres[c.semestre].push(c); });

function render() {
  semestersDiv.innerHTML = "";
  Object.entries(semestres).forEach(([semestre, cursos]) => {
    const card = document.createElement("div");
    card.className = "semester-card";
    card.innerHTML = `<h3>💉 ${semestre}</h3><div class="courses"></div>`;
    const list = card.querySelector(".courses");

    cursos.forEach(curso => {
      const el = document.createElement("div");
      const key = curso.nombre;
      const status = state[key] || "locked";
      const canUnlock = curso.prerreq.length === 0 || curso.prerreq.every(p => state[p]==="done");
      const cssClass = status==="done" ? "done" : canUnlock ? "available" : "locked";
      el.className = `course ${cssClass}`;
      el.textContent = curso.nombre;
      el.addEventListener("click", () => { if(cssClass==="locked") return; state[key] = state[key]==="done"?"available":"done"; saveState(); render(); });
      list.appendChild(el);
    });

    semestersDiv.appendChild(card);
  });
  updateCount();
}

resetBtn.addEventListener("click", () => { if(confirm("¿Seguro que quieres reiniciar la malla?")) { state={}; saveState(); render(); } });
render();

// --- Emojis flotantes ---
function createEmoji() {
  const emoji = document.createElement("div");
  emoji.textContent = "💉";
  emoji.className = "emoji";
  emoji.style.left = `${Math.random()*100}%`;
  emoji.style.top = `-50px`;
  emoji.style.fontSize = `${Math.random()*30+20}px`;
  document.body.appendChild(emoji);
  let top = -50;
  const speed = Math.random()*2+1;
  function fall() {
    top += speed;
    emoji.style.top = `${top}px`;
    if(top < window.innerHeight + 50) requestAnimationFrame(fall);
    else emoji.remove();
  }
  fall();
}
setInterval(createEmoji, 300);
