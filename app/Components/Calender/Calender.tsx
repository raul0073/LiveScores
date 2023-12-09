'use client'
import React, { useState } from 'react'
import './calender.scss'


export default function Calender({ onDateChange }) {
    const [activeDay, setActiveDay] = useState('Today');
  
    // will set date for fetch ionmain scroll
    const handleDateClick = (offset: number, day: string) => {
      const today = new Date();
      const selectedDate = new Date(today);
      selectedDate.setDate(today.getDate() + offset);
    
      const formattedDate = selectedDate.toISOString().split('T')[0]; // Get YYYY-MM-DD format
      setActiveDay(day);
      onDateChange(formattedDate);
    };
  
    return (
      <div className="calender">
        {
          activeDay === 'Today' ? (
            <div>
            <button
                      className={activeDay === 'Live' ? 'day active' : 'day'}
                      onClick={() => handleDateClick(1,'Live')}
            >Live
            </button>
          </div>
            ) : (null)
        }
        <div
          className={activeDay === 'Yesterday' ? 'day active' : 'day'}
          onClick={() => handleDateClick(-1,'Yesterday')}
        >
          Yesterday
        </div>
        <div
          className={activeDay === 'Today' ? 'day active' : 'day'}
          onClick={() => handleDateClick(0,'Today')}
        >
          Today
        </div>

        <div
          className={activeDay === 'Tomorrow' ? 'day active' : 'day'}
          onClick={() => handleDateClick(1,'Tomorrow')}
        >
          Tomorrow
        </div>
      </div>
    );
  }