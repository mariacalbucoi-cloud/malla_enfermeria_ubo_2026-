// --- Malla completa actualizada ---
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
  ],
  "Noveno semestre": [
    { nombre: "Intervención de Enfermería en Salud Comunitaria (Opción A)", prerrequisitos: ["Todas las asignaturas anteriores"] },
    { nombre: "Enfermería en Salud Familiar (Opción A)", prerrequisitos: ["Todas las asignaturas anteriores"] },
    { nombre: "Práctica Profesional en Enfermería Hospitalaria (Opción A)", prerrequisitos: ["Todas las asignaturas anteriores"] }
  ],
  "Décimo semestre": [
    { nombre: "Práctica Profesional en Enfermería en Atención Primaria de Salud (Opción A)", prerrequisitos: ["Intervención de Enfermería en Salud Comunitaria (Opción A)","Enfermería en Salud Familiar (Opción A)"] },
    { nombre: "Práctica Profesional en Enfermería Hospitalaria (Opción B)", prerrequisitos: ["Cuidados de Enfermería en Adulto Crítico (Opción B)","Enfermería en Unidades Quirúrgicas del Adulto (Opción B)"] }
  ]
};

// --- Fondo de jeringas ---
for(let i=0;i<20;i++){
  const s=document.createElement('div');
  s.className='syringe';
  s.textContent='💉';
  s.style.left=Math.random()*window.innerWidth+'px';
  s.style.animationDelay=(Math.random()*15)+'s';
  s.style.fontSize=(16+Math.random()*24)+'px';
  document.body.appendChild(s);
}

const aprobados = new Set();

function puedeDesbloquear(prerequisitos){
  return (prerequisitos || []).every(r=>aprobados.has(r) || r==="Todas las asignaturas anteriores");
}

function actualizarEstadoRamos(){
  document.querySelectorAll('.ramo').forEach(div=>{
    const nombre=div.dataset.nombre;
    const prerequisitos=JSON.parse(div.dataset.prerequisitos || '[]');
    if(aprobados.has(nombre)){
      div.classList.add('aprobado');
      div.classList.remove('bloqueado');
      div.classList.remove('disponible');
    }else if(puedeDesbloquear(prerequisitos)){
      div.classList.add('disponible');
      div.classList.remove('bloqueado');
      div.classList.remove('aprobado');
    }else{
      div.classList.add('bloqueado');
      div.classList.remove('aprobado');
      div.classList.remove('disponible');
    }
  });
}

function crearMallaInteractiva(){
  const cont=document.getElementById('malla-container');
  cont.innerHTML='';
  for(const [semestre,ramos] of Object.entries(malla)){
    const divS=document.createElement('div');
    divS.className='semestre';
    divS.innerHTML=`<h2>${semestre}</h2>`;
    ramos.forEach(r=>{
      const divR=document.createElement('div');
      divR.className='ramo bloqueado';
      divR.textContent=r.nombre;
      divR.dataset.nombre=r.nombre;
      divR.dataset.prerequisitos=JSON.stringify(r.prerrequisitos||[]);
      divR.addEventListener('click',()=>{
        if(puedeDesbloquear(r.prerrequisitos)){
          aprobados.has(r.nombre)?aprobados.delete(r.nombre):aprobados.add(r.nombre);
          actualizarEstadoRamos();
        }else{
          alert("Aún no cumples los prerrequisitos de: "+r.nombre);
        }
      });
      divS.appendChild(divR);
    });
    cont.appendChild(divS);
  }
  actualizarEstadoRamos();
}

document.addEventListener('DOMContentLoaded',crearMallaInteractiva);

