document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click",e=>{
    const target=document.querySelector(link.getAttribute("href"));
    if(!target)return;
    e.preventDefault();
    target.scrollIntoView({behavior:"smooth",block:"start"});
  });
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08});

document.querySelectorAll(".feature-card,.vision-grid article,.state,.dungeon-grid article").forEach(el=>{
  el.classList.add("reveal");
  observer.observe(el);
});
