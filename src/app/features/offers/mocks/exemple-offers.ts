export const exempleOffers= [
    {
      id: "1",
      intitule: "Développeur Web",
      description: "Développement d'applications web en JavaScript et Angular.",
      dateCreation: "2023-01-10T09:30:00Z",
      dateActualisation: "2023-06-12T11:45:00Z",
      lieuTravail: {
        libelle: "Paris",
        latitude: 48.8566,
        longitude: 2.3522,
        codePostal: "75001",
        commune: "Paris"
      },
      romeCode: "M1805",
      romeLibelle: "Conception et développement web",
      appellationlibelle: "Développeur web",
      entreprise: {
        nom: "Tech Solutions",
        description: "Entreprise spécialisée dans le développement de solutions numériques.",
        logo: "https://example.com/logo1.png",
        url: "https://tech-solutions.com",
        entrepriseAdaptee: false
      },
      typeContrat: "CDI",
      typeContratLibelle: "Contrat à durée indéterminée",
      natureContrat: "Temps plein",
      experienceExige: "Oui",
      experienceLibelle: "2 ans d'expérience minimum",
      experienceCommentaire: "Expérience dans le développement front-end souhaitée.",
      formations: [
        {
          codeFormation: "1001",
          domaineLibelle: "Informatique",
          niveauLibelle: "Bac+3",
          commentaire: "Diplôme en développement web requis.",
          exigence: "Requise"
        }
      ],
      langues: [
        {
          libelle: "Anglais",
          exigence: "Souhaitée"
        }
      ],
      outilsBureautiques: ["Git", "VSCode"],
      competences: [
        { code: "C001", libelle: "HTML/CSS", exigence: "Requise" },
        { code: "C002", libelle: "JavaScript", exigence: "Requise" }
      ],
      salaire: {
        libelle: "35k€ annuel",
        commentaire: "Selon profil",
        complement1: "",
        complement2: ""
      },
      dureeTravailLibelle: "35h/semaine",
      dureeTravailLibelleConverti: "Temps plein",
      alternance: false,
      contact: {
        nom: "HR Tech Solutions",
        coordonnees1: "10 rue des Numériques",
        coordonnees2: "75001 Paris",
        telephone: "0123456789",
        courriel: "hr@tech-solutions.com",
        urlRecruteur: "https://tech-solutions.com/recrutement",
        urlPostulation: "https://tech-solutions.com/postuler"
      },
      agence: {
        telephone: "0123456790",
        courriel: "contact@tech-solutions.com"
      },
      nombrePostes: 2,
      accessibleTH: true,
      deplacementCode: "Aucun",
      deplacementLibelle: "Aucun déplacement",
      qualificationCode: "2",
      qualificationLibelle: "Technicien",
      codeNAF: "6201Z",
      secteurActivite: "Programmation informatique",
      secteurActiviteLibelle: "Développement logiciel",
      qualitesProfessionnelles: [
        { libelle: "Autonomie", description: "Capacité à travailler de manière autonome sur les projets." }
      ],
      trancheEffectifEtab: "50-100",
      origineOffre: {
        origine: "Site de l'entreprise",
        urlOrigine: "https://tech-solutions.com",
        partenaires: []
      },
      offresManqueCandidats: false
    },
    {
      id: "2",
      intitule: "Chef de projet IT",
      description: "Gestion de projets IT dans une grande structure.",
      dateCreation: "2022-05-15T14:20:00Z",
      dateActualisation: "2023-04-10T10:00:00Z",
      lieuTravail: {
        libelle: "Lyon",
        latitude: 45.764,
        longitude: 4.8357,
        codePostal: "69000",
        commune: "Lyon"
      },
      romeCode: "M1806",
      romeLibelle: "Gestion de projet informatique",
      appellationlibelle: "Chef de projet informatique",
      entreprise: {
        nom: "Digital Innov",
        description: "Entreprise spécialisée dans la transformation numérique.",
        logo: "https://example.com/logo2.png",
        url: "https://digital-innov.com",
        entrepriseAdaptee: true
      },
      typeContrat: "CDD",
      typeContratLibelle: "Contrat à durée déterminée",
      natureContrat: "Temps plein",
      experienceExige: "Oui",
      experienceLibelle: "5 ans d'expérience",
      formations: [
        {
          codeFormation: "1002",
          domaineLibelle: "Informatique",
          niveauLibelle: "Bac+5",
          commentaire: "Formation en management de projet.",
          exigence: "Requise"
        }
      ],
      langues: [
        { libelle: "Français", exigence: "Requise" }
      ],
      outilsBureautiques: ["Jira", "MS Project"],
      competences: [{ code: "C003", libelle: "Gestion de projet", exigence: "Requise" }],
      salaire: {
        libelle: "45k€ annuel",
        commentaire: "Selon expérience",
        complement1: "Prime de performance",
        complement2: ""
      },
      dureeTravailLibelle: "38h/semaine",
      dureeTravailLibelleConverti: "Temps plein",
      alternance: false,
      contact: {
        nom: "HR Digital Innov",
        coordonnees1: "5 avenue du Numérique",
        coordonnees2: "69000 Lyon",
        telephone: "0456789101",
        courriel: "hr@digital-innov.com",
        urlRecruteur: "https://digital-innov.com/recrutement",
        urlPostulation: "https://digital-innov.com/postuler"
      },
      agence: {
        telephone: "0456789102",
        courriel: "contact@digital-innov.com"
      },
      nombrePostes: 1,
      accessibleTH: true,
      deplacementCode: "Occasionnel",
      deplacementLibelle: "Déplacement régional",
      qualificationCode: "3",
      qualificationLibelle: "Cadre",
      codeNAF: "6202A",
      secteurActivite: "Conseil en systèmes informatiques",
      secteurActiviteLibelle: "Conseil en IT",
      qualitesProfessionnelles: [
        { libelle: "Rigueur", description: "Capacité à gérer efficacement les ressources et les délais." }
      ],
      trancheEffectifEtab: "100-200",
      origineOffre: {
        origine: "LinkedIn",
        urlOrigine: "https://linkedin.com",
        partenaires: []
      },
      offresManqueCandidats: true
    },
    {
      id: "3",
      intitule: "Technicien support",
      description: "Assistance technique et support informatique aux utilisateurs.",
      dateCreation: "2023-09-01T08:00:00Z",
      dateActualisation: "2023-09-30T12:00:00Z",
      lieuTravail: {
        libelle: "Marseille",
        latitude: 43.2965,
        longitude: 5.3698,
        codePostal: "13000",
        commune: "Marseille"
      },
      romeCode: "I1401",
      romeLibelle: "Assistance informatique",
      appellationlibelle: "Technicien support informatique",
      entreprise: {
        nom: "HelpTech",
        description: "Société spécialisée dans le support et l'assistance IT.",
        logo: "https://example.com/logo3.png",
        url: "https://helptech.com",
        entrepriseAdaptee: false
      },
      typeContrat: "CDI",
      typeContratLibelle: "Contrat à durée indéterminée",
      natureContrat: "Temps plein",
      experienceExige: "Non",
      experienceLibelle: "Débutant accepté",
      formations: [
        {
          codeFormation: "1003",
          domaineLibelle: "Informatique",
          niveauLibelle: "Bac+2",
          commentaire: "Formation en support informatique.",
          exigence: "Souhaitée"
        }
      ],
      langues: [
        { libelle: "Français", exigence: "Requise" }
      ],
      outilsBureautiques: ["Windows", "Office 365"],
      competences: [{ code: "C004", libelle: "Support utilisateur", exigence: "Requise" }],
      salaire: { libelle: "25k€ annuel" },
      dureeTravailLibelle: "35h/semaine",
      dureeTravailLibelleConverti: "Temps plein",
      alternance: false,
      contact: {
        nom: "HR HelpTech",
        coordonnees1: "15 rue des Supporteurs",
        coordonnees2: "13000 Marseille",
        telephone: "0491765432",
        courriel: "hr@helptech.com",
        urlRecruteur: "https://helptech.com/recrutement",
        urlPostulation: "https://helptech.com/postuler"
      },
      agence: {
        telephone: "0491765433",
        courriel: "contact@helptech.com"
      },
      nombrePostes: 3,
      accessibleTH: true,
      deplacementCode: "Aucun",
      deplacementLibelle: "Aucun déplacement",
      qualificationCode: "1",
      qualificationLibelle: "Technicien",
      codeNAF: "6202B",
      secteurActivite: "Maintenance informatique",
      secteurActiviteLibelle: "Support informatique",
      qualitesProfessionnelles: [
        { libelle: "Réactivité", description: "Capacité à résoudre rapidement les problèmes." }
      ],
      trancheEffectifEtab: "10-50",
      origineOffre: {
        origine: "Indeed",
        urlOrigine: "https://indeed.com",
        partenaires: []
      },
      offresManqueCandidats: false
    }
  ];
  