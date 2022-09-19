import React from "react";
import Footer from "../Footer/index";
import { Link } from "react-router-dom";
import "../../assets/stylesheets/contact.scss";

const Contact = ({ style, li }) => {
  return (
    <div className="contact">
      <ul style={style}>
        <li>5 allée de la Houdiarde VEMARS 95470</li>
        <li>
          Retrouvez nous sur <Link to="#">facebook</Link>
        </li>
        <li>
          <a href="mailto:handofhope1@outlook.fr">handofhope1@outlook.fr</a>
        </li>
        <li style={li}>06 23 35 62 69</li>
      </ul>
    </div>
  );
};

// function Contact() {
//   return (
//     <div className="contact">
//       <ul>
//         <li>5 allée de la Houdiarde VEMARS 95470</li>
//         <li>
//           Retrouvez nous sur <Link to="#">facebook</Link>
//         </li>
//         <li>
//           <a href="mailto:handofhope1@outlook.fr">handofhope1@outlook.fr</a>
//         </li>
//         <li>06 23 35 62 69</li>
//       </ul>
//     </div>
//   );
// }
export default Contact;
