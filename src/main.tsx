import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {profile} from './data/profile';
import {campaigns, type Campaign} from './data/campaigns';
import {content, contentFilters, type ContentItem, type ContentCategory} from './data/content';
import {network} from './data/network';
import {brands} from './data/testimonials';
import './styles.css';
import './theme.css';
import './content.css';
import './brands.css';
import './header.css';
import './hero.css';
import './campaigns.css';
import './network.css';
import './motion.css';
import './editorial.css';
import './content-layout.css';
import './spacing.css';
import './mobile.css';

function Icon({name='arrow',size=20}:{name?:string;size?:number}) {const paths:Record<string,React.ReactNode>={arrow:<><path d="M5 12h14M13 6l6 6-6 6"/></>,diagonal:<><path d="M6 18 18 6M6 6h12v12"/></>,content:<><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/></>,campaign:<><path d="m3 11 17-7v16l-17-7zM7 15l2 6h4l-3-7"/></>,network:<><circle cx="12" cy="6" r="3"/><circle cx="5" cy="17" r="3"/><circle cx="19" cy="17" r="3"/><path d="m10 9-3 5m7-5 3 5M8 17h8"/></>,growth:<><path d="M4 20V4M4 20h17M8 15l5-5 4 2 4-7"/></>,x:<path d="m5 4 14 16h-4L1 4h4Zm-2 16L19 4"/>,play:<path d="m9 5 11 7-11 7z"/>,close:<path d="m6 6 12 12M6 18 18 6"/>,menu:<path d="M4 7h16M4 12h16M4 17h16"/>,check:<path d="m5 12 4 4L19 6"/>,globe:<><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z"/></>,telegram:<path d="m3 11 18-7-4 17-6-5-3 3 1-6 8-6-11 5z"/>};return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]||paths.arrow}</svg>}
const nav=[['Content','content'],['Campaigns','campaigns'],['About','about']];
function Navbar(){return <header className="navbar"><div className="nav-inner">
  <a className="header-brand" href="#home" aria-label="Manish home"><img className="header-avatar" src={profile.headerAvatar} alt="" width="32" height="32"/><span className="wordmark">MANISH</span></a>
  <nav id="main-navigation" aria-label="Main navigation" className="nav-links">
    {nav.map(([name,id])=><a href={`#${id}`} key={id}>{name}</a>)}
    <a href="#contact" className="nav-talk">Let’s talk <Icon name="diagonal" size={14}/></a>
  </nav>
</div></header>}

const heroRoles=['Web3 Creator','Social Media Strategist','Video Creator','KOL Manager','Vibecoder'];
function HeroRole(){
  const[role,setRole]=useState(0);
  useEffect(()=>{
    const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer:number|undefined;
    const sync=()=>{
      window.clearInterval(timer);
      if(!preference.matches)timer=window.setInterval(()=>{
        if(!document.hidden)setRole(current=>(current+1)%heroRoles.length);
      },3000);
    };
    sync();
    preference.addEventListener('change',sync);
    return()=>{window.clearInterval(timer);preference.removeEventListener('change',sync)};
  },[]);
  return <p className="hero-roles"><span className="sr-only">{heroRoles.join(', ')}</span><span className="hero-role" key={role} aria-hidden="true">{heroRoles[role]}</span></p>;
}
function Hero(){
  const video=content.find(item=>item.id==='2074717587523420449')!;
  const article=content.find(item=>item.category==='Articles')!;
  return <section id="home" className="hero container">
    <div className="hero-copy">
      <h1>Manish<span className="sr-only"> — Web3 Creator</span><span className="hero-name-period" aria-hidden="true">.</span></h1>
      <HeroRole/>
      <p className="hero-description">{profile.description}</p>
      <div className="hero-actions">
        <a className="button primary" href="#contact">Work With Me <Icon name="diagonal" size={16}/></a>
        <a className="button desk-secondary" href="#content">Explore my content <Icon name="arrow" size={16}/></a>
      </div>
    </div>
    <div className="creator-desk" role="group" aria-label="Featured content folder">
      <div className="desk-papers" id="desk-papers" aria-label="A selection of my work">
        <a className="desk-paper desk-article" href={article.url} target="_blank" rel="noopener noreferrer" aria-label={`Read ${article.title} on X`}><img src={article.thumbnail} alt="My Polymarket article cover"/><span>FROM MY FEED ↗</span></a>
        <a className="desk-paper desk-video" href={video.url} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${video.title} on X`}><img src={video.thumbnail} alt="Manish presenting a short-form video"/><span><Icon name="play" size={13}/> SHORT-FORM VIDEO</span></a>
        <div className="desk-paper desk-note"><p>Creator &amp; Marketer<br/>I spot the angle and bring it to the timeline.</p></div>
        <a className="desk-paper desk-portrait" href="#about" aria-label="A little more about Manish"><img src="/profile/about-photo.png" alt="Manish overlooking a lake and hills"/><span>THE PERSON BEHIND THE POSTS ↗</span></a>
      </div>
      <div className="desk-folder">
        <span className="folder-tab" aria-hidden="true"/>
        <span className="folder-inside"><span className="folder-title">a little of what I do.</span><span className="folder-bottom"><span>CONTENT / CREATORS / CAMPAIGNS</span></span></span>
      </div>
      <div className="desk-socials" aria-label="Find Manish online"><a href={profile.contact.x} target="_blank" rel="noopener noreferrer" aria-label="Find Manish on X"><Icon name="x" size={22}/></a><a href={profile.contact.telegramChannel} target="_blank" rel="noopener noreferrer" aria-label="Follow Manish on Telegram" title="Join on Telegram"><Icon name="telegram" size={22}/></a></div>
    </div>
  </section>
}
function SectionHeading({title,subtitle,children}:{title:string;subtitle?:string;children?:React.ReactNode}){return <div className="section-heading"><div><h2>{title}</h2>{subtitle&&<p>{subtitle}</p>}</div>{children}</div>}
function CampaignCard({campaign}:{campaign:Campaign}){
  const[logoFailed,setLogoFailed]=useState(false);
  return <article className="campaign-study" aria-labelledby={`campaign-${campaign.id}`}>
    <a className="campaign-identity" href={campaign.projectUrl} target="_blank" rel="noopener noreferrer">
      {campaign.logo&&!logoFailed&&<img src={campaign.logo} alt="" width="48" height="48" loading="lazy" decoding="async" onError={()=>setLogoFailed(true)}/>}
      <div><h3 id={`campaign-${campaign.id}`}>{campaign.project}</h3><p className="campaign-category">{campaign.type}</p></div>
    </a>
    <p className="campaign-intro">{campaign.description}</p>
    <dl className="campaign-results" aria-label={`${campaign.project} campaign results`}>
      {campaign.metrics.map(metric=><div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}
    </dl>
    <div className="campaign-role"><h4>What I handled</h4><p>{campaign.role}</p></div>
    <p className="campaign-spend">Campaign spend: <span>{campaign.spend}</span></p>
    <div className="campaign-links">
      <a className="button primary" href={campaign.proofUrl} target="_blank" rel="noopener noreferrer">See campaign results <Icon name="diagonal" size={17}/></a>
    </div>
  </article>
}
function Campaigns(){return <section id="campaigns" className="section container reveal">
  <div className="campaign-heading"><h2>Selected campaigns</h2><p>Creator campaigns I’ve managed, with results you can check.</p></div>
  {campaigns.map(campaign=><CampaignCard key={campaign.id} campaign={campaign}/>)}
</section>}
function Modal({title,onClose,children}:{title:string;onClose:()=>void;children:React.ReactNode}){const ref=useRef<HTMLDialogElement>(null);useEffect(()=>{const el=ref.current!;el.showModal();const prev=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=prev}},[]);return <dialog ref={ref} className="modal" onCancel={onClose} aria-label={title} onClick={e=>{if(e.target===e.currentTarget)onClose()}}><div className="modal-inner"><div className="modal-heading"><span className="section-kicker">{title}</span><button className="close-button" aria-label="Close dialog" onClick={onClose}><Icon name="close"/></button></div>{children}</div></dialog>}
const contentDate = (date:string) => new Intl.DateTimeFormat('en',{month:'short',day:'numeric',year:'numeric'}).format(new Date(date));
function ContentCard({item,onOpen}:{item:ContentItem;onOpen:()=>void}){
  const [imageFailed,setImageFailed]=useState(false);
  const preview=item.preview;
  if(item.category==='Videos')return <article className="content-card content-card--live content-video-card">
    <button className="content-thumbnail content-thumbnail--real video" onClick={onOpen} aria-label={`Watch video: ${preview.title}`}>
      {imageFailed?<div className="content-image-fallback"><Icon name="play" size={24}/><span>{preview.title}</span></div>:<div className="content-image-strip"><img src={item.thumbnail} alt={item.images[0].alt} width={item.images[0].width} height={item.images[0].height} loading="lazy" decoding="async" onError={()=>setImageFailed(true)}/></div>}
      <span className="content-video-play"><Icon name="play" size={18}/></span>
    </button>
    <div className="content-video-caption"><h3>{preview.title}</h3><a className="content-x-link" href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${preview.title} on X`}>WATCH ON X <Icon name="diagonal" size={13}/></a></div>
  </article>;
  return <article className="content-card content-card--live content-text-card">
    <div className="content-card-label">{preview.label}</div>
    <h3><button type="button" className="content-title-button" onClick={onOpen} aria-label={`Preview ${item.category==='Articles'?'article':'post'}: ${preview.title}`}>{preview.title}</button></h3>
    <div className="content-text-body">
      <p className="content-card-excerpt">{preview.excerpt}</p>
    </div>
    <div className={`content-image-previews ${item.images.length>1?'content-image-previews--multiple':''}`}>
      {item.images.map((image,index)=><button key={image.src} type="button" className="content-image-preview" onClick={onOpen} aria-label={`Preview image${index?' '+(index+1):''} for ${preview.title}`}><img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async"/></button>)}
    </div>
    <a className="content-x-link" href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Read ${preview.title} on X`}>READ ON X <Icon name="diagonal" size={13}/></a>
  </article>
}
function ContentPreviewModal({item,onClose}:{item:ContentItem;onClose:()=>void}){
  const[videoFailed,setVideoFailed]=useState(false);
  const video=item.category==='Videos';
  return <Modal title={`${video?'Video':item.category==='Articles'?'Article':'Post'} / X`} onClose={onClose}>
    <div className="content-preview-author"><img src={profile.avatar} alt="" width="34" height="34"/><div><strong>{profile.name}</strong><a href={profile.contact.x} target="_blank" rel="noreferrer">{profile.contact.xHandle}</a></div><time dateTime={item.publishedAt}>{contentDate(item.publishedAt)}</time></div>
    <h2 className="content-preview-title">{item.title}</h2>
    {video&&item.videoUrl?<div className="content-preview-video">{videoFailed?<a className="content-video-fallback" href={item.url} target="_blank" rel="noreferrer" aria-label={`Watch ${item.title} on X`}><img src={item.thumbnail} alt={`Video preview for ${item.title}`}/><span><Icon name="play" size={16}/> Watch on X <Icon name="diagonal" size={16}/></span></a>:<video controls playsInline preload="metadata" poster={item.thumbnail} aria-label={item.title} onError={()=>setVideoFailed(true)}><source src={item.videoUrl} type="video/mp4"/>Your browser does not support this video. Watch it on X using the link below.</video>}</div>:<div className={`content-preview-gallery ${item.images.length>1?'has-multiple':''}`}>{item.images.map(im=><figure key={im.src}><img src={im.src} alt={im.alt} width={im.width} height={im.height}/></figure>)}</div>}
    <div className="content-preview-caption"><span>{item.category==='Articles'?'ARTICLE EXCERPT':'FROM THE POST'}</span><blockquote>{item.caption}</blockquote></div>
    <a className="button primary" href={item.url} target="_blank" rel="noreferrer">{video?'Watch on X':item.category==='Articles'?'Read full article on X':'View original post on X'}<Icon name="diagonal" size={16}/></a>
  </Modal>
}
function Content(){
  const[filter,setFilter]=useState<ContentCategory>('All');
  const[selected,setSelected]=useState<ContentItem|null>(null);
  const shown=content.filter(c=>filter==='All'||c.category===filter).sort((a,b)=>a.preview.order-b.preview.order);
  return <section id="content" className="section container reveal">
    <SectionHeading title="CONTENT" subtitle="Videos, articles and posts from my side of Web3."><a className="text-button" href={profile.contact.x} target="_blank" rel="noreferrer">More on X <Icon name="diagonal" size={16}/></a></SectionHeading>
    <div className="content-tabs" role="tablist" aria-label="Content categories">{contentFilters.map(f=><button key={f} role="tab" aria-selected={f===filter} aria-controls="content-panel" id={`tab-${f.replaceAll(' ','-')}`} className={f===filter?'active':''} onClick={()=>setFilter(f)} onKeyDown={e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const idx=contentFilters.indexOf(f);const next=contentFilters[(idx+(e.key==='ArrowRight'?1:contentFilters.length-1))%contentFilters.length];setFilter(next);document.getElementById(`tab-${next.replaceAll(' ','-')}`)?.focus()}}}>{f}<span className="content-tab-count">{f==='All'?content.length:content.filter(c=>c.category===f).length}</span></button>)}</div>
    <div id="content-panel" role="tabpanel" aria-labelledby={`tab-${filter.replaceAll(' ','-')}`} className="content-grid">{shown.map(c=><ContentCard key={c.id} item={c} onOpen={()=>setSelected(c)}/>)}</div>
    {selected&&<ContentPreviewModal key={selected.id} item={selected} onClose={()=>setSelected(null)}/>}
  </section>
}
function CreatorNetwork(){
  const [screenshotFailed,setScreenshotFailed]=useState(false);
  return <section id="network" className="section container reveal">
  <div className="creator-network-heading"><h2>{network.title}</h2></div>
  <article className="creator-network-card" aria-label="Creators Room community">
    <div className="creator-network-body">
      <div className="creator-network-copy">
        <p className="creator-network-count"><strong>{network.count}</strong> <span>{network.label}</span></p>
        <p className="creator-network-intro">{network.intro}</p>
        <div className="creator-network-matching"><p><strong>Topics:</strong> {network.topics}</p><p><strong>Matched by:</strong> {network.matchedBy}</p></div>
        <div className="creator-network-actions"><a className="button primary" href="#contact">Plan a creator campaign <Icon name="diagonal" size={16}/></a><a className="creator-network-join" href={network.roomUrl} target="_blank" rel="noopener noreferrer">Creator? Join Creators Room <span aria-hidden="true">↗</span></a></div>
      </div>
      <figure className="creator-network-proof">
        <a href={network.roomUrl} target="_blank" rel="noopener noreferrer" aria-label="Open Creators Room on Telegram"><img src={screenshotFailed?network.screenshotFallback:network.screenshot} alt="Screenshot of the Creators Room community on Telegram" width="648" height="507" loading="eager" decoding="async" onError={()=>setScreenshotFailed(true)}/></a>
        <figcaption>Creators Room on Telegram</figcaption>
      </figure>
    </div>
    <div className="creator-network-footer"><p>{network.note}</p></div>
  </article>
</section>}

function BrandPostLink({brand,post}:{brand:string;post:{label:string;url:string}}){return <li><a href={post.url} target="_blank" rel="noopener noreferrer" aria-label={`${brand}: ${post.label} on X`}><Icon name="x" size={12}/><span>{post.label}</span><Icon name="diagonal" size={14}/></a></li>}
function SocialProof(){
  if(!brands.length)return null;
  return <section id="projects" className="section container proof-section reveal">
    <div className="brands-block">
      <h2>Selected brand work</h2>
      <div className="brand-grid brand-grid--logos">{brands.map(brand=><div className="brand-card" key={brand.name}>
        <div className="brand-identity">
          {brand.logo&&<img src={brand.logo} alt={`${brand.name} logo`} loading="lazy" decoding="async" width="64" height="64"/>}
          <div className="brand-caption"><strong>{brand.name}</strong></div>
        </div>
        {!!brand.posts.length&&<div className="brand-work">
          <ul className="brand-work-list" aria-label={`${brand.name} posts on X`}>{brand.posts.slice(0,2).map(post=><BrandPostLink key={post.url} brand={brand.name} post={post}/>)}</ul>
          {brand.posts.length>2&&<details className="brand-more-posts"><summary><span className="brand-more-label">See all posts</span><span className="brand-less-label">Show fewer posts</span><span className="brand-more-icon" aria-hidden="true">+</span></summary><ul className="brand-work-list" aria-label={`More ${brand.name} posts on X`}>{brand.posts.slice(2).map(post=><BrandPostLink key={post.url} brand={brand.name} post={post}/>)}</ul></details>}
        </div>}
      </div>)}</div>
    </div>
  </section>
}
function About(){return <section className="section container about-section reveal" id="about">
  <div className="about-section-heading"><div className="section-kicker">THE PERSON BEHIND THE POSTS</div><h2>A little more <em>Manish.</em></h2></div>
  <div className="about-layout">
    <article className="about-story editorial-tile" aria-labelledby="about-story-heading"><h3 className="desk-label about-box-label" id="about-story-heading">ABOUT ME</h3>{profile.about.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</article>
  </div>
</section>}
function Contact(){return <section id="contact" className="section container contact-section reveal"><div className="contact-panel"><div className="contact-copy"><div className="section-kicker">THE NEXT GOOD THING STARTS HERE</div><h2>Have something<br/>worth talking about?</h2><p>A project, a campaign, or an early idea.<br/>Let’s make a connection.</p></div><div className="contact-actions"><a className="button contact-telegram" href={profile.contact.telegram} target="_blank" rel="noopener noreferrer">Let’s talk</a><a className="button contact-x" href={profile.contact.x} target="_blank" rel="noopener noreferrer">Find me on X <Icon name="diagonal" size={16}/></a></div></div></section>}
function Footer(){return <footer className="container"><div className="footer-top"><div><a className="wordmark" href="#home">MANISH</a></div><div><a href={profile.contact.x} target="_blank" rel="noreferrer">X <Icon name="diagonal" size={13}/></a><a href={profile.contact.telegram} target="_blank" rel="noreferrer">Telegram <Icon name="diagonal" size={13}/></a></div></div></footer>}
function usePortfolioMotion(){
  useEffect(()=>{
    const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
    if(preference.matches||!('IntersectionObserver' in window))return;
    const targets='.hero-copy > *, .creator-desk, #content .section-heading, .content-tabs, .content-card--live, .brands-block > .section-kicker, .brands-block > h2, .brand-card, .campaign-heading, .campaign-study, .creator-network-heading, .creator-network-card, .about-section-heading, .editorial-tile, .contact-panel, footer > div';
    const initialized=new Set<HTMLElement>();
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
      });
    },{threshold:0,rootMargin:'0px 0px -32px 0px'});
    const prepare=(element:HTMLElement)=>{
      if(initialized.has(element))return;
      initialized.add(element);
      const siblings=element.parentElement?Array.from(element.parentElement.children):[];
      const stagger=element.matches('.content-card--live, .brand-card')?(siblings.indexOf(element)%3)*70:element.parentElement?.matches('.about-layout')?siblings.indexOf(element)*110:element.parentElement?.matches('.hero-copy')?siblings.indexOf(element)*70:0;
      element.style.setProperty('--reveal-delay',`${stagger}ms`);
      element.classList.add('motion-reveal');
      observer.observe(element);
    };
    document.querySelectorAll<HTMLElement>(targets).forEach(prepare);
    // New cards created by the portfolio filters receive the same entrance treatment.
    const mutations=new MutationObserver(records=>{
      records.forEach(record=>record.addedNodes.forEach(node=>{
        if(!(node instanceof HTMLElement))return;
        if(node.matches(targets))prepare(node);
        node.querySelectorAll<HTMLElement>(targets).forEach(prepare);
      }));
    });
    mutations.observe(document.getElementById('root')!,{childList:true,subtree:true});
    const stop=()=>{
      observer.disconnect();mutations.disconnect();
      initialized.forEach(element=>{element.classList.remove('motion-reveal','is-visible');element.style.removeProperty('--reveal-delay')});
    };
    const onPreferenceChange=()=>{if(preference.matches)stop()};
    preference.addEventListener('change',onPreferenceChange);
    return()=>{stop();preference.removeEventListener('change',onPreferenceChange)};
  },[]);
}
function App(){usePortfolioMotion();return <><a className="skip-link" href="#content">Skip to content</a><Navbar/><main><Hero/><Content/><SocialProof/><Campaigns/><CreatorNetwork/><About/><Contact/></main><Footer/></>}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
