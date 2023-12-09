import { Match } from ".";

// CompetitionTypes.ts
export interface LeagueDetails {
    id: number;
    country: string;
    flag: string | null;
    logo: string;
    name: string;
    season: number;
    round: string;
  }
  
  
  export interface CompetitionData {
    leagueDetails: LeagueDetails;
    matches: Match;
  }
  