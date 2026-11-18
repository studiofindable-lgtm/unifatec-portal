const fmtCpf = c => c.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
const $ = id => document.getElementById(id);

const ICON = {
  card:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="11" r="2.2"/><path d="M5.8 16.5c.6-1.6 1.8-2.3 3.2-2.3s2.6.7 3.2 2.3M15 9.5h3.5M15 13h3.5"/>',
  chart:'<path d="M4 19V5m0 14h16M8 15v-4m4 4V8m4 7v-6"/>',
  cal:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4m8-4v4M3 10h18"/>',
  wallet:'<rect x="2.5" y="6" width="19" height="13" rx="3"/><path d="M2.5 10.5h19M7 15h3"/>',
  book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19V5"/>',
  doc:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6"/>',
  check:'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chat:'<path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-5.5A8 8 0 1 1 21 12z"/>',
  flask:'<path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2.2h12.4a1.5 1.5 0 0 0 1.3-2.2L14 9V3M7.5 15h9"/>',
  brief:'<rect x="3" y="7" width="18" height="13" rx="3"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
  cap:'<path d="m2 9 10-5 10 5-10 5zM6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5"/>',
  refresh:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/>',
  shield:'<path d="M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  pin:'<path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  mega:'<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1zM16 8a5 5 0 0 1 0 8"/>',
  award:'<circle cx="12" cy="9" r="6"/><path d="m8.5 14 -1.5 7 5-3 5 3-1.5-7"/>'
};
const svg = k => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICON[k]}</svg>`;

/* catálogo da aba "Tudo": [nome, ícone, cor, ação] */
const CATS = [
  ["Acadêmico", [
    ["Carteirinha","card","c1","go:carteirinha"],
    ["Notas","chart","c2","sheet:notas"],
    ["Frequência","check","c6","sheet:faltas"],
    ["Horários","cal","c3","sheet:horario"],
    ["Calendário acadêmico","clock","c7","sheet:calendario"],
    ["Matriz curricular","cap","c4","soon"],
    ["Rematrícula","refresh","c5","soon"],
    ["Documentos","doc","c8","sheet:docs"]
  ]],
  ["Financeiro", [
    ["Mensalidades","wallet","c4","sheet:financeiro"],
    ["Boletos","doc","c3","sheet:financeiro"],
    ["Bolsas e descontos","award","c2","soon"]
  ]],
  ["Biomedicina", [
    ["Laboratórios","flask","c6","soon"],
    ["Estágio","brief","c7","soon"],
    ["Atividades complementares","check","c1","sheet:ativ"],
    ["TCC","book","c8","soon"]
  ]],
  ["Serviços", [
    ["Biblioteca","book","c2","sheet:biblioteca"],
    ["Requerimentos","doc","c5","soon"],
    ["Validar diploma","shield","c4","soon"],
    ["Ouvidoria","chat","c3","soon"],
    ["Mapa do campus","pin","c1","soon"],
    ["Mural de avisos","mega","c6","soon"]
  ]]
];

/* ===== preencher dados ===== */
const first = S.nome.split(" ")[0];
const initials = S.nome.split(" ").filter((w,i,a)=>i===0||i===a.length-1).map(w=>w[0]).join("").toUpperCase();
$("hname").textContent = first;
["av1","av2"].forEach(i=>{const a=$(i);a.textContent=initials;const im=new Image();im.alt=S.nome;im.onload=()=>{a.textContent="";a.appendChild(im)};im.src=FOTO_B64});
$("cPhoto").src=FOTO_B64;
$("sName").textContent=S.nome; $("sCurso").textContent=S.curso+" · "+S.grau;
$("sPer").textContent=S.periodo; $("sTurno").textContent=S.turno;
$("cName").textContent=S.nome; $("cCurso").textContent=S.curso.toUpperCase();
$("cRa").textContent=S.ra; $("cCpf").textContent=fmtCpf(S.cpf);
$("cPer").textContent=S.periodo; $("cTurno").textContent=S.turno;
$("cCampus").textContent=S.campus; $("cVal").textContent=S.validade;
$("pName").textContent=S.nome; $("pCurso").textContent=S.curso;
$("pData").innerHTML = [
  ["Matrícula (RA)",S.ra],["CPF",fmtCpf(S.cpf)],["Curso",S.curso+" ("+S.grau+")"],
  ["Período",S.periodo],["Turno",S.turno],["Campus",S.campus],["Ingresso",S.ingresso],["E-mail",S.email]
].map(([k,v])=>`<div class="kv"><span>${k}</span><b>${v}</b></div>`).join("");

const h = new Date().getHours();
$("greet").textContent = h<12?"Bom dia":h<18?"Boa tarde":"Boa noite";

/* ===== aulas de hoje ===== */
const HORARIO = {
  1:[["19:00","Hematologia Clínica","Lab. 3 · Prof. Marcos Teixeira"],["20:50","Bioquímica Clínica","Sala 204 · Profa. Ana Beatriz"]],
  2:[["19:00","Parasitologia Clínica","Lab. 1 · Profa. Camila Reis"],["20:50","Parasitologia Clínica","Lab. 1 · Profa. Camila Reis"]],
  3:[["19:00","Imunologia Clínica","Sala 207 · Prof. Rafael Lima"],["20:50","Microbiologia Clínica","Lab. 2 · Profa. Helena Duarte"]],
  4:[["19:00","Bioquímica Clínica","Lab. 4 · Profa. Ana Beatriz"],["20:50","Biossegurança e Ética","Sala 204 · Prof. Paulo Nunes"]],
  5:[["19:00","Microbiologia Clínica","Lab. 2 · Profa. Helena Duarte"],["20:50","Imunologia Clínica","Sala 207 · Prof. Rafael Lima"]]
};
const DIAS = {1:"Segunda",2:"Terça",3:"Quarta",4:"Quinta",5:"Sexta"};
const today = new Date().getDay();
const tl = HORARIO[today];
$("todayList").innerHTML = tl ? tl.map(([t,n,l])=>`<div class="row"><div class="time">${t}<small>hoje</small></div><div class="mid"><b>${n}</b><span>${l}</span></div><span class="pill blue">Presencial</span></div>`).join("")
  : `<div class="card" style="text-align:center;color:var(--muted);font-size:14px">Sem aulas hoje. Bom descanso! 🎉</div>`;

/* ===== aba Tudo ===== */
$("tudoBody").innerHTML = CATS.map(([g,items])=>`
  <div class="grp" data-g>${g}</div>
  <div class="grid" data-grid>${items.map(([n,i,c,a])=>`<button class="tile" data-n="${n.toLowerCase()}" onclick="act('${a}','${n}')"><span class="ic ${c}">${svg(i)}</span>${n}</button>`).join("")}</div>`).join("");
$("q").addEventListener("input",e=>{
  const v=e.target.value.trim().toLowerCase(); let any=false;
  document.querySelectorAll("#tudoBody .tile").forEach(t=>{const m=!v||t.dataset.n.includes(v);t.classList.toggle("hide",!m);any=any||m});
  document.querySelectorAll("#tudoBody [data-grid]").forEach(g=>{const vis=g.querySelector(".tile:not(.hide)");g.style.display=vis?"":"none";g.previousElementSibling.style.display=vis?"":"none"});
  $("empty").style.display=any?"none":"block";
});
function act(a,n){
  if(a.startsWith("go:")) go(a.slice(3));
  else if(a.startsWith("sheet:")) openSheet(a.slice(6));
  else toast(n+" — em desenvolvimento");
}

/* ===== navegação ===== */
function go(v){
  document.querySelectorAll(".view").forEach(e=>e.classList.toggle("on",e.id==="v-"+v));
  document.querySelectorAll(".tab").forEach(e=>e.classList.toggle("on",e.dataset.t===v));
  $("top").style.display = v==="carteirinha"?"none":"";
  if(v==="carteirinha"){ document.querySelector(".cw").style.paddingTop="calc(22px + env(safe-area-inset-top,0px))"; }
  window.scrollTo({top:0});
  if(location.hash!=="#"+v) history.replaceState(null,"","#"+v);
}

/* ===== sheets ===== */
const SHEETS = {
  notas:["Notas · 2026/2",()=>{
    const d=[["Hematologia Clínica",8.5,7.8],["Bioquímica Clínica",7.2,8.0],["Parasitologia Clínica",9.1,8.6],["Imunologia Clínica",7.9,null],["Microbiologia Clínica",8.3,8.1],["Biossegurança e Ética",9.5,9.0]];
    return `<div class="list">${d.map(([n,a,b])=>{const m=b==null?a:(a+b)/2;const cls=m>=7?"ok":"warn";return `<div class="row"><div class="mid"><b>${n}</b><span>N1 ${a.toFixed(1)} · N2 ${b==null?"—":b.toFixed(1)}</span></div><span class="pill ${cls}">${m.toFixed(1)}</span></div>`}).join("")}</div>`}],
  faltas:["Frequência",()=>{
    const d=[["Hematologia Clínica",80,3],["Bioquímica Clínica",80,5],["Parasitologia Clínica",80,2],["Imunologia Clínica",60,4],["Microbiologia Clínica",80,1],["Biossegurança e Ética",40,0]];
    return `<div class="list">${d.map(([n,t,f])=>{const p=Math.round(100-f/t*100);return `<div class="row" style="display:block"><div style="display:flex;justify-content:space-between"><b style="font-size:14px">${n}</b><span class="pill ok">${p}%</span></div><div style="font-size:12.5px;color:var(--muted);margin-top:3px">${f} falta(s) de ${t} aulas</div><div class="bar"><i style="width:${p}%"></i></div></div>`}).join("")}</div>`}],
  horario:["Horário semanal",()=>Object.entries(HORARIO).map(([d,a])=>`<div class="grp" style="margin-top:8px">${DIAS[d]}</div><div class="list">${a.map(([t,n,l])=>`<div class="row"><div class="time">${t}</div><div class="mid"><b>${n}</b><span>${l}</span></div></div>`).join("")}</div>`).join("")],
  financeiro:["Financeiro",()=>{
    const d=[["Novembro/2026","10/11","Pago","ok"],["Dezembro/2026","10/12","A vencer","warn"],["Janeiro/2027","10/01","Em breve","blue"]];
    return `<div class="card" style="margin-bottom:12px"><span style="font-size:12px;color:var(--muted);font-weight:600">Situação</span><div style="font-size:20px;font-weight:800;margin-top:2px;color:var(--ok)">Em dia ✔</div></div><div class="list">${d.map(([m,v,s,c])=>`<div class="row"><div class="mid"><b>Mensalidade ${m}</b><span>Vencimento ${v}</span></div><span class="pill ${c}">${s}</span></div>`).join("")}</div>`}],
  calendario:["Calendário acadêmico",()=>{
    const d=[["24/11","Avaliação N2 – Hematologia Clínica"],["02/12","Entrega de relatórios de laboratório"],["10/12","Vencimento da mensalidade"],["18/12","Fim do prazo de rematrícula"],["19/12","Encerramento do semestre"],["02/02","Início das aulas 2027/1"]];
    return `<div class="list">${d.map(([a,b])=>`<div class="row"><div class="time">${a}</div><div class="mid"><b>${b}</b></div></div>`).join("")}</div>`}],
  docs:["Documentos",()=>`<div class="list">${["Declaração de matrícula","Histórico escolar parcial","Comprovante de pagamento","Atestado de frequência"].map(n=>`<div class="row"><div class="mid"><b>${n}</b><span>PDF · gerado ao solicitar</span></div><button class="pill blue" style="border:0;cursor:pointer" onclick="toast('Protótipo: geração de PDF em breve')">Solicitar</button></div>`).join("")}</div>`],
  ativ:["Atividades complementares",()=>`<div class="card"><b style="font-size:14px">120h de 200h concluídas</b><div class="bar"><i style="width:60%"></i></div><p style="margin:10px 0 0;font-size:12.5px;color:var(--muted)">Envie certificados de eventos, monitorias e cursos para validação.</p></div>`],
  biblioteca:["Biblioteca",()=>`<div class="list">${[["Hematologia: Fundamentos e Prática","Devolver até 02/12","warn"],["Bioquímica Clínica","Devolver até 09/12","ok"]].map(([n,d,c])=>`<div class="row"><div class="mid"><b>${n}</b><span>${d}</span></div><span class="pill ${c}">Emprestado</span></div>`).join("")}</div>`]
};
function openSheet(k){
  const [t,fn]=SHEETS[k]; $("shT").textContent=t; $("shB").innerHTML=fn();
  $("scrim").classList.add("on"); $("sheet").classList.add("on"); document.body.style.overflow="hidden";
}
function closeSheet(){ $("scrim").classList.remove("on"); $("sheet").classList.remove("on"); document.body.style.overflow=""; }

/* ===== toast ===== */
let tt; function toast(m){const t=$("toast");t.textContent=m;t.classList.add("on");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("on"),2200)}

/* ===== carteirinha: QR + relógio ===== */
try{
  new QRCode($("qr"),{text:"UNIFATEC-DEMO|RA:"+S.ra+"|VAL:"+S.validade,width:150,height:150,colorDark:"#1b2250",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.M});
}catch(e){ $("qr").innerHTML='<div style="width:150px;height:150px;display:grid;place-items:center;color:#8a90aa;font-size:12px">QR indisponível offline</div>'; }
function tick(){
  const d=new Date(), p=n=>String(n).padStart(2,"0");
  $("clock").firstChild.textContent=`${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
  $("cdate").textContent=d.toLocaleDateString("pt-BR",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});
}
tick(); setInterval(tick,1000);
async function shareCard(){
  const txt=`Carteirinha Unifatec (demo) — ${S.nome} · ${S.curso} · RA ${S.ra}`;
  if(navigator.share){ try{await navigator.share({title:"Carteirinha Unifatec",text:txt});}catch(e){} }
  else { try{await navigator.clipboard.writeText(txt);toast("Dados copiados");}catch(e){toast("Compartilhamento indisponível");} }
}

/* rota inicial pelo hash */
const ok=["home","tudo","carteirinha","perfil"], hv=location.hash.slice(1);
go(ok.includes(hv)?hv:"home");
window.addEventListener("hashchange",()=>{const v=location.hash.slice(1);if(ok.includes(v))go(v)});
