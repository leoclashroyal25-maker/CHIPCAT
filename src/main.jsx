import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, Cpu, Database, Github, Instagram, Menu, Terminal, X, Zap } from "lucide-react";
import "./styles.css";

const nav = ["system", "narrative", "specs", "gallery", "community"];

const specs = [
  ["PROCESSOR", "CAT PROCESSING UNIT", Cpu],
  ["BOOST CLOCK", "UNLIMITED PURR", Zap],
  ["ARCHITECTURE", "FELINE COMPUTE", Database],
  ["THERMALS", "COOL CORE", Activity],
  ["CORE", "TUXEDO", Cpu],
  ["OPERATING SYSTEM", "CATOS", Terminal],
];

const techSpecs = [
  ["CORE TYPE", "FELINE"],
  ["PROCESSING MODE", "PURRALLEL"],
  ["MEMORY", "FORGOT"],
  ["POWER SOURCE", "TUNA"],
  ["COOLING SYSTEM", "NAP"],
  ["CLOCK SPEED", "WHEN MOTIVATED"],
  ["AI LEVEL", "QUESTIONABLE"],
  ["LIVES", "09"],
];

const gallery = [
  ["DATA CENTER", "/images/chipcat-data-center.svg", "Server racks. Maximum purr throughput."],
  ["AI LAB", "/images/chipcat-lab.svg", "Neural networks under feline supervision."],
  ["PROCESSOR ROOM", "/images/chipcat-processor.svg", "Floating silicon. Zero thoughts."],
  ["NIGHT MODE", "/images/chipcat-night.svg", "Dark room. Blue monitors. Cat detected."],
  ["SPACE COMPUTE", "/images/chipcat-space.svg", "Off-world compute remains questionable."],
];

const errors = [
  "ERROR 001 — CAT REFUSES TO COMPUTE",
  "ERROR 002 — TUNA NOT FOUND",
  "ERROR 003 — PROCESSOR ASLEEP",
  "ERROR 004 — CAT HAS LEFT THE SERVER",
  "ERROR 005 — TOO MUCH COMPUTE",
  "ERROR 006 — HUMAN DETECTED",
];

