/* Ethan Tan: a portfolio built as a non-linear editor.
   Edit CLIPS below to change content. Scenes: 0/3 window light, 2 dunes, 4 skyline, 5 dunes + Gamertaggd gem, 6 dunes + Salience in/out mark.
   The 3D marks turn to follow the pointer. A bloom pass makes the whites glow. */

const EMAIL = "ethanntann.dev@gmail.com";
const GITHUB = "https://github.com/ethanntann";
const LINKEDIN = "https://www.linkedin.com/in/ethanntann";
const RESUME_PDF = "assets/Ethan-Tan-Resume.pdf";
const SITE = "https://ethan-tan.dev/";

// Duotone grades: shadow, mid, highlight
const GRADES = {
  lagoon:  { name: "Lagoon",  c: ["#0d2620", "#3f8a6c", "#dfe9bd"] },
  golden:  { name: "Golden",  c: ["#170f05", "#a2681a", "#f6cd6b"] },
  cyan:    { name: "Cyano",   c: ["#06172d", "#2f69ad", "#e6eef6"] },
  rose:    { name: "Ember",   c: ["#1a080d", "#b3354d", "#f7d4c3"] },
  mono:    { name: "Mono",    c: ["#0a0a0a", "#6e6e6a", "#f1efe6"] },
  paper:   { name: "Paper",   c: ["#1b1a17", "#8b8778", "#efeadc"] },
};

// Night ↔ day: the slider keeps the dither fixed and moves the light.
// Day = the clip's own grade; dusk and night are shared.
const DUSK = ["#1c0b24", "#8c3d6e", "#f4b9a2"].map((h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255));
const NIGHT = ["#04060e", "#1d2a57", "#93a9de"].map((h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255));

const CLIPS = [
  {
    id: "intro", file: "00_INTRO.mov", label: "Intro", dur: 8, scene: 0, grade: "lagoon",
    thumb: "assets/thumbs/intro.jpg", color: "#2c5b4b",
    blurb: "Solo developer. Open to new-grad SWE roles, 2027.",
    card: {
      title: ["Ethan", "Tan"],
      sub: "Solo developer building products end to end. I’m a current CS student at Case Western Reserve University, graduating May 2027, and open to new-grad SWE roles anywhere in the US.",
      links: [["Projects →", "#gamertaggd"], ["Resume ↗", RESUME_PDF]],
    },
    info: {
      title: "Ethan Tan", sub: "Solo developer · Graduating May 2027",
      meta: { "Looking for": "New-grad SWE roles", Graduating: "May 2027, Case Western", Based: "Cleveland · open to relocating in the US", Shipped: "Gamertaggd (App Store)", Building: "Salience" },
      body: `<p>I build complete products on my own, from the database to the last animation: a social iOS app with its own API, website and Windows tracker, and a Windows app that records, describes and ranks gameplay.</p>
      <p>I like hard engineering problems with a person at the end of them: crash-safe imports, recording a game at 3% CPU so it costs no frames, a ranking model that learns one player's taste.</p>
      <h4>Off the clock</h4><p>The gym, gaming, making games, shooting and editing video, travel and Japanese. Flip the About clip to <b>Off the clock</b> to see more.</p>`,
      tags: ["TypeScript", "React Native", "Swift", "Rust", "Python", "Node.js", "Video"],
    },
  },
  {
    id: "gamertaggd", file: "01_GAMERTAGGD.prores", label: "Gamertaggd", dur: 9, scene: 5, grade: "golden",
    thumb: "assets/thumbs/gamertaggd.jpg", color: "#6a4a14",
    blurb: "Letterboxd for games. iOS, API, web and Windows, built solo.",
    card: {
      title: ["Gamer", "taggd"],
      sub: "Letterboxd and Strava for games, built and shipped solo: an iOS app, its API, a website and a Windows tracker. Live on the App Store.",
      links: [["App Store ↗", "https://apps.apple.com/us/app/gamertaggd/id6789941011"], ["gamertag.gd ↗", "https://gamertag.gd"], ["The story", "open:gamertaggd"]],
    },
    info: {
      title: "Gamertaggd", sub: "Social game tracking app", icon: "assets/gtg-icon.png",
      meta: { Role: "Founder & Product Engineer", Dates: "Jun 2026 – present", Status: "Live on the App Store", Platforms: "iOS · Web · Windows", Website: `<a href="https://gamertag.gd" target="_blank" rel="noopener">gamertag.gd ↗</a>`, GitHub: `<a href="https://github.com/ethanntann/gamertaggd-showcase" target="_blank" rel="noopener">gamertaggd-showcase ↗</a>` },
      body: `<p>Four parts that work together: an iOS app, a backend API that imports libraries and matches games, a website with shareable Blend and recap pages, and a Windows tracker that logs PC sessions automatically.</p>
      <ul><li>Steam → IGDB fuzzy matching, so every game has one canonical ID.</li><li>Crash-safe imports on a leased PostgreSQL job queue.</li><li>AI-built lists that can only pick real games, chosen by ID.</li></ul>`,
      tags: ["React Native", "Expo", "Swift · ActivityKit", "Node · Hono", "Supabase", "Rust · Tauri", "RevenueCat", "Claude API"],
    },
    notes: `<div class="story">
      <h2>Gamertaggd</h2><p class="dim">Track every game you play. Live on the App Store since September 2026.</p>
      <h4>Why this</h4>
      <p>I track a lot of my life: workouts on Strava, films on Letterboxd. Games had nothing. When friends, or strangers, get competitive about games, we compare how many we've played, on what, how many we've 100%'d and how many hours we've sunk in, and nobody actually knows. The numbers either live in five different launchers or don't exist.</p>
      <p>So I built the app I wanted in my pocket: one true record of everything I play that I can pull up and show someone, and that uses the same data to tell me what to play next when I'm in a slump.</p>
      <h4>Key decisions</h4>
      <ol class="decisions">
        <li><b>One record across every store.</b> Steam, Epic and GOG all number the same game differently, so everything is keyed on one catalog (IGDB). Hours from your PC and a rating from your phone add up on the same game.</li>
        <li><b>Automatic logging.</b> Start a game on Steam and Gamertaggd picks it up and times the session live on your iPhone Lock Screen. For games that don't track their own playtime, a small Windows tracker logs it for you, even offline. Hours were the number nobody knew, so you never have to type them in.</li>
        <li><b>Your whole library in one tap.</b> An empty app is a dead app, so the first thing you can do is import your whole Steam library in one tap. Imports run as jobs that retry safely, so a big library never half-imports or duplicates.</li>
        <li><b>Made to be shown.</b> The point is pulling it up for someone. Blends, which compare your taste with a friend's, and recaps are shareable links that open as a proper preview in any chat, no app needed.</li>
        <li><b>What to play next, from your own games.</b> The backlog planner suggests games you already own based on your mood, and AI-built lists can only pick real games, so a suggestion is always something you can actually play.</li>
      </ol>
      <img class="shot" src="assets/gtg-hero.png" alt="Gamertaggd on iPhone">
      <div class="btn-row"><a class="btn primary" href="https://apps.apple.com/us/app/gamertaggd/id6789941011" target="_blank" rel="noopener">App Store ↗</a><a class="btn" href="https://github.com/ethanntann/gamertaggd-showcase" target="_blank" rel="noopener">GitHub ↗</a></div>
    </div>`,
  },
  {
    id: "salience", file: "02_SALIENCE.mp4", label: "Salience", dur: 9, scene: 6, grade: "cyan",
    thumb: "assets/thumbs/salience.jpg", color: "#22476e",
    blurb: "Keeps the Fortnite clips you would have kept, without costing you frames.",
    card: {
      title: ["Salience"],
      sub: "A Fortnite auto-clipper built by a competitive gamer for competitive gamers: it keeps the clips you would have kept.",
      links: [["GitHub ↗", "https://github.com/ethanntann/salience"], ["The story", "open:salience"]],
    },
    info: {
      title: "Salience", sub: "Auto-clipper that learns your taste",
      meta: { Role: "Solo developer", Dates: "Jul 2026 – present", Capture: "WGC → NVENC, ~3% CPU", Ranking: "Logistic taste model" },
      body: `<p>Live triggers caught only 5 of the 15 moments I actually kept. Salience looks at every moment after the match ends, so nothing heavy runs while you play.</p>
      <ul><li>Keeps the clips you would have kept: 97.4% agreement with my own keep/skip ratings.</li><li>Records on the GPU’s video encoder at about 3% of a CPU core, down from 63–112%, so it costs you no frames.</li><li>Picked a vision model that matched the best one on 8 of 9 hard windows at 1/20 the price.</li><li>Cold start: 20 liked clips take a new player from 78% to 85%.</li></ul>`,
      tags: ["Python", "PyTorch", "FFmpeg", "NVENC", "Vision LLM", "Whisper", "pywebview", "Cloudflare Workers"],
    },
    notes: `<div class="story">
      <h2>Salience</h2><p class="dim">A Fortnite auto-clipper that keeps the clips you would have kept.</p>
      <h4>Why this</h4>
      <p>Clipping a moment always pulled me out of it. Hitting a hotkey or saying “clip that” meant stepping out of a funny moment with friends, out of the immersion of the game, or out of flow in the middle of a hard play. It’s like carrying a camera everywhere, waiting for the right shot instead of living the moment.</p>
      <p>So Salience does the watching for me. It records in the background and looks back over every moment once the match is over, so I can just play. It also had to beat the usual triggers: when I measured them on my own footage, a live trigger caught only <b>5 of the 15</b> moments I actually kept. And a good clip is personal, so it learns what <i>you</i> keep.</p>
      <p>I’m a competitive gamer and a former budget gamer with a potato PC, so performance was everything. Squeezing every last frame out of a new PC was a ritual, and at some point I realised part of what I was fighting was bloatware: software quietly slowing the hardware down. So Salience had one rule: you should never notice it’s running while you play.</p>
      <h4>Key decisions</h4>
      <ol class="decisions">
        <li><b>Invisible while you play.</b> Recording runs on the graphics card’s built-in video encoder, at about 3% of one CPU core (my first version took 63–112%). Every bit of analysis waits until the game closes, because doing it live cost about 11 fps, and no competitive player gives up 11 fps.</li>
        <li><b>Look at everything, not just triggers.</b> A vision model describes every 8-second window for about $0.003 each, chosen from 8 models at 1/20 the price of the best.</li>
        <li><b>Your taste, measured.</b> A model trained on your keep/skip ratings puts 97.4% of kept/skipped pairs in the right order.</li>
        <li><b>Keep data local.</b> Only gameplay frames leave the PC. Audio, transcripts, inputs and ratings stay on it.</li>
        <li><b>No game hooks.</b> Capture uses the same Windows APIs as any screen recorder, so anti-cheat sees nothing unusual, and there’s no OBS to set up.</li>
      </ol>
      <img class="shot" src="assets/sal-session.png" alt="A session's highlights in Salience">
      <div class="btn-row"><a class="btn primary" href="https://github.com/ethanntann/salience" target="_blank" rel="noopener">View on GitHub ↗</a></div>
    </div>`,
  },
  {
    id: "experience", file: "03_EXPERIENCE.edl", label: "Experience", dur: 8, scene: 2, grade: "paper",
    thumb: "assets/thumbs/experience.jpg", color: "#5a5648",
    blurb: "Case Western CS '27. Handshake AI, SearchOwl, game jams.",
    card: {
      title: ["Experience"], small: true,
      sub: "<p class=\"credits-kicker\">What I’d bring to your team</p><ul class=\"credits\"><li><b>I own features end to end</b><span>Gamertaggd is an iOS app, API, website and Windows tracker I designed, built and shipped alone. Hand me a problem and I’ll carry it from idea to release.</span></li><li><b>I build things people rely on</b><span>At SearchOwl I put sign-in for 250+ users on AWS Cognito and replaced manual account setup with one-click OAuth, in production, on a real team.</span></li><li><b>I measure before I decide</b><span>With Salience I tested live triggers (5 of 15 moments caught) and 8 vision models before choosing one at 1/20 the cost. My calls come with numbers.</span></li><li><b>I care how it feels</b><span>Salience records at about 3% CPU so players never lose a frame. Performance and polish aren’t an afterthought for me.</span></li><li><b>I learn unfamiliar systems fast</b><span>I reverse-engineered an undocumented Bluetooth protocol to put a massage chair under an AI assistant’s control.</span></li></ul>",
      links: [["Resume ↗", RESUME_PDF], ["GitHub ↗", GITHUB]],
    },
    info: {
      title: "Experience", sub: "Case Western Reserve University · Class of 2027",
      meta: { Degree: "B.A. Computer Science", Minors: "Japanese, Computer Gaming", GPA: "3.5 / 4.0", Graduating: "May 2027" },
      body: `<h4>Roles</h4><ul>
        <li><b>Gamertaggd</b>: Founder &amp; Product Engineer, 2026–</li>
        <li><b>Handshake AI Fellowship</b>: RLHF model evaluator, 2026–</li>
        <li><b>SearchOwl</b>: Backend engineer intern, 2024</li>
        <li><b>CWRU</b>: Medical library assistant, 2025–</li></ul>
        <h4>Also built</h4><ul>
        <li><b>Massage Chair MCP Controller</b>: reverse-engineered a Bluetooth LE protocol so an AI assistant can run the chair.</li>
        <li><b>CYMKO &amp; The Chimera of Antarctica</b>: 3rd Most Innovative Game, ECSE 390 Game Jam.</li></ul>`,
      tags: ["Python", "TypeScript", "Rust", "Java", "C#", "SQL", "React", "Next.js", "FastAPI", "GraphQL", "AWS", "Docker"],
    },
    notes: `<div class="resume">
      <div class="r-head"><h2>Ethan Tan</h2><p class="dim mono">Cleveland, OH · <a href="mailto:${EMAIL}">${EMAIL}</a> · <a href="${LINKEDIN}" target="_blank" rel="noopener">LinkedIn ↗</a> · <a href="${GITHUB}" target="_blank" rel="noopener">GitHub ↗</a></p></div>
      <div class="btn-row"><a class="btn primary" href="${RESUME_PDF}" target="_blank" rel="noopener">Open PDF ↗</a><a class="btn" href="${RESUME_PDF}" download>Download</a></div>

      <h4 class="r-sec">Education</h4>
      <div class="edl"><span class="edl-n">001</span><div><b>Case Western Reserve University</b><span class="edl-tc">exp. May 2027</span>
        <p>B.A. Computer Science · Minors: Japanese, Computer Gaming · GPA 3.5/4.0</p>
        <p class="dim">Data Structures &amp; Algorithms, Operating Systems, Computer Security, Artificial Intelligence, Full Stack Web Development, Game Design</p></div></div>

      <h4 class="r-sec">Experience</h4>
      <div class="edl"><span class="edl-n">002</span><div><b>Gamertaggd</b> · Founder &amp; Product Engineer<span class="edl-tc">Jun 2026 – present</span><ul>
        <li>Built and launched a social game-tracking iOS app: one-tap Steam import, ratings, reviews, lists, and friends (React Native, Expo, TypeScript).</li>
        <li>Designed Blend, a taste-matching algorithm that scores any number of players on rating agreement, genre overlap, shared games and completion habits, then recommends games the group would all enjoy.</li>
        <li>Added subscriptions with Apple In-App Purchase and RevenueCat, A/B testing a free trial's effect on conversions.</li>
        <li>Extended tracking to PC with a Rust + Tauri Windows app that logs Steam, Epic and GOG sessions, even offline.</li></ul></div></div>
      <div class="edl"><span class="edl-n">003</span><div><b>Handshake AI Fellowship</b> · RLHF Model Evaluator<span class="edl-tc">May 2026 – present</span><ul>
        <li>Wrote adversarial prompts to find where language models fail at multi-step tasks, such as claiming actions they never performed.</li>
        <li>Produced human preference data by ranking responses on task completion and error recovery.</li></ul></div></div>
      <div class="edl"><span class="edl-n">004</span><div><b>SearchOwl</b> · Backend Engineer Intern<span class="edl-tc">Mar – Aug 2024</span><ul>
        <li>Secured sign-in for 250+ users by building and deploying authentication on AWS Cognito.</li>
        <li>Replaced manual account creation with one-click OAuth sign-in.</li>
        <li>Built the GraphQL API for account data in AWS Amplify on existing DynamoDB tables.</li></ul></div></div>

      <h4 class="r-sec">Projects</h4>
      <div class="edl"><span class="edl-n">005</span><div><b>Salience</b> · Python, PyTorch, FFmpeg<span class="edl-tc">Jul 2026 – present</span><ul>
        <li>Records Fortnite in the background and turns each session into ranked highlights minutes after the game closes.</li>
        <li>Personal ranking model keeps the clips you'd keep above the ones you'd skip 97% of the time; new players go from 78% to 85%.</li>
        <li>Cut recording CPU from 63–112% of a core to about 3% by moving capture onto the GPU.</li></ul></div></div>
      <div class="edl"><span class="edl-n">006</span><div><b>Massage Chair MCP Controller</b> · Bluetooth LE, MCP<span class="edl-tc">Jun – Jul 2026</span><ul>
        <li>Reverse-engineered an undocumented Bluetooth LE protocol by capturing traffic and writing a binary parser.</li>
        <li>Exposed the chair's controls as Model Context Protocol tools so an AI assistant can run it from plain language.</li></ul></div></div>
      <div class="edl"><span class="edl-n">007</span><div><b>CYMKO &amp; The Chimera of Antarctica</b> · Unity, C#<span class="edl-tc">Apr – Dec 2024</span><ul>
        <li>3rd Most Innovative Game at the ECSE 390 Game Jam; built the platformer's collision and sound systems.</li>
        <li>Led programmers and artists to ship a 2D horror game.</li></ul></div></div>

      <h4 class="r-sec">Also</h4>
      <p>Medical Library Assistant, Case Western (Aug 2025 – present) · Developing Secure Software certification, Open Source Security Foundation (Dec 2024)</p>

      <h4 class="r-sec">Skills</h4>
      <table class="skills">
        <tr><td>Languages</td><td>Python, TypeScript, JavaScript, Java, C#, Rust, SQL, HTML/CSS</td></tr>
        <tr><td>Frameworks</td><td>React, React Native, Expo, Next.js, Node.js, FastAPI, GraphQL, Tailwind CSS, Tauri, PyTorch, ONNX Runtime, OpenCV, scikit-learn, FFmpeg, Unity</td></tr>
        <tr><td>Tools</td><td>Git, GitHub Actions, CI/CD, Docker, AWS (Cognito, Amplify, DynamoDB), PostgreSQL, Supabase, Sentry, RevenueCat, MCP</td></tr>
      </table>
    </div>`,
  },
  {
    id: "contact", file: "04_CONTACT.wav", label: "Contact", dur: 7, scene: 4, grade: "mono",
    thumb: "assets/thumbs/contact.jpg", color: "#3d3d3a",
    blurb: "ethanntann.dev@gmail.com",
    card: {
      title: ["Let's build", "together."], small: true,
      sub: "Open to new-grad software engineering roles from summer 2027, anywhere in the US.",
      links: [["Contact me →", "compose:"], ["LinkedIn ↗", LINKEDIN]],
    },
    info: {
      title: "Contact", sub: "Roll credits",
      meta: { Email: `<a href="mailto:${EMAIL}">${EMAIL}</a>`, LinkedIn: `<a href="${LINKEDIN}" target="_blank" rel="noopener">in/ethanntann ↗</a>`, GitHub: `<a href="${GITHUB}" target="_blank" rel="noopener">ethanntann ↗</a>`, Based: "Cleveland · open to relocating", "Looking for": "New-grad SWE, 2027" },
      body: ``,
      tags: [],
    },
  },
];

