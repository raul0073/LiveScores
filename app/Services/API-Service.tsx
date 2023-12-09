import { LeagueMatches } from "../Types/Types";
import {API_URL} from process.env

export const getMatches = async (date?): Promise<LeagueMatches | null> => {
  try {
    if (!date) {
      let currentDate = new Date();
      let year = currentDate.getFullYear();
      let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      let day = currentDate.getDate().toString().padStart(2, '0');
      date = `${year}-${month}-${day}`;
      console.log(date);
    }

    const url = `${API_URL}/api/home/${date}`; // Include date in the URL

    const resp = await fetch(url, {
      method: 'GET',
      cache: 'no-store',
    });

    if (resp.ok) {
      return resp.json();
    } else {
      console.error(`Error: ${resp.status} - ${resp.statusText}`);
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};


export const getMatchEvents = async (id: Number): Promise<any | null> => {
    try{
        const resp = await fetch(`${API_URL}/api/match/${id}`, {
            cache: "no-store",
        });

        if (resp.ok) {
            return resp.json();
        } else {
            console.error(`Error: ${resp.status} - ${resp.statusText}`);
            return null;
        }
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const getLineups = async (fixtureId: string): Promise<any | null> => {
    try {
        const resp = await fetch(`${API_URL}/api/match/${fixtureId}`, {
            cache: "no-store",
        });

        if (resp.ok) {
            return resp.json();
        } else {
            console.error(`Error: ${resp.status} - ${resp.statusText}`);
            return null;
        }
    } catch (err) {
        console.error(err);
        return null;
    }
};



export const getTable = async (id: string): Promise<any | null> => {
    try {
        // Append the date parameter to the URL if it is provided
        const url = `${API_URL}/api/league/table/${id}`;

        const resp = await fetch(url, {
            cache: "no-store",
        });

        if (resp.ok) {
            return resp.json();
        } else {
            console.error(`Error: ${resp.status} - ${resp.statusText}`);
            return null;
        }
    } catch (err) {
        console.error(err);
        return null;
    }
};

