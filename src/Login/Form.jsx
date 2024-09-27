

function Form() {
    return (
<form className="Form" noValidate>
    <div className="row">
        <div className="col-6 offset-3 mt-5">
            <div class="mb-4">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Add unique Username" required/>
            </div>
            <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Add unique Password" required/>
            
            </div>
           
            <button type="submit" class="btn btn-success mt-3 mb-4">Submit</button>
            <p style={{opacity:"0.5"}}>We appreatiate your privacy!</p>

        </div>
    </div>
  
</form>
    );
}

export default Form;