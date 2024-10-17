

    interface LieuTravail {
        libelle: string;
        latitude: number;
        longitude: number;
        codePostal: string;
        commune: string;
      }
      
      interface Entreprise {
        nom: string;
        description: string;
        logo: string;
        url: string;
        entrepriseAdaptee: boolean;
      }
      
      interface Formation {
        codeFormation: string;
        domaineLibelle: string;
        niveauLibelle: string;
        commentaire: string;
        exigence: string;
      }
      
      interface Langue {
        libelle: string;
        exigence: string;
      }
      
      interface Permis {
        libelle: string;
        exigence: string;
      }
      
      interface Competence {
        code: string;
        libelle: string;
        exigence: string;
      }
      
      interface Salaire {
        libelle: string;
        commentaire?: string;
        complement1?: string;
        complement2?: string;
      }
      
      interface Contact {
        nom: string;
        coordonnees1: string;
        coordonnees2: string;
        coordonnees3?: string;
        telephone: string;
        courriel: string;
        commentaire?: string;
        urlRecruteur: string;
        urlPostulation: string;
      }
      
      interface Agence {
        telephone: string;
        courriel: string;
      }
      
      interface QualiteProfessionnelle {
        libelle: string;
        description: string;
      }
      
      interface OrigineOffre {
        origine: string;
        urlOrigine: string;
        partenaires: Partenaire[];
      }
      
      interface Partenaire {
        nom: string;
        url: string;
        logo: string;
      }
      
      export interface Offer{
        id: string;
        intitule: string;
        description: string;
        dateCreation: string;
        dateActualisation: string;
        lieuTravail: LieuTravail;
        romeCode: string;
        romeLibelle: string;
        appellationlibelle: string;
        entreprise: Entreprise;
        typeContrat: string;
        typeContratLibelle: string;
        natureContrat: string;
        experienceExige: string;
        experienceLibelle: string;
        experienceCommentaire?: string;
        formations: Formation[];
        langues: Langue[];
        permis?: Permis[];
        outilsBureautiques: string[];
        competences: Competence[];
        salaire: Salaire;
        dureeTravailLibelle: string;
        dureeTravailLibelleConverti: string;
        complementExercice?: string;
        conditionExercice?: string;
        alternance: boolean;
        contact: Contact;
        agence: Agence;
        nombrePostes: number;
        accessibleTH: boolean;
        deplacementCode: string;
        deplacementLibelle: string;
        qualificationCode: string;
        qualificationLibelle: string;
        codeNAF: string;
        secteurActivite: string;
        secteurActiviteLibelle: string;
        qualitesProfessionnelles: QualiteProfessionnelle[];
        trancheEffectifEtab: string;
        origineOffre: OrigineOffre;
        offresManqueCandidats: boolean;
      }
      