// Off the clock: the About clip's second take.
const ITCH = "https://babyricoo.itch.io/";
const YOUTUBE = "https://www.youtube.com/c/babyrico";
const PERSONAL = {
  sub: "Off the clock, I enjoy going to the gym for powerlifting and bodybuilding. I love playing video games and also make games on the side, and I like to get my hands dirty building PCs. The rest of the time, I enjoy shooting content, editing videos, travelling and learning new languages like Japanese! I believe technology is a vessel for documentation, which is why I create content, use apps like Letterboxd and Strava, and build apps like Gamertaggd.",
  hobbies: [
    ["Video editing", `my channel: <a href="${YOUTUBE}" target="_blank" rel="noopener">YouTube ↗</a>`],
    ["Gaming", "currently playing Fortnite"],
    ["Making games", `jam games on <a href="${ITCH}" target="_blank" rel="noopener">itch.io ↗</a>`],
    ["Japanese", "N4 level"],
    ["Bodybuilding", "going for a bench PR"],
  ],
};

// ---------- analytics ----------
// Counts a few anonymous events with GoatCounter (no cookies, no personal data). Does nothing until
// the GoatCounter script tag in index.html is switched on.
const seen = new Set();
function track(name, once = true) {
  if (once && seen.has(name)) return;
  seen.add(name);
  window.goatcounter?.count?.({ path: name, title: name, event: true });
}
document.addEventListener("click", (e) => {
  const a = e.target.closest?.("a[href]"); if (!a) return;
  const h = a.getAttribute("href");
  if (h.endsWith(".pdf")) track("resume-open");
  else if (h.startsWith("mailto:")) track("email-click");
  else if (h.includes("github.com")) track("github:" + h.split("github.com/")[1]);
  else if (h.includes("linkedin.com")) track("linkedin");
  else if (h.includes("apps.apple.com")) track("app-store");
  else if (h.includes("itch.io")) track("itch");
}, true);

// ---------- sound ----------
// Scene ambience under the sequence. Nothing plays until the visitor turns sound on,
// and it plays only while the sequence is playing, like audio on a real timeline.
const SOUND = {
  amb: { window: "assets/audio/amb-window.mp3", dunes: "assets/audio/amb-dunes.mp3", city: "assets/audio/amb-city.mp3", night: "assets/audio/amb-night.mp3" },   // 40 s seamless loops
};
const AMB_FOR_SCENE = { 0: "window", 3: "window", 2: "dunes", 5: "dunes", 6: "dunes", 4: "city" };
const saved = loadPrefs("reel-mixer", { vol: 0.8, amb: { mute: false } });
const mixer = { on: false, vol: Math.max(0, Math.min(1, saved.vol)), amb: { mute: saved.amb.mute === true } };
const sound = { els: {} };
function saveMixer() { safeStore("reel-mixer", JSON.stringify(mixer)); }
function audible() { return mixer.on && !mixer.amb.mute; }
// Levels go through Web Audio gain nodes: iPhones ignore an audio element's volume.
function ensureSound() {   // created on the first tap that turns sound on, as browsers require
  if (!sound.ctx) { const AC = window.AudioContext || window.webkitAudioContext; if (AC) sound.ctx = new AC(); }
  if (sound.ctx && sound.ctx.state === "suspended") sound.ctx.resume();
  for (const [k, src] of Object.entries(SOUND.amb)) if (src && !sound.els[k]) {
    const a = new Audio(src); a.loop = true; a.preload = "auto";
    const el = { a, v: 0, g: null };
    if (sound.ctx) { el.g = sound.ctx.createGain(); el.g.gain.value = 0; sound.ctx.createMediaElementSource(a).connect(el.g).connect(sound.ctx.destination); }
    else a.volume = 0;
    a.play().then(() => { if (el.v < 0.001) a.pause(); }).catch(() => {});   // unlocks playback inside the tap (silent: level 0)
    sound.els[k] = el;
  }
}
function tickSound(dt) {
  const k = 1 - Math.exp(-dt * 4);
  const clip = CLIPS[state.active]; if (!clip) return;
  const here = AMB_FOR_SCENE[clip.scene] || "window";
  const live = audible() && state.playing;
  for (const [key, el] of Object.entries(sound.els)) {
    const a = el.a;
    let target = 0;
    // Past dusk a faint layer of crickets slips in under the scene's own sound, which carries on
    // as it is. Fainter still under the city.
    const n = Math.max(0, Math.min(1, 1 - state.daylight * 1.6));
    const city = here === "city";
    if (live) target = mixer.vol * (key === "night" ? 0.1 * n * (city ? 0.5 : 1)
      : key === here ? 0.55 * (1 - 0.1 * n) : 0);
    el.v = Math.max(0, Math.min(1, el.v + (target - el.v) * k));
    if (el.g) el.g.gain.value = el.v; else a.volume = el.v;
    if (target > 0.001 && a.paused) a.play().catch(() => {});
    if (target <= 0.001 && el.v < 0.01 && !a.paused) a.pause();
  }
}
function setSoundOn(on) {
  mixer.on = on; saveMixer();
  if (on) { ensureSound(); track("sound-on"); }
  const b = $("#soundBtn");
  b.setAttribute("aria-pressed", String(on)); b.setAttribute("aria-label", on ? "Sound on" : "Sound off");
  b.innerHTML = on ? ICON_SOUND_ON : ICON_SOUND_OFF;
  const p = $("#pSound");
  p.setAttribute("aria-pressed", String(on)); p.setAttribute("aria-label", on ? "Sound on" : "Sound off"); p.innerHTML = b.innerHTML;
  renderMixer();
}
function renderMixer() {
  $('[data-mute="amb"]').setAttribute("aria-pressed", String(mixer.amb.mute));
  $("#tl-amb").classList.toggle("silent", !audible());
  $("#strip").classList.toggle("silent", !audible());
}
const ICON_SOUND_OFF = '<svg viewBox="0 0 16 16"><path d="M2.5 6h2.5l3.5-3v10l-3.5-3h-2.5z"/><path d="M11 6l3.5 4M14.5 6L11 10" fill="none"/></svg>';
const ICON_SOUND_ON = '<svg viewBox="0 0 16 16"><path d="M2.5 6h2.5l3.5-3v10l-3.5-3h-2.5z"/><path d="M11 5.5a3.5 3.5 0 0 1 0 5M12.6 3.8a6 6 0 0 1 0 8.4" fill="none"/></svg>';
function bindMixer() {
  $("#soundBtn").addEventListener("click", () => setSoundOn(!mixer.on));
  $("#pSound").addEventListener("click", () => { setSoundOn(!mixer.on); if (mixer.on && !state.playing) play(); });
  const vol = $("#volSlider");
  vol.value = mixer.vol;
  vol.addEventListener("input", () => {
    mixer.vol = +vol.value; saveMixer();
    if (mixer.vol > 0 && !mixer.on) setSoundOn(true);   // dragging the volume up turns sound on
  });
  $('[data-mute="amb"]').addEventListener("click", (e) => { e.stopPropagation(); mixer.amb.mute = !mixer.amb.mute; saveMixer(); renderMixer(); });
  $$(".tl-hd button").forEach((b) => b.addEventListener("pointerdown", (e) => e.stopPropagation()));
  setSoundOn(false);   // always start silent; the button turns it on
}

