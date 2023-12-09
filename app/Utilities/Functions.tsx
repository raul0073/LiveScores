import { FaCalendar } from "react-icons/fa";
import { GiWhistle, GiSoccerField } from "react-icons/gi";
import { Match } from "../Types/matchType";

// function check what is the match status and return icon
export const handleMatchStatus = (match: Match) => {
  if (match.status.long === "Not Started") {
    return (
      <>
        <p>{convertDatetampToHrs(match.date)}</p>
        <div className="short-status">
          <small>Today</small>
        </div>
      </>
    );
  }
  if (match.status.long === "Match Finished") {
    return (
      <>
        <p>
          {match.goals.home} - {match.goals.away}
        </p>
        <div className="short-status">
          <small>FM</small>
        </div>
      </>
    );
  }
  if (match.status.long === "First Half") {
    return (
      <>
        <p>
          {match.goals.home} - {match.goals.away}
        </p>
        <div className="short-status">
          <small>{match.status.elapsed}'</small>
        </div>
      </>
    );
  }
  if (match.status.long === "Halftime") {
    return (
      <>
        <p>
          {match.goals.home} - {match.goals.away}
        </p>
        <div className="short-status">
          <small>HT</small>
        </div>
      </>
    );
  }
  if (match.status.long === "Second Half") {
    return (
      <>
        <p>
          {match.goals.home} - {match.goals.away}
        </p>
        <div className="short-status">
          <small>{match.status.elapsed}'</small>
        </div>
      </>
    );
  }
  if (match.status.long === "Match Postponed") {
    return (
      <>
      <p>
      <small style={{color: '#800020'}}>
        Postponed
        </small>
      </p>
      <div className="short-status">
        <small></small>
      </div>
    </>
      )
  }
};

// converts date to time hh:mm
export const convertDatetampToHrs = (date) => {
  // Convert timestamp to milliseconds
  const newDate = new Date(date);

  // Get hours and minutes
  const hours = newDate.getHours().toString().padStart(2, "0");
  const minutes = newDate.getMinutes().toString().padStart(2, "0");

  // Format as "hh:mm"
  return `${hours}:${minutes}`;
};


export const getRoundNumber = (round: string): string => {
  const parts = round.split("-");
  if (parts.length > 1) {
    return parts[1].trim();
  }
  return round.trim();
};

