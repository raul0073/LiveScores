import React from "react";
import "./sidebar.scss";
import Image from "next/image";
import epl from "./../../../public/comps/premier-league-logo.png";
import laliga from "./../../../public/comps/la-liga-logo.png";
import bundes from "./../../../public/comps/bundesliga-logo.png";
import serie from "./../../../public/comps/serie_a-brandlogo.net.png";
import ligue from "./../../../public/comps/ligue-1-vector-logo.png";
import ucl from "./../../../public/comps/uefa-champions-league--eps--vector-logo.png";

export default function SidebarComp() {
  return (
    <section className="sidebar">
      <div className="header">
        <h3>Top Leagues</h3>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Image src={epl} 
              width={30}
              height={30} 
            alt="epl_logo"></Image>
            Premier League
          </li>
          <li>
            <Image
            
              src={laliga}
              width={30}
              height={30}
              alt="laliga_logo"
            ></Image>
            La Liga
          </li>
          <li>
            <Image
              src={bundes}
              width={30}
              height={30}

              alt="bundesliga_logo"
            ></Image>
            Bundesliga
          </li>
          <li>
            <Image
              src={serie}
              width={30}
              height={30}

              alt="serie_a_logo"
            ></Image>
            Siere A
          </li>
          <li>
            <Image
              src={ligue}
              width={30}
              height={30}

              alt="ligue_1_logo"
            ></Image>
            Ligue 1
          </li>
          <li>
            <Image src={ucl}               width={30}
              height={30}
               alt="ucl_logo">

               </Image>
            Champions League
          </li>
        </ul>
      </div>
    </section>
  );
}