// ---------- timeline math ----------
CLIPS.forEach((c) => { c.grade0 = c.grade; });   // each clip's own grade, for Reset effects
// Clip lengths can be trimmed on the timeline, so the layout is recomputed from the durations.
// VIEW is the length the timeline is drawn at: it holds still while a trim is being dragged.
let TOTAL = 0, VIEW = 0;
CLIPS.forEach((c) => { c.dur0 = c.dur; });
function relayout() {
  let acc = 0;
  CLIPS.forEach((c) => { c.start = acc; acc += c.dur; c.end = acc; });
  TOTAL = acc;
}
relayout();
VIEW = TOTAL;
const FPS = 24;
const TRANS = 0.7;

// Read saved preferences safely: a broken or tampered value falls back to the defaults, and
// only known keys with the same type as their default are taken (no __proto__ or stray keys).
function safeStore(k, v) { try { localStorage.setItem(k, v); } catch (_) {} }
function loadPrefs(key, defaults) {
  let raw = {};
  try { raw = JSON.parse(localStorage.getItem(key) || "{}") || {}; } catch (_) {}
  const out = { ...defaults };
  if (raw && typeof raw === "object") for (const k of Object.keys(defaults)) {
    if (Object.prototype.hasOwnProperty.call(raw, k) && typeof raw[k] === typeof defaults[k]) out[k] = raw[k];
  }
  return out;
}
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const reduceMotion = false;   // the site animates for everyone; Parallax can be switched off in Settings
// Viewer settings, kept between visits. Following the pointer is off by default for reduced-motion users.
const settings = loadPrefs("reel-settings", { follow: !reduceMotion, glow: true });
function saveSettings() { safeStore("reel-settings", JSON.stringify(settings)); }
function setFollow(on) {
  settings.follow = on; saveSettings();
  if (!on) { look.tx = 0; look.ty = 0; }
}

function tc(sec) {
  const f = Math.floor(sec * FPS);
  const ff = f % FPS, s = Math.floor(f / FPS) % 60, m = Math.floor(f / FPS / 60);
  return `00:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}:${String(ff).padStart(2, "0")}`;
}

// Film effects in the fx panel; each is 0–1 (letterbox is on/off).
const FILM_DEFAULT = { lb: false, hal: 0.5, diff: 0.15, ca: 0, vig: 0.35, leak: 0 };
const START_LIGHT = 0.66;   // golden hour: warm, but still on the Work take
const state = {
  t: 0.01, playing: false, active: -1,
  amount: 1, daylight: START_LIGHT, bloom: 1.2, noise: 0, boil: 0.8, bypass: false, take: "work", takeDay: null, ...FILM_DEFAULT, pixel: 3, levels: 3, grain: 0.07, pattern: 0,
  pal: GRADES.lagoon.c.map(hex), palFrom: null, palTo: null, palStart: 0,
  prevScene: 0, transStart: -10,
};

// ---------- WebGL ----------
// Exposure follows the light: full by day, a little lower at dusk and night.
function exposureFor(d) {
  const ss = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const wDay = ss(0.5, 1, d), wNight = 1 - ss(0, 0.5, d), wDusk = 1 - wDay - wNight;
  return wDay * 1.0 + wDusk * 0.9 + wNight * 0.86;
}

const canvas = $("#gl");
const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false });

const VERT = `attribute vec2 p; varying vec2 vUv; void main(){ vUv = p*.5+.5; gl_Position = vec4(p,0.,1.); }`;
const FRAG = `
precision highp float;
varying vec2 vUv;
uniform vec2 uRes; uniform float uTime;
uniform float uScene0; uniform float uScene1; uniform float uMix;
uniform float uNoise; uniform float uBoil;
uniform float uAmount; uniform float uExposure; uniform float uPixel; uniform float uLevels; uniform float uPattern; uniform float uGrain;
uniform vec3 uC0; uniform vec3 uC1; uniform vec3 uC2;
uniform float uD; uniform vec2 uRot; uniform vec2 uMark;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x), mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x), f.y); }
float fbm(vec2 p){ float v=0., a=.5; for(int i=0;i<4;i++){ v+=a*noise(p); p*=2.03; a*=.5; } return v; }
float bayer2(vec2 a){ a=floor(a); return fract(dot(a, vec2(.5, a.y*.75))); }
float bayer4(vec2 a){ return bayer2(.5*a)*.25 + bayer2(a); }
float bayer8(vec2 a){ return bayer4(.5*a)*.25 + bayer2(a); }

mat2 rotM(float a){ float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
vec3 pal(float x){ x=clamp(x,0.,1.); return x<.5 ? mix(uC0,uC1,x*2.) : mix(uC1,uC2,(x-.5)*2.); }

// Window light: sun through blinds on a wall, leaf shadows moving across it.
// The slider moves the light: by day a crisp patch, at dusk it stretches and
// shears across the wall, at night it turns into a dimmer moonlit patch.
float wDay, wDusk, wNight;
float windowLight(vec2 uv, float t){
  vec2 p = uv - .5; p.x *= uRes.x/uRes.y;
  float wall = .15 + .07*fbm(p*vec2(3.,9.));
  float shear = wDay*.3 + wDusk*-.85 + wNight*.55;
  float reach = wDay*.75 + wDusk*1.2 + wNight*1.;
  // the patch sits up and to the right of the title, whatever the monitor's shape
  vec2 o = vec2(.17*uRes.x/uRes.y + .07, .0) + wDay*vec2(-.02,.03) + wDusk*vec2(.04,-.05);
  o += uRot*vec2(.015, -.01);                                   // the light patch drifts with the pointer
  vec2 q = (p - o)/.6; q.x -= shear*q.y; q.y /= reach;
  float e = .012 + .03*wDusk + .02*wNight;
  float lit = smoothstep(.36, .36 - e, abs(q.x)) * smoothstep(.3, .3 - e, abs(q.y));
  lit *= smoothstep(.006, .006 + e*.6, abs(q.x)) * smoothstep(.006, .006 + e*.6, abs(q.y + .04));
  lit *= .25 + .75*smoothstep(.3, .42, fract(q.y*13.));
  float leaf = smoothstep(.5, .57, fbm(q*4.5 + vec2(sin(t*.6)*.07, cos(t*.5)*.05) + 9.));
  lit *= 1. - .85*leaf*smoothstep(.05, -.25, q.x);
  return wall*(wDay + wDusk*.55 + wNight*.4) + lit*(wDay*.62 + wDusk*.85 + wNight*.6);
}

// Dunes: layered sand ridges under a sky with sun, moon and stars.
float stars(vec2 p, float t){ vec2 g = floor(p*64.); float h = hash(g);
  vec2 d = abs(p - (g + .5)/64.) * uRes.y / uPixel;
  return step(.975, h) * step(max(d.x, d.y), .5 + .5*step(.995, h)) * (.6+.4*sin(t*2.+h*90.)); }
vec2 sunPos(float hz){ return wDay*vec2(-.5,.32) + wDusk*vec2(.42,hz+.07) + wNight*vec2(.9,-.8); }
vec2 moonPos(){ return vec2(.4, mix(-.7,.27,wNight)); }

// Sky with a sun that crosses and sets, then a crescent moon and stars.
float sky(vec2 p, float hz, float t){
  vec2 s = sunPos(hz), m = moonPos();
  float up = clamp((p.y - hz)/(.5 - hz), 0., 1.);
  float l = wDay*mix(.6,.36,up) + wDusk*mix(.5,.1,up) + wNight*mix(.2,.03,up);
  float ds = length(p - s);
  l += (wDay*.3 + wDusk*.5) * smoothstep(.6, 0., ds);
  l += (wDay + wDusk) * smoothstep(.075, .065, ds);
  float dm = length(p - m);
  l += wNight * (.22*smoothstep(.35, 0., dm) + .95*smoothstep(.062,.054,dm)*smoothstep(.046,.056,length(p - m - vec2(.026,.014))));
  l += wNight * stars(p, t) * .9;
  return l;
}

float ridgeY(float x, float fi){
  float s = x*(1.3 + .5*hash(vec2(fi, 3.))) + fi*7.31;
  return .5 + .5*sin(s + 1.2*sin(s*.43 + fi*2.1)) + .1*sin(s*2.7 + fi);
}
float dunes(vec2 p, float t){
  float hz = .1;
  float l = sky(p, hz, t);
  float lx = -wDay + wDusk + .8*wNight;
  for (int i = 0; i < 5; i++) {
    float fi = float(i), k = fi/4.;
    float x = p.x*mix(2.4, .9, k) + t*mix(.01, .04, k) + uRot.x*k*.12;   // near ridges slide a little further
    float base = hz - .5*(k*k*.6 + k*.4), amp = mix(.05, .22, k);
    float yr = base + amp*ridgeY(x, fi);
    if (p.y < yr) {
      float d = (yr - p.y)/amp;
      float xs = x + d*.6*lx, e = .02;
      float slope = (ridgeY(xs + e, fi) - ridgeY(xs - e, fi))/(2.*e);
      float lit = smoothstep(-.12, .12, -slope*lx) * (1. - .22*clamp(d, 0., 1.));
      lit *= .92 + .08*sin((p.y + .05*ridgeY(x*1.7, fi + 9.))*520.);
      float face = wDay*mix(.3, .88, lit) + wDusk*mix(.03, .62, lit) + wNight*mix(.05, .62, lit);
      face += (wDusk*.5 + wNight*.35)*smoothstep(.07, 0., d)*lit;
      float haze = wDay*.55 + wDusk*.4 + wNight*.22;
      l = mix(haze, face, mix(.35, 1., k));
    }
  }
  return l;
}


// Skyline: two rows of buildings over a lake; windows switch on at night.
float city(vec2 p, float hz, float t){
  float l = sky(p, hz, t);
  float sx = sunPos(hz).x;
  for (int i = 0; i < 2; i++) {
    float fi = float(i);
    float sc = mix(8.5, 5., fi), off = mix(3.7, 11.3, fi);
    float x = p.x*sc + off + uRot.x*fi*.12, id = floor(x), fx = fract(x);   // near row slides further
    float h = hz + mix(.1,.07,fi) + mix(.24,.42,fi)*pow(hash(vec2(id, off)), 1.7);
    if (p.y < h && fx > .07) {
      float toSun = step((id + .5 - off)/sc, sx);
      float edge = mix(step(fx, .2), step(.87, fx), toSun);
      float face = wDay*(mix(.42,.26,fi) + .1*hash(vec2(id, 4.)) + .2*edge) + wDusk*(mix(.15,.04,fi) + .55*edge*step(h - .2, p.y)) + wNight*.03;
      vec2 wv = vec2(fx*(4. + floor(hash(vec2(id, 9.))*4.)), (p.y - hz)*sc*7.);
      vec2 wid = floor(wv), wf = fract(wv);
      float win = step(.34, wf.x)*step(.42, wf.y)*(1. - edge);
      float on = step(1. - (.08*wDusk + .3*wNight), hash(wid + id*7.3));
      l = face + win*(-wDay*.12 + on*(wDusk*.7 + wNight*.9));
    }
  }
  return l;
}
float skyline(vec2 p, float t){
  float hz = -.26;
  if (p.y < hz) {
    float dpt = hz - p.y;
    vec2 r = vec2(p.x + .012*sin(p.y*130. + t*1.3)*smoothstep(0., .12, dpt), hz + dpt*1.25);
    float m = city(r, hz, 0.) * .62;
    return m * (.72 + .56*noise(vec2(p.x*5., p.y*120. + t*.4))) + .015;
  }
  return city(p, hz, t);
}

// A screenshot over the dunes. The dunes (bg) gets dithered later;

// ---- 3D project marks: raymarched, lit by the slider's light, dithered with the scene ----
mat2 rot2(float a){ float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
float sdBox(vec3 p, vec3 b, float r){ vec3 q = abs(p) - b + r; return length(max(q, 0.)) + min(max(q.x, max(q.y, q.z)), 0.) - r; }
float sdOct(vec3 p, float s){ p = abs(p); return (p.x + p.y + p.z - s)*.57735; }
float markGlow;
float markSDF(vec3 p, float id){
  markGlow = 0.;
  if (id < 5.5) return sdOct(p*vec3(1., .9, 1.), 1.05);      // Gamertaggd: the gem from the app icon
  vec3 q = vec3(abs(p.x), p.y, p.z);                          // Salience: in/out brackets holding a diamond
  float br = min(sdBox(q - vec3(.86, 0., 0.), vec3(.1, .86, .13), .015),
                 sdBox(vec3(q.x - .66, abs(q.y) - .78, q.z), vec3(.28, .08, .13), .015));
  float dm = sdOct(p, .56);
  markGlow = dm < br ? 1. : 0.;
  return min(br, dm);
}
// beside the text on wide monitors; below it on tall, narrow ones (phones), where the text spans the width
vec2 markCenter(){ float a = uRes.x/uRes.y; return a < 1. ? vec2(.16*a, -.2) : vec2(.25*a, .07); }
// returns brightness in x, coverage in y
vec2 mark(vec2 p, float id, float t){
  float sc = .135;
  vec2 lp = p - markCenter();
  if (length(lp) > sc*2.3) return vec2(0.);
  vec3 ro = vec3(0., 0., 3.2), rd = normalize(vec3(lp/sc, -3.));
  float ry = uMark.x, rx = uMark.y;
  float d = 0., h = 1.;
  vec3 q;
  for (int i = 0; i < 64; i++) {
    q = ro + rd*d; q.xz *= rot2(ry); q.yz *= rot2(rx);
    h = markSDF(q, id);
    if (h < .002 || d > 6.) break;
    d += h*.9;
  }
  if (h > .01) return vec2(0.);
  float g = (markSDF(q, id), markGlow);
  vec2 e = vec2(.002, 0.);
  vec3 n = normalize(vec3(markSDF(q + e.xyy, id) - markSDF(q - e.xyy, id), markSDF(q + e.yxy, id) - markSDF(q - e.yxy, id), markSDF(q + e.yyx, id) - markSDF(q - e.yyx, id)));
  n.yz *= rot2(-rx); n.xz *= rot2(-ry);
  vec3 L = normalize(wDay*vec3(-.6, .65, .6) + wDusk*vec3(.85, .12, .25) + wNight*vec3(.45, .55, .55));
  float dif = max(dot(n, L), 0.);
  float rim = pow(1. - max(dot(n, -rd), 0.), 2.5);
  float l = (wDay*.16 + wDusk*.14 + wNight*.2) + dif*(wDay*.95 + wDusk*1.1 + wNight*1.05) + rim*(wDay*.15 + wDusk*.7 + wNight*.6);
  l = mix(l, l*1.3 + .12, g);
  return vec2(l, 1.);
}
float markShadow(vec2 p){
  vec2 lp = (p - markCenter() - vec2(0., -.22))*vec2(1., 4.2);
  return smoothstep(.16, 0., length(lp))*.6;
}

// Brightness of the scene for a clip; this is what gets dithered.
// 0 window light · 2 dunes · 4 skyline · 5 dunes + Gamertaggd gem · 6 dunes + Salience mark
float scene(float id, vec2 uv, float t){
  vec2 p = uv - .5; p.x *= uRes.x/uRes.y;
  if (id < .5) return windowLight(uv, t);
  if (id < 2.5) return dunes(p, t*.6);
  if (id < 4.5) return skyline(p, t);
  float bg = dunes(p, t*.6) * (1. - markShadow(p)*(wDay + .6*wDusk + .4*wNight));
  vec2 m = mark(p, id, t);
  return mix(bg, m.x, m.y);
}

void main(){
  vec2 cell = floor(gl_FragCoord.xy / uPixel);
  vec2 cuv = (cell + .5)*uPixel / uRes;
  vec2 uv = uAmount > .01 ? cuv : vUv;
  float t = uTime;
  wDay = smoothstep(.5, 1., uD); wNight = 1. - smoothstep(0., .5, uD); wDusk = 1. - wDay - wNight;

  float th;
  if (uPattern < .5) th = bayer8(cell);
  else if (uPattern < 1.5) th = bayer4(cell);
  else if (uPattern < 2.5) { vec2 r = mat2(.7071,-.7071,.7071,.7071)*cell; th = length(fract(r/5.)-.5)*1.3; }
  else {
    // Noise: the threshold pattern is reshuffled uBoil times a second ("boil", as in hand-drawn animation)
    vec2 c2 = cell + floor(t*uBoil)*vec2(5.588, 3.17);
    if (uNoise < .5) th = fract(52.9829189*fract(dot(c2, vec2(.06711056, .00583715))));   // interleaved gradient: even, faint diagonal weave
    else if (uNoise < 1.5) th = fract(.7548776662*c2.x + .56984029*c2.y);                // R2: very even, reads like fine screen-print
    else th = hash(c2);                                                                    // white: random grain, the most organic and the busiest
  }

  // the whole scene leans and slides toward the pointer; the dot grid stays put
  { vec2 c = uv - .5; c.x *= uRes.x/uRes.y; c = rotM(-uRot.x*.012) * c; c += vec2(uRot.x*.014, -uRot.y*.009);
    c.x /= uRes.x/uRes.y; uv = c + .5; }
  // dithered dissolve between clips
  float tth = bayer8(floor(cell/2.)) * .8 + hash(floor(cell/6.))*.2;
  float bgl = tth < uMix ? scene(uScene1, uv, t) : scene(uScene0, uv, t);

  // The screen is fixed. A dot is on or off, and an "on" dot takes the colour
  // of the scene under it, so moving the light changes the dots, not the grid.
  float lum = clamp((bgl - .05)*1.2*uExposure, 0., 1.);
  float L = uLevels;
  float qv = clamp(floor(lum*(L-1.) + th) / (L-1.), 0., 1.);
  vec3 dith = pal(qv * mix(.66, 1., lum));
  vec3 cont = pal(lum);
  vec3 col = mix(cont, dith, uAmount);

  col += (hash(gl_FragCoord.xy + fract(t*7.)*91.) - .5) * uGrain;
  vec2 vv = vUv - .5; col *= 1. - dot(vv, vv)*.75;
  gl_FragColor = vec4(col, 1.);
}`;

