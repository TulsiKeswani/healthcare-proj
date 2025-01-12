import "./Navbar.css"

function Navbar() {
    return (
    
  <nav className="navbar navbar-expand-lg border-bottom">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><i className="fa-solid fa-heart-pulse"></i>&nbsp;<b>HealthCare</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Add Your Hospital</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">See Hospital In Map</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Signup</a>
          </li>
          <li className="nav-item">
            <button className="btn btn-success" size="large">Login</button>
          </li>
          <li className="nav-item">
          </li>
        </ul>
        
      </div>
    </div>
</nav>
  
    );
}

export default Navbar;