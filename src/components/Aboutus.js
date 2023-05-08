import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Aboutus() {
    const navigate = useNavigate();
    function goToHomePage(){
        navigate('/')
    }
    return <div>
        <Navbar></Navbar>
        <div className="container">
            <div className="Row">
                <div className="col-md-6 offset-md-3">
                    <h1>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Link to="/" className="btn btn-info">Go Home</Link>
                    <button className="btn btn-primary" onClick={goToHomePage}>Go Home (Programaticaly)</button>
                </div>
            </div>
        </div>
    </div>;
}

export default Aboutus;