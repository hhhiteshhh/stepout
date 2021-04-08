import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { useStateValue } from "./StateProvider";

function Dare(props) {
  const [displaydare, setDispalydare] = useState(true);
  const [answer, setAnswer] = useState();
  const [{ user }] = useStateValue();
  const [one, set1] = useState();

    useEffect(() => {
    if (user) {
      db.collection("Dares").onSnapshot((snapshot) => {
        setAnswer(
          snapshot.docs.map((doc) => ({
            DareName: doc.data().DareName,
            Points: doc.data().Points,
            Advantages: doc.data().Advantages,
            Answer: doc.data().Answer,
          }))
        );
        //console.log("hitesh111", answer);
          set1(answer[0]?.Answer)
      });
    }
  });
  return (
    <div>
      {displaydare ? (
        <div>
          <div>{props.dare.answer}</div>
          <div>{one}</div>
        </div>
      ) : (
        ""
      )}{" "}
    </div>
  );
}

export default Dare;
