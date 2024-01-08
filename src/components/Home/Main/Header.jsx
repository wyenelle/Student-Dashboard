import React from "react";
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import { VscBellDot } from "react-icons/vsc";

const Header = () => {
  const list_of_month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const hour = date.getHours();
  const month = date.getMonth();
  const month_date = date.getDate();
  const day = date.getDay();
  let result = "";
  const [showPing, setShowPing] = useState(true);
  let greetings = "";
  // determine the day of the week
  switch (day) {
    case 0:
      result = "Sunday";
      break;
    case 1:
      result = "Monday";
      break;
    case 2:
      result = "Tuesday";
      break;
    case 3:
      result = "Wednesday";
      break;
    case 4:
      result = "Thursday";
      break;
    case 5:
      result = "Friday";
      break;
    case 6:
      result = "Saturday";
      break;
    default:
      result = "Not a weekday";
      break;
  }

  // Determine the time of the day
  if (hour < 12) {
    greetings = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greetings = "Good Afternoon";
  } else if (hour >= 17 && hour < 20) {
    greetings = "Good Evening";
  } else {
    greetings = "Good night";
  }

  const navigate = useNavigate();

  const go_to_news = () => {
    navigate("/news");
    console.log(showPing);
  };

  return (
    <header
      id="header"
      className=" text-start p-3 flex justify-between"
      data-aos="zoom-in"
      data-aos-once="true"
      data-aos-delay="100"
      data-aos-duration="600"
    >
      <div className="header-main">
        <h1 className="text-3xl md:text-3xl font-bold dark:text-gray-300">
          {greetings}, Favour!!{" "}
        </h1>
        <p className="text-gray-400 font-bold italic">
          {" "}
          {`${month_date}, ${result}  ${list_of_month[month]}`}
        </p>
      </div>

      <div className="notification-bar  flex justify-between gap-3 flex=reverse">
        

        <VscBellDot
          size={30}
          className="relative text-gray-400 dark:text-cyan-500"
        />
      </div>
    </header>
  );
};

export default Header;
