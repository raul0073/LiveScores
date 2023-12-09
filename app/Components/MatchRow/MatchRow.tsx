"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import "./matchrow.scss";
import { Match } from "@/app/Types/matchType";
import { handleMatchStatus } from "@/app/Utilities/Functions";
import { setLocalData } from "@/app/Services/Storage-Service";

type PropsMatchRow = {
  match: Match;

};

const MatchRowComp: React.FC<PropsMatchRow> = ({ match }) => {
  const router = useRouter();


  const handleMatchPageTransfer = () => {
    let matchObj = {
      homeName: match.homeTeam.name,
      homeLogo: match.homeTeam.logo,
      awayName: match.awayTeam.name,
      awayLogo: match.awayTeam.logo,
      venue: match.venue.name,
      time: match.date,
      comp: match.league.name,
      compId: match.league.id,
      compLogo: match.league.logo,
      round: match.league.round,
      elapsed: match.status.elapsed,
      ref: match.referee,

    }
    setLocalData('match', matchObj)
    return router.push(`/fixture/${match.id}`);
  };

  return (
    <div className="match-wrapper"

    >
      <section className="match-row"
          onClick={handleMatchPageTransfer}
      >
        <div className="home-team">
          {match?.teams?.home?.winner ? (
            <p>
              <strong>{match?.homeTeam?.name}</strong>
            </p>
          ) : (
            <p>{match?.homeTeam.name}</p>
          )}
        </div>
        <div className="logo">
          {match.homeTeam && (
            <Image
              src={match.homeTeam.logo}
              width={25}
              height={25}
              alt={`${match.homeTeam.name}_logo`}
            />
          )}
        </div>
        <div className="match-result-and-time">
        {handleMatchStatus(match)}
        </div>
        <div className="logo">
          {match.awayTeam && (
            <Image
              src={match.awayTeam.logo}
              width={25}
              height={25}
              alt={`${match.awayTeam.name}_logo`}
            />
          )}
        </div>
        <div className="away-team">
          <p>{match?.awayTeam?.name}</p>
        </div>
      </section>

    </div>
  );
};

export default MatchRowComp;
