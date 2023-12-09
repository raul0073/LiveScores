'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import './styles/fixturepage.scss'
import { getLocalData } from '@/app/Services/Storage-Service';
import { getRoundNumber } from '@/app/Utilities/Functions';
import { GiWhistle, GiHourglass, GiSoccerField } from "react-icons/gi";

export default function Page({ params }: any) {
    const { id } = params;

    const [matchData, setMatchData] = useState<MatchObject | null>(null);
    const [loading, setLoading] = useState<Boolean>(true)
    const [activeTab, setActiveTab] = useState("summary");
    const [date, setDate] = useState();
    const [round, setRound] = useState<string | undefined>();

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
      };
    useEffect(() => {
      let matchData = getLocalData("match");
      if (!matchData) {
        setLoading(!loading)
        return <h1>No data found in storage</h1>;
      }
      setMatchData(matchData);
      let dateHrs = new Date(matchData?.time).getHours();
      let dateMin = new Date(matchData?.time)
        .getMinutes()
        .toString()
        .padStart(2, "0");
      let combaied = `${dateHrs}:${dateMin}`;
      setDate(combaied);
      let rounded = getRoundNumber(matchData.round)
      setRound(rounded)
      setLoading(!loading)
    }, []);
  
  // fancy loader
  if (loading) {
    return <div className="loader-container">
      <span className="loader"></span>
    </div>
  }

    return (
      <>
        <div className="match-page">
          <div className="container">
            <div className="match-comp">
              <Image
                src={matchData?.compLogo}
                width={20}
                height={20}
                alt="comp_logo"
              ></Image>
              <h3>
                {matchData?.comp} Round {round}
              </h3>
            </div>
            <div className="match-teams">
              <div className="home">
                <div className="name">
  
                <h2>{matchData?.homeName}</h2>
                </div>
                <div className="logo">
                  <Image
                    src={matchData?.homeLogo}
                    width={30}
                    height={30}
                    alt="home_logo"
                  ></Image>
                </div>
              </div>
              <div className="time">
                <p>{date}</p>
              </div>
              <div className="away">
                <div className="logo">
                  <Image
                    src={matchData?.awayLogo}
                    width={30}
                    height={30}
                    alt="away_logo"
                  ></Image>
                </div>
                <div className="name">
                <h2>{matchData?.awayName}</h2>
  </div>
              </div>
            </div>
            <div className="match-info">
              <small>
                <GiHourglass /> {date}
              </small>
              <small>
                <GiSoccerField /> {matchData?.venue}
              </small>
              <small>
                <GiWhistle /> {matchData?.ref}
              </small>
            </div>
  
            <div className="tabs">
              <div
                className={`tabItem ${activeTab === "summary" ? "active" : ""}`}
                onClick={() => handleTabClick("summary")}
              >
                Summary
              </div>
              <div
                className={`tabItem ${activeTab === "stats" ? "active" : ""}`}
                onClick={() => handleTabClick("stats")}
              >
                Stats
              </div>
              <div
                className={`tabItem ${activeTab === "lineups" ? "active" : ""}`}
                onClick={() => handleTabClick("lineups")}
              >
                Lineups
              </div>
              <div
                className={`tabItem ${activeTab === "table" ? "active" : ""}`}
                onClick={() => handleTabClick("table")}
              >
                Table
              </div>
            </div>
            {/* {activeTab === "stats" && <StatsTab />}
            {activeTab === "lineups" && <LineupsTab id={id} />}
            {activeTab === "summary" && <SummaryTab />}
            {activeTab === "table" && <TableTab leagueId={matchData?.compId}/>} */}
          </div>
        </div>
      </>
      )
      }