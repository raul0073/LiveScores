import React from "react";
import MatchRowComp from "../MatchRow/MatchRow";
import "./competition.scss";
import Image from "next/image";
// import { getRoundNumber } from "@/app/Utilities/Functions";

const CompetitionComp = ({ leagueDetails, matches, onDateChange }) => {
    return (
      <div className="competition-with-matches">
        <div className="competition">
          <div className="comp-logo">
            <Image
              src={leagueDetails?.logo}
              width={20}
              height={20}
              alt={`${leagueDetails?.name}_logo`}
            />
          </div>
          <div className="comp-name">
            <h2>{leagueDetails?.name}</h2>
          </div>
        </div>
        <div className="matches-list">
          {matches?.map((match) => (
            <MatchRowComp key={match.id} match={match} onDateChange={onDateChange}/>
          ))}
        </div>
      </div>
    );
  };
  
  export default CompetitionComp;
  