// Bloom: the dithered frame is drawn to a texture, its brightest dots are blurred
// at quarter size, and the glow is added back on top, harsh and close like a CRT.
const POST = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uSrc; uniform sampler2D uGlow; uniform vec2 uTexel; uniform float uMode; uniform float uBloom;
uniform float uTime; uniform float uAspect; uniform vec3 uTint;
uniform float uLB; uniform float uHal; uniform float uDiff; uniform float uCA; uniform float uVig; uniform float uLeak; uniform float uKick;
float lumi(vec3 c){ return dot(c, vec3(.299, .587, .114)); }
void main(){
  if (uMode < .5) {                                   // bright pass; alpha carries the whole frame's brightness for diffusion
    vec3 c = vec3(0.);
    for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) c += texture2D(uSrc, vUv + vec2(x, y)*uTexel).rgb;
    c /= 9.;
    float l = lumi(c);
    gl_FragColor = vec4(c * smoothstep(.74, .95, l), l);
  } else if (uMode < 1.5) {                           // separable blur
    vec4 c = texture2D(uSrc, vUv) * .227;
    c += (texture2D(uSrc, vUv + uTexel*1.385) + texture2D(uSrc, vUv - uTexel*1.385)) * .316;
    c += (texture2D(uSrc, vUv + uTexel*3.231) + texture2D(uSrc, vUv - uTexel*3.231)) * .07;
    gl_FragColor = c;
  } else {                                            // composite: bloom, then the film effects
    vec2 d = vUv - .5;
    // chromatic aberration grows toward the edges
    vec2 off = d * uCA * .012;
    vec3 c = vec3(texture2D(uSrc, vUv + off).r, texture2D(uSrc, vUv).g, texture2D(uSrc, vUv - off).b);
    vec4 g = texture2D(uGlow, vUv);
    c += g.rgb * uBloom + g.rgb*g.rgb * uBloom * .8;
    // halation: film's red-orange halo around the brightest light
    c += vec3(1., .36, .12) * lumi(g.rgb) * uHal * 1.6;
    // diffusion: a soft screen of the blurred frame, like a mist filter
    vec3 mist = uTint * g.a;
    c = 1. - (1. - c) * (1. - mist * uDiff * .55);
    // lens vignette
    c *= mix(1., smoothstep(.95, .2, length(d * vec2(1.15, 1.))), uVig);
    // light leak: a warm wash drifting in from the left, swelling on each cut
    float lk = uLeak * (.75 + .6*uKick);
    float lx = d.x*uAspect + .5*uAspect + .05 - .06*sin(uTime*.31);
    float leak = exp(-lx*lx*2.6) * (.6 + .4*sin(uTime*.23 + d.y*3.)) * smoothstep(.75, -.1, abs(d.y + .08*sin(uTime*.17)));
    c = 1. - (1. - c) * (1. - vec3(1., .46, .16) * leak * lk);
    // letterbox to 2.39:1, sliding in
    float bar = max(0., .5 - .5*uAspect/2.39) * uLB;
    c *= step(bar, vUv.y) * step(bar, 1. - vUv.y);
    gl_FragColor = vec4(c, 1.);
  }
}`;
let post, PU = {}, fbo = null, lbNow = 0;
function makeTarget(w, h) {
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  const fb = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  return { tex, fb, w, h };
}
function sizeTargets() {
  if (!gl || !post) return;
  const w = canvas.width, h = canvas.height, qw = Math.max(1, w >> 2), qh = Math.max(1, h >> 2);
  if (fbo && fbo.scene.w === w && fbo.scene.h === h) return;
  if (fbo) [fbo.scene, fbo.a, fbo.b].forEach((t) => { gl.deleteTexture(t.tex); gl.deleteFramebuffer(t.fb); });
  fbo = { scene: makeTarget(w, h), a: makeTarget(qw, qh), b: makeTarget(qw, qh) };
}
function postPass(target, src, mode, texel, glow) {
  gl.bindFramebuffer(gl.FRAMEBUFFER, target ? target.fb : null);
  gl.viewport(0, 0, target ? target.w : canvas.width, target ? target.h : canvas.height);
  gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, src.tex);
  // unit 3 must never hold the texture being drawn into, or WebGL refuses the draw
  gl.activeTexture(gl.TEXTURE3); gl.bindTexture(gl.TEXTURE_2D, glow ? glow.tex : blank.tex);
  gl.uniform1f(PU.uMode, mode);
  gl.uniform2f(PU.uTexel, texel[0], texel[1]);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}

let prog, U = {};
const blank = { tex: null, w: 1, h: 1, ok: false };

function initGL() {
  if (!gl) return false;
  const sh = (type, src) => {
    const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.error(gl.getShaderInfoLog(s)); return null; }
    return s;
  };
  prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { console.error(gl.getProgramInfoLog(prog)); return false; }
  gl.useProgram(prog);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, "p");
  gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  ["uRes","uTime","uScene0","uScene1","uMix",
   "uNoise","uBoil","uAmount","uExposure","uPixel","uLevels","uPattern","uGrain","uC0","uC1","uC2","uD","uRot","uMark"].forEach((n) => U[n] = gl.getUniformLocation(prog, n));
  blank.tex = makeTex();
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]));
  const pv = sh(gl.VERTEX_SHADER, VERT), pf = sh(gl.FRAGMENT_SHADER, POST);
  if (pv && pf) {
    post = gl.createProgram(); gl.attachShader(post, pv); gl.attachShader(post, pf); gl.linkProgram(post);
    if (gl.getProgramParameter(post, gl.LINK_STATUS)) {
      ["uSrc", "uGlow", "uTexel", "uMode", "uBloom", "uTime", "uAspect", "uTint", "uLB", "uHal", "uDiff", "uCA", "uVig", "uLeak", "uKick"].forEach((n) => PU[n] = gl.getUniformLocation(post, n));
      gl.useProgram(post); gl.uniform1i(PU.uSrc, 2); gl.uniform1i(PU.uGlow, 3);
    } else post = null;
  }
  gl.useProgram(prog);
  sizeTargets();
  return true;
}

function makeTex() {
  const t = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, t);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  return t;
}



let dpr = 1;
function resize() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  const r = { width: canvas.clientWidth, height: canvas.clientHeight };
  canvas.width = Math.max(2, Math.round(r.width * dpr));
  canvas.height = Math.max(2, Math.round(r.height * dpr));
  if (gl) { gl.viewport(0, 0, canvas.width, canvas.height); sizeTargets(); }
  drawRuler(); drawWave();
}

// ---------- DOM builders ----------

function buildTimeline() {
  const pct = (s) => (s / VIEW) * 100 + "%";
  $("#trackV1").innerHTML = CLIPS.map((c, i) => `
    <div class="clip" data-i="${i}" style="left:${pct(c.start)};width:calc(${pct(c.dur)} - 3px);background-image:url(${c.thumb})"><label>${c.file}</label>
      <span class="dur mono"></span><i class="trim l" aria-hidden="true"></i><i class="trim r" aria-hidden="true"></i></div>`).join("");
  $$(".clip").forEach((el) => el.addEventListener("pointerdown", (e) => { e.stopPropagation(); jumpTo(+el.dataset.i); }));
  $$(".clip .trim").forEach((h) => bindTrim(h));
  $$(".clip").forEach((el) => el.classList.toggle("sel", +el.dataset.i === state.active));
}
// Ripple trim: drag either edge of a clip to change its length; everything after it moves up or down.
const TRIM_MIN = 2, TRIM_MAX = 30, TRIM_SNAP = 0.5;
function layoutTimeline() {
  const pct = (s) => (s / VIEW) * 100 + "%";
  $$(".clip").forEach((el) => {
    const c = CLIPS[+el.dataset.i];
    el.style.left = pct(c.start); el.style.width = `calc(${pct(c.dur)} - 3px)`;
  });
  drawRuler(); drawWave();
  if (state.t >= TOTAL) state.t = TOTAL - 0.01;
}
function bindTrim(h) {
  h.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    e.stopPropagation(); e.preventDefault();
    const el = h.parentElement, c = CLIPS[+el.dataset.i], left = h.classList.contains("l");
    const pxPerSec = $("#trackV1").clientWidth / VIEW, x0 = e.clientX, d0 = c.dur;
    try { h.setPointerCapture(e.pointerId); } catch (_) {}
    el.classList.add("trimming"); document.body.classList.add("trimming");
    const badge = $(".dur", el);
    const move = (ev) => {
      if (!(ev.buttons & 1)) return end();
      const dx = (ev.clientX - x0) / pxPerSec * (left ? -1 : 1);
      const d = Math.max(TRIM_MIN, Math.min(TRIM_MAX, Math.round((d0 + dx) / TRIM_SNAP) * TRIM_SNAP));
      if (d === c.dur) return;
      c.dur = d; relayout(); VIEW = Math.max(VIEW, TOTAL);
      badge.textContent = `${d}s`;
      layoutTimeline();
    };
    const end = () => {
      h.removeEventListener("pointermove", move); h.removeEventListener("pointerup", end);
      h.removeEventListener("pointercancel", end); h.removeEventListener("lostpointercapture", end);
      el.classList.remove("trimming"); document.body.classList.remove("trimming");
      VIEW = TOTAL; layoutTimeline();   // zoom back to fit
    };
    badge.textContent = `${c.dur}s`;
    h.addEventListener("pointermove", move); h.addEventListener("pointerup", end);
    h.addEventListener("pointercancel", end); h.addEventListener("lostpointercapture", end);
  });
}
function resetClipLengths() { CLIPS.forEach((c) => { c.dur = c.dur0; }); relayout(); VIEW = TOTAL; layoutTimeline(); buildStrip(); markStrip(state.active, false); }

function drawRuler() {
  const ruler = $("#ruler");
  const w = ruler.clientWidth;
  const step = w / VIEW < 22 ? 5 : 2;
  let html = "";
  for (let s = 0; s < VIEW; s += step) html += `<span class="tick" style="left:${(s / VIEW) * 100}%">${tc(s).slice(3, 8)}</span>`;
  CLIPS.forEach((c) => html += `<span class="marker" title="${c.label}" style="left:${(c.start / VIEW) * 100}%"></span>`);
  ruler.innerHTML = html;
}

function drawWave() {
  const cv = $("#wave"); if (!cv) return;
  const r = cv.getBoundingClientRect();
  cv.width = Math.max(2, r.width * dpr); cv.height = Math.max(2, r.height * dpr);
  const x = cv.getContext("2d");
  x.clearRect(0, 0, cv.width, cv.height);
  x.fillStyle = "#16362a"; x.fillRect(0, 0, cv.width, cv.height);
  const mid = cv.height / 2;
  const bars = Math.floor(cv.width / (2 * dpr));
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  x.fillStyle = "#8fe0b0";
  for (let i = 0; i < bars; i++) {
    const s = (i / bars) * TOTAL;
    const beat = Math.pow(Math.abs(Math.sin(s * Math.PI * 2 * 1.05)), 6);
    const env = 0.35 + 0.65 * Math.abs(Math.sin(s * 0.35 + 1.1)) * (s < 1 ? s : 1);
    const a = Math.min(1, (0.18 + 0.5 * rnd() * env + 0.45 * beat * env)) * mid * 0.92;
    x.fillRect(i * 2 * dpr, mid - a, Math.max(1, dpr), a * 2);
  }
}

function buildSwatches() {
  $("#swatches").innerHTML = Object.entries(GRADES).map(([k, g]) => `
    <button class="swatch" data-g="${k}" title="${g.name}" style="background:linear-gradient(135deg, ${g.c[0]} 0 33%, ${g.c[1]} 33% 66%, ${g.c[2]} 66%)"><span>${g.name}</span></button>`).join("");
  $$(".swatch").forEach((b) => b.addEventListener("click", () => {
    CLIPS[state.active].grade = b.dataset.g; setGrade(b.dataset.g); renderInfo(CLIPS[state.active]);
  }));
}

function setGrade(key, instant) {
  const g = GRADES[key];
  state.palFrom = state.pal.map((c) => c.slice());
  state.palTo = g.c.map(hex);
  state.palStart = instant ? -10 : performance.now();
  if (instant) state.pal = state.palTo.map((c) => c.slice());
  const root = document.documentElement.style;
  root.setProperty("--accent", g.c[2]);
  root.setProperty("--accent2", g.c[1]);
  root.setProperty("--deep", g.c[0]);
  $$(".swatch").forEach((s) => s.classList.toggle("on", s.dataset.g === key));
}

// ---------- overlay text ----------

function renderOverlay(clip) {
  const o = $("#overlay");
  if (!clip.card) { o.innerHTML = ""; return; }
  const c = clip.card;
  const n = c.title.length;
  o.innerHTML = `
    <h1 class="card-title${c.small ? " sm" : ""}">${c.title.map((l, i) => `<span class="rise" style="--i:${i}">${l}</span>`).join("<br>")}</h1>
    ${cardBody(clip, n)}`;
  bindCard(o);
  if (isPhone) renderPhoneCard(clip);
}
// takes, text and links for a clip; n staggers the rise animation after the title
function cardBody(clip, n) {
  const c = clip.card;
  const personal = clip.id === "intro" && state.take === "personal";
  const takes = clip.id === "intro" ? `<div class="takes rise" style="--i:${n}" role="group" aria-label="About take">
      <button data-take="work" aria-pressed="${!personal}">Work</button><button data-take="personal" aria-pressed="${personal}">Off the clock</button></div>` : "";
  const body = personal
    ? `<div class="card-sub rise" style="--i:${n + 1}">${PERSONAL.sub}</div>
       <ul class="hobbies rise" style="--i:${n + 2}">${PERSONAL.hobbies.map(([h, t]) => `<li><b>${h}</b><span>${t}</span></li>`).join("")}</ul>`
    : `${c.sub ? `<div class="card-sub rise" style="--i:${n + 1}">${c.sub}</div>` : ""}
       <div class="card-links rise" style="--i:${n + 2}">${c.links.map(([t, h], i) => linkHTML(t, h, i)).join("")}</div>`;
  return takes + body;
}
function bindCard(root) {
  bindLinks(root);
  $$("[data-take]", root).forEach((b) => b.addEventListener("click", () => setTake(b.dataset.take)));
}
// The About clip has two takes. "Off the clock" warms the light toward evening; "Work" puts it back.
const TAKE_AT = 0.5;   // below this on the slider, About shows "Off the clock"
function takeFor(d) { return d < TAKE_AT ? "personal" : "work"; }
function setTake(t, fromSlider) {
  if (t === state.take) return;
  state.take = t;
  // pressing a take moves the light to match it; dragging the slider just flips the take
  if (!fromSlider) setDaylight(t === "personal" ? Math.min(state.daylight, 0.38) : Math.max(state.daylight, 0.8));
  renderOverlay(CLIPS[state.active]);
}

function linkHTML(t, h, i) {
  const cls = i === 0 ? "pill primary" : "pill";
  if (h.startsWith("open:") || h.startsWith("#") || h.startsWith("compose:")) return `<button class="${cls}" data-go="${h}">${t}</button>`;
  const ext = h.startsWith("http") || h.endsWith(".pdf");
  return `<a class="${cls}" href="${h}" ${ext ? 'target="_blank" rel="noopener"' : ""}>${t}</a>`;
}
function bindLinks(root) {
  $$("[data-go]", root).forEach((b) => b.addEventListener("click", () => {
    const g = b.dataset.go;
    if (g.startsWith("compose:")) { WINDOWS.compose(); track("contact-open"); }
    else if (g.startsWith("open:")) openClipWindow(CLIPS.find((c) => c.id === g.slice(5)));
    else { const j = CLIPS.findIndex((c) => c.id === g.slice(1)); if (j >= 0) jumpTo(j); }
  }));
}

function renderInfo(clip) {
  const i = clip.info;
  $("#info").innerHTML = `
    <div class="info-head">${i.icon ? `<img src="${i.icon}" alt="">` : ""}<div><h3>${i.title}</h3><div class="dim">${i.sub}</div></div></div>
    <dl class="meta">${Object.entries(i.meta).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}
      <dt>Source</dt><dd class="mono">${clip.file}</dd><dt>Grade</dt><dd>${GRADES[clip.grade].name}</dd></dl>
    <div class="info-body">${i.body}</div>
    ${i.tags.length ? `<div class="tags">${i.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>` : ""}
    <div class="btn-row">
      ${clip.notes ? `<button class="btn primary" data-go="open:${clip.id}">${clip.id === "experience" ? "Open resume" : "The story"}</button>` : ""}
      ${clip.id === "contact" ? `<a class="btn primary" href="mailto:${EMAIL}">Email me</a>` : ""}
    </div>`;
  bindLinks($("#info"));
}

function showTab(name, force) {
  if (name !== "fx") return;
  const pop = $("#fxPop");
  const open = force ?? pop.classList.contains("hidden");
  pop.classList.toggle("hidden", !open);
  $("#fxBtn").classList.toggle("on", open);
  $("#pFx").classList.toggle("on", open); $("#pFx").setAttribute("aria-expanded", open);
}

// ---------- clip switching ----------
function clipAt(t) { return Math.max(0, CLIPS.findIndex((c) => t >= c.start && t < c.end)); }

function activate(i) {
  if (i === state.active) return;
  const prev = state.active;
  state.active = i;
  state.prevIdx = prev < 0 ? i : prev;
  state.transStart = prev < 0 ? -10 : performance.now();
  const clip = CLIPS[i];
  state.take = takeFor(state.daylight);   // About opens on the take that matches the light
  setGrade(clip.grade, prev < 0);
  renderOverlay(clip);
  renderInfo(clip);
  $$("#nav button, #ptabs button").forEach((b) => b.classList.toggle("on", b.dataset.ids.split(" ").includes(clip.id)));
  if (isPhone) markStrip(i, prev >= 0);
  $$(".clip").forEach((el) => el.classList.toggle("sel", +el.dataset.i === i));
  if (location.hash.slice(1) !== clip.id) history.replaceState(null, "", "#" + clip.id);
  track("clip:" + clip.id);
}

function jumpTo(i) {
  if (i == null || Number.isNaN(i)) return;
  state.t = CLIPS[(i + CLIPS.length) % CLIPS.length].start + 0.01;
  activate(clipAt(state.t));
}

// ---------- floating windows ----------
let zTop = 30;
function openWindow({ id, title, html, x, y, w }) {
  let win = document.getElementById("win-" + id);
  if (win) { focusWin(win); win.classList.remove("min"); return win; }
  win = document.createElement("div");
  win.className = "win"; win.id = "win-" + id;
  const vw = innerWidth, vh = innerHeight;
  const width = Math.min(w || 520, vw * 0.92);
  const count = $$(".win").length;
  win.style.width = width + "px";
  win.style.left = (x ?? Math.max(8, (vw - width) / 2 + count * 26)) + "px";
  win.style.top = (y ?? Math.max(44, vh * 0.12 + count * 26)) + "px";
  win.innerHTML = `<div class="win-bar"><div class="lights"><button class="close" aria-label="Close"></button><button class="min" aria-label="Minimize"></button><button aria-label="Zoom" class="zoom"></button></div><div class="win-title">${title}</div></div><div class="win-body">${html}</div>`;
  $("#windows").appendChild(win);
  // centre it in the viewport (cascading a little if others are open)
  if (y == null) win.style.top = Math.max(44, (vh - win.offsetHeight) / 2 + count * 26) + "px";
  focusWin(win);
  win.addEventListener("pointerdown", () => focusWin(win));
  $(".close", win).addEventListener("click", () => win.remove());
  $(".min", win).addEventListener("click", () => win.classList.toggle("min"));
  $(".zoom", win).addEventListener("click", () => { win.style.left = "4vw"; win.style.top = "44px"; win.style.width = "92vw"; });
  bindLinks(win);
  sheetSwipe(win);
  // drag
  const bar = $(".win-bar", win);
  bar.addEventListener("pointerdown", (e) => {
    if (e.target.closest("button")) return;
    bar.setPointerCapture(e.pointerId);
    const ox = e.clientX - win.offsetLeft, oy = e.clientY - win.offsetTop;
    const move = (ev) => {
      win.style.left = Math.min(innerWidth - 60, Math.max(-win.offsetWidth + 80, ev.clientX - ox)) + "px";
      win.style.top = Math.min(innerHeight - 30, Math.max(34, ev.clientY - oy)) + "px";
    };
    const up = () => { bar.removeEventListener("pointermove", move); bar.removeEventListener("pointerup", up); };
    bar.addEventListener("pointermove", move); bar.addEventListener("pointerup", up);
  });
  return win;
}
function focusWin(win) { $$(".win").forEach((w) => w.classList.remove("focus")); win.classList.add("focus"); win.style.zIndex = ++zTop; }

function openClipWindow(clip) {
  if (!clip) return;
  track("story:" + clip.id);
  const html = clip.notes || `<h2>${clip.info.title}</h2><p class="dim">${clip.info.sub}</p><div class="info-body">${clip.info.body}</div>`;
  const isResume = clip.id === "experience";
  openWindow({ id: clip.id, title: isResume ? "Ethan Tan — Resume.edl" : `The story — ${clip.label}`, html, w: isResume ? 680 : 560 });
}

const WINDOWS = {
  shortcuts: () => openWindow({ id: "keys", title: "Shortcuts & info", w: 360, html: `<h2>How this works</h2><p class="dim">The site is built like an editor. Each clip on the timeline is part of my work: click one, scrub the playhead, or press play. The slider on the monitor moves from day to night, and <b>fx</b> regrades the picture.</p><h4>Shortcuts</h4>
    <div class="keys">
      <span class="kbd">Space</span><span>Play / pause</span>
      <span class="kbd">J K L</span><span>Rewind · pause · play</span>
      <span class="kbd">← →</span><span>Previous / next clip</span>
      <span class="kbd">1 – 5</span><span>Jump to clip</span>
      <span class="kbd">B</span><span>Effects on / off (before and after)</span>
      <span class="kbd">D</span><span>Toggle dither</span>
      <span class="kbd">N</span><span>Day / night</span>
      <span class="kbd">X</span><span>Effect controls</span>
      <span class="kbd">G</span><span>Cycle grade</span>
      <span class="kbd">F</span><span>Full-screen monitor</span>
      <span class="kbd">Esc</span><span>Close window</span>
    </div>
    <h4>Sound credits</h4><ul class="credits-list"><li><a href="https://freesound.org/s/568246/" target="_blank" rel="noopener">Room tone with open window and birds</a><span>Garuda1982 · CC BY 4.0</span></li><li><a href="https://freesound.org/s/156414/" target="_blank" rel="noopener">Wind in cactus spines, Atacama</a><span>felix.blume · CC0</span></li><li><a href="https://freesound.org/s/440621/" target="_blank" rel="noopener">City night hum 04</a><span>klankbeeld · CC BY 4.0</span></li><li><a href="https://freesound.org/s/550924/" target="_blank" rel="noopener">Greece campsite evening, crickets</a><span>Profispiesser · CC0</span></li></ul>` }),
  compose: () => {
    const win = openWindow({ id: "compose", title: "New message — Ethan Tan", w: 460, html: `
      <form class="compose" novalidate>
        <h2>Contact me</h2>
        <p class="dim">Write a message and Send opens your email app with it ready to go.</p>
        <label class="field"><span class="dim mono small">YOUR NAME</span><input name="name" autocomplete="name" placeholder="Jane from Studio X"></label>
        <label class="field"><span class="dim mono small">MESSAGE</span><textarea name="msg" rows="4" placeholder="What are you working on, and how can I help?"></textarea></label>
        <div class="btn-row"><button class="btn primary" type="submit">Send →</button><button class="btn" type="button" data-copy>Copy email</button></div>
        <p class="dim small">Or write to <a href="mailto:${EMAIL}">${EMAIL}</a></p>
      </form>` });
    const form = win && win.querySelector("form.compose");
    if (!form || form.dataset.bound) return;
    form.dataset.bound = "1";
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = new FormData(form), name = (d.get("name") || "").trim();
      const subject = `Hello from ${name || "your portfolio"}`;
      const body = `${(d.get("msg") || "").trim()}\n\n${name ? "— " + name : ""}`.trim();
      track("contact-send");
      location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
    form.querySelector("[data-copy]").addEventListener("click", (e) => {
      navigator.clipboard?.writeText(EMAIL).then(() => { e.target.textContent = "Copied ✓"; setTimeout(() => e.target.textContent = "Copy email", 1600); });
    });
    form.querySelector("textarea").focus({ preventScroll: true });
  },
};

function download(href, name) { const a = document.createElement("a"); a.href = href; a.download = name; document.body.appendChild(a); a.click(); a.remove(); }
function toast(msg) {
  let t = $("#toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("on");
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("on"), 2200);
}
function exportContact() {
  const vcf = ["BEGIN:VCARD", "VERSION:3.0", "N:Tan;Ethan;;;", "FN:Ethan Tan", "TITLE:Solo developer",
    `EMAIL;TYPE=INTERNET:${EMAIL}`, `URL:${SITE}`, `URL:${GITHUB}`, `URL:${LINKEDIN}`, "ADR;TYPE=HOME:;;;Cleveland;OH;;USA", "END:VCARD"].join("\r\n");
  const url = URL.createObjectURL(new Blob([vcf], { type: "text/vcard" }));
  download(url, "Ethan-Tan.vcf"); setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function sharePortfolio() {
  const url = SITE;
  const data = { title: "Ethan Tan · Portfolio", text: "Ethan Tan: solo developer, open to new-grad SWE roles. Built like an editing app.", url };
  if (navigator.share) navigator.share(data).catch(() => {});
  else navigator.clipboard?.writeText(url).then(() => toast("Link copied"), () => toast(url));
}
const MENUS = {
  file: [["Open GitHub ↗", () => open(GITHUB, "_blank", "noopener")], ["Open LinkedIn ↗", () => open(LINKEDIN, "_blank", "noopener")], ["Contact me…", () => WINDOWS.compose()], "-",
    ["Open resume (PDF) ↗", () => open(RESUME_PDF, "_blank", "noopener")]],
  export: () => [
    ["Resume (PDF) ↗", () => open(RESUME_PDF, "_blank", "noopener")],
    ["Download resume", () => download(RESUME_PDF, "Ethan-Tan-Resume.pdf")],
    ["Contact card (.vcf)", exportContact], "-",
    ["Share this portfolio…", sharePortfolio]],
  clip: [["Next clip", () => jumpTo(state.active + 1), "→"], ["Previous clip", () => jumpTo(state.active - 1), "←"], ["Play / pause", () => togglePlay(), "Space"], ["Reset clip lengths", () => resetClipLengths()], "-",
    ...CLIPS.map((c, i) => [c.file, () => jumpTo(i), String(i + 1)])],
  window: [["Resume", () => openClipWindow(CLIPS.find((c) => c.id === "experience"))], ["Gamertaggd on the App Store ↗", () => open("https://apps.apple.com/us/app/gamertaggd/id6789941011", "_blank", "noopener")],
    ["Salience on GitHub ↗", () => open("https://github.com/ethanntann/salience", "_blank", "noopener")], "-",
    ["The story: Gamertaggd", () => openClipWindow(CLIPS.find((c) => c.id === "gamertaggd"))], ["The story: Salience", () => openClipWindow(CLIPS.find((c) => c.id === "salience"))], "-", ["Contact me…", () => WINDOWS.compose()], "-",
    ["Full-screen monitor", () => toggleFull(), "F"], ["Close all windows", () => $$(".win").forEach((w) => w.remove())]],
  settings: () => [
    [`${settings.follow ? "✓ " : " "}Parallax`, () => setFollow(!settings.follow)],
    [`${settings.glow ? "✓ " : " "}Glow on bright dots`, () => { settings.glow = !settings.glow; saveSettings(); }], "-",
    [`${panels.sideOff ? " " : "✓ "}Show sidebar`, () => toggleSide(), "\\"],
    [`${panels.tlOff ? " " : "✓ "}Show timeline`, () => toggleTimeline(), "T"],
    ["Reset panel sizes", () => resetPanels()]],
  help: [["Shortcuts & info", () => WINDOWS.shortcuts(), "?"]],
};
function openMenu(btn) {
  const dd = $("#dropdown");
  const m = MENUS[btn.dataset.menu];
  const items = typeof m === "function" ? m() : m;
  $$(".menu").forEach((m) => { m.classList.toggle("open", m === btn); m.setAttribute("aria-expanded", m === btn); });
  dd.innerHTML = items.map((it, i) => it === "-" ? `<div class="dd-sep" role="separator"></div>` : `<button class="dd-item" role="menuitem" data-i="${i}"><span>${it[0]}</span><span class="dim mono">${it[2] || ""}</span></button>`).join("");
  const r = btn.getBoundingClientRect();
  dd.style.top = r.bottom + 4 + "px";
  dd.classList.remove("hidden");
  dd.style.left = Math.max(8, Math.min(r.left, innerWidth - dd.offsetWidth - 8)) + "px";
  $$(".dd-item", dd).forEach((d) => d.addEventListener("click", () => { closeMenu(); items[+d.dataset.i][1](); }));
}
function closeMenu() {
  $("#dropdown").classList.add("hidden");
  $$(".menu").forEach((m) => { m.classList.remove("open"); m.setAttribute("aria-expanded", "false"); });
}
function bindMenus() {
  $$(".menu").forEach((m) => {
    m.addEventListener("click", (e) => { e.stopPropagation(); m.classList.contains("open") ? closeMenu() : openMenu(m); });
    m.addEventListener("mouseenter", () => { if ($(".menu.open") && !m.classList.contains("open")) openMenu(m); });
  });
  document.addEventListener("click", (e) => { if (!e.target.closest("#dropdown")) closeMenu(); });
  addEventListener("resize", closeMenu);
}

// ---------- controls ----------
function setAmount(v) {
  state.amount = Math.max(0, Math.min(1, v));
  $("#fxAmount").value = state.amount;
  $("#oAmount").textContent = Math.round(state.amount * 100) + "%";
}
function setDaylight(v) {
  state.daylight = Math.max(0, Math.min(1, v));
  $("#vsFill").style.height = state.daylight * 100 + "%";
  $("#vsKnob").style.bottom = state.daylight * 100 + "%";
  const d = state.daylight;
  $("#vsVal").textContent = d > 0.8 ? "DAY" : d > 0.55 ? "GOLD" : d > 0.3 ? "DUSK" : "NIGHT";
  $("#vslider").setAttribute("aria-valuenow", Math.round(d * 100));
  if (CLIPS[state.active]?.id === "intro" && takeFor(d) !== state.take) setTake(takeFor(d), true);
}
function toggleDither() { setAmount(state.amount > 0.5 ? 0 : 1); }
// Bypass: switch the whole effect stack off and on to compare before and after, keeping every setting.
let fxMix = 1;
function setBypass(off) {
  state.bypass = off;
  $("#fx_on").checked = !off;
  $("#o_on").textContent = off ? "Off" : "On";
  $("#fxPop").classList.toggle("bypassed", off);
  $("#fxBtn").classList.toggle("bypassed", off);
}

function bindControls() {
  // vertical slider on the monitor
  const vs = $("#vslider"), track = $(".vs-track", vs);
  vs.addEventListener("pointerdown", (e) => {
    vs.setPointerCapture(e.pointerId);
    const set = (ev) => {
      const r = track.getBoundingClientRect();
      setDaylight(monitorTurned() ? (ev.clientX - r.left) / r.width : 1 - (ev.clientY - r.top) / r.height);
    };
    set(e);
    const up = () => { vs.removeEventListener("pointermove", set); vs.removeEventListener("pointerup", up); };
    vs.addEventListener("pointermove", set); vs.addEventListener("pointerup", up);
  });
  vs.addEventListener("wheel", (e) => { e.preventDefault(); setDaylight(state.daylight - e.deltaY * 0.002); }, { passive: false });
  vs.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") { e.preventDefault(); e.stopPropagation(); setDaylight(state.daylight + (e.key === "ArrowUp" ? 0.05 : -0.05)); }
  });

  $("#fxAmount").addEventListener("input", (e) => setAmount(+e.target.value));
  $("#fxPixel").addEventListener("input", (e) => { state.pixel = +e.target.value; $("#oPixel").textContent = state.pixel + "px"; });
  $("#fxLevels").addEventListener("input", (e) => { state.levels = +e.target.value; $("#oLevels").textContent = state.levels; });
  $("#fxGrain").addEventListener("input", (e) => { state.grain = +e.target.value; $("#oGrain").textContent = Math.round(state.grain * 100) + "%"; });
  ["hal", "diff", "ca", "vig", "leak"].forEach((k) => {
    const el = $("#fx_" + k);
    el.addEventListener("input", () => { state[k] = +el.value; $("#o_" + k).textContent = Math.round(state[k] * 100) + "%"; });
  });
  $("#fx_on").addEventListener("change", (e) => setBypass(!e.target.checked));
  $("#fx_lb").addEventListener("change", (e) => { state.lb = e.target.checked; $("#o_lb").textContent = state.lb ? "2.39" : "Off"; });
  $$("#fxPattern button").forEach((b) => b.addEventListener("click", () => {
    state.pattern = +b.dataset.v; $$("#fxPattern button").forEach((x) => x.classList.toggle("on", x === b));
    $("#noiseRows").hidden = state.pattern !== 3;
  }));
  $$("#fxNoise button").forEach((b) => b.addEventListener("click", () => {
    state.noise = +b.dataset.v; $$("#fxNoise button").forEach((x) => x.classList.toggle("on", x === b));
  }));
  $("#fxBoil").addEventListener("input", (e) => { state.boil = +e.target.value; $("#oBoil").textContent = state.boil === 0 ? "Still" : state.boil + "/s"; });
  $("#fxReset").addEventListener("click", () => {
    Object.assign(state, { pixel: 3, levels: 3, grain: 0.07, pattern: 0, noise: 0, boil: 0.8 });
    $("#noiseRows").hidden = true; $("#fxBoil").value = 0.8; $("#oBoil").textContent = "0.8/s";
    $$("#fxNoise button").forEach((x, i) => x.classList.toggle("on", i === 0));
    $("#fxPixel").value = 3; $("#fxLevels").value = 3; $("#fxGrain").value = 0.07;
    $("#oPixel").textContent = "3px"; $("#oLevels").textContent = "3"; $("#oGrain").textContent = "7%";
    $$("#fxPattern button").forEach((x, i) => x.classList.toggle("on", i === 0));
    setAmount(1);
    CLIPS.forEach((c) => { c.grade = c.grade0; });
    Object.assign(state, FILM_DEFAULT);
    ["hal", "diff", "ca", "vig", "leak"].forEach((k) => { $("#fx_" + k).value = state[k]; $("#o_" + k).textContent = Math.round(state[k] * 100) + "%"; });
    $("#fx_lb").checked = false; $("#o_lb").textContent = "Off";
    setGrade(CLIPS[state.active].grade); renderInfo(CLIPS[state.active]);
  });
  $("#helpBtn").addEventListener("click", () => WINDOWS.shortcuts());
  $$("#nav button").forEach((b) => b.addEventListener("click", () => {
    const j = CLIPS.findIndex((c) => c.id === b.dataset.go.slice(1)); if (j >= 0) jumpTo(j);
  }));
  document.addEventListener("pointerdown", (e) => {
    if (!e.target.closest("#fxPop, #fxBtn, [data-fx]")) showTab("fx", false);
  });

  // transport
  $$(".transport button[data-act]").forEach((b) => b.addEventListener("click", () => ({
    prev: () => jumpTo(state.active - 1), next: () => jumpTo(state.active + 1),
    play: togglePlay, full: toggleFull, fx: () => showTab("fx"),
  })[b.dataset.act]()));

  // scrubbing
  const tracks = $(".timeline"), area = $("#tracks");
  tracks.addEventListener("pointerdown", (e) => {
    tracks.setPointerCapture(e.pointerId);
    const scrub = (ev) => {
      const r = area.getBoundingClientRect();
      state.t = Math.max(0, Math.min(TOTAL - 0.001, ((ev.clientX - r.left) / r.width) * VIEW));
      activate(clipAt(state.t));
    };
    scrub(e);
    const up = () => { tracks.removeEventListener("pointermove", scrub); tracks.removeEventListener("pointerup", up); };
    tracks.addEventListener("pointermove", scrub); tracks.addEventListener("pointerup", up);
  });

  // keys
  document.addEventListener("keydown", (e) => {
    if (e.target.closest?.("input, textarea") && e.key !== " ") return;
    if (e.metaKey || e.ctrlKey) return;
    const k = e.key.toLowerCase();
    if (k === " ") { e.preventDefault(); togglePlay(); }
    else if (k === "k") pause();
    else if (k === "l") play();
    else if (k === "j") { state.t = Math.max(0, state.t - 1); activate(clipAt(state.t)); }
    else if (k === "arrowright") jumpTo(state.active + 1);
    else if (k === "arrowleft") jumpTo(state.active - 1);
    else if (k === "home") jumpTo(0);
    else if (/^[1-9]$/.test(k) && +k <= CLIPS.length) jumpTo(+k - 1);
    else if (k === "d") toggleDither();
    else if (k === "b") setBypass(!state.bypass);
    else if (k === "n") setDaylight(state.daylight > 0.5 ? 0 : 1);
    else if (e.key === "\\") toggleSide();
    else if (k === "t") toggleTimeline();
    else if (k === "f") toggleFull();
    else if (k === "g") { const keys = Object.keys(GRADES); const n = keys[(keys.indexOf(CLIPS[state.active].grade) + 1) % keys.length]; CLIPS[state.active].grade = n; setGrade(n); renderInfo(CLIPS[state.active]); }
    else if (k === "?") WINDOWS.shortcuts();
    else if (k === "x") showTab("fx");
    else if (k === "escape") { if (!$("#dropdown").classList.contains("hidden")) return closeMenu(); if (!$("#fxPop").classList.contains("hidden")) return showTab("fx", false); const w = $$(".win").sort((a, b) => b.style.zIndex - a.style.zIndex)[0]; if (w) w.remove(); else if ($(".monitor.max")) toggleFull(); }
  });

  addEventListener("resize", resize);
  new ResizeObserver(resize).observe($("#viewer"));
}

const ICON_PLAY = '<path d="M4 2.5v11L13 8z"/>', ICON_PAUSE = '<path d="M4 2.5h3v11H4zM9 2.5h3v11H9z"/>';
function setPlayIcons(on) {
  $("#playIcon").innerHTML = $("#pPlayIcon").innerHTML = on ? ICON_PAUSE : ICON_PLAY;
  ["#playBtn", "#pPlay"].forEach((s) => $(s).setAttribute("aria-label", on ? "Pause" : "Play"));
}
function play() { endNudge(); state.playing = true; setPlayIcons(true); }
function pause() { state.playing = false; setPlayIcons(false); }
function togglePlay() { state.playing ? pause() : play(); }
let nativeFS = false;
function monitorTurned() { const m = $("#monitorPanel"); return m.classList.contains("max") && getComputedStyle(m).transform !== "none"; }
async function toggleFull() {
  const m = $("#monitorPanel"), on = !m.classList.contains("max");
  m.classList.toggle("max", on);
  document.documentElement.classList.toggle("fs", on);
  $("#fsBtn").setAttribute("aria-label", on ? "Exit full screen" : "Full screen");
  if (isPhone && on) {
    // Android: real full screen, locked to landscape. iPhone has neither, so CSS turns the monitor sideways.
    try { if (m.requestFullscreen) { await m.requestFullscreen({ navigationUI: "hide" }); nativeFS = true; } } catch (_) {}
    try { await screen.orientation.lock("landscape"); } catch (_) {}
  } else if (!on) {
    try { screen.orientation.unlock(); } catch (_) {}
    if (document.fullscreenElement) { try { await document.exitFullscreen(); } catch (_) {} }
    nativeFS = false;
  }
  requestAnimationFrame(resize); setTimeout(resize, 250);
  wake();
}
// leaving the browser's own full screen (back gesture) leaves ours too
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement && nativeFS && $("#monitorPanel").classList.contains("max")) { nativeFS = false; toggleFull(); }
});

// ---------- loop ----------
let last = performance.now();
const t0 = performance.now();
// The project marks turn toward the pointer, eased, like an object tracking the cursor.
const look = { tx: 0.25, ty: -0.12, x: 0.25, y: -0.12 };
// The project marks: with parallax on they face the pointer; off, they turn slowly on their own.
const mark = { x: -0.12, y: 0.25 };
addEventListener("pointermove", (e) => {
  const r = canvas.getBoundingClientRect();
  const mx = Math.max(-1.5, Math.min(1.5, ((e.clientX - r.left) / r.width) * 2 - 1));
  const my = Math.max(-1.5, Math.min(1.5, ((e.clientY - r.top) / r.height) * 2 - 1));
  if (!settings.follow || isPhone) return;
  look.tx = mx * 0.4; look.ty = my * 0.25;
});
// Panels resize like an editor's: drag the edge between the monitor and the sidebar,
// or the bar above the timeline. Sizes are remembered; both panels can be hidden.
const PANEL_DEFAULT = { side: 300, tl: 150 };
const panels = loadPrefs("reel-panels", { ...PANEL_DEFAULT, sideOff: false, tlOff: false });
panels.side = Math.max(220, Math.min(560, panels.side)); panels.tl = Math.max(96, Math.min(600, panels.tl));
let resizeQueued = false;
function queueResize() {   // at most one canvas resize per frame, however fast the pointer moves
  if (resizeQueued) return;
  resizeQueued = true;
  requestAnimationFrame(() => { resizeQueued = false; resize(); });
}
function applyPanels(save = true) {
  const app = $("#app");
  app.style.setProperty("--side-w", panels.side + "px");
  app.style.setProperty("--tl-h", panels.tl + "px");
  app.classList.toggle("side-off", panels.sideOff);
  app.classList.toggle("tl-off", panels.tlOff);
  $("#sideBtn")?.setAttribute("aria-pressed", String(!panels.sideOff));
  $("#tlBtn")?.setAttribute("aria-pressed", String(!panels.tlOff));
  if (save) safeStore("reel-panels", JSON.stringify(panels));
  queueResize();
}
function toggleSide() { panels.sideOff = !panels.sideOff; applyPanels(); }
function toggleTimeline() { panels.tlOff = !panels.tlOff; applyPanels(); }
function resetPanels() { Object.assign(panels, PANEL_DEFAULT, { sideOff: false, tlOff: false }); applyPanels(); }
function dragHandle(el, onMove) {
  el.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    el.setPointerCapture(e.pointerId);
    document.body.classList.add("resizing");
    const move = (ev) => {
      if (!(ev.buttons & 1)) return end();          // the button was released somewhere we didn't hear about
      onMove(ev); applyPanels(false);
    };
    const end = () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", end);
      el.removeEventListener("pointercancel", end);
      el.removeEventListener("lostpointercapture", end);
      document.body.classList.remove("resizing");
      applyPanels(true);
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", end);
    el.addEventListener("pointercancel", end);
    el.addEventListener("lostpointercapture", end);
  });
}
function bindPanels() {
  dragHandle($("#sideSplit"), (e) => { panels.side = Math.round(Math.max(220, Math.min(560, innerWidth - e.clientX - 12))); });
  dragHandle($("#tlResize"), (e) => {
    if (panels.tlOff) { panels.tlOff = false; }
    panels.tl = Math.round(Math.max(96, Math.min(innerHeight * 0.55, innerHeight - e.clientY - 18)));
  });
  $("#sideSplit").addEventListener("dblclick", toggleSide);
  $("#tlResize").addEventListener("dblclick", toggleTimeline);
  $("#sideBtn").addEventListener("click", toggleSide);
  $("#tlBtn").addEventListener("click", toggleTimeline);
  applyPanels();
}

// Monitor controls get out of the way: they fade after a moment of stillness
// and come back on pointer movement, hover, focus or a key press.
// First visit only: a few soft pulses on the play button, so people know the editor responds.
// Stops for good as soon as they press play or touch the timeline, slider or a clip.
const nudge = { on: false };
function startNudge() {
  if (localStorage.getItem("reel-seen")) return;
  setTimeout(() => {
    if (localStorage.getItem("reel-seen") || state.playing) return;
    nudge.on = true; wake();
    $("#playBtn").classList.add("nudge"); $("#pPlay").classList.add("nudge");
    setTimeout(endNudge, 7000);   // three pulses, then it stops on its own
  }, 2500);
}
function endNudge() {
  safeStore("reel-seen", "1");
  if (!nudge.on) return;
  nudge.on = false; $("#playBtn").classList.remove("nudge"); $("#pPlay").classList.remove("nudge");
}
["#playBtn", "#vslider", ".timeline", "#nav", "#pbar", "#strip", "#ptabs"].forEach((sel) => $(sel)?.addEventListener("pointerdown", endNudge));
let idleTimer = 0;
let tabbing = false;
const lastPointer = { x: -1, y: -1 };
addEventListener("pointermove", (e) => { lastPointer.x = e.clientX; lastPointer.y = e.clientY; }, { passive: true, capture: true });
document.documentElement.addEventListener("pointerleave", () => { lastPointer.x = lastPointer.y = -1; });
["pointerup", "pointercancel"].forEach((ev) => addEventListener(ev, (e) => { if (e.pointerType !== "mouse") lastPointer.x = lastPointer.y = -1; }, true));   // true only while someone is moving around with Tab; any pointer use clears it
addEventListener("keydown", (e) => { if (e.key === "Tab") tabbing = true; }, true);
["pointerdown", "pointermove"].forEach((ev) => addEventListener(ev, () => { tabbing = false; }, true));
// A mouse click leaves the button focused, and the next key press (Space, F) would make that
// focus count as keyboard focus. Drop focus from monitor controls after a pointer click.
["#viewer .transport", "#vslider", "#fxBtn"].forEach((sel) => {
  const el = $(sel);
  el && el.addEventListener("pointerup", (e) => { if (e.pointerType) setTimeout(() => document.activeElement?.closest?.("#viewer") && document.activeElement.blur(), 0); });
});
function controlsBusy() {
  const v = $("#viewer");
  if (nudge.on) return true;                                                    // first-visit pulse is showing
  if (!$("#fxPop").classList.contains("hidden")) return true;                 // effect panel open
  if (document.body.classList.contains("resizing") || document.body.classList.contains("trimming")) return true;
  if (tabbing && v.contains(document.activeElement)) return true;             // keyboard user is on a control
  // pointer resting on a control (checked by position: a faded control can't report :hover)
  return [".transport", "#vslider", "#fsBtn"].some((sel) => {
    const r = $(sel).getBoundingClientRect(), p = lastPointer;
    if (p.x < 0 || !r.width) return false;   // no pointer, or the control isn't shown
    return p.x >= r.left - 8 && p.x <= r.right + 8 && p.y >= r.top - 8 && p.y <= r.bottom + 8;
  });
}
function wake() {
  const v = $("#viewer");
  v.classList.remove("idle");
  clearTimeout(idleTimer);
  idleTimer = setTimeout(function check() {
    if (controlsBusy()) idleTimer = setTimeout(check, 600);
    else v.classList.add("idle");
  }, 2400);
}
["pointermove", "pointerdown", "keydown", "focusin", "wheel"].forEach((ev) => addEventListener(ev, wake, { passive: true }));

function render(now) {
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  const k = 1 - Math.exp(-dt * 2.5);
  look.x += (look.tx - look.x) * k; look.y += (look.ty - look.y) * k;
  tickSound(dt);
  const tSec = (now - t0) / 1000;
  if (isPhone && settings.follow) { look.tx = 0.34 * Math.sin(tSec * 0.16); look.ty = 0.16 * Math.sin(tSec * 0.11 + 1.3); }
  if (settings.follow) {
    // ease toward the pointer by the shortest way round, never unwinding whole turns
    const ty = look.x + 0.06 * Math.sin(tSec * 0.5);
    const tau = Math.PI * 2;
    const goal = ty + tau * Math.round((mark.y - ty) / tau);
    mark.y += (goal - mark.y) * k;
    mark.x += (look.y + 0.04 * Math.sin(tSec * 0.37) - mark.x) * k;
  } else {
    mark.y += dt * 0.45 * Math.min(1, (mark.spinIn = Math.min(1, (mark.spinIn || 0) + dt)));
    mark.x += (-0.25 + 0.08 * Math.sin(tSec * 0.6) - mark.x) * k;
  }
  if (settings.follow) mark.spinIn = 0;
  if (state.playing) {
    state.t += dt;
    if (state.t >= TOTAL) state.t = 0.01;
    activate(clipAt(state.t));
  }
  // palette tween
  if (state.palTo) {
    const k = Math.min(1, (now - state.palStart) / 700);
    const e = ease(k);
    state.pal = state.palTo.map((c, i) => c.map((v, j) => lerp(state.palFrom[i][j], v, e)));
  }
  // UI clocks
  const tcs = tc(state.t);
  $("#tc").textContent = tcs;
  if (isPhone) tickPhone();
  $("#playhead").style.left = (state.t / VIEW) * 100 + "%";

  if (gl && prog) {
    const mix = Math.min(1, (now - state.transStart) / (TRANS * 1000));
    const cur = CLIPS[state.active], prev = CLIPS[state.prevIdx ?? state.active];
    gl.uniform1f(U.uScene0, (mix >= 1 ? cur : prev).scene);
    gl.uniform1f(U.uScene1, cur.scene);
    gl.uniform2f(U.uRes, canvas.width, canvas.height);
    gl.uniform1f(U.uTime, reduceMotion ? 4 : (now - t0) / 1000);
    gl.uniform1f(U.uMix, mix >= 1 ? 0 : ease(mix));
    fxMix += ((state.bypass ? 0 : 1) - fxMix) * (1 - Math.exp(-dt * 10));
    gl.uniform1f(U.uAmount, state.amount * fxMix);
    gl.uniform1f(U.uPixel, Math.max(1, Math.round(state.pixel * dpr)));
    gl.uniform1f(U.uLevels, state.levels);
    gl.uniform1f(U.uPattern, state.pattern);
    gl.uniform1f(U.uNoise, state.noise); gl.uniform1f(U.uBoil, state.boil);
    gl.uniform1f(U.uGrain, state.grain * fxMix);
    const d = state.daylight;
    const mixP = (a, b, k) => a.map((c, i) => c.map((v, j) => lerp(v, b[i][j], k)));
    const pal = d >= 0.5 ? mixP(DUSK, state.pal, (d - 0.5) * 2) : mixP(NIGHT, DUSK, d * 2);
    gl.uniform1f(U.uD, d);
    gl.uniform1f(U.uExposure, exposureFor(d));
    gl.uniform3fv(U.uC0, pal[0]); gl.uniform3fv(U.uC1, pal[1]); gl.uniform3fv(U.uC2, pal[2]);
    gl.uniform2f(U.uRot, look.x, look.y);
    gl.uniform2f(U.uMark, mark.y, mark.x);
    if (post && fbo) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo.scene.fb);
      gl.viewport(0, 0, fbo.scene.w, fbo.scene.h);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      gl.useProgram(post);
      gl.uniform1f(PU.uBloom, (settings.glow ? state.bloom : 0) * fxMix);
      lbNow += ((state.lb && !state.bypass ? 1 : 0) - lbNow) * (1 - Math.exp(-dt * 6));
      gl.uniform1f(PU.uTime, (now - t0) / 1000);
      gl.uniform1f(PU.uAspect, canvas.width / canvas.height);
      gl.uniform3fv(PU.uTint, pal[2]);
      gl.uniform1f(PU.uLB, lbNow); gl.uniform1f(PU.uHal, state.hal * fxMix); gl.uniform1f(PU.uDiff, state.diff * fxMix);
      gl.uniform1f(PU.uCA, state.ca * fxMix); gl.uniform1f(PU.uVig, state.vig * fxMix); gl.uniform1f(PU.uLeak, state.leak * fxMix);
      gl.uniform1f(PU.uKick, mix >= 1 ? 0 : Math.sin(Math.PI * mix));
      const qx = 1 / fbo.a.w, qy = 1 / fbo.a.h;
      postPass(fbo.a, fbo.scene, 0, [1 / fbo.scene.w * 1.5, 1 / fbo.scene.h * 1.5]);
      postPass(fbo.b, fbo.a, 1, [qx, 0]);
      postPass(fbo.a, fbo.b, 1, [0, qy]);
      postPass(null, fbo.scene, 2, [0, 0], fbo.a);
      gl.useProgram(prog);
    } else {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
  }
}
function loop(now) { render(now); requestAnimationFrame(loop); }

// ---------- phone layout ----------
// On a phone the editor is stacked like a mobile video editor: the monitor on top, a control
// row, a strip of clips you swipe under a fixed playhead, the clip's text on a solid panel,
// and a tab bar for the four sections. Floating windows become sheets.
const phoneMQ = matchMedia("(max-width: 860px)");
let isPhone = phoneMQ.matches;
const mmss = (s) => String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(Math.floor(s % 60)).padStart(2, "0");

function renderPhoneCard(clip) {
  const i = clip.info, el = $("#pcard");
  $("#pdet").hidden = clip.id === "intro";
  el.innerHTML = `<div class="pkick rise" style="--i:0">${i.icon ? `<img src="${i.icon}" alt="">` : ""}<span>${i.sub}</span></div>${cardBody(clip, 1)}`;
  bindCard(el);
}
// The phone timeline: clips laid out from the left at their real lengths, one ambience
// track underneath, and a playhead that moves across them. Tap or drag to scrub.
function buildStrip() {
  const pct = (v) => (v / TOTAL) * 100 + "%";
  $("#strip").innerHTML = CLIPS.map((c, i) => `<button class="sc" data-i="${i}" style="left:${pct(c.start)};width:calc(${pct(c.dur)} - 3px);background-image:url(${c.thumb})" aria-label="${c.label}"><span>${c.label}</span></button>`).join("")
    + `<div class="sa" aria-hidden="true"><span>♪ Ambience</span></div><div class="sph" id="sph" aria-hidden="true"></div>`;
}
let lastShown = -1;
function markStrip(i, user) {
  $$("#strip .sc").forEach((el, j) => el.classList.toggle("on", j === i));
  if (lastShown !== i) { lastShown = i; if (user && !state.playing && scrollY > 0) scrollTo({ top: 0, behavior: "smooth" }); }
}
function tickPhone() {
  $("#ptc").textContent = mmss(state.t) + " / " + mmss(TOTAL);
  $("#sph").style.left = (state.t / TOTAL) * 100 + "%";
}
function sheetSwipe(win) {
  const bar = $(".win-bar", win);
  bar.addEventListener("pointerdown", (e) => {
    if (!isPhone || e.target.closest("button")) return;
    const y0 = e.clientY;
    win.style.transition = "none";
    const move = (ev) => { win.style.transform = `translateY(${Math.max(0, ev.clientY - y0)}px)`; };
    const up = (ev) => {
      bar.removeEventListener("pointermove", move); bar.removeEventListener("pointerup", up); bar.removeEventListener("pointercancel", up);
      win.style.transition = "transform .2s ease";
      if (ev.type === "pointerup" && ev.clientY - y0 > 90) { win.style.transform = "translateY(100%)"; setTimeout(() => win.remove(), 200); }
      else win.style.transform = "";
    };
    bar.addEventListener("pointermove", move); bar.addEventListener("pointerup", up); bar.addEventListener("pointercancel", up);
  });
}
function bindPhone() {
  buildStrip();
  $$("#pbar [data-pact]").forEach((b) => b.addEventListener("click", () => ({
    prev: () => jumpTo(state.active - 1), next: () => jumpTo(state.active + 1), play: togglePlay,
  })[b.dataset.pact]()));
  $$("#ptabs button").forEach((b) => b.addEventListener("click", () => jumpTo(CLIPS.findIndex((c) => c.id === b.dataset.go.slice(1)))));
  // scrub: tap or drag sideways across the strip; vertical drags still scroll the page
  const strip = $("#strip");
  strip.addEventListener("pointerdown", (e) => {
    const at = (ev) => {
      const r = strip.getBoundingClientRect();
      state.t = Math.max(0, Math.min(TOTAL - 0.001, ((ev.clientX - r.left) / r.width) * TOTAL));
      activate(clipAt(state.t));
    };
    at(e);
    const up = () => { strip.removeEventListener("pointermove", at); strip.removeEventListener("pointerup", up); strip.removeEventListener("pointercancel", up); };
    strip.addEventListener("pointermove", at); strip.addEventListener("pointerup", up); strip.addEventListener("pointercancel", up);
  });
  $("#pFx").addEventListener("click", (e) => { e.stopPropagation(); showTab("fx"); });
  document.addEventListener("pointerdown", (e) => {
    if (isPhone && !$("#fxPop").classList.contains("hidden") && !e.target.closest("#fxPop, #pFx")) showTab("fx", false);
  });
  $("#fxDone").addEventListener("click", () => showTab("fx", false));
  // tapping outside a sheet closes it
  $("#windows").addEventListener("click", (e) => { if (isPhone && e.target.id === "windows") $$(".win").forEach((w) => w.remove()); });
  $("#fsBtn").addEventListener("click", (e) => { e.stopPropagation(); toggleFull(); });
  phoneMQ.addEventListener("change", applyPhone);
}
function applyPhone() {
  isPhone = phoneMQ.matches;
  document.body.classList.toggle("phone", isPhone);
  (isPhone ? $("#pdet") : $(".side")).appendChild($("#info"));
  (isPhone ? $("#app") : $("#viewer")).appendChild($("#fxPop"));   // on a phone the effects panel is a sheet over the page
  if (isPhone) {
    showTab("fx", false);
    buildStrip();
    if (state.active >= 0) { renderPhoneCard(CLIPS[state.active]); markStrip(state.active, false); }
  }
  requestAnimationFrame(resize);
}


// ---------- boot ----------

// ---------- init ----------
bindMenus();
buildTimeline();
buildSwatches();
bindControls();
bindPanels();
bindMixer();
bindPhone();
applyPhone();
wake();
startNudge();
const glOk = initGL();
if (!glOk) $("#viewer").style.background = "radial-gradient(circle at 30% 30%, #3f8a6c, #0d2620)";
setAmount(1);
setDaylight(START_LIGHT);
const startIdx = Math.max(0, CLIPS.findIndex((c) => c.id === location.hash.slice(1)));
jumpTo(startIdx);
if (isPhone) markStrip(state.active, false);
resize();
requestAnimationFrame(loop);
