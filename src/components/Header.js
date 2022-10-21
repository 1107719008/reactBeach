import NavBar from "./NavBar";
import { Link } from "react-router-dom"

export default function Header({title}) {
   return (
      <div className="header">
         <Link to="/">
            <h1 className="header-title">
               {title}
            </h1>
         </Link>

         <p
            className="header-slogan">
            An example made by Create-React-App./this is a part of header
         </p>
         <hr className="hr-header-line" />
         <NavBar />
      </div>
   );
}