function Section({ id, children, className = "" }) {
  return <section id={id} className={`section ${className}`}>{children}</section>;
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2 dangerouslySetInnerHTML={{__html: title}} />
      {copy && <p>{copy}</p>}
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 180]);
  const [telemetry, setTelemetry] = useState({
    processing: 98.7,
    purr: 4.2,
    tuna: 87,
    nap: 64,
    thoughts: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetry({
        processing: +(97.5 + Math.random() * 2.4).toFixed(1),
        purr: +(3.9 + Math.random() * 0.7).toFixed(1),
        tuna: Math.floor(80 + Math.random() * 18),
        nap: Math.floor(58 + Math.random() * 20),
        thoughts: 0,
      });
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const particles = useMemo(() =>
    Array.from({length: 42}, (_, i) => ({
      left: `${(i * 37) % 100}%`,
      top: `${(i * 61) % 100}%`,
      delay: `${(i % 9) * 0.35}s`,
      duration: `${4 + (i % 5)}s`,
    })), []);

  const go = (id) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">
      <div className="noise" />
      <div className="grid-bg" />
      <div className="particles">{particles.map((p, i) => <i key={i} style={p} />)}</div>

      <header className="nav">
        <button className="brand" onClick={() => go("top")} aria-label="Go to top">
          <span className="brand-mark">C</span>
          <span>CHIPCAT</span>
        </button>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          {nav.map((item) => (
            <button key={item} onClick={() => go(item)}>
              {item.toUpperCase()}
            </button>
          ))}
        </nav>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
          {menu ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-glow" />
          <motion.div className="hero-copy" style={{ y: heroY }}>
            <div className="status-pill"><span className="live-dot" /> SYSTEM ONLINE <b>///</b> CATOS 01</div>
            <p className="kicker">FELINE COMPUTE ARCHITECTURE / REV. 01</p>
            <h1>THE CHIP<br /><em>HAS LEGS.</em></h1>
            <p className="hero-sub">
              Meet CHIPCAT — the feline processor built for maximum compute and minimum thoughts.
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={() => go("system")}>MEET CHIPCAT <span>↘</span></button>
              <button className="secondary" onClick={() => go("specs")}>EXPLORE THE SYSTEM</button>
            </div>
            <div className="hero-terminal">
              <span>SYSTEM STATUS</span>
              <b>CHIPCAT ONLINE</b>
              <b>CAT PROCESSING UNIT: ACTIVE</b>
              <b>THERMALS: PURRING</b>
              <b>THOUGHTS: 0</b>
            </div>
          </motion.div>

          <div className="hero-cat">
            <div className="cat-frame">
              <div className="scan" />
              <div className="fallback-cat">
                <div className="ear left" /><div className="ear right" />
                <div className="cat-head">
                  <div className="eye e1" /><div className="eye e2" />
                  <div className="nose" /><div className="muzzle" />
                  <div className="circuit c1" /><div className="circuit c2" />
                </div>
              </div>
              <img src="/images/chipcat-hero.svg" alt="CHIPCAT futuristic tuxedo cat" onError={(e) => e.currentTarget.style.display = "none"} />
              <div className="cat-hud hud-a">CORE // TUXEDO</div>
              <div className="cat-hud hud-b">PURR / 4.2 GHz</div>
            </div>
          </div>

          <div className="hero-bottom"><span>01 — SYSTEM BOOT</span><span>SCROLL TO INITIALIZE ↓</span><span>CHIPCAT / $CHIP</span></div>
        </section>

        <Section id="system">
          <SectionHeading eyebrow="01 / SYSTEM STATUS" title="CHIPCAT <span>SYSTEM</span>" copy="A diagnostic interface for a processor that technically should not exist." />
          <div className="spec-grid">
            {specs.map(([a,b,Icon], i) => (
              <motion.div className="glass-card spec-card" key={a} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{delay:i*.06}}>
                <div className="card-top"><span>0{i+1}</span><Icon size={18}/></div>
                <small>{a}</small><strong>{b}</strong>
                <div className="mini-bar"><i /></div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="narrative" className="narrative">
          <div className="narrative-image">
            <div className="image-frame"><img src="/images/chipcat-lab.svg" alt="" onError={(e)=>e.currentTarget.style.display="none"} /><div className="fallback-scene"><span>CHIPCAT</span><small>NEURAL LAB / 04</small></div></div>
          </div>
          <div className="narrative-copy">
            <SectionHeading eyebrow="02 / NARRATIVE" title="COMPUTE ENERGY.<br/><span>CAT CHAOS.</span>" />
            <p>Somewhere inside a machine room that probably should not exist, a processor opened its eyes.</p>
            <p>It was not a processor.</p>
            <p><strong>It was a cat.</strong></p>
            <p>CHIPCAT immediately rejected this explanation. According to CHIPCAT, it is a next-generation computing architecture capable of processing extremely important workloads such as staring at walls, ignoring commands, sleeping for 14 hours, and demanding tuna.</p>
            <p>The engineers remain unconvinced.</p>
            <p><strong>CHIPCAT remains undefeated.</strong></p>
            <div className="quote">“NO THOUGHTS. ONLY COMPUTE.”</div>
          </div>
        </Section>

        <Section id="process">
          <SectionHeading eyebrow="03 / COMPUTE PIPELINE" title="HOW CHIPCAT <span>COMPUTES</span>" />
          <div className="process">
            {[
              ["01","INPUT","Human provides problem."],
              ["02","PROCESS","CHIPCAT stares at problem."],
              ["03","OUTPUT","CHIPCAT walks away."]
            ].map(([n,t,c],i)=>(
              <React.Fragment key={n}>
                <motion.div className="process-card" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.12}}>
                  <span>{n}</span><h3>{t}</h3><p>{c}</p><div className="process-chip">{i===0?"↓":i===1?"◉":"✓"}</div>
                </motion.div>
                {i<2 && <div className="connector">━━━━━━━━━━ <b>›</b></div>}
              </React.Fragment>
            ))}
          </div>
        </Section>

        <Section id="specs" className="specs-section">
          <SectionHeading eyebrow="04 / TECH SPECS" title="HARDWARE <span>PROFILE</span>" />
          <div className="tech-interface">
            <div className="tech-sidebar">
              <div className="tech-logo">CHIP<br/>CAT<span>01</span></div>
              <p>FELINE COMPUTE<br/>ARCHITECTURE</p>
              <div className="side-line" />
              <span>STATUS</span><strong>OPTIMAL</strong>
            </div>
            <div className="tech-table">
              {techSpecs.map(([k,v],i)=><div className="tech-row" key={k}><span>0{i+1}</span><label>{k}</label><b>{v}</b></div>)}
            </div>
          </div>
        </Section>

        <Section id="split" className="split-section">
          <div className="split-visual">
            <div className="split-half cyber">
              <span>CYBERNETIC CORE</span><div className="split-cat">C</div>
            </div>
            <div className="split-center">SAME CAT.<br/><em>MORE COMPUTE.</em></div>
            <div className="split-half normal">
              <span>BASE MODEL</span><div className="split-cat">🐈‍⬛</div>
            </div>
          </div>
        </Section>

        <Section id="gallery">
          <SectionHeading eyebrow="06 / CHIPCAT LAB" title="FIELD <span>OPERATIONS</span>" copy="Five environments. One processor. Questionable results." />
          <div className="gallery">
            {gallery.map(([title,img,desc],i)=>(
              <motion.article className={`gallery-card g${i}`} key={title} initial={{opacity:0,scale:.96}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*.05}}>
                <img src={img} alt="" onError={(e)=>e.currentTarget.style.display="none"} />
                <div className="gallery-fallback"><span>CHIPCAT</span></div>
                <div className="gallery-overlay"><small>LAB / 0{i+1}</small><h3>{title}</h3><p>{desc}</p></div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="telemetry" className="telemetry-section">
          <SectionHeading eyebrow="07 / FICTIONAL TELEMETRY" title="CHIPCAT <span>TELEMETRY</span>" copy="Live-looking diagnostics for a completely fictional computing organism." />
          <div className="telemetry-grid">
            {[
              ["CAT PROCESSING", telemetry.processing+"%", telemetry.processing],
              ["PURR FREQUENCY", telemetry.purr+" GHz", telemetry.purr*20],
              ["TUNA BUFFER", telemetry.tuna+"%", telemetry.tuna],
              ["NAP RESERVE", telemetry.nap+"%", telemetry.nap],
              ["THOUGHTS PROCESSED", telemetry.thoughts, 0],
            ].map(([k,v,p],i)=>(
              <div className="telemetry-card" key={k}>
                <div><span>{k}</span><b>{v}</b></div>
                <div className="telemetry-line"><i style={{width:`${Math.min(100,Math.max(0,p))}%`}} /></div>
                <small>FICTIONAL DATA / AUTO REFRESH</small>
              </div>
            ))}
          </div>
        </Section>

        <Section id="errors" className="error-section">
          <div className="terminal">
            <div className="terminal-head"><span><i/> <i/> <i/></span><b>CHIPCAT://ERROR_LOG</b><span>LIVE</span></div>
            <div className="terminal-body">
              <div className="terminal-title"><Terminal size={18}/> RECENT SYSTEM ERRORS</div>
              {errors.map((e,i)=><motion.div key={e} className="error-line" initial={{opacity:0,x:-10}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.08}}><span>0{i+1}</span>{">"} {e}</motion.div>)}
              <div className="cursor">_</div>
            </div>
          </div>
        </Section>

        <Section id="community" className="community">
          <div className="community-box">
            <span className="eyebrow">09 / COMMUNITY</span>
            <h2>JOIN THE<br/><em>COMPUTE PACK.</em></h2>
            <p>CHIPCAT is a fictional internet character built around cats, computers, AI culture, and absurd technical humor.</p>
            <div className="socials">
              <a href="#" onClick={(e)=>e.preventDefault()}><X size={18}/> X / SOCIALS</a>
              <a href="#" onClick={(e)=>e.preventDefault()}><Github size={18}/> COMMUNITY</a>
              <a href="#" onClick={(e)=>e.preventDefault()}><Instagram size={18}/> ARTWORK</a>
            </div>
          </div>
        </Section>
      </main>

      <footer>
        <div><div className="footer-brand">CHIPCAT</div><div className="footer-tag">THE CHIP HAS LEGS.</div></div>
        <div className="footer-right">CAT PROCESSING UNIT ONLINE<br/><span>ORIGINAL FICTIONAL CHARACTER / CATOS REV. 01</span></div>
        <p>CHIPCAT is an original fictional character and creative internet brand. It is not affiliated with NVIDIA or any other technology company.</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
