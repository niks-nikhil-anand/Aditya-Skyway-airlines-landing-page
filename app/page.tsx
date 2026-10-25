import Image from "next/image";
import { WhatsAppIcon } from "./icons";
import { AircraftExplorer, JourneyForm, MobileMenu } from "./components";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const faqs = [
  ["How do I arrange a private charter?", "Start with your departure city, destination, travel dates and passenger count. Prepare your itinerary using the form below, then share it with your charter advisor to discuss aircraft options and a personalised quotation."],
  ["Can I choose between a jet and a helicopter?", "Yes. Indicate your preferred aircraft category in your itinerary. The right choice depends on the route, passenger count, luggage and available airports or approved landing locations. Specific aircraft availability must be confirmed."],
  ["How is the charter price calculated?", "A quotation depends on the aircraft, flight time, positioning requirements, airport and handling charges, taxes and any additional arrangements. Request an itemised quotation before confirming your journey."],
  ["Can I plan multiple stops or a return journey?", "Select Return in the journey planner for a round trip. For multiple stops, add each destination and your preferred schedule in the special requirements field."],
  ["What should I know before confirming?", "Confirm the operating carrier, aircraft details, baggage allowance, passenger documents, cancellation terms and total price. All journeys remain subject to availability, operational approvals and weather conditions."],
];

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a href="#" className="brand" aria-label="Aditya Skyway home"><span className="brand-symbol"><Image src="/Glossy Aviation Sunburst Emblem.png" alt="" width={96} height={64} sizes="(max-width: 767px) 60px, 78px" /></span><span>ADITYA <b>SKYWAY</b><small>PRIVATE AVIATION. PERSONALISED.</small></span></a>
      <nav className="desktop-nav" aria-label="Main navigation"><a href="#services">Our services</a><a href="#aircraft">Aircraft</a><a href="#why-aditya">The Aditya difference</a><a href="#faqs">FAQs</a></nav>
      <a className="button gold header-cta" href="#enquire">Request a quote <Arrow diagonal /></a>
      <MobileMenu />
    </header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-photo"><Image src="/images/aircraft.jpg" alt="Private jet on the runway in the warm light of sunset" fill sizes="100vw" preload /></div>
        <div className="hero-shade" />
        <div className="hero-content wrap"><p className="eyebrow light"><span /> A HIGHER STANDARD OF TRAVEL</p><h1 id="hero-heading">Your journey.<br />Above the <em>ordinary.</em></h1><p className="hero-description">A world of possibilities. A journey that’s yours.<br className="desktop-break" /> Discover private aviation, thoughtfully arranged around you.</p><div className="hero-actions"><a className="button gold" href="#enquire">Plan your journey <Arrow diagonal /></a><a className="hero-link" href="#aircraft">Explore aircraft <Arrow /></a></div></div>
        <div className="hero-bottom wrap"><span>YOUR TIME. YOUR DESTINATION. YOUR SKYWAY.</span><a href="#journey">SCROLL TO EXPLORE <span>↓</span></a></div>
      </section>
      <section id="journey" className="journey-section wrap" aria-label="Journey planner"><JourneyForm compact /></section>
      <div className="intro-strip wrap"><p>BUSINESS OR LEISURE.<br /><strong>Always on your terms.</strong></p><span>Private jet charters</span><i /><span>Helicopter journeys</span><i /><span>Personalised itineraries</span><svg className="tiny-plane" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4 20-7ZM11 13 22 2" stroke="currentColor" strokeWidth="1.3" /></svg></div>
      <section id="services" className="section wrap">
        <div className="section-heading"><div><p className="eyebrow">TAILORED TO THE WAY YOU TRAVEL</p><h2>Every journey.<br /><span>A new possibility.</span></h2></div><p>From an important meeting to a much-awaited escape, make room for what matters. We’ll help you find your way there.</p></div>
        <div className="service-grid">
          <a className="service-card" href="#enquire" data-aircraft="Private jet"><div className="service-image"><Image src="/images/hero-jet.jpg" alt="Private jet with boarding stairs ready for passengers" fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (min-width: 1600px) 480px, 33vw" /><span className="image-number">01 / PRIVATE AVIATION</span></div><div className="service-copy"><h3>Private jet charters <Arrow diagonal /></h3><p>Your schedule. Your space. A considered way to travel for business or leisure.</p><span className="text-link">Discover your possibilities <Arrow /></span></div></a>
          <a className="service-card" href="#enquire" data-aircraft="Helicopter"><div className="service-image"><Image src="/images/helicopter.jpg" alt="Helicopter resting on a snowy mountain landing site" fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (min-width: 1600px) 480px, 33vw" /><span className="image-number">02 / A DIFFERENT PERSPECTIVE</span></div><div className="service-copy"><h3>Helicopter journeys <Arrow diagonal /></h3><p>Connect beyond the usual routes, with journeys built around your destination.</p><span className="text-link">Find your next connection <Arrow /></span></div></a>
          <a className="service-card" href="#enquire"><div className="service-image sunset"><Image src="/images/aircraft.jpg" alt="Executive aircraft parked at sunset" fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (min-width: 1600px) 480px, 33vw" /><span className="image-number">03 / MADE AROUND YOU</span></div><div className="service-copy"><h3>Bespoke travel <Arrow diagonal /></h3><p>Business itineraries, family occasions and special escapes. Start with your plans.</p><span className="text-link">Create your itinerary <Arrow /></span></div></a>
        </div>
      </section>
      <section id="why-aditya" className="difference"><div className="wrap difference-grid"><div className="difference-title"><p className="eyebrow">THE ADITYA DIFFERENCE</p><h2>Exceptional travel.<br /><span>Thoughtful details.</span></h2><p>Private aviation should feel personal. A clear plan, the right aircraft and attention to the details that make the journey yours.</p><a className="text-link" href="#enquire">Let’s plan something exceptional <Arrow /></a></div><div className="benefit-grid">{[
        ["01", "Time, on your terms", "Build your itinerary around the moments that matter, with your preferred departure times and destinations."],
        ["02", "A journey that fits", "Match your aircraft preference to your passenger count, route, luggage and the way you like to travel."],
        ["03", "Space to be yourself", "Make room for focused work, quiet conversations or simply a little time to unwind along the way."],
        ["04", "Clarity at every step", "Know what to discuss before you fly, from aircraft options and quotations to your final travel arrangements."],
      ].map(([n,t,d])=><article className="benefit" key={n}><span className="benefit-number">{n}<span>↗</span></span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
      <section id="aircraft" className="section wrap"><div className="section-heading"><div><p className="eyebrow">FIND YOUR PERFECT FIT</p><h2>A different aircraft.<br /><span>The same elevated feeling.</span></h2></div><p>Explore your preferred way to fly. Your advisor can confirm the aircraft, configuration and availability for your journey.</p></div><AircraftExplorer /><p className="fine-print">Photography is illustrative. Aircraft categories are preferences, not a statement of fleet ownership or confirmed availability.</p></section>
      <section id="how-it-works" className="how-section"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">FROM FIRST THOUGHT TO TAKEOFF</p><h2>Your next chapter.<br /><span>Three simple steps.</span></h2></div><a className="button outline" href="#enquire">Start your journey <Arrow diagonal /></a></div><div className="steps">{[["01", "Tell us your plans", "Choose your route, travel dates and passenger count. Add the little details that make a difference."],["02", "Find the right fit", "Discuss aircraft options and request a tailored quotation with your charter advisor."],["03", "Make it a journey", "Confirm the details, review the arrangements and look forward to your next departure."]].map(([n,t,d])=><article key={n}><div className="step-top"><span>{n}</span><Arrow /></div><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
      <section className="assurance wrap"><span className="assurance-mark" aria-hidden="true">✧</span><div><p className="eyebrow">CONFIDENCE BEGINS WITH CLARITY</p><h2>Considered before you take off.</h2><p>Aircraft and operator details. Transparent quotations. Clear travel terms.<br />The right questions are part of a well-planned journey.</p></div><a href="#faqs" className="circle-link" aria-label="Explore charter questions"><Arrow diagonal /></a></section>
      <section id="faqs" className="faq-section wrap"><div><p className="eyebrow">A LITTLE MORE CLARITY</p><h2>Good questions.<br /><span>Clear answers.</span></h2><p>New to private aviation?<br />Here’s a helpful place to start.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><details key={q}><summary><span className="faq-number">0{i+1}</span>{q}<span className="faq-toggle" aria-hidden="true" /></summary><p>{a}</p></details>)}</div></section>
      <section id="enquire" className="contact-section"><div className="wrap contact-grid"><div><p className="eyebrow light">YOUR NEXT JOURNEY STARTS HERE</p><h2>Where would you<br />like to <em>go next?</em></h2><p>A business opportunity. A special occasion.<br />Somewhere you’ve always wanted to be.<br />Let’s start with your plans.</p><div className="contact-detail"><span className="gold-line" />PERSONAL PLANS. EXTRAORDINARY POSSIBILITIES.</div><a className="contact-whatsapp" href="https://wa.me/917309744185" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /><span>Prefer a conversation?<strong>+91 73097 44185</strong></span><Arrow diagonal /></a></div><div className="contact-form"><JourneyForm /></div></div></section>
    </main>
    <footer id="footer" className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-about">
            <a className="footer-identity" href="#" aria-label="Aditya Skyway home">
              <Image src="/Glossy Aviation Sunburst Emblem.png" alt="" width={78} height={52} sizes="78px" />
              <span className="footer-brand">ADITYA <span>SKYWAY</span><small>A HIGHER STANDARD OF TRAVEL</small></span>
            </a>
            <p>Private aviation, personally considered. Explore private jet and helicopter journeys, with charter planning shaped around your schedule, destination and the way you like to travel.</p>
            <p className="footer-about-note">For business, leisure and the occasions that deserve a different way to arrive.</p>
          </div>
          <nav className="footer-column" aria-label="Charter services">
            <h3>Our services</h3>
            <ul>
              <li><a href="#enquire" data-aircraft="Private jet">Private jet charters</a></li>
              <li><a href="#enquire" data-aircraft="Helicopter">Helicopter journeys</a></li>
              <li><a href="#enquire" data-aircraft="Group charter">Group charter enquiries</a></li>
              <li><a href="#services">Bespoke travel planning</a></li>
              <li><a href="#aircraft">Explore aircraft options</a></li>
            </ul>
          </nav>
          <nav className="footer-column" aria-label="Explore Aditya Skyway">
            <h3>Explore Aditya</h3>
            <ul>
              <li><a href="#why-aditya">The Aditya difference</a></li>
              <li><a href="#how-it-works">How charter planning works</a></li>
              <li><a href="#journey">Plan your itinerary</a></li>
              <li><a href="#faqs">Frequently asked questions</a></li>
              <li><a href="#enquire">Request a quote</a></li>
            </ul>
          </nav>
          <div className="footer-column footer-contact">
            <h3>Let’s talk travel</h3>
            <p>Have a destination in mind? Start a conversation about your next journey.</p>
            <ul>
              <li><a className="footer-phone" href="tel:+917309744185">+91 73097 44185 <Arrow diagonal /></a></li>
              <li><a className="footer-chat" href="https://wa.me/917309744185?text=Hello%20Aditya%20Skyway%2C%20I%20would%20like%20to%20plan%20a%20charter." target="_blank" rel="noopener noreferrer"><WhatsAppIcon />Chat on WhatsApp <Arrow diagonal /></a></li>
            </ul>
            <span className="footer-contact-note">Charter enquiries & itinerary planning</span>
          </div>
        </div>
        <div className="footer-travel-note"><span aria-hidden="true">↗</span><p>Every journey starts with a clear plan. Confirm aircraft availability, operating details, the full quotation and travel terms with your advisor before booking.</p></div>
        <div className="footer-meta"><p>© 2026 Aditya Skyway. All rights reserved.</p><span>Private aviation. Personally considered.</span><a className="footer-to-top" href="#" aria-label="Back to top">Back to top <span aria-hidden="true">↑</span></a></div>
      </div>
    </footer>
    <a className="whatsapp-float" href="https://wa.me/917309744185?text=Hello%20Aditya%20Skyway%2C%20I%20would%20like%20to%20enquire%20about%20a%20charter." target="_blank" rel="noopener noreferrer" aria-label="Chat with Aditya Skyway on WhatsApp at +91 73097 44185 (opens in a new tab)"><span className="whatsapp-tooltip">Have a question? Let’s chat</span><WhatsAppIcon /></a>
  </>;
}
