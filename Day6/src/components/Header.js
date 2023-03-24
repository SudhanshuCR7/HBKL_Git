import { HEADER_LOGO } from "../../constant";
const Header = () => {
    return(
    <div className="main-div">
      
      <div>
        <img alt="logo"
        className="img"
        src={HEADER_LOGO}/>
      </div>

      <div>
      <ul className="ul-list">
        <li>About Us</li>
        <li>Cart</li>
        <li>Login</li>
      </ul>
      </div>

    </div>
    )
}

export default Header;