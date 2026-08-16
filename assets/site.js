document.addEventListener('keydown',e=>{if(e.key==='Escape'){const m=document.getElementById('mnav');if(m)m.classList.remove('open')}});
document.addEventListener('DOMContentLoaded',()=>{const m=document.getElementById('certificateModal');if(!m)return;const img=document.getElementById('certificateModalImage'),title=document.getElementById('certificateModalTitle'),name=document.getElementById('certificateModalName'),date=document.getElementById('certificateModalDate'),loc=document.getElementById('certificateModalLocation'),role=document.getElementById('certificateModalRole'),roleDetail=document.getElementById('certificateModalRoleDetail'),website=document.getElementById('certificateModalWebsite');function openC(c){img.src=c.dataset.full;img.alt=`${c.dataset.acronym} reviewer certificate`;title.textContent=c.dataset.acronym;name.textContent=c.dataset.name;date.textContent=c.dataset.date;loc.textContent=c.dataset.location;role.textContent=c.dataset.role;roleDetail.textContent=c.dataset.role;website.href=c.dataset.url||'#';website.style.display=c.dataset.url?'inline-block':'none';m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.classList.add('modal-open')}function closeC(){m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');img.src=''}document.querySelectorAll('.review-card').forEach(c=>c.querySelector('.review-open').addEventListener('click',()=>openC(c)));m.querySelectorAll('[data-modal-close]').forEach(e=>e.addEventListener('click',closeC));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&m.classList.contains('open'))closeC()})});

document.addEventListener('DOMContentLoaded',()=>{
 const m=document.getElementById('judgeModal');if(!m)return;
 const img=document.getElementById('judgeModalImage'),title=document.getElementById('judgeModalTitle'),sub=document.getElementById('judgeModalSubtitle'),detail=document.getElementById('judgeModalDetail');
 function openJ(el){img.src=el.dataset.judgeImage;img.alt=el.dataset.judgeTitle||'Judging evidence';title.textContent=el.dataset.judgeTitle||'';sub.textContent=el.dataset.judgeSubtitle||'';detail.textContent=el.dataset.judgeDetail||'';m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.classList.add('modal-open')}
 function closeJ(){m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');img.src=''}
 document.querySelectorAll('[data-judge-image]').forEach(el=>el.addEventListener('click',()=>openJ(el)));
 m.querySelectorAll('[data-judge-close]').forEach(el=>el.addEventListener('click',closeJ));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&m.classList.contains('open'))closeJ()});
});

document.addEventListener('DOMContentLoaded',()=>{const m=document.getElementById('keynoteModal');if(!m)return;const i=document.getElementById('keynoteModalImage'),t=document.getElementById('keynoteModalTitle'),s=document.getElementById('keynoteModalSubtitle');function o(e){i.src=e.dataset.keynoteImage;t.textContent=e.dataset.keynoteTitle||'';s.textContent=e.dataset.keynoteSubtitle||'';m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.classList.add('modal-open')}function c(){m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');i.src=''}document.querySelectorAll('[data-keynote-image]').forEach(e=>e.addEventListener('click',()=>o(e)));m.querySelectorAll('[data-keynote-close]').forEach(e=>e.addEventListener('click',c));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&m.classList.contains('open'))c()})});


document.addEventListener('DOMContentLoaded',()=>{
  function wireEvidenceModal(modalId,imageId,titleId,subtitleId,dataPrefix,closeAttr){
    const m=document.getElementById(modalId); if(!m)return;
    const img=document.getElementById(imageId), title=document.getElementById(titleId), sub=document.getElementById(subtitleId);
    const imgKey=`${dataPrefix}Image`, titleKey=`${dataPrefix}Title`, subKey=`${dataPrefix}Subtitle`;
    function openE(el){img.src=el.dataset[imgKey];img.alt=el.dataset[titleKey]||'Evidence';title.textContent=el.dataset[titleKey]||'';sub.textContent=el.dataset[subKey]||'';m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.classList.add('modal-open')}
    function closeE(){m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');img.src=''}
    document.querySelectorAll(`[data-${dataPrefix.replace(/[A-Z]/g,x=>'-'+x.toLowerCase())}-image]`).forEach(el=>el.addEventListener('click',()=>openE(el)));
    m.querySelectorAll(`[${closeAttr}]`).forEach(el=>el.addEventListener('click',closeE));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&m.classList.contains('open'))closeE()});
  }
  wireEvidenceModal('tpcModal','tpcModalImage','tpcModalTitle','tpcModalSubtitle','tpc','data-tpc-close');
  wireEvidenceModal('sessionChairModal','sessionChairModalImage','sessionChairModalTitle','sessionChairModalSubtitle','chair','data-chair-close');
});

document.addEventListener('DOMContentLoaded',()=>{
 const m=document.getElementById('innovationModal'); if(!m)return;
 const img=document.getElementById('innovationModalImage'),title=document.getElementById('innovationModalTitle'),sub=document.getElementById('innovationModalSubtitle');
 function openI(el){img.src=el.dataset.innovationImage;img.alt=el.dataset.innovationTitle||'Innovation evidence';title.textContent=el.dataset.innovationTitle||'';sub.textContent=el.dataset.innovationSubtitle||'';m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.classList.add('modal-open')}
 function closeI(){m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');img.src=''}
 document.querySelectorAll('[data-innovation-image]').forEach(el=>el.addEventListener('click',()=>openI(el)));
 m.querySelectorAll('[data-innovation-close]').forEach(el=>el.addEventListener('click',closeI));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&m.classList.contains('open'))closeI()});
});

