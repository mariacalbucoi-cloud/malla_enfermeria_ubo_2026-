// Datos importados desde la malla (generado desde el archivo)
const COURSES = [
  {
    "id": 1,
    "name": "Fundamentos de Biología y Genética Humana",
    "semester": "primero",
    "prereqs": []
  },
  {
    "id": 2,
    "name": "Bases Químicas y Bioquímicas de la Vida",
    "semester": "primero",
    "prereqs": []
  },
  {
    "id": 3,
    "name": "Gestión del Cuidado en Enfermería I",
    "semester": "primero",
    "prereqs": []
  },
  {
    "id": 4,
    "name": "Educación en Enfermería",
    "semester": "primero",
    "prereqs": []
  },
  {
    "id": 5,
    "name": "Identidad Universitaria I",
    "semester": "primero",
    "prereqs": []
  },
  {
    "id": 6,
    "name": "Lengua Extranjera I",
    "semester": "primero",
    "prereqs": []
  },
  {
    "id": 7,
    "name": "Práctica Integrada en Enfermería I",
    "semester": "primero",
    "prereqs": []
  },
  {
    "id": 8,
    "name": "Lengua Extranjera II",
    "semester": "Segundo",
    "prereqs": [
      "Lengua Extranjera I"
    ]
  },
  {
    "id": 9,
    "name": "Identidad Universitaria II",
    "semester": "Segundo",
    "prereqs": [
      "Identidad Universitaria I"
    ]
  },
  {
    "id": 10,
    "name": "Bioestadística",
    "semester": "Segundo",
    "prereqs": [
      "Fundamentos de Biología y Genética Humana",
      "Bases Químicas y Bioquímicas de la Vida"
    ]
  },
  {
    "id": 11,
    "name": "Salud Pública",
    "semester": "Segundo",
    "prereqs": []
  },
  {
    "id": 12,
    "name": "Anatomía y Fisiología Humana I",
    "semester": "Segundo",
    "prereqs": []
  },
  {
    "id": 13,
    "name": "Gestión del Cuidado en Enfermería II",
    "semester": "Segundo",
    "prereqs": [
      "Gestión del Cuidado en Enfermería I"
    ]
  },
  {
    "id": 14,
    "name": "Práctica Integrada en Enfermería II",
    "semester": "Segundo",
    "prereqs": [
      "Práctica Integrada en Enfermería I"
    ]
  },
  {
    "id": 15,
    "name": "Ética y Legislación en Salud",
    "semester": "Tercero",
    "prereqs": []
  },
  {
    "id": 16,
    "name": "Farmacología I",
    "semester": "Tercero",
    "prereqs": [
      "Bases Químicas y Bioquímicas de la Vida"
    ]
  },
  {
    "id": 17,
    "name": "Anatomía y Fisiología Humana II",
    "semester": "Tercero",
    "prereqs": [
      "Anatomía y Fisiología Humana I"
    ]
  },
  {
    "id": 18,
    "name": "Microbiología y Parasitología",
    "semester": "Tercero",
    "prereqs": [
      "Fundamentos de Biología y Genética Humana"
    ]
  },
  {
    "id": 19,
    "name": "Cuidado de Salud Materno-Infantil",
    "semester": "Tercero",
    "prereqs": [
      "Gestión del Cuidado en Enfermería I",
      "Gestión del Cuidado en Enfermería II"
    ]
  },
  {
    "id": 20,
    "name": "Práctica Integrada en Enfermería III",
    "semester": "Tercero",
    "prereqs": [
      "Práctica Integrada en Enfermería II"
    ]
  },
  {
    "id": 21,
    "name": "Nutrición y Dietética",
    "semester": "Cuarto",
    "prereqs": []
  },
  {
    "id": 22,
    "name": "Farmacología II",
    "semester": "Cuarto",
    "prereqs": [
      "Farmacología I"
    ]
  },
  {
    "id": 23,
    "name": "Cuidado en Salud del Adulto I",
    "semester": "Cuarto",
    "prereqs": [
      "Anatomía y Fisiología Humana II",
      "Microbiología y Parasitología"
    ]
  },
  {
    "id": 24,
    "name": "Salud Mental y Psiquiatría",
    "semester": "Cuarto",
    "prereqs": []
  },
  {
    "id": 25,
    "name": "Investigación en Enfermería I",
    "semester": "Cuarto",
    "prereqs": [
      "Bioestadística"
    ]
  },
  {
    "id": 26,
    "name": "Práctica Integrada en Enfermería IV",
    "semester": "Cuarto",
    "prereqs": [
      "Práctica Integrada en Enfermería III"
    ]
  },
  {
    "id": 27,
    "name": "Cuidado en Salud del Adulto II",
    "semester": "Quinto",
    "prereqs": [
      "Cuidado en Salud del Adulto I"
    ]
  },
  {
    "id": 28,
    "name": "Urgencias y Trauma",
    "semester": "Quinto",
    "prereqs": []
  },
  {
    "id": 29,
    "name": "Cuidado en Salud del Adulto III",
    "semester": "Quinto",
    "prereqs": [
      "Cuidado en Salud del Adulto II"
    ]
  },
  {
    "id": 30,
    "name": "Gestión del Cuidado Comunitario",
    "semester": "Quinto",
    "prereqs": [
      "Salud Pública"
    ]
  },
  {
    "id": 31,
    "name": "Investigación en Enfermería II",
    "semester": "Quinto",
    "prereqs": [
      "Investigación en Enfermería I"
    ]
  },
  {
    "id": 32,
    "name": "Práctica Integrada en Enfermería V",
    "semester": "Quinto",
    "prereqs": [
      "Práctica Integrada en Enfermería IV"
    ]
  },
  {
    "id": 33,
    "name": "Geriatría y Gerontología",
    "semester": "Sexto",
    "prereqs": []
  },
  {
    "id": 34,
    "name": "Cuidado en Salud Materno-Infantil II",
    "semester": "Sexto",
    "prereqs": [
      "Cuidado de Salud Materno-Infantil"
    ]
  },
  {
    "id": 35,
    "name": "Cuidado en Salud Mental Avanzado",
    "semester": "Sexto",
    "prereqs": [
      "Salud Mental y Psiquiatría"
    ]
  },
  {
    "id": 36,
    "name": "Epidemiología",
    "semester": "Sexto",
    "prereqs": [
      "Bioestadística",
      "Salud Pública"
    ]
  },
  {
    "id": 37,
    "name": "Bioética aplicada",
    "semester": "Sexto",
    "prereqs": [
      "Ética y Legislación en Salud"
    ]
  },
  {
    "id": 38,
    "name": "Práctica Integrada en Enfermería VI",
    "semester": "Sexto",
    "prereqs": [
      "Práctica Integrada en Enfermería V"
    ]
  },
  {
    "id": 39,
    "name": "Salud Ocupacional",
    "semester": "Séptimo",
    "prereqs": []
  },
  {
    "id": 40,
    "name": "Administración en Salud",
    "semester": "Séptimo",
    "prereqs": [
      "Gestión del Cuidado en Enfermería II"
    ]
  },
  {
    "id": 41,
    "name": "Taller de Habilidades Clínicas",
    "semester": "Séptimo",
    "prereqs": []
  },
  {
    "id": 42,
    "name": "Investigación en Enfermería III",
    "semester": "Séptimo",
    "prereqs": [
      "Investigación en Enfermería II"
    ]
  },
  {
    "id": 43,
    "name": "Salud Familiar y Comunitaria Avanzada",
    "semester": "Octavo",
    "prereqs": [
      "Gestión del Cuidado Comunitario",
      "Salud Pública"
    ]
  },
  {
    "id": 44,
    "name": "Seminario de Titulación I",
    "semester": "Octavo",
    "prereqs": [
      "Investigación en Enfermería III"
    ]
  },
  {
    "id": 45,
    "name": "Práctica Profesional I",
    "semester": "Octavo",
    "prereqs": [
      "Práctica Integrada en Enfermería VI"
    ]
  },
  {
    "id": 46,
    "name": "Cuidados Paliativos",
    "semester": "Noveno",
    "prereqs": []
  },
  {
    "id": 47,
    "name": "Gestión de Calidad en Salud",
    "semester": "Noveno",
    "prereqs": [
      "Administración en Salud"
    ]
  },
  {
    "id": 48,
    "name": "Seminario de Titulación II",
    "semester": "Noveno",
    "prereqs": [
      "Seminario de Titulación I"
    ]
  },
  {
    "id": 49,
    "name": "Práctica Profesional II",
    "semester": "Noveno",
    "prereqs": [
      "Práctica Profesional I"
    ]
  },
  {
    "id": 50,
    "name": "Trabajo de Investigación Aplicada",
    "semester": "Décimo",
    "prereqs": [
      "Seminario de Titulación II"
    ]
  },
  {
    "id": 51,
    "name": "Ética Profesional Avanzada",
    "semester": "Décimo",
    "prereqs": [
      "Bioética aplicada"
    ]
  },
  {
    "id": 52,
    "name": "Práctica Profesional III",
    "semester": "Décimo",
    "prereqs": [
      "Práctica Profesional II"
    ]
  },
  {
    "id": 53,
    "name": "Optativa I",
    "semester": "Décimo",
    "prereqs": []
  },
  {
    "id": 54,
    "name": "Optativa II",
    "semester": "Décimo",
    "prereqs": []
  },
  {
    "id": 55,
    "name": "Simulación Clínica Avanzada",
    "semester": "Sexto",
    "prereqs": [
      "Taller de Habilidades Clínicas"
    ]
  },
  {
    "id": 56,
    "name": "Inmunología",
    "semester": "Tercero",
    "prereqs": [
      "Fundamentos de Biología y Genética Humana"
    ]
  },
  {
    "id": 57,
    "name": "Comunicación Terapéutica",
    "semester": "Segundo",
    "prereqs": []
  },
  {
    "id": 58,
    "name": "Promoción de la Salud",
    "semester": "Cuarto",
    "prereqs": [
      "Salud Pública"
    ]
  },
  {
    "id": 59,
    "name": "Economía de la Salud",
    "semester": "Séptimo",
    "prereqs": [
      "Administración en Salud"
    ]
  },
  {
    "id": 60,
    "name": "Metodologías de la Enseñanza en Salud",
    "semester": "Cuarto",
    "prereqs": [
      "Educación en Enfermería"
    ]
  },
  {
    "id": 61,
    "name": "Salud Global",
    "semester": "Octavo",
    "prereqs": [
      "Epidemiología"
    ]
  },
  {
    "id": 62,
    "name": "Atención Primaria Avanzada",
    "semester": "Noveno",
    "prereqs": [
      "Salud Familiar y Comunitaria Avanzada"
    ]
  },
  {
    "id": 63,
    "name": "Políticas de Salud",
    "semester": "Noveno",
    "prereqs": [
      "Administración en Salud"
    ]
  },
  {
    "id": 64,
    "name": "Gestión de Recursos Humanos en Salud",
    "semester": "Décimo",
    "prereqs": [
      "Administración en Salud"
    ]
  },
  {
    "id": 65,
    "name": "Evaluación de Tecnologías en Salud",
    "semester": "Décimo",
    "prereqs": [
      "Investigación en Enfermería III"
    ]
  },
  {
    "id": 66,
    "name": "Educación para la Salud Comunitaria",
    "semester": "Quinto",
    "prereqs": [
      "Promoción de la Salud"
    ]
  },
  {
    "id": 67,
    "name": "Gestión de Riesgos en Salud",
    "semester": "Séptimo",
    "prereqs": [
      "Urgencias y Trauma"
    ]
  },
  {
    "id": 68,
    "name": "Terapia de Reemplazo y Soporte",
    "semester": "Quinto",
    "prereqs": [
      "Cuidado en Salud del Adulto I"
    ]
  },
  {
    "id": 69,
    "name": "Enfermería Forense",
    "semester": "Octavo",
    "prereqs": []
  },
  {
    "id": 70,
    "name": "Simulación y Evaluación de Competencias",
    "semester": "Noveno",
    "prereqs": [
      "Simulación Clínica Avanzada"
    ]
  },
  {
    "id": 71,
    "name": "Residencia Clínica",
    "semester": "Décimo",
    "prereqs": [
      "Práctica Profesional III"
    ]
  },
  {
    "id": 72,
    "name": "Seminario de Emprendimiento en Salud",
    "semester": "Décimo",
    "prereqs": []
  }
];

