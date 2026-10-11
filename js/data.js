/* ==========================================================================
   ANWAR BENCHEIKH - CONTENT & PORTFOLIO DATA (FR / EN BILINGUAL)
   Official CV Version + Extracurricular Activities
   ========================================================================== */

export const portfolioData = {
  fr: {
    hero: {
      surname: "BENCHEIKH",
      firstname: "ANWAR",
      subtitle: "Ingénieur en Automatisme & Informatique Industrielle",
      status: "Disponible pour Stage PFE / Premier Emploi",
      ctaPrimary: "Découvrir mes projets",
      ctaContact: "Me Contacter",
      scrollText: "Faire défiler"
    },
    about: {
      number: "01",
      title: "Profil & Ambition",
      quote: "Étudiant en 5e année d'ingénierie en informatique industrielle et automatisme séquentiel. Motivé, autonome et impliqué.",
      p1: "Actuellement élève ingénieur à l'École Marocaine des Sciences de l'Ingénieur (EMSI-Rabat), je me spécialise en automatisme séquentiel, régulation industrielle, supervision SCADA et informatique industrielle.",
      p2: "Compétent en gestion de projets en équipe, je bénéficie d'un bon leadership, d'un sens des responsabilités affirmé et d'une excellente aisance à l'oral pour mener à bien des projets d'ingénierie complexes.",
      highlights: [
        {
          icon: "⚡",
          title: "Gestion de projets en équipe",
          desc: "Planification, méthodologie agile, rédaction de cahiers des charges et coordination des livrables."
        },
        {
          icon: "🧠",
          title: "Leadership & Esprit d'initiative",
          desc: "Prise de décision technique, organisation des tâches et motivation des équipes pluridisciplinaires."
        },
        {
          icon: "🗣️",
          title: "Prise de parole en public",
          desc: "Excellente aisance à l'oral, présentation claire des projets devant jurys et partenaires."
        },
        {
          icon: "🛡️",
          title: "Fiabilité & Négociation",
          desc: "Sens des responsabilités affirmé, art de la négociation et respect des normes industrielles."
        }
      ]
    },
    projects: [
      {
        id: "ev-charging",
        index: "01",
        category: "Smart Industry & Micro-Grid",
        title: "Optimisation de la Recharge des Véhicules Électriques en Domaine Industriel",
        summary: "Développement d'un système intelligent de gestion de la charge électrique (EV Smart Charging) avec délestage dynamique et supervision des pics de consommation.",
        context: "Projet d'ingénierie visant à réduire la consommation de pointe et à stabiliser le réseau électrique d'un site industriel en régulant la puissance allouée à une flotte de véhicules électriques.",
        role: "Chef de projet & Concepteur du système d'automatisation.",
        technologies: ["Python", "MATLAB", "Node-RED", "Modbus RTU/TCP", "Arduino", "PIC16F"],
        results: "Réduction des surcharges réseau de 28% et lissage optimal des courbes de charge.",
        image: "assets/project-ev.jpg",
        detail: {
          problem: "Risque de dépassement de souscription et surcharge du transformateur lors de la recharge simultanée de plusieurs véhicules.",
          solution: "Implémentation d'un algorithme de régulation dynamique sous Python communiquant avec des variateurs et bornes en Modbus.",
          features: [
            "Algorithme de délestage sélectif selon la priorité des véhicules et les tarifs horaires",
            "Supervision temps réel sur interface Node-RED avec alertes automatisées",
            "Mode dégradé de secours pour assurer la sécurité électrique du site"
          ]
        }
      },
      {
        id: "smart-irrigation",
        index: "02",
        category: "IoT & Agritech",
        title: "Développement du \"Smart Irrigation\" – Ferme Multi-Serre",
        summary: "Conception et automatisation d'une station d'irrigation et de fertirrigation intelligente multi-serres pilotée par capteurs IoT et télémétrie.",
        context: "Création d'un système autonome assurant la régulation précise de l'humidité du sol, de la température et du dosage des éléments nutritifs sur plusieurs serres régionales.",
        role: "Concepteur Matériel (PIC16F/Arduino) & Développeur Cloud IoT.",
        technologies: ["Microcontrôleur PIC16F", "Arduino IDE", "Node-RED", "Proteus", "MikroC", "Capteurs Humidité/Sol"],
        results: "Économie d'eau de 35% et automatisation totale des cycles d'arrosage.",
        image: "assets/project-irrigation.jpg",
        detail: {
          problem: "Gaspillage des ressources en eau et manque de réactivité face aux variations micro-climatiques.",
          solution: "Réseau de capteurs télémétriques reliés à un contrôleur central PIC/Arduino activant des électrovannes modulantes.",
          features: [
            "Contrôle en boucle fermée de l'apport en eau et en engrais liquide",
            "Tableau de bord de supervision à distance sous Node-RED",
            "Journalisation locale et système d'alarme seuil critique"
          ]
        }
      },
      {
        id: "wastewater-scada",
        index: "03",
        category: "Automatisme SIEMENS & SCADA",
        title: "Automatisation et Supervision d'une Station d'Épuration (SIEMENS)",
        summary: "Programmation sur SIEMENS TIA Portal et développement d'une interface de supervision SCADA WinCC pour une station d'épuration (STEP).",
        context: "Automatisation complète des processus de traitement des eaux usées : pompage de relèvement, décantation, aération et déshydratation.",
        role: "Ingénieur Automaticien – Programmation SCL/Ladder & Design IHM WinCC.",
        technologies: ["SIEMENS TIA Portal", "S7-1200", "WinCC SCADA", "SCL", "Ladder", "PROFINET"],
        results: "Supervision temps réel intégrée 24/7 avec téléconduite et gestion préventive des pannes.",
        image: "assets/project-scada.jpg",
        detail: {
          problem: "Supervision obsolète nécessitant des interventions manuelles fréquentes et sans suivi des alarmes pompes.",
          solution: "Déploiement d'un automate Siemens S7-1200 avec réseau PROFINET et écrans synoptiques interactifs sous WinCC.",
          features: [
            "Programmation structurée en SCL et Ladder (CONT) selon la norme IEC 61131-3",
            "Synoptique dynamique avec indication des états de marche/défaut",
            "Archivage des historiques de débit et gestion des acquittements d'alarmes"
          ]
        }
      },
      {
        id: "fire-alarm",
        index: "04",
        category: "Systèmes de Sécurité (SSI)",
        title: "Programmation d'une Centrale d'Incendie (FINSECUR)",
        summary: "Configuration, programmation des asservissements et essais de mise en sécurité d'une centrale incendie FINSECUR.",
        context: "Étude et paramétrage d'un Système de Détection d'Incendie (SDI) et d'un Système de Mise en Sécurité Incendie (SMSI) pour établissement récepteur du public.",
        role: "Intégrateur Système SSI & Responsable Essais.",
        technologies: ["Centrale FINSECUR", "Caneco BT", "Autocad", "Bus RS485", "Normes NF S 61-970"],
        results: "Validation à 100% des matrices de corrélation pour le désenfumage et le compartimentage.",
        image: "assets/project-fire.jpg",
        detail: {
          problem: "Interconnexion rigoureuse exigée entre zones de détection et lignes de commande de sécurité d'évacuation.",
          solution: "Paramétrage des tableaux de corrélation sur la centrale modulaire FINSECUR et dimensionnement sur Caneco BT.",
          features: [
            "Zonage réglementaire des boucles de détection conventionnelles et adressables",
            "Essais d'asservissement des volets de désenfumage et portes coupe-feu",
            "Bilan de puissance des alimentations électriques de sécurité (AES)"
          ]
        }
      }
    ],
    skills: {
      number: "02",
      title: "Compétences Techniques",
      categories: [
        {
          name: "Langages de Programmation",
          items: ["C", "JAVA", "PYTHON", "PIC16F Assembly", "VHDL", "SCL (Siemens)", "LADDER", "Arduino C++", "VB.net"]
        },
        {
          name: "Logiciels Techniques & Automatisme",
          items: ["SIEMENS TIA Portal", "WinCC SCADA", "Proteus", "MikroC", "Arduino IDE", "Caneco BT", "MATLAB", "Node-RED", "Visual Studio", "NetBeans"]
        },
        {
          name: "Bureautique & Documentaire",
          items: ["Overleaf / LaTeX", "AutoCAD", "Microsoft PowerPoint", "PDFXChange Editor"]
        },
        {
          name: "Compétences Relationnelles & Soft Skills",
          items: ["Gestion de projets en équipe", "Leadership et esprit d'initiative", "Fiabilité et sens des responsabilités", "Art de la négociation", "Maîtrise de la prise de parole en public"]
        }
      ]
    },
    timeline: {
      number: "03",
      title: "Parcours & Expériences",
      experiences: [
        {
          date: "JUILLET 2024 (1 MOIS)",
          role: "Stage d'application – Département SSI",
          company: "DP Networks",
          desc: "Participation au câblage, paramétrage et essais d'asservissement des centrales d'incendie (FINSECUR). Analyse des schémas électriques et vérification de conformité."
        },
        {
          date: "JUILLET – AOÛT 2023 (2 MOIS)",
          role: "Stage d'application – Département Assainissement",
          company: "ONEE (Office National de l'Électricité et de l'Eau Potable)",
          desc: "Immersion technique au sein d'une station d'épuration des eaux usées. Étude des chaînes de mesure industrielles, capteurs et automates de régulation."
        },
        {
          date: "JUILLET 2022 (1 MOIS)",
          role: "Stage d'observation – Département SSI",
          company: "SEPSI",
          desc: "Découverte des installations de sécurité électronique (détection incendie, contrôle d'accès, alarme) et assistance à l'intervention technique sur site."
        }
      ],
      education: [
        {
          date: "2024 – 2027",
          role: "Master en Ingénierie Automatisme et Informatique Industrielle",
          company: "École Marocaine des Sciences d'Ingénierie (EMSI-Rabat)",
          desc: "Formation d'ingénieur spécialisée en automatisme séquentiel, informatique industrielle, régulation, réseaux locaux industriels et supervision SCADA."
        },
        {
          date: "2022 – 2024",
          role: "Année Préparatoire",
          company: "École Marocaine des Sciences d'Ingénierie (EMSI-Rabat)",
          desc: "Cycle préparatoire scientifique : mathématiques appliquées, physique du signal, électronique analogique et numérique, algorithmique C."
        },
        {
          date: "2022",
          role: "Baccalauréat Sciences et Technologies Électriques (STE)",
          company: "Lycée Technique Les Orangers – Rabat",
          desc: "Obtenu avec mention. Fondations solides en génie électrique, schématique industrielle, électrotechnique et logique combinatoire."
        }
      ]
    },
    extracurricular: {
      number: "04",
      title: "Activités Parascolaires & Engagement",
      subtitle: "Vie associative, leadership étudiant, animation d'ateliers techniques et réalisations événementielles.",
      items: [
        {
          tag: "EMSI RABAT",
          role: "Ambassadeur au Career Center",
          org: "Département Automatisme & Génie Industriel – EMSI Rabat",
          desc: "Accompagnement des étudiants, orientation professionnelle, organisation des forums entreprises et liaison avec les partenaires industriels."
        },
        {
          tag: "LEADERSHIP ÉTUDIANT",
          role: "Vice-Président du Club Génie Industriel",
          org: "EMSI Rabat",
          desc: "Gestion de l'équipe du bureau, coordination des événements scientifiques, organisation des visites industrielles et conférences spécialisées."
        },
        {
          tag: "FORMATION & PEDAGOGIE",
          role: "Formateur Overleaf & Gestion de Projets",
          org: "Ateliers Académiques",
          desc: "Conception et animation de sessions de formation pratique sur la rédaction scientifique en LaTeX (Overleaf) et la méthodologie de gestion de projets."
        },
        {
          tag: "INGÉNIERIE & SÉCURITÉ",
          role: "Concepteur de Plans d'Évacuation Bâtiment",
          org: "Projets Techniques & SSI",
          desc: "Modélisation et dessin des plans de prévention, consignes de sécurité et parcours d'évacuation conformes aux normes ERP/ERT."
        },
        {
          tag: "MANAGEMENT & LOGISTIQUE",
          role: "Gérance en Événementiel & Restauration",
          org: "Gestion Opérationnelle",
          desc: "Planification logistique, gestion des équipes de service, négociation fournisseurs et coordination globale d'événements à forte affluence."
        }
      ]
    },
    certifications: {
      number: "05",
      title: "Certifications",
      items: [
        { title: "Programmation en Python", issuer: "Certification Technique", date: "2024" },
        { title: "Introduction de l'industrie 4.0 (IOT)", issuer: "Cisco / IoT Academy", date: "2024" },
        { title: "Overleaf and Latex", issuer: "Documentation Scientifique", date: "2023" },
        { title: "Introduction sur Machine Learning", issuer: "Machine Learning Foundations", date: "2024" },
        { title: "Machine Learning in Production", issuer: "DeepLearning.AI / MLOps", date: "2024" },
        { title: "Systèmes d'alimentation électrique", issuer: "Génie Électrique", date: "2023" }
      ]
    },
    languages: {
      number: "06",
      title: "Langues",
      items: [
        { name: "Français", level: "Courant" },
        { name: "Anglais", level: "Intermediate" },
        { name: "Arabe", level: "Maternelle" }
      ]
    },
    contact: {
      number: "07",
      title: "Travaillons Ensemble",
      subtitle: "À la recherche d'un stage PFE ou d'une première opportunité professionnelle en informatique industrielle et automatisme.",
      email: "anwar.bencheikh04@gmail.com",
      phone: "+212 661 195 314",
      location: "Rabat, Maroc",
      downloadCv: "Télécharger mon CV (PDF)",
      formName: "Votre Nom / Entreprise",
      formEmail: "Votre Adresse Email",
      formMessage: "Votre Message / Proposition de Stage",
      formSubmit: "Envoyer le message",
      successMsg: "Merci ! Votre message a été envoyé avec succès. Je vous répondrai dans les meilleurs délais."
    }
  },
  en: {
    hero: {
      surname: "BENCHEIKH",
      firstname: "ANWAR",
      subtitle: "Automation & Industrial Computer Science Engineer",
      status: "Available for Final Year Internship / Entry Level",
      ctaPrimary: "Explore My Projects",
      ctaContact: "Get In Touch",
      scrollText: "Scroll down"
    },
    about: {
      number: "01",
      title: "Profile & Vision",
      quote: "5th year engineering student in industrial computing and sequential automation. Motivated, autonomous, and highly committed.",
      p1: "Currently pursuing my engineering degree at the Moroccan School of Engineering Sciences (EMSI-Rabat), I specialize in sequential automation, process control, SCADA supervision, and industrial IT.",
      p2: "Skilled in team project management with strong leadership, a clear sense of responsibility, and excellent public speaking skills to drive complex engineering projects.",
      highlights: [
        {
          icon: "⚡",
          title: "Team Project Management",
          desc: "Planning, agile execution, technical specifications drafting, and deliverable coordination."
        },
        {
          icon: "🧠",
          title: "Leadership & Initiative",
          desc: "Technical decision making, task allocation, and motivating cross-functional teams."
        },
        {
          icon: "🗣️",
          title: "Public Speaking",
          desc: "Outstanding oral fluency, articulating engineering proposals clearly to juries and partners."
        },
        {
          icon: "🛡️",
          title: "Reliability & Negotiation",
          desc: "Strong sense of responsibility, negotiation skills, and adherence to industrial standards."
        }
      ]
    },
    projects: [
      {
        id: "ev-charging",
        index: "01",
        category: "Smart Industry & Micro-Grid",
        title: "Electric Vehicle Charging Optimization in Industrial Facilities",
        summary: "Development of a smart EV charging management system featuring dynamic load shedding and peak power regulation.",
        context: "Engineering project aimed at reducing peak demand charges and stabilizing an industrial facility power grid by modulating EV fleet charging rates.",
        role: "Project Lead & Automation System Designer.",
        technologies: ["Python", "MATLAB", "Node-RED", "Modbus RTU/TCP", "Arduino", "PIC16F"],
        results: "Reduced power grid peak surges by 28% while smoothing demand curves.",
        image: "assets/project-ev.jpg",
        detail: {
          problem: "Transformer overload risk during peak hours when multiple industrial EVs charge simultaneously.",
          solution: "Implemented a Python-based dynamic load management algorithm communicating via Modbus with field drives.",
          features: [
            "Predictive selective load shedding algorithm based on vehicle priority and tariff schedules",
            "Real-time monitoring dashboard in Node-RED with automated alerts",
            "Emergency fail-safe offline fallback mode"
          ]
        }
      },
      {
        id: "smart-irrigation",
        index: "02",
        category: "IoT & Agritech",
        title: "\"Smart Irrigation\" – Autonomous Multi-Greenhouse Farm",
        summary: "Design and automation of an intelligent multi-zone irrigation and fertigation station driven by IoT sensors and soil telemetry.",
        context: "Building an autonomous system for precise moisture, temperature, and nutrient control across multiple agricultural greenhouses.",
        role: "Hardware Designer (PIC16F/Arduino) & Cloud IoT Developer.",
        technologies: ["PIC16F MCU", "Arduino IDE", "Node-RED", "Proteus", "MikroC", "Soil Sensors"],
        results: "Achieved 35% water savings and fully automated watering cycles.",
        image: "assets/project-irrigation.jpg",
        detail: {
          problem: "Water wastage and slow manual response to sudden environmental fluctuations.",
          solution: "Wireless telemetry sensor network linked to a central PIC/Arduino controller activating modulating solenoid valves.",
          features: [
            "Closed-loop PID regulation for water and fertilizer dosing",
            "Remote supervision dashboard with Node-RED",
            "Local data logging and critical threshold alerts"
          ]
        }
      },
      {
        id: "wastewater-scada",
        index: "03",
        category: "SIEMENS Automation & SCADA",
        title: "Wastewater Treatment Plant Automation (SIEMENS)",
        summary: "SIEMENS TIA Portal programming and WinCC SCADA supervision interface for an industrial wastewater treatment plant.",
        context: "Complete automation of wastewater treatment processes: lifting pumping, decantation, aeration, and sludge dewatering.",
        role: "Automation Engineer – SCL/Ladder Logic & WinCC HMI Design.",
        technologies: ["SIEMENS TIA Portal", "S7-1200", "WinCC SCADA", "SCL", "Ladder", "PROFINET"],
        results: "24/7 continuous SCADA supervision with remote control and preventive fault detection.",
        image: "assets/project-scada.jpg",
        detail: {
          problem: "Outdated control system requiring frequent manual intervention without active pump alarm logging.",
          solution: "Deployed a Siemens S7-1200 PLC with PROFINET industrial network and interactive WinCC SCADA screens.",
          features: [
            "Structured SCL and Ladder (LAD) programming compliant with IEC 61131-3",
            "Dynamic process synoptics showing real-time pump and valve states",
            "Flow history archiving and active alarm acknowledgement"
          ]
        }
      },
      {
        id: "fire-alarm",
        index: "04",
        category: "Safety Systems (SSI)",
        title: "FINSECUR Fire Alarm Control Unit Programming",
        summary: "Configuration, safety interlock programming, and commissioning tests for a FINSECUR fire detection and safety system.",
        context: "Design and setup of a Fire Detection System (SDI) and Fire Safety Control System (SMSI) for public access buildings.",
        role: "Safety System Integrator & Commissioning Engineer.",
        technologies: ["FINSECUR Panel", "Caneco BT", "Autocad", "RS485 Bus", "NF S 61-970 Standard"],
        results: "100% compliance verified across all smoke extraction and compartmentation matrices.",
        image: "assets/project-fire.jpg",
        detail: {
          problem: "Strict safety interlocks required between detection zones and emergency smoke damper actuators.",
          solution: "Configured correlation matrices on the modular FINSECUR panel and executed electrical sizing on Caneco BT.",
          features: [
            "Regulatory zoning for conventional and addressable detection loops",
            "Interlock testing for smoke dampers and fire doors",
            "Battery backup sizing calculations (AES)"
          ]
        }
      }
    ],
    skills: {
      number: "02",
      title: "Technical Skills",
      categories: [
        {
          name: "Programming Languages",
          items: ["C", "JAVA", "PYTHON", "PIC16F Assembly", "VHDL", "SCL (Siemens)", "LADDER", "Arduino C++", "VB.net"]
        },
        {
          name: "Engineering Software & Tools",
          items: ["SIEMENS TIA Portal", "WinCC SCADA", "Proteus", "MikroC", "Arduino IDE", "Caneco BT", "MATLAB", "Node-RED", "Visual Studio", "NetBeans"]
        },
        {
          name: "CAD & Documentation",
          items: ["Overleaf / LaTeX", "AutoCAD", "Microsoft PowerPoint", "PDFXChange Editor"]
        },
        {
          name: "Soft Skills & Professional Qualities",
          items: ["Team Project Management", "Leadership & Initiative", "Reliability & Responsibility", "Negotiation Skills", "Public Speaking Mastery"]
        }
      ]
    },
    timeline: {
      number: "03",
      title: "Experience & Education",
      experiences: [
        {
          date: "JULY 2024 (1 MONTH)",
          role: "Application Intern – SSI Department",
          company: "DP Networks",
          desc: "Assisted in wiring, configuration, and interlock testing for FINSECUR fire panels. Analyzed electrical schematics and verified regulatory compliance."
        },
        {
          date: "JULY – AUGUST 2023 (2 MONTHS)",
          role: "Application Intern – Sanitation Department",
          company: "ONEE (National Office of Electricity & Potable Water)",
          desc: "Technical immersion in a wastewater treatment plant. Evaluated industrial measurement loops, sensors, and control PLCs."
        },
        {
          date: "JULY 2022 (1 MONTH)",
          role: "Observation Intern – SSI Department",
          company: "SEPSI",
          desc: "Discovered electronic security installations (fire detection, access control, alarms) and assisted field technicians."
        }
      ],
      education: [
        {
          date: "2024 – 2027",
          role: "Master's Degree in Automation & Industrial Computer Science",
          company: "Moroccan School of Engineering Sciences (EMSI-Rabat)",
          desc: "Engineering degree program specializing in sequential automation, industrial IT, process control, industrial fieldbuses, and SCADA supervision."
        },
        {
          date: "2022 – 2024",
          role: "Preparatory Cycle",
          company: "Moroccan School of Engineering Sciences (EMSI-Rabat)",
          desc: "Scientific preparatory curriculum: applied mathematics, signal physics, analog/digital electronics, and C programming."
        },
        {
          date: "2022",
          role: "High School Diploma (Baccalauréat) in Electrical Sciences & Tech (STE)",
          company: "Lycée Technique Les Orangers – Rabat",
          desc: "Graduated with honors. Solid grounding in electrical engineering, industrial schematics, power engineering, and logic design."
        }
      ]
    },
    extracurricular: {
      number: "04",
      title: "Extracurricular Activities & Leadership",
      subtitle: "Student leadership, academic workshops, evacuation planning, and event management.",
      items: [
        {
          tag: "EMSI RABAT",
          role: "Career Center Ambassador",
          org: "Automation & Industrial Engineering Department – EMSI Rabat",
          desc: "Student mentoring, career guidance, organizing corporate job fairs, and industrial partnership liaison."
        },
        {
          tag: "STUDENT LEADERSHIP",
          role: "Vice President of the Industrial Engineering Club",
          org: "EMSI Rabat",
          desc: "Managing executive board operations, organizing scientific events, industrial field visits, and technical conferences."
        },
        {
          tag: "TRAINING & WORKSHOPS",
          role: "Overleaf & Project Management Trainer",
          org: "Academic Workshops",
          desc: "Designing and leading hands-on training sessions on LaTeX scientific writing (Overleaf) and project management methodologies."
        },
        {
          tag: "ENGINEERING & SAFETY",
          role: "Building Evacuation Plan Designer",
          org: "Technical & Fire Safety Projects",
          desc: "Designing building evacuation maps, emergency safety protocols, and exit routes compliant with safety standards."
        },
        {
          tag: "EVENT MANAGEMENT",
          role: "Event & Catering Operations Manager",
          org: "Operational Management",
          desc: "Logistics planning, team management, supplier negotiations, and overall coordination of high-occupancy events."
        }
      ]
    },
    certifications: {
      number: "05",
      title: "Certifications",
      items: [
        { title: "Programmation en Python", issuer: "Technical Certification", date: "2024" },
        { title: "Introduction de l'industrie 4.0 (IOT)", issuer: "Cisco / IoT Academy", date: "2024" },
        { title: "Overleaf and Latex", issuer: "Scientific Documentation", date: "2023" },
        { title: "Introduction sur Machine Learning", issuer: "Machine Learning Foundations", date: "2024" },
        { title: "Machine Learning in Production", issuer: "DeepLearning.AI / MLOps", date: "2024" },
        { title: "Systèmes d'alimentation électrique", issuer: "Electrical Engineering", date: "2023" }
      ]
    },
    languages: {
      number: "06",
      title: "Languages",
      items: [
        { name: "Français", level: "Courant" },
        { name: "Anglais", level: "Intermediate" },
        { name: "Arabe", level: "Maternelle" }
      ]
    },
    contact: {
      number: "07",
      title: "Let's Work Together",
      subtitle: "Actively seeking a Final Year Internship (PFE) or entry-level position in Industrial Computing & Automation.",
      email: "anwar.bencheikh04@gmail.com",
      phone: "+212 661 195 314",
      location: "Rabat, Morocco",
      downloadCv: "Download My Resume (PDF)",
      formName: "Your Name / Company",
      formEmail: "Your Email Address",
      formMessage: "Your Message / Opportunity Details",
      formSubmit: "Send Message",
      successMsg: "Thank you! Your message has been sent successfully. I will get back to you shortly."
    }
  }
};
