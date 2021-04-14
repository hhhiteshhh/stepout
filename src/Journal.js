import React from "react";
import moment from "moment";
import "./Journal.css";
function Journal(props) {
  return (
    <div className="journal__component">
      <div className="time">
        {props.journal.time
          ? moment(props.journal.time.seconds * 1000).format(" MMMM Do YYYY")
          : "..."}
      </div>
      <div className="text__journal"
      >{props.journal.journal}</div>
    </div>
  );
}

export default Journal;
