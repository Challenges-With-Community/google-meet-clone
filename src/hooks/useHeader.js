import { useEffect, useState } from "react";
import { useFirebase } from "./useFirebase";

const DAY_LIST = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];
const MONTH_LIST = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
];

export function useHeader() {
  const [currentDate, setCurrentDate] = useState("");
  const { signInUser, signOutUser, user } = useFirebase();

  const getCurrentDate = () => {
    const today = new Date();
    const month = MONTH_LIST[today.getMonth()];
    const day = DAY_LIST[today.getDay()];
    const dayNumber = today.getDate();
    const hour = today.getHours();

    let minutes = today.getMinutes();

    if (String(minutes).length === 1) {
      minutes = `0${minutes}`;
    }
    return `${hour}:${minutes} • ${day}, ${dayNumber} ${month}`;
  };

  useEffect(() => {
    setInterval(() => {
      const currentDate = getCurrentDate();
      setCurrentDate(currentDate);
    }, 1000);
  }, []);


  return {
    user,
    currentDate,
    signInUser,
    signOutUser,
  };
}
