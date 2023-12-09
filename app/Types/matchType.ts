export interface Match {
      date: string;
      id: number;
      referee: string | null;

      venue: {
        id: number | null;
        name: string;
        city: string;
      };
    league: {
      id: number;
      country: string;
      flag: string | null;
      logo: string;
      name: string;
      season: number;
      round: string;
    }
    goals: {
      home: number;
      away: number;
    };
    awayTeam: {
      id: number;
      logo: string;
      name: string;
    };
    homeTeam: {
      id: number;
      logo: string;
      name: string;
    };
    status: {
      elapsed: number;
      long: string;
      short: string;
    };
  }