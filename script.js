// --- Malla Interactiva Enfermería UBO 2025 ---
// --- Generado automáticamente desde malla nueva.xlsx ---

const COURSES = [{'semestre': 'primero', 'nombre': 'Fundamentos de Biología y Genética Humana', 'prerreq': []}, {'semestre': 'primero', 'nombre': 'Bases Químicas y Bioquímicas de la Vida', 'prerreq': []}, {'semestre': 'primero', 'nombre': 'Gestión del Cuidado en Enfermería I', 'prerreq': []}, {'semestre': 'primero', 'nombre': 'Educación en Enfermería', 'prerreq': []}, {'semestre': 'primero', 'nombre': 'Primeros Auxilios y Reanimación Cardiopulmonar', 'prerreq': []}, {'semestre': 'primero', 'nombre': 'Competencias Comunicativas y Relacionales', 'prerreq': []}, {'semestre': 'segundo', 'nombre': 'Anatomía y Fisiología Humana', 'prerreq': ['Fundamentos de Biología y Genética Humana']}, {'semestre': 'segundo', 'nombre': 'Microbiología e Inmunología', 'prerreq': ['Bases Químicas y Bioquímicas de la Vida']}, {'semestre': 'segundo', 'nombre': 'Gestión del Cuidado en Enfermería II', 'prerreq': ['Gestión del Cuidado en Enfermería I']}, {'semestre': 'segundo', 'nombre': 'Psicología y Desarrollo Humano', 'prerreq': []}, {'semestre': 'segundo', 'nombre': 'Salud Pública y Epidemiología', 'prerreq': []}, {'semestre': 'tercero', 'nombre': 'Farmacología', 'prerreq': ['Bases Químicas y Bioquímicas de la Vida']}, {'semestre': 'tercero', 'nombre': 'Gestión del Cuidado en Enfermería III', 'prerreq': ['Gestión del Cuidado en Enfermería II']}, {'semestre': 'tercero', 'nombre': 'Patología General', 'prerreq': ['Anatomía y Fisiología Humana']}, {'semestre': 'tercero', 'nombre': 'Salud Familiar y Comunitaria', 'prerreq': ['Salud Pública y Epidemiología']}, {'semestre': 'cuarto', 'nombre': 'Gestión del Cuidado en Enfermería IV', 'prerreq': ['Gestión del Cuidado en Enfermería III']}, {'semestre': 'cuarto', 'nombre': 'Proceso de Atención de Enfermería', 'prerreq': ['Gestión del Cuidado en Enfermería III']}, {'semestre': 'cuarto', 'nombre': 'Bioética y Legislación en Enfermería', 'prerreq': []}, {'semestre': 'cuarto', 'nombre': 'Metodología de la Investigación en Salud', 'prerreq': []}, {'semestre': 'quinto', 'nombre': 'Enfermería del Adulto y Adulto Mayor I', 'prerreq': ['Proceso de Atención de Enfermería']}, {'semestre': 'quinto', 'nombre': 'Enfermería Materno Infantil I', 'prerreq': ['Proceso de Atención de Enfermería']}, {'semestre': 'quinto', 'nombre': 'Investigación en Enfermería I', 'prerreq': ['Metodología de la Investigación en Salud']}, {'semestre': 'quinto', 'nombre': 'Gestión del Cuidado en Enfermería V', 'prerreq': ['Gestión del Cuidado en Enfermería IV']}, {'semestre': 'sexto', 'nombre': 'Enfermería del Adulto y Adulto Mayor II', 'prerreq': ['Enfermería del Adulto y Adulto Mayor I']}, {'semestre': 'sexto', 'nombre': 'Enfermería Materno Infantil II', 'prerreq': ['Enfermería Materno Infantil I']}, {'semestre': 'sexto', 'nombre': 'Investigación en Enfermería II', 'prerreq': ['Investigación en Enfermería I']}, {'semestre': 'sexto', 'nombre': 'Gestión del Cuidado en Enfermería VI', 'prerreq': ['Gestión del Cuidado en Enfermería V']}, {'semestre': 'séptimo', 'nombre': 'Enfermería en Salud Mental y Psiquiatría', 'prerreq': ['Gestión del Cuidado en Enfermería VI']}, {'semestre': 'séptimo', 'nombre': 'Enfermería en Situaciones de Urgencia y Desastre', 'prerreq': ['Gestión del Cuidado en Enfermería VI']}, {'semestre': 'séptimo', 'nombre': 'Gestión y Liderazgo en Enfermería', 'prerreq': ['Gestión del Cuidado en Enfermería VI']}, {'semestre': 'séptimo', 'nombre': 'Taller Integrador de Enfermería I', 'prerreq': ['Enfermería del Adulto y Adulto Mayor II', 'Enfermería Materno Infantil II']}, {'semestre': 'octavo', 'nombre': 'Internado Profesional de Enfermería I', 'prerreq': ['Taller Integrador de Enfermería I']}, {'semestre': 'octavo', 'nombre': 'Internado Profesional de Enfermería II', 'prerreq': ['Internado Profesional de Enfermería I']}, {'semestre': 'octavo', 'nombre': 'Taller Integrador de Enfermería II', 'prerreq': ['Taller Integrador de Enfermería I']}];

const semestersDiv = document.getElementById("semesters");
const resetBtn = document.getElementById("resetBtn");
const selectedCount = document.getElementById("selectedCount");

let state = JSON.parse(localStorage.getItem("mallaState")) || {}

function saveState() {
  localStorage.setItem("mallaState", JSON.stringify(state));
}

function updateCount() {
  const done = Object.values(state).filter(v => v === "done").length;
  selectedCount.textContent = `Seleccionados: ${done}`;
}

const semestres = {}
COURSES.forEach(c => {
  if (!semestres[c.semestre]) semestres[c.semestre] = []
  semestres[c.semestre].push(c)
})

function render() {
  semestersDiv.innerHTML = ""
  Object.entries(semestres).forEach(([semestre, cursos]) => {
    const card = document.createElement("div")
    card.className = "semester-card"
    card.innerHTML = `<h3>${semestre} 🩸</h3><div class='courses'></div>`
    const list = card.querySelector(".courses")

    cursos.forEach(curso => {
      const el = document.createElement("div")
      const key = curso.nombre
      const status = state[key] || "locked"

      const canUnlock = curso.prerreq.every(p => state[p] === "done") || curso.prerreq.length === 0
      const cssClass = status === "done" ? "done" : canUnlock ? "available" : "locked"

      el.className = `course ${cssClass}`
      el.textContent = curso.nombre
      el.addEventListener("click", () => {
        if (el.classList.contains("locked")) return;
        if (state[key] === "done") {
          state[key] = "available"
        } else {
          state[key] = "done"
        }
        saveState()
        render()
      })

      list.appendChild(el)
    })

    semestersDiv.appendChild(card)
  })
  updateCount()
}

resetBtn.addEventListener("click", () => {
  if (confirm("¿Seguro que quieres reiniciar la malla?")) {
    state = {}
    saveState()
    render()
  }
})

render()
