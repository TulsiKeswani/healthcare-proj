function Form() {
    return ( 
        <form>
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <div class="mb-3">
                            <label for="Hospital Name" class="form-label">Hospital Name</label>
                            <input type="text" class="form-control" id="Hospital Name" aria-describedby="Hospital Name"/>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <input type="text" class="form-control" id="description"/>
                        </div>
                        <div class="mb-3">
                            <label for="Hospital Image" class="form-label">Hospital Image (Outer View)</label>
                            <input type="file" class="form-control" id="Hospital Image" aria-describedby="Hospital Image"/>
                        </div>
                        <div class="mb-3">
                            <label for="Rooms Image" class="form-label">Rooms Image</label>
                            <input type="file" class="form-control" id="Rooms Image"/>
                            <input type="file" class="form-control" id="Rooms Image"/>
                            <input type="file" class="form-control" id="Rooms Image"/>
                            <input type="file" class="form-control" id="Rooms Image"/>
                        </div>
                        <div className="row">
                            <div className="col">
                            <div class="mb-3">
                            <label for="Beds available" class="form-label">Beds available In Hospital</label>
                            <input type="number" class="form-control" id="Beds available"/>
                        </div>
                            </div>
                            <div className="col">
                            <div class="mb-3">
                            <label for="Rooms available" class="form-label">Rooms available In Hospital</label>
                            <input type="number" class="form-control" id="Rooms available"/>
                        </div>
                            </div>
                        </div>
                        
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Ayushman Card facility or Not</label>
                        </div>
                        { <div class="mb-3">
                            <label for="Hospital Image" class="form-label">Hospital Image (Outer View)</label>
                            <input type="text" class="form-control" id="Hospital Image" aria-describedby="Hospital Image"/>
                        </div>
                        }
                        <button type="submit" class="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
                
        </form>
    );
}

export default Form;