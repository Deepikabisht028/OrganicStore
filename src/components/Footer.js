import'./CSS/footer.css';
import { Link,useNavigate } from "react-router-dom";
export function Footer(){
    const navigate=useNavigate();
    const handlelogout=()=>{
        localStorage.removeItem("authToken");
        navigate("/");
      }
 return(
  <footer id="c">
    
        <div className="footerrow">
            <div className="App-column">
                <h2>CONTACT US</h2>
                <ul className="list-unstyled">
                    <li>
                        <p>
                            <i className="fas fa-home mr-3" style={{color: "white"}}></i>
                            &nbsp; Dehradun,Uttarakhand,India
                        </p>
                    </li>
                    <li>
                        <p>
                            <i className="fas fa-envelope mr-3" style={{color: "white"}}></i>
                            &nbsp; organicstore@gmail.com
                        </p>
                    </li>
                    <li>
                        <p>
                            <i className="fas fa-phone mr-3" style={{color: "white"}}></i>
                             &nbsp;+ 91 7783673733
                        </p>
                    </li>
                    <li>
                        <p>
                            <i className="fas fa-phone mr-3" style={{color: "white"}}></i>
                            &nbsp; + 91 6087383283
                        </p>
                    </li>
                </ul>

            </div>
              
            <div className="App-column">
                <ul className="list-unstyled">
                <li>
                    <p>
                     <Link to="./about">About</Link>
                    </p>
                </li>
                {
                    (localStorage.getItem("authToken"))
                    ? 
                    <li onClick={handlelogout}><p>Logout</p></li>
                    :
                    <li><p><Link to="./signup">Signup</Link></p></li>
                }
                 {
                    (localStorage.getItem("authToken"))
                    ? 
                    <li><p><Link to="./feedback">Feedback</Link></p></li>
                    :
                    <li><p><Link to="./login">Feedback</Link></p></li>
                }
            </ul>
            </div>
            <div className="App-column">
                <h2>FOLLOW US</h2><br/>
               
                <a style={{color: "white"}} href=" " role="button">
                    <i className="fab fa-facebook-f fa-xl"></i>&nbsp;
                </a>

                <a style={{color: "white"}} href=" " role="button">
                    <i className="fab fa-twitter fa-xl"></i>&nbsp;
                </a>

                <a style={{color: "white"}} href=" " role="button">
                    <i className="fab fa-instagram fa-xl"></i>
                </a>
            </div>
        </div>
        
        <p style={{textAlign: "center", color:"white",fontSize: "large"}}>©2023Copyright:OrganicStore.com</p>    
    </footer>);
}

