import { useState } from "react";
import { HEADER_LOGO } from "../../constant";



const Header = () => {

  const [isLoggedin, setIsLoggedin] = useState(false)

    return(
    <div className="main-div">
      
      <div>
        <img alt="logo" className="img" src={HEADER_LOGO}/>
      </div>

      <div>
      <ul className="ul-list">
        <li>About Us</li>
        <li>Cart</li>
        <li>Daily Mart</li>
        {
            isLoggedin ? <button onClick={() => {setIsLoggedin(false)}}>Logout</button> : 
            <button onClick={() => {setIsLoggedin(true)}}>Login</button>
        } 
      </ul>
      </div>


    </div>
    )
}

export default Header;