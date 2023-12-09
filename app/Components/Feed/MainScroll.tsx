"use client";

import React, { useEffect, useState } from "react";
import "./mainscroll.scss";
import Calender from "../Calender/Calender";
import CompetitionComp from "../Competition/Competition";
import { getLocalData, setLocalData } from "@/app/Services/Storage-Service";
import { ApiResponse, CompetitionData } from "@/app/Types";

const MainScroll = ({ onDateChange }: { onDateChange: Function }) => {

  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);


  const handleDateChange = (date: string | null) => {
    const dateString = date || '';
    fetchData(dateString);
    console.log(dateString);
  };


  // fetch data and store in storage and states
  const fetchData = async (date: string) => {
    try {
      const apiUrl = `/api/scores/${date}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result: ApiResponse = await response.json();
      setData(result.data);
      setLocalData('matches', result.data)
      console.log('fetched');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };


  // check local storage first, if none fetch
  useEffect(() => {
    // today's date in yyyy-mm-dd 
    const today = new Date().toISOString().split("T")[0];
    let localData = getLocalData("matches")
    if(!localData){
      
      fetchData(today);
    }
    console.log('store');
    setData(localData)
    setLoading(!loading)
  }, []); 

  // fancy loader
  if (loading) {
    return <div className="loader-container">
      <span className="loader"></span>
    </div>
  }

  // error handeling
  if (error) {
    console.error("Error fetching data:", error);
    return <p>Error fetching data</p>
  }

  return (
    <section className="main">
      <Calender onDateChange={handleDateChange} />
      <div className="container">
        <div className="header">
        </div>
        <div className="content">
          {data &&
            Object.values(data.data).map(({ leagueDetails, matches }: CompetitionData) => (
              <CompetitionComp
                key={leagueDetails?.id}
                matches={matches}
                leagueDetails={leagueDetails}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default MainScroll;


