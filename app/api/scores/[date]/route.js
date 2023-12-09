import { NextResponse } from "next/server";

const { RAPID_API_FIXTURES_URL, RAPID_API_HOST, RAPID_API_KEY } = process.env;

export async function GET(req, { params }) {
  const { date } = params;

  const url = `${RAPID_API_FIXTURES_URL}?date=${date}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": RAPID_API_HOST,
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    // Organize the data using the provided function
    const organizedData = organizeDataByLeague(result);
    // Return the organized data in the NextResponse
    return NextResponse.json({ data: organizedData }, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}

// arrage data by league with matches array for all matches
function organizeDataByLeague(originalResponse) {
    // Process the response to organize data by league ID
    const organizedData = originalResponse.response.reduce((acc, fixture) => {
      const leagueId = fixture.league.id;
  
      // If the leagueId is not yet in the accumulator, initialize it
      if (!acc[leagueId]) {
        acc[leagueId] = {
          leagueDetails: fixture.league,
          matches: [],
        };
      }
  
      // Add the current fixture to the matches array of the league
      acc[leagueId].matches.push({
        id: fixture.fixture.id,
        date: fixture.fixture.date,
        homeTeam: {
          id: fixture.teams.home.id,
          name: fixture.teams.home.name,
          logo: fixture.teams.home.logo,
        },
        league: fixture.league,
        awayTeam: {
          id: fixture.teams.away.id,
          name: fixture.teams.away.name,
          logo: fixture.teams.away.logo,
        },
        goals: fixture.goals,
        status: fixture.fixture.status,
        venue: fixture.fixture.venue,
        referee: fixture.fixture.referee
      });
  
      return acc;
    }, {});
  
    // Create the final data structure
    const finalData = { data: organizedData };
  
    return finalData;
  }