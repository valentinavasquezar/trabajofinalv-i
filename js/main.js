// Menú móvil
const toggle=document.querySelector('.nav-toggle'), nav=document.querySelector('.nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded',open);
});}

// Cuenta regresiva (hora de Mongolia, UTC+8)
const cd=document.getElementById('countdown');
if(cd){
  const target=new Date('2027-08-26T00:00:00+08:00').getTime();
  const set=(k,v)=>{const el=cd.querySelector('[data-'+k+']');if(el)el.textContent=String(v).padStart(2,'0')};
  const tick=()=>{
    const d=Math.max(0,target-Date.now());
    set('d',Math.floor(d/864e5));set('h',Math.floor(d%864e5/36e5));
    set('m',Math.floor(d%36e5/6e4));set('s',Math.floor(d%6e4/1e3));
  };
  tick();setInterval(tick,1000);
}

// Filtro de galería
const btns=document.querySelectorAll('.filters button');
btns.forEach(b=>b.addEventListener('click',()=>{
  btns.forEach(x=>x.classList.remove('active'));b.classList.add('active');
  const f=b.dataset.filter;
  document.querySelectorAll('.grid figure').forEach(fig=>{
    fig.hidden=!(f==='all'||fig.dataset.cat===f);
  });
}));
