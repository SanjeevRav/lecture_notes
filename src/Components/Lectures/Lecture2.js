import React, { useState } from "react";
import notes from "../../data.jsx";
import hook from "../../images/hook.svg";

function Lecture2() {
  let [note, setNote] = useState(notes[1]);
  let { id, title, info } = note;
  let pre = {
    overflow: "auto",
  };

  return (
    <article id={id} className="">
      <h1>{title}</h1>
      <br />
      <br />
      {info.map((content, index) => {
        return (
          <div key={index}>
            <h3>{content.heading}</h3>
            <p>{content.para}</p>
          </div>
        );
      })}

      <h3>Examples Of Hooks</h3>
      <div className="row">
        <img src={hook} alt="" className="col-12 col-md-6 order-lg-2 col-lg-4 " />
        <div className="col-12 col-md-6 order-lg-1 col-lg-8">
          <p>
            {`let [note, setNote] = useState(notes[1]); ----- useState Hook`}
          </p>
          <pre style={pre}>
            {`useEffect(() => {
            effect
            return () => {
                cleanup
            }
        }, [input])
        --- useEffect Hook`}
          </pre>
        </div>
      </div>
    </article>
  );
}

export default Lecture2;
