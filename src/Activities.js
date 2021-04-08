import React from "react";
import { Avatar, List, ListItem, ListItemText } from "@material-ui/core";
import "./Activities.css";

function Activities({answer}) {

  return (
    <div className="activitiessss">
      <div className="activity">
        <div className="activity__area__username">
        <Avatar
              className="post__avatar"
              alt={answer.username}
              src="/static/images/avatar/1.jpg"
            />
          <span className="username__text"> {answer.username} </span>
        
        </div>
        <strong>
          <List>
            <ListItem>
              <ListItemText
                primary={answer.question}
                secondary={answer.answer}
                
              />
            </ListItem>
            <div className="space"></div>
          </List>
        </strong>
      </div>
    </div>
  );
}

export default Activities;
