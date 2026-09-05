(()=>{document.querySelectorAll('video').forEach(v=>v.addEventListener('play',()=>document.querySelectorAll('video').forEach(o=>{if(o!==v)o.pause()})));const dialog=document.getElementById('image-viewer');if(!dialog)return;document.querySelectorAll('.zoom-image').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const stage=dialog.querySelector('.viewer-stage');stage.replaceChildren();const img=document.createElement('img');img.src=a.href;img.alt=a.querySelector('img').alt;if(a.dataset.crop==='poster'){const wrap=document.createElement('div');wrap.className='poster-crop';wrap.append(img);stage.append(wrap)}else stage.append(img);dialog.querySelector('.viewer-caption').textContent=a.closest('figure').querySelector('figcaption')?.textContent||'';dialog.showModal()}));dialog.querySelector('.viewer-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}})})();

// Mobile menus progressively enhance the existing, usable navigation.
(()=>{
 const header=document.querySelector('header'), nav=header?.querySelector('nav');
 if(header&&nav){
  const toggle=document.createElement('button');toggle.type='button';toggle.className='menu-toggle';toggle.textContent='菜单 +';nav.id='main-menu';toggle.setAttribute('aria-controls',nav.id);toggle.setAttribute('aria-expanded','false');header.insertBefore(toggle,nav);header.classList.add('mobile-ready');
  const close=()=>{header.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false');toggle.textContent='菜单 +'};
  toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';header.classList.toggle('menu-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'收起 −':'菜单 +'});
  nav.addEventListener('click',close);document.addEventListener('click',e=>{if(!header.contains(e.target))close()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&header.classList.contains('menu-open')){close();toggle.focus()}});
  matchMedia('(min-width:761px)').addEventListener('change',close);
 }
 const chapters=document.querySelector('.chapter-nav');
 if(chapters){
  const toggle=document.createElement('button');toggle.type='button';toggle.className='chapter-toggle';toggle.setAttribute('aria-expanded','false');const current=chapters.querySelector('[aria-current]')?.textContent.trim()||'案例章节';
  const label=document.createElement('span'),hint=document.createElement('span');label.textContent=current;hint.textContent='全部章节 +';toggle.append(label,hint);chapters.prepend(toggle);chapters.classList.add('mobile-ready');
  const close=()=>{chapters.classList.remove('chapters-open');toggle.setAttribute('aria-expanded','false');hint.textContent='全部章节 +'};
  toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';chapters.classList.toggle('chapters-open',open);toggle.setAttribute('aria-expanded',String(open));hint.textContent=open?'收起 −':'全部章节 +'});
  chapters.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('click',e=>{if(!chapters.contains(e.target))close()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&chapters.classList.contains('chapters-open')){close();toggle.focus()}});matchMedia('(min-width:761px)').addEventListener('change',close);
 }
 document.querySelectorAll('.table-wrap').forEach(t=>{t.tabIndex=0;t.setAttribute('role','region');t.setAttribute('aria-label','物料管理表，可横向滑动查看')});
 document.querySelectorAll('video').forEach(v=>{v.setAttribute('playsinline','');v.preload='metadata'});
})();
