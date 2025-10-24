const malla = {
  "Primer semestre":[
    { nombre:"Fundamentos de Biología y Genética Humana" },
    { nombre:"Bases Químicas y Bioquímicas de la Vida" },
    { nombre:"Gestión del Cuidado en Enfermería I" },
    { nombre:"Educación en Enfermería" },
    { nombre:"Identidad Universitaria I" },
    { nombre:"Lengua Extranjera I" },
    { nombre:"Práctica Integrada en Enfermería I" }
  ],
  "Segundo semestre":[
    { nombre:"Lengua Extranjera II", prerequisitos:["Lengua Extranjera I"] },
    { nombre:"Identidad Universitaria II", prerequisitos:["Identidad Universitaria I"] },
    { nombre:"Gestión del Cuidado en Enfermería II", prerequisitos:["Gestión del Cuidado en Enfermería I"] },
    { nombre:"Matemáticas y Herramientas Informáticas para la Gestión en Salud", prerequisitos:["Educación en Enfermería"] },
    { nombre:"Práctica Integrada en Enfermería II", prerequisitos:["Práctica Integrada en Enfermería I"] },
    { nombre:"Morfología Micro y Macroscópica", prerequisitos:["Fundamentos de Biología y Genética Humana"] },
    { nombre:"Microbiología y Agentes Infecciosos", prerequisitos:["Bases Químicas y Bioquímicas de la Vida"] }
  ],
  "Tercer semestre":[
    { nombre:"Lengua Extranjera III", prerequisitos:["Lengua Extranjera II"] },
    { nombre:"Gestión del Cuidado en Enfermería III", prerequisitos:["Gestión del Cuidado en Enfermería II"] },
    { nombre:"Práctica Integrada en Enfermería III", prerequisitos:["Práctica Integrada en Enfermería II"] },
    { nombre:"Integrado Fisiología, Fisiopatología y Farmacología en Enfermería I", prerequisitos:["Morfología Micro y Macroscópica"] }
  ],
  "Cuarto semestre":[
    { nombre:"Lengua Extranjera IV", prerequisitos:["Lengua Extranjera III"] },
    { nombre:"Responsabilidad Social Universitaria" },
    { nombre:"Gestión del Cuidado en Enfermería IV", prerequisitos:["Gestión del Cuidado en Enfermería III","Práctica Integrada en Enfermería III"] },
    { nombre:"Enfermería en Salud Pública y Determinantes Sociales", prerequisitos:["Matemáticas y Herramientas Informáticas para la Gestión en Salud"] },
    { nombre:"Integrado Fisiología, Fisiopatología y Farmacología en Enfermería II", prerequisitos:["Integrado Fisiología, Fisiopatología y Farmacología en Enfermería I"] },
    { nombre:"Práctica Integrada en Enfermería IV", prerequisitos:["Práctica Integrada en Enfermería III","Gestión del Cuidado en Enfermería III"] }
  ],
  "Quinto semestre":[
    { nombre:"Ética y Bioética en Enfermería", prerequisitos:["Gestión del Cuidado en Enfermería IV"] },
    { nombre:"Gestión del Cuidado en Comunidades I", prerequisitos:["Enfermería en Salud Pública y Determinantes Sociales","Integrado Fisiología, Fisiopatología y Farmacología en Enfermería II"] },
    { nombre:"Gestión del Cuidado en el Adulto", prerequisitos:["Integrado Fisiología, Fisiopatología y Farmacología en Enfermería II","Gestión del Cuidado en Enfermería IV","Práctica Integrada en Enfermería IV"] },
    { nombre:"Gestión del Cuidado en la Persona Mayor", prerequisitos:["Integrado Fisiología, Fisiopatología y Farmacología en Enfermería II","Gestión del Cuidado en Enfermería IV","Práctica Integrada en Enfermería IV"] },
    { nombre:"Planificación Estratégica I", prerequisitos:["Gestión del Cuidado en Enfermería IV"] },
    { nombre:"Práctica Integrada en Enfermería V", prerequisitos:["Práctica Integrada en Enfermería IV","Enfermería en Salud Pública y Determinantes Sociales"] }
  ],
  "Sexto semestre":[
    { nombre:"Metodología de la Investigación", prerequisitos:["Ética y Bioética en Enfermería"] },
    { nombre:"Gestión del Cuidado en Comunidades II", prerequisitos:["Gestión del Cuidado en Comunidades I","Práctica Integrada en Enfermería V"] },
    { nombre:"Salud Ocupacional", prerequisitos:["Gestión del Cuidado en el Adulto"] },
    { nombre:"Planificación Estratégica II", prerequisitos:["Planificación Estratégica I"] },
    { nombre:"Práctica Integrada en Enfermería VI", prerequisitos:["Práctica Integrada en Enfermería V","Gestión del Cuidado en Comunidades I"] }
  ],
  "Séptimo semestre":[
    { nombre:"Seminario de investigación en Enfermería I", prerequisitos:["Metodología de la Investigación"] },
    { nombre:"Gestión del Cuidado en Comunidades III", prerequisitos:["Gestión del Cuidado en Comunidades II","Práctica Integrada en Enfermería VI"] },
    { nombre:"Gestión del Cuidado en la infancia y adolescencia I", prerequisitos:["Salud Ocupacional","Gestión del Cuidado en Comunidades II"] },
    { nombre:"Bienestar Profesional", prerequisitos:["Salud Ocupacional"] },
    { nombre:"Práctica Integrada en Enfermería VII", prerequisitos:["Práctica Integrada en Enfermería VI","Salud Ocupacional"] }
  ],
  "Octavo semestre":[
    { nombre:"Seminario de Investigación en Enfermería II", prerequisitos:["Seminario de investigación en Enfermería I"] },
    { nombre:"Gestión del Cuidado en la Infancia y Adolescencia II", prerequisitos:["Gestión del Cuidado en la Infancia y Adolescencia I","Práctica Integrada en Enfermería VII"] },
    { nombre:"Gestión del Cuidado en Urgencias", prerequisitos:["Gestión del Cuidado en la Infancia y Adolescencia I","Práctica Integrada en Enfermería VII"] },
    { nombre:"Gestión del Cuidado en Salud Mental y Psiquiatría", prerequisitos:["Gestión del Cuidado en la Infancia y Adolescencia I","Práctica Integrada en Enfermería VII"] },
    { nombre:"Gestión del Cuidado en Oncología y Cuidados Paliativos", prerequisitos:["Gestión del Cuidado en la Infancia y Adolescencia I","Gestión del Cuidado en Comunidades III","Práctica Integrada en Enfermería VII"] },
    { nombre:"Práctica Integrada en Enfermería VIII", prerequisitos:["Práctica Integrada en Enfermería VII","Gestión del Cuidado en la Infancia y Adolescencia I"] }
  ],
  "Noveno semestre":[
    { nombre:"Intervención de Enfermería en Salud Comunitaria (Opción A)", prerequisitos:["Aprobadas asignaturas de 1er a 8vo semestre inclusive"] },
    { nombre:"Enfermería en Salud Familiar (Opción A)", prerequisitos:["Aprobadas asignaturas de 1er a 8vo semestre inclusive"] },
    { nombre:"Práctica profesional en Enfermería Hospitalaria (Opción A)", prerequisitos:["Aprobadas asignaturas de 1er a 8vo semestre inclusive"] },
    { nombre:"Cuidados de Enfermería en Adulto Crítico (Opción B)", prerequisitos:["Aprobadas asignaturas de 1er a 8vo semestre inclusive"] },
    { nombre:"Enfermería en Unidades Quirúrgicas del Adulto (Opción B)", prerequisitos:["Aprobadas asignaturas de 1er a 8vo semestre inclusive"] },
    { nombre:"Práctica Profesional en Enfermería en Atención Primaria de Salud (Opción B)", prerequisitos:["Aprobadas asignaturas de 1er a 8vo semestre inclusive"] }
  ],
  "Décimo semestre":[
    { nombre:"Práctica Profesional en Enfermería en Atención Primaria de Salud (Opción A)", prerequisitos:["Intervención de Enfermería en Salud Comunitaria (Opción A)","Enfermería en Salud Familiar (Opción A)","Práctica profesional en Enfermería Hospitalaria (Opción A)"] },
    { nombre:"Práctica Profesional en Enfermería Hospitalaria (Opción B)", prerequisitos:["Cuidados de Enfermería en Adulto Crítico (Opción B)","Enfermería en Unidades Quirúrgicas del Adulto (Opción B)"] }
  ]
};

