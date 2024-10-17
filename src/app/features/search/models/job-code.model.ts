export interface JobsCodeInterface {
  contexte: string;
  identifiant: string;
  intitule: string;
  metiersRome: 
    {
      codeAppellation: string;
      codeRome: string;
      libelleAppellation: string;
      libelleRome: string;
      scorePrediction: number;
    }[]
  ;
  uuidInference: string;
}