// State
let completed = new Set();
let available = new Set();

// Helpers (case-insensitive match)
function normalize(s){ return String(s||'').trim().toLowerCase(); }

// Build mapping name->id for prereq resolution
const nameToId = {}
COURSES.forEach(c=>nameToId[normalize(c.name)] = c.id);

// Determine semesters order (appearance order)
const semestersOrder = [...new Map(COURSES.map(c=>[c.semester, c.semester])).keys()];

// Utility: get course object by id
function getCourseById(id){ return COURSES.find(c=>c.id===id); }

function arePrereqsMet(course){
  if(!course.prereqs || course.prereqs.length===0) return true;
  for(const p of course.prereqs){
    const pid = nameToId[normalize(p)];
    if(!pid) return false; // prereq not found -> treat as unmet
    if(!completed.has(pid)) return false;
  }
  return true;
}

function computeAvailability(){
  available.clear();
  for(const c of COURSES){
    if(arePrereqsMet(c)) available.add(c.id);
  }
}

function render(){
  computeAvailability();
  const container = document.getElementById('semesters');
  container.innerHTML = '';

  for(const sem of semestersOrder){
    const card = document.createElement('div');
    card.className = 'semester-card';
    const h = document.createElement('h3'); h.textContent = sem;
    const list = document.createElement('div'); list.className = 'courses';

    const courses = COURSES.filter(c=>c.semester===sem);
    for(const c of courses){
      const item = document.createElement('div');
      item.className = 'course';
      item.dataset.id = c.id;
      const name = document.createElement('div');
      name.className = 'name'; name.textContent = c.name;
      item.appendChild(name);

      // status classes
      if(completed.has(c.id)){
        item.classList.add('done');
      } else if(available.has(c.id)){
        item.classList.add('available');
      } else {
        item.classList.add('locked');
        const lock = document.createElement('div');
        lock.className = 'lock'; lock.textContent = '🔒';
        item.appendChild(lock);
      }

      // click handler
      item.addEventListener('click', (ev)=>{
        if(!available.has(c.id) && !completed.has(c.id)) return; // locked
        if(completed.has(c.id)){
          completed.delete(c.id);
        } else {
          completed.add(c.id);
        }
        updateSelectedCount();
        render();
      });

      list.appendChild(item);
    }

    card.appendChild(h);
    card.appendChild(list);
    container.appendChild(card);
  }
}

function updateSelectedCount(){
  document.getElementById('selectedCount').textContent = 'Seleccionados: ' + completed.size;
}

// Controls
document.getElementById('resetBtn').addEventListener('click', ()=>{
  if(!confirm('¿Reiniciar todas las selecciones?')) return;
  completed = new Set();
  render();
  updateSelectedCount();
});

// Initial render
computeAvailability();
render();
updateSelectedCount();