const aprobados = new Set();

function puedeDesbloquear(prerequisitos){
  return (prerequisitos||[]).every(p=>aprobados.has(p));
}

function actualizarEstadoRamos(){
  document.querySelectorAll('.ramo').forEach(div=>{
    const nombre = div.dataset.nombre;
    const prerequisitos = JSON.parse(div.dataset.prerequisitos||'[]');
    if(aprobados.has(nombre)){
      div.classList.remove('bloqueado');
      div.classList.add('aprobado');
    } else if(puedeDesbloquear(prerequisitos)){
      div.classList.remove('bloqueado');
      div.classList.remove('aprobado');
    } else {
      div.classList.add('bloqueado');
      div.classList.remove('aprobado');
    }
  });
}

function crearMalla(){
  const cont = document.getElementById("malla-container");
  cont.innerHTML="";
  for(const [semestre,ramos] of Object.entries(malla)){
    const divS = document.createElement("div");
    divS.className="semestre";
    divS.innerHTML=`<h2>${semestre}</h2>`;
    ramos.forEach(r=>{
      const divR = document.createElement("div");
      divR.className="ramo bloqueado";
      divR.textContent=r.nombre;
      divR.dataset.nombre=r.nombre;
      divR.dataset.prerequisitos=JSON.stringify(r.prerequisitos||[]);
      divR.addEventListener("click",()=>{
        if(puedeDesbloquear(r.prerequisitos)){
          if(aprobados.has(r.nombre)) aprobados.delete(r.nombre);
          else aprobados.add(r.nombre);
          actualizarEstadoRamos();
        } else alert("Aún no cumples con los prerrequisitos: "+r.nombre);
      });
      divS.appendChild(divR);
    });
    cont.appendChild(divS);
  }
  actualizarEstadoRamos();
  generarEmojisFondo();
}

document.addEventListener("DOMContentLoaded",crearMalla);

/* Función para crear emojis flotando en el fondo */
function generarEmojisFondo(){
  const emojis=["💉","🩸"];
  for(let i=0;i<30;i++){
    const span=document.createElement("span");
    span.className="emoji";
    span.textContent=emojis[Math.floor(Math.random()*emojis.length)];
    span.style.left=Math.random()*100+"vw";
    span.style.top=Math.random()*100+"vh";
    span.style.animationDuration=(5+Math.random()*10)+"s";
    span.style.fontSize=(16+Math.random()*24)+"px";
    document.body.appendChild(span);
  }
}
