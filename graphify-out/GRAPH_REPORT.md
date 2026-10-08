# Graph Report - react-dev-portfolio  (2026-10-08)

## Corpus Check
- 26 files · ~299,460 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 7 file(s) not represented in the graph (top: (none) 3, .example 1, .conf 1)

## Summary
- 125 nodes · 256 edges · 11 communities (9 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `32ea23d3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- data.js
- App.jsx
- HeroSection.jsx
- Kwadwo Labs – Portfolio Website
- devDependencies
- react
- dependencies
- ContactSection.jsx
- entrypoint.sh

## God Nodes (most connected - your core abstractions)
1. `react` - 17 edges
2. `useTheme()` - 17 edges
3. `framer-motion` - 14 edges
4. `App()` - 12 edges
5. `lucide-react` - 9 edges
6. `Kwadwo Labs – Portfolio Website` - 8 edges
7. `containerVariants` - 7 edges
8. `itemVariants` - 7 edges
9. `ErrorBoundary` - 6 edges
10. `ContactSection()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `ContactSection()`  [EXTRACTED]
  src/App.jsx → src/components/section/ContactSection.jsx
- `ProjectSection()` --calls--> `ProjectCard()`  [EXTRACTED]
  src/components/section/ProjectSection.jsx → src/components/ProjectCard.jsx
- `ContactSection()` --calls--> `useTheme()`  [EXTRACTED]
  src/components/section/ContactSection.jsx → src/context/ThemeContext.jsx
- `HeroSection()` --calls--> `useTypewriter()`  [EXTRACTED]
  src/components/section/HeroSection.jsx → src/hooks/useTypewriter.js
- `App()` --calls--> `LoadingScreen()`  [EXTRACTED]
  src/App.jsx → src/components/LoadingScreen.jsx

## Import Cycles
- None detected.

## Communities (11 total, 2 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.11
Nodes (20): name, private, scripts, build, dev, lint, preview, type (+12 more)

### Community 1 - "data.js"
Cohesion: 0.16
Nodes (11): @iconify/react, StatItem(), useCountUp(), CONTACT_INFO, JOURNEY_STEPS, PASSIONS, PROJECTS, SKILLS_CAT (+3 more)

### Community 2 - "App.jsx"
Cohesion: 0.29
Nodes (12): App(), LoadingScreen(), Navbar(), ScrollToTop(), AboutSection(), Footer(), HeroSection(), ProjectSection() (+4 more)

### Community 3 - "HeroSection.jsx"
Cohesion: 0.27
Nodes (8): framer-motion, react-icons, ProjectCard(), ROLES, useTypewriter(), HERO_TAGS, containerVariants, itemVariants

### Community 4 - "Kwadwo Labs – Portfolio Website"
Cohesion: 0.15
Nodes (12): 📧 Contact Form Setup, Development, 🔐 Environment Variables, 🏃‍♂️ Getting Started, Installation, 🚀 Key Features, Kwadwo Labs – Portfolio Website, 📜 License (+4 more)

### Community 5 - "devDependencies"
Cohesion: 0.20
Nodes (10): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, @types/react, @types/react-dom (+2 more)

### Community 6 - "react"
Cohesion: 0.24
Nodes (3): react, react-dom, ErrorBoundary

### Community 7 - "dependencies"
Cohesion: 0.22
Nodes (9): dependencies, framer-motion, @iconify/react, lucide-react, react, react-dom, react-icons, tailwindcss (+1 more)

### Community 8 - "ContactSection.jsx"
Cohesion: 0.52
Nodes (4): lucide-react, TextInput(), ContactSection(), SuccessModal()

## Knowledge Gaps
- **41 isolated node(s):** `entrypoint.sh script`, `name`, `private`, `version`, `type` (+36 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 53 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `package.json`, `data.js`, `App.jsx`, `HeroSection.jsx`, `ContactSection.jsx`?**
  _High betweenness centrality (0.187) - this node is a cross-community bridge._
- **What connects `entrypoint.sh script`, `name`, `private` to the rest of the system?**
  _41 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.11067193675889328 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.122) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._