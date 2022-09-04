import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import { RecordFill } from "react-bootstrap-icons";

function Widgets() {
  const newsArticle = (heading, subTitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <RecordFill />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subTitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn Lessons</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Life Quote -1",
        "If you don't like your destiny,Don't accept it.Instead have the courage to change it The way you want it to be. -Naruto Uzumaki"
      )}
      {newsArticle(
        "Life Quote -2",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela"
      )}
      {newsArticle(
        "Life Quote -3",
        "The way to get started is to quit talking and begin doing. -Walt Disney"
      )}
      {newsArticle(
        "Life Quote -4",
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma-which is living with the results of other people's thinking. -Steve Jobs"
      )}
      {newsArticle(
        "Life Quote -5",

        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, youll never have enough. -Oprah Winfrey"
      )}
    </div>
  );
}
export default Widgets;
