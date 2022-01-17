import airbnbLogo from "../images/airbnb-logo.png";

export default function Navbar(){
    return(
        <nav className="nav">
            <img className="logo" src={airbnbLogo}/>
        </nav>
    )
}