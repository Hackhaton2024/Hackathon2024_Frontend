import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offers-sheet',
  templateUrl: './offers-sheet.component.html',
  styleUrls: ['./offers-sheet.component.scss']
})
export class OffersSheetComponent implements OnInit {
  offer: any; 

 
 mockOffer= {
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
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {    
    const offerId = this.route.snapshot.paramMap.get('id');
    this.offer = this.mockOffer;

    
    
    // if (offerId === this.mockOffer.id) {
    //   this.offer = this.mockOffer;
    // } else {
    //   console.error('Aucune offre trouvée pour l\'ID:', offerId);
    // }
  }  

  openMap(): void {
    const latitude = this.offer.lieuTravail.latitude;
    const longitude = this.offer.lieuTravail.longitude;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, '_blank');
  }
  
}
