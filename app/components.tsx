"use client";

import Image from "next/image";
import { WhatsAppIcon } from "./icons";
import { useEffect, useRef, useState, useSyncExternalStore, type FormEvent } from "react";

function Arrow() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>; }

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (!open) return; const close = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); trigger.current?.focus(); } }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, [open]);
  return <div className="mobile-menu"><button ref={trigger} className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? "✕" : <><span /><span /></>}</button>{open && <nav id="mobile-nav" aria-label="Mobile navigation">{[["Our services", "services"], ["Aircraft", "aircraft"], ["The Aditya difference", "why-aditya"], ["FAQs", "faqs"], ["Request a quote", "enquire"]].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}<Arrow /></a>)}</nav>}</div>;
}

const aircraft = [
  { name: "Private jets", type: "Private jet", image: "/images/hero-jet.jpg", tag: "YOUR OWN SPACE IN THE SKY", title: "For the moments worth making time for.", description: "From regional business trips to a longer escape, explore a private jet itinerary shaped around your plans.", features: ["Business & leisure", "Regional & longer routes", "Personalised itineraries"] },
  { name: "Helicopters", type: "Helicopter", image: "/images/helicopter.jpg", tag: "A NEW PERSPECTIVE", title: "Closer to where you want to be.", description: "Explore point-to-point travel for shorter journeys, special occasions and destinations beyond the everyday.", features: ["Shorter connections", "Special occasions", "Landing approval required"] },
  { name: "Group charters", type: "Group charter", image: "/images/aircraft.jpg", tag: "GO FURTHER, TOGETHER", title: "One itinerary. A shared experience.", description: "Bring your travel plans together for a corporate team, family celebration or group occasion with a tailored charter enquiry.", features: ["Team journeys", "Family celebrations", "Group travel planning"] },
];
export function AircraftExplorer() {
  const [selected, setSelected] = useState(0);
  const item = aircraft[selected];
  return <div className="aircraft-explorer"><div className="aircraft-tabs" role="tablist" aria-label="Aircraft categories">{aircraft.map((a,i) => <button key={a.name} id={`aircraft-tab-${i}`} role="tab" aria-selected={selected===i} aria-controls="aircraft-panel" tabIndex={selected===i ? 0 : -1} onClick={() => setSelected(i)} onKeyDown={e => { let next = i; if (e.key === "ArrowRight") next=(i+1)%aircraft.length; else if(e.key === "ArrowLeft") next=(i+aircraft.length-1)%aircraft.length; else if(e.key === "Home") next=0; else if(e.key === "End") next=aircraft.length-1; else return; e.preventDefault(); setSelected(next); document.getElementById(`aircraft-tab-${next}`)?.focus(); }}>{a.name}<span>0{i+1}</span></button>)}</div><div id="aircraft-panel" className="aircraft-panel" role="tabpanel" aria-labelledby={`aircraft-tab-${selected}`}><div className="aircraft-photo"><Image src={item.image} alt={`${item.name} — illustrative aircraft photography`} fill sizes="(max-width: 767px) 100vw, (min-width: 1600px) 790px, 55vw" /></div><div className="aircraft-copy"><p className="eyebrow">{item.tag}</p><h3>{item.title}</h3><p>{item.description}</p><ul>{item.features.map(f => <li key={f}><span>✓</span>{f}</li>)}</ul><a href="#enquire" data-aircraft={item.type} className="button gold">Enquire about {item.name.toLowerCase()} <Arrow /></a></div></div></div>;
}

type Journey = { from: string; to: string; date: string; returnDate: string; passengers: string; trip: string; aircraft: string };
const blank: Journey = { from: "", to: "", date: "", returnDate: "", passengers: "2", trip: "One way", aircraft: "No preference" };
const subscribeToDate = () => () => {};
const serverDate = () => "";
function localDate() { const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; }

export function JourneyForm({ compact = false }: { compact?: boolean }) {
  const [journey, setJourney] = useState<Journey>(blank);
  const today = useSyncExternalStore(subscribeToDate, localDate, serverDate);
  const [step, setStep] = useState(1);
  const [contact, setContact] = useState({ name: "", email: "", notes: "" });
  const [error, setError] = useState("");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const prefix = compact ? "quick" : "full";
  useEffect(() => {
    const sync = (event: Event) => { const data = (event as CustomEvent<Journey>).detail; setJourney(data); setStep(1); setError(""); };
    const selectAircraft = (event: MouseEvent) => { const target=(event.target as Element).closest<HTMLElement>("[data-aircraft]"); if (target?.dataset.aircraft && !compact) { setJourney(j => ({...j,aircraft:target.dataset.aircraft!})); setStep(1); setError(""); } };
    if (!compact) { window.addEventListener("aditya-journey",sync); document.addEventListener("click",selectAircraft); }
    return () => { window.removeEventListener("aditya-journey",sync); document.removeEventListener("click",selectAircraft); };
  }, [compact]);
  function update(key: keyof Journey, value: string) { setJourney(j => ({...j,[key]:value})); setError(""); }
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (journey.from.trim().toLowerCase()===journey.to.trim().toLowerCase()) {setError("Please choose different departure and destination cities."); return;}
    if (journey.date<localDate()) {setError("Please choose today or a future departure date."); return;}
    if(journey.trip==="Return" && journey.returnDate<journey.date) {setError("Your return date must be on or after your departure date."); return;}
    if (compact) { window.dispatchEvent(new CustomEvent("aditya-journey",{detail:journey})); document.getElementById("enquire")?.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"}); return; }
    setStep(step===1 ? 2 : 3); setTimeout(() => titleRef.current?.focus(),0);
  }
  function download() {
    const text = `ADITYA SKYWAY — CHARTER ENQUIRY DRAFT\n\nName: ${contact.name}\nEmail: ${contact.email}\nJourney: ${journey.trip}\nFrom: ${journey.from}\nTo: ${journey.to}\nDeparture: ${journey.date}\n${journey.trip==="Return" ? `Return: ${journey.returnDate}\n` : ""}Passengers: ${journey.passengers}\nAircraft preference: ${journey.aircraft}\nSpecial requirements: ${contact.notes || "None specified"}\n\nThis is a prepared itinerary, not a submitted enquiry or confirmed booking. Share it with your charter advisor. Aircraft, pricing and availability require confirmation.`;
    const url=URL.createObjectURL(new Blob([text],{type:"text/plain;charset=utf-8"})); const link=document.createElement("a"); link.href=url; link.download="aditya-skyway-itinerary.txt"; link.click(); setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  const whatsappMessage = `Hello Aditya Skyway, I would like a charter quote.\n\nName: ${contact.name}\nEmail: ${contact.email}\nRoute: ${journey.from} → ${journey.to}\nDeparture: ${journey.date}${journey.trip === "Return" ? `\nReturn: ${journey.returnDate}` : ""}\nPassengers: ${journey.passengers}\nAircraft: ${journey.aircraft}\nRequirements: ${contact.notes || "None specified"}`;
  if (step === 3) return <div className="request-ready"><span className="ready-icon">✓</span><p className="eyebrow">YOUR NEXT JOURNEY, ONE STEP CLOSER</p><h3 ref={titleRef} tabIndex={-1}>Your quote request is ready.</h3><div className="request-recap"><p>{journey.from} <span aria-hidden="true">→</span> {journey.to}</p><p className="ready-detail">{journey.date}{journey.trip === "Return" ? ` → ${journey.returnDate}` : ""} · {journey.passengers} passengers · {journey.trip}</p><p className="ready-detail">{journey.aircraft}</p></div><p>Open WhatsApp to review and send your request to Aditya Skyway. Nothing has been sent yet.</p><a className="button whatsapp-submit" href={`https://wa.me/917309744185?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />Continue on WhatsApp <Arrow /></a><button className="download-button" onClick={download}>Download itinerary instead</button><button className="edit-button" onClick={()=>setStep(1)}>← Edit journey details</button></div>;
  const tripSelector = <div className="trip-options" role="group" aria-label="Journey type">{["One way","Return"].map(type=><button type="button" key={type} className={journey.trip===type ? "selected" : ""} aria-pressed={journey.trip===type} onClick={()=>update("trip",type)}><span />{type}</button>)}</div>;
  return <form onSubmit={submit} className={compact ? "quick-form" : "full-form"}>
    <div className="form-heading">{compact ? <p>Where will your next<br /><strong>journey take you?</strong></p> : <><p className="eyebrow">REQUEST A QUOTE · STEP {step} OF 2</p><h3 ref={titleRef} tabIndex={-1}>{step===1 ? "Make it your journey." : "A few personal details."}</h3></>}
    {compact && step === 1 && tripSelector}</div>
    {!compact && <><p className="form-intro">{step === 1 ? "A few details to shape your next departure." : "Let us know who’s travelling and what matters to you."}</p><ol className="form-progress" aria-label="Quote request progress"><li className={step === 1 ? "current" : "complete"} aria-current={step === 1 ? "step" : undefined}><span>{step === 2 ? "✓" : "1"}</span>Your journey</li><li className={step === 2 ? "current" : ""} aria-current={step === 2 ? "step" : undefined}><span>2</span>Your details</li></ol>{step === 1 && tripSelector}</>}
    {step===1 ? <><div className="journey-fields"><label htmlFor={`${prefix}-from`}>DEPARTURE<input id={`${prefix}-from`} placeholder="From which city?" autoComplete="off" required maxLength={100} value={journey.from} onChange={e=>update("from",e.target.value)} /></label><span className="route-arrow" aria-hidden="true">⇄</span><label htmlFor={`${prefix}-to`}>DESTINATION<input id={`${prefix}-to`} placeholder="Where to?" autoComplete="off" required maxLength={100} value={journey.to} onChange={e=>update("to",e.target.value)} /></label><label htmlFor={`${prefix}-date`}>TRAVEL DATE<input id={`${prefix}-date`} aria-label="Departure date" type="date" required min={today} value={journey.date} onChange={e=>update("date",e.target.value)} /></label>{journey.trip==="Return" && <label htmlFor={`${prefix}-return`}>RETURN DATE<input id={`${prefix}-return`} aria-label="Return date" type="date" required min={journey.date || today} value={journey.returnDate} onChange={e=>update("returnDate",e.target.value)} /></label>}<label htmlFor={`${prefix}-passengers`}>PASSENGERS<input id={`${prefix}-passengers`} type="number" min="1" max="180" required value={journey.passengers} onChange={e=>update("passengers",e.target.value)} /></label>{!compact && <label htmlFor={`${prefix}-aircraft`}>AIRCRAFT PREFERENCE<select id={`${prefix}-aircraft`} value={journey.aircraft} onChange={e=>update("aircraft",e.target.value)}><option>No preference</option><option>Private jet</option><option>Helicopter</option><option>Group charter</option></select></label>}{compact && <button className="button gold" type="submit">Plan my journey <Arrow /></button>}</div></> : <div className="contact-fields"><p className="journey-summary">{journey.from} → {journey.to}<small>{journey.date}{journey.trip === "Return" ? ` → ${journey.returnDate}` : ""} · {journey.passengers} passengers</small></p><label htmlFor="contact-name">YOUR NAME<input id="contact-name" autoComplete="name" required maxLength={100} placeholder="Full name" value={contact.name} onChange={e=>setContact({...contact,name:e.target.value})} /></label><label htmlFor="contact-email">EMAIL ADDRESS<input id="contact-email" autoComplete="email" type="email" required placeholder="you@example.com" value={contact.email} onChange={e=>setContact({...contact,email:e.target.value})} /></label><label htmlFor="contact-notes">SPECIAL REQUIREMENTS <span>(OPTIONAL)</span><textarea id="contact-notes" maxLength={2000} rows={3} placeholder="Additional stops, luggage, preferred timings…" value={contact.notes} onChange={e=>setContact({...contact,notes:e.target.value})} /></label></div>}
    {error && <p className="form-error" role="alert">{error}</p>}
    {!compact && <><div className="form-actions">{step===2 && <button type="button" className="edit-button" onClick={()=>setStep(1)}>← Back</button>}<button type="submit" className="button gold">{step===1 ? "Continue to your details" : "Review quote request"}<Arrow /></button></div><p className="form-note">{step===1 ? "A personalised quote starts with your plans. No payment required." : "Next, review your request and choose to send it via WhatsApp."}</p></>}
  </form>;
}
