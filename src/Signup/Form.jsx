// import "./Form.css"

function Form() {
    return (
<form className=" Form needs-validation" novalidate>
    <div className="row ">
        <div className="col-6 offset-3 mt-5">
            <div className="mb-4">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Add Your Email" aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-4">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="password" className="form-control" id="username" placeholder="Add unique Username" required/>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Add unique Password" required/>
            
            </div>
           
            <button type="submit" className="btn btn-success mt-3 mb-4">Submit</button>
            <p style={{opacity:"0.5"}}>We appreatiate your privacy!</p>

        </div>
    </div>
  
</form>
    );
}

export default Form;