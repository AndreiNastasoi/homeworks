import React from "react";
import "./SubSection.css";

const SubSection = () => {
  return (
    <div id="container">
      <div className="sub1"></div>
      <div className="sub2">
        <h4>Indonectetus facilis leo nibh</h4>
        <h6>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architectoaspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum
        </h6>
      </div>
      <div className="sub3">
        <h4>Categories</h4>
        <ul>
          <li>Link Text Goes Here</li>
          <li>Link Text Goes Here</li>
          <li>Link Text Goes Here</li>
          <li>Link Text Goes Here</li>
          <li>Link Text Goes Here</li>
        </ul>
      </div>
    </div>
  );
};

export default SubSection;
