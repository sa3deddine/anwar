# Portfolio Web Editorial – Anwar BENCHEIKH
> **Ingénieur en Automatisme & Informatique Industrielle – EMSI Rabat**

Un portfolio web one-page ultra-moderne, responsive et bilingue (Français / Anglais), conçu dans un style éditorial haut de gamme inspiré de Readymag. Destiné aux recruteurs de stages PFE, d'alternances et de premiers emplois.

---

## 🎨 Direction Artistique & Fonctionnalités

- **Style Éditiorial & Typographique** : Grands titres géants (`Syne`), police de corps ultra-lisible (`Inter`), touches sérif (`Instrument Serif`) et métadonnées en monospace (`Space Mono`).
- **Mode Sombre / Clair** : Bascule instantanée entre la palette fond crème `#F4F1EA` et fond noir profond `#0B0B0C` avec sauvegarde des préférences dans le `localStorage`.
- **Bilingue FR / EN** : Dictionnaire complet de traductions et switch dynamique sans rechargement de page.
- **Micro-Interactions Industrielles** :
  - Preloader haute technologie avec compteur 00 -> 100%.
  - Curseur magnétique sur-mesure avec texte interactif sur la survol des cartes.
  - Marquee défilant récapitulant les mots-clés de l'automatisme et de l'IoT.
  - Cartes de projets interactives avec **modale / tiroir de détail** (contexte, rôle, technologies, problématique et résultats chiffrés).
- **Smooth Scroll & Animations** : Défilement ultra-fluide avec `Lenis` et apparitions progressives contrôlées par `GSAP ScrollTrigger`.
- **Accessibilité & SEO** : Respect des contrastes WCAG AA, balises méta Open Graph complètes, navigation clavier et respect de `prefers-reduced-motion`.

---

## 🛠️ Stack Technique

- **HTML5 & CSS3 Vanilla** (Architecture CSS modulaires avec CSS Variables)
- **JavaScript ES6+** (Architecture modulaire)
- **Vite** (Serveur de développement ultra-rapide & bundler de production)
- **GSAP 3** + **ScrollTrigger** (Animations au défilement)
- **Lenis** (Smooth Scrolling)

---

## 📁 Structure du Projet

```
anwar/
├── index.html                # Document principal HTML5 SEO & Accessibilité
├── package.json              # Configuration Vite & dépendances GSAP/Lenis
├── README.md                 # Documentation d'utilisation & déploiement
├── assets/                   # Fichiers médias & CV
│   ├── photo.jpg             # Portrait éditorial d'Anwar Bencheikh (B&W)
│   ├── project-ev.jpg        # Aperçu du projet Recharge EV
│   ├── project-irrigation.jpg # Aperçu du projet Smart Irrigation
│   ├── project-scada.jpg     # Aperçu du projet STEP SIEMENS
│   ├── project-fire.jpg       # Aperçu du projet Centrale FINSECUR
│   └── cv-anwar-bencheikh.pdf # Curriculum Vitae téléchargeable
├── css/                      # Modules de styles CSS
│   ├── variables.css         # Design tokens, typographies, couleurs clair/sombre
│   ├── main.css              # Normalisation, préchargeur, en-tête & boutons
│   ├── hero.css              # Titres géants, badge de disponibilité & marquee
│   ├── sections.css          # Style des 8 sections, grille & modale
│   └── cursor.css            # Curseur magnétique personnalisé
└── js/                       # Modules JavaScript ES6
    ├── main.js               # Initialisation générale, GSAP, Lenis & rendus
    ├── data.js               # Données complètes traduites (FR / EN)
    ├── i18n.js               # Moteur de bascule de langue
    ├── theme.js              # Moteur de bascule mode sombre/clair
    ├── cursor.js             # Effet de suivi du curseur
    └── modal.js              # Gestionnaire du tiroir de détail des projets
```

---

## 🚀 Prise en main rapide en local

### 1. Installation des dépendances
```bash
npm install
```

### 2. Lancement du serveur de développement
```bash
npm run dev
```
Ouvrez ensuite le lien local (par ex. `http://localhost:5173`) dans votre navigateur.

### 3. Compilation pour la production
```bash
npm run build
```
Les fichiers prêts pour le déploiement seront générés dans le dossier `dist/`.

---

## ✏️ Guide d'édition des contenus

### Remplacer la photo de profil
Remplacez le fichier `assets/photo.jpg` par votre propre portrait au format vertical (3:4 de préférence).

### Remplacer le CV PDF
Remplacez le fichier `assets/cv-anwar-bencheikh.pdf` par votre fichier PDF officiel.

### Modifier ou ajouter des projets / expériences
Éditez directement le fichier **`js/data.js`**. Toutes les données sont structurées en deux objets : `fr` et `en`.

Exemple pour ajouter un projet :
```javascript
{
  id: "mon-projet",
  index: "05",
  category: "Domaine",
  title: "Titre du Projet",
  summary: "Résumé court pour la carte",
  context: "Explication détaillée du contexte",
  role: "Votre rôle",
  technologies: ["Tech 1", "Tech 2"],
  results: "Résultats chiffrés",
  image: "assets/votre-image.jpg"
}
```

---

## 🌐 Déploiement

Ce projet est 100% prêt à être hébergé gratuitement sur :
- **Vercel** : Importez le dépôt GitHub, Vercel détectera automatiquement Vite.
- **Netlify** : Glissez-déposez le dossier `dist/` après avoir exécuté `npm run build`.
- **GitHub Pages** : Déployez la branche `dist` ou utilisez GitHub Actions.

---

*Conçu avec passion pour l'ingénierie d'automatisme & l'excellence front-end.*
