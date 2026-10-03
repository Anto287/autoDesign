import React, { useLayoutEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';
gsap.registerPlugin(ScrollTrigger);
const photo=(id,w=1800)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
const cars=[
 {name:'Pure performance',category:'Sportive',label:'01 / SPORT',description:'Linee tese. Risposte immediate. Il piacere di ogni curva.',image:photo('photo-1503376780353-7e6692767b70',900)},
 {name:'Everyday extraordinary',category:'SUV',label:'02 / SUV',description:'Spazio per i tuoi progetti. Carattere per ogni strada.',image:photo('photo-1519641471654-76ce0107ad1b',900)},
 {name:'The electric perspective',category:'Elettriche',label:'03 / ELECTRIC',description:'Un altro ritmo. Silenzio, tecnologia e nuove possibilità.',image:photo('photo-1560958089-b8a1929cea89',900)}
];
function Arrow(){return <span aria-hidden="true">↗</span>}
function App(){
 const root=useRef(null),[menu,setMenu]=useState(false),[filter,setFilter]=useState('Tutte');
 useLayoutEffect(()=>{const mm=gsap.matchMedia(); mm.add('(prefers-reduced-motion: no-preference)',()=>{const ctx=gsap.context(()=>{
 gsap.from('.hero-copy > *',{y:45,opacity:0,duration:1,stagger:.15,ease:'power3.out'});
 gsap.from('.hero-image',{scale:1.08,duration:1.8,ease:'power2.out'});
 gsap.utils.toArray('.reveal').forEach(el=>gsap.from(el,{y:45,opacity:0,duration:.9,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}}));
 gsap.to('.hero-image',{yPercent:12,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
 },root);return ()=>ctx.revert();});return ()=>mm.revert();},[]);
 const close=()=>setMenu(false);
 return <div ref={root}>
 <a className="skip" href="#main">Vai al contenuto</a>
 <header><a className="brand" href="#" aria-label="autoDesign home">auto<span>Design</span><i>®</i></a><button className="menu-toggle" aria-expanded={menu} aria-controls="navigation" onClick={()=>setMenu(!menu)}>{menu?'Chiudi ×':'Menu ☰'}</button><nav id="navigation" className={menu?'open':''}><a onClick={close} href="#collezione">La selezione</a><a onClick={close} href="#filosofia">Il nostro mondo</a><a onClick={close} href="#servizi">Servizi</a><a onClick={close} className="nav-cta" href="#contatti">Parliamone <Arrow/></a></nav></header>
 <main id="main"><section className="hero"><img className="hero-image" src={photo('photo-1503376780353-7e6692767b70')} alt="Auto sportiva grigia su una strada panoramica" fetchPriority="high"/><div className="hero-shade"/><div className="hero-copy"><p className="eyebrow"><span className="dot"/> DRIVEN BY DESIGN</p><h1>Non una semplice auto.<br/><em>La tua prossima storia.</em></h1><p className="hero-description">Per chi sceglie con la testa.<br/>E guida con il cuore.</p><a className="button lime" href="#collezione">Esplora la selezione <Arrow/></a></div><div className="hero-bottom"><span>AUTO. DESIGN. EMOZIONI.</span><a href="#collezione">SCROLL TO DISCOVER ↓</a><span>01 — 03</span></div></section>
 <div className="ticker" aria-hidden="true"><span>UN NUOVO PUNTO DI VISTA</span><b>✳</b><span>IL TUO PROSSIMO VIAGGIO</span><b>✳</b><span>DRIVEN BY DESIGN</span></div>
 <section id="collezione" className="section collection"><div className="section-top reveal"><p className="eyebrow">01 / LA SELEZIONE</p><span className="small-note">Caratteri diversi. Un’unica passione.</span></div><div className="collection-heading reveal"><h2>Trova il tuo<br/><em>modo di muoverti.</em></h2><p>Una selezione pensata per chi cerca qualcosa di più. Scopri quale personalità ti somiglia.</p></div><div className="filters" aria-label="Categorie auto">{['Tutte','Sportive','SUV','Elettriche'].map(f=><button key={f} aria-pressed={filter===f} className={filter===f?'active':''} onClick={()=>setFilter(f)}>{f}{f==='Tutte'?' / 03':''}</button>)}</div><div className="cars">{cars.filter(c=>filter==='Tutte'||c.category===filter).map(c=><article className="car" key={c.name}><a href="#contatti" aria-label={`Parliamo di ${c.category}`}><div className="car-photo"><img src={c.image} loading="lazy" alt={`Immagine illustrativa categoria ${c.category}`}/><span className="circle"><Arrow/></span></div><div className="car-meta"><span>{c.label}</span><span>SCOPRI DI PIÙ</span></div><h3>{c.name}</h3><p>{c.description}</p></a></article>)}</div><p className="demo-note">Selezione illustrativa: le immagini rappresentano le categorie, non veicoli attualmente in vendita.</p></section>
 <section id="filosofia" className="philosophy"><div className="philosophy-image"><img src={photo('photo-1492144534655-ae79c964c9d7',1200)} loading="lazy" alt="Dettaglio di un'auto sportiva dal design contemporaneo"/><span>DETAILS MAKE THE DIFFERENCE.</span></div><div className="philosophy-copy reveal"><p className="eyebrow">02 / IL NOSTRO MONDO</p><h2>Il design attira.<br/><em>La sostanza convince.</em></h2><p>Crediamo che scegliere un’auto sia una questione di affinità. Con le tue abitudini, le tue ambizioni e il tuo modo di vedere il mondo.</p><p>autoDesign nasce da questa idea: dare spazio alle auto e alle persone, con un’esperienza semplice, curata, personale.</p><a className="text-link" href="#servizi">Scopri il nostro approccio <Arrow/></a></div></section>
 <section id="servizi" className="section services"><p className="eyebrow reveal">03 / AL TUO FIANCO</p><h2 className="reveal">La scelta è tua.<br/><em>Il percorso, insieme.</em></h2><div className="service-list">{[['01','Consulenza personale','Partiamo da quello che conta per te: utilizzo, stile e desideri. Per orientarti verso l’auto giusta.'],['02','Scoprila da vicino','I dettagli meritano il tempo giusto. Vieni a conoscere il mondo autoDesign e le sue diverse personalità.'],['03','Un dialogo trasparente','Domande, possibilità e prossimi passi. Un confronto chiaro, senza fretta.']].map(([n,t,d])=><div className="service reveal" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><Arrow/></div>)}</div></section>
 <section id="contatti" className="contact"><p className="eyebrow reveal">IL PROSSIMO CAPITOLO</p><h2 className="reveal">Ci vediamo<br/><em>alla partenza.</em> <Arrow/></h2><div className="contact-bottom"><p>Il tuo prossimo viaggio comincia con una conversazione.</p><div className="contact-placeholder"><span className="dot"/> Contatti del salone in arrivo<p>Questa è la vetrina dimostrativa di autoDesign.<br/>Recapiti, sede e orari saranno aggiunti all’apertura.</p></div></div></section>
 </main><footer><a className="brand" href="#">auto<span>Design</span><i>®</i></a><p>© {new Date().getFullYear()} autoDesign · Vetrina dimostrativa</p><a href="#">Torna in alto ↑</a></footer>
 </div>
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