document.addEventListener('DOMContentLoaded',()=>{
  const modal=document.getElementById('inspireModal'); if(!modal)return;
  const image=document.getElementById('inspireModalImage'), title=document.getElementById('inspireModalTitle'), subtitle=document.getElementById('inspireModalSubtitle');
  function openEvidence(el){image.src=el.dataset.inspireImage||'';image.alt=el.dataset.inspireTitle||'Evidence';title.textContent=el.dataset.inspireTitle||'';subtitle.textContent=el.dataset.inspireSubtitle||'';modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open')}
  function closeEvidence(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');image.src=''}
  document.querySelectorAll('[data-inspire-image]').forEach(el=>el.addEventListener('click',()=>openEvidence(el)));
  modal.querySelectorAll('[data-inspire-close]').forEach(el=>el.addEventListener('click',closeEvidence));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeEvidence()});
});




document.addEventListener('DOMContentLoaded',()=>{
  const modal=document.getElementById('ieteModal');
  const captions=['Fellow Certificate','Life Membership Card'];

  function initSwiper(root,onChange){
    if(!root)return null;
    const track=root.querySelector('.iete-swiper-track');
    const slides=[...root.querySelectorAll('.iete-slide')];
    const dots=[...root.querySelectorAll('.iete-pagination button')];
    const prev=root.querySelector('.iete-prev');
    const next=root.querySelector('.iete-next');
    let index=0;
    let startX=null;

    function show(i){
      index=(i+slides.length)%slides.length;
      track.style.transform=`translateX(-${index*100}%)`;
      slides.forEach((s,n)=>s.classList.toggle('active',n===index));
      dots.forEach((d,n)=>d.classList.toggle('active',n===index));
      if(onChange)onChange(index);
    }
    prev?.addEventListener('click',e=>{e.stopPropagation();show(index-1)});
    next?.addEventListener('click',e=>{e.stopPropagation();show(index+1)});
    dots.forEach((d,n)=>d.addEventListener('click',e=>{e.stopPropagation();show(n)}));

    root.addEventListener('touchstart',e=>{startX=e.touches[0].clientX},{passive:true});
    root.addEventListener('touchend',e=>{
      if(startX===null)return;
      const dx=e.changedTouches[0].clientX-startX;
      if(Math.abs(dx)>45)show(index+(dx<0?1:-1));
      startX=null;
    },{passive:true});

    show(0);
    return {show,getIndex:()=>index};
  }

  const thumb=initSwiper(document.querySelector('[data-iete-swiper="thumb"]'));
  const modalSwiper=initSwiper(
    document.querySelector('[data-iete-swiper="modal"]'),
    i=>{
      const c=document.getElementById('ieteModalCaption');
      if(c)c.textContent=captions[i]||'';
    }
  );

  if(!modal)return;
  function openModal(e){
    const slideBtn=e?.target?.closest('[data-slide-index]');
    const targetIndex=slideBtn?Number(slideBtn.dataset.slideIndex):(thumb?.getIndex?.()||0);
    modalSwiper?.show(targetIndex);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
  }
  function closeModal(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
  }

  document.querySelectorAll('[data-iete-open]').forEach(el=>el.addEventListener('click',openModal));
  modal.querySelectorAll('[data-iete-close]').forEach(el=>el.addEventListener('click',closeModal));
  document.addEventListener('keydown',e=>{
    if(!modal.classList.contains('open'))return;
    if(e.key==='Escape')closeModal();
    if(e.key==='ArrowLeft')modalSwiper?.show(modalSwiper.getIndex()-1);
    if(e.key==='ArrowRight')modalSwiper?.show(modalSwiper.getIndex()+1);
  });
});
