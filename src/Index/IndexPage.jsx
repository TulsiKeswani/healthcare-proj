import MainSection from "./MainSection.jsx"
import Navbar from "../Navbar.jsx"
import Footer from "../Footer.jsx"  

function IndexPage() {
    return ( 
        <div className="mainContainer">
            <Navbar/>
            <MainSection/>
            <Footer/>
        </div>
    );
}

export default IndexPage;