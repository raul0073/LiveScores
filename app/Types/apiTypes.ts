import { CompetitionData } from "./CompetitionTypes";

// ApiTypes.ts
export interface ApiResponse {
    data: { [key: number]: CompetitionData };
    // Add other properties as needed
  }