import React, { useState } from "react";
import notes from "../../data.jsx";
import reactImg from "../../images/react.svg"

function Lecture1() {
  let [note, setNote] = useState(notes[0]);
  let { id, title, info } = note;
  let pre = {
      overflow: "auto"
  }
  return (
    <article id={id} className="">
      <h1>{title}</h1>
      <div className="row">
      <img src={reactImg} alt="react-image" className="col-12 col-md-6 col-lg-4 p-1 order-lg-2"/>
      <p className="col-12 col-md-6 col-lg-8 order-lg-1">
          {info.summery}
      </p>
      </div>
      <br />
      <div>
        <h3>{info.detail.detailHeading}</h3>
        <p>{info.detail.detailInfo}</p>
      </div>
      <div>
        <h3>{info.important.importantHeading}</h3>
        <pre style={pre}>{info.important.importantInfo}</pre>
      </div>
    </article>
  );
}

export default Lecture1;
