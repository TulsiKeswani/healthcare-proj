function MainSection() {
    
    let mainInfo = [
        {
            HospitalName: "XYZ",
            Description : "Some Description",
            location : "Goa",
            Coutry : "India",
            img: "assets/Hospital_Image_2.jpg"
        },
        {
            HospitalName: "XYZ",
            Description : "Some Description",
            location : "Goa",
            Coutry : "India",
            img: "assets/Hospitalimage_1.jpg"
        },
        {
            HospitalName: "XYZ",
            Description : "Some Description",
            location : "Goa",
            Coutry : "India",
            img: "assets/Hospital_Image_2.jpg"
        },
        {
            HospitalName: "XYZ",
            Description : "Some Description",
            location : "Goa",
            Coutry : "India",
            img: "assets/Hospitalimage_1.jpg"
        }
]
    return ( 
        <div style={{display:"flex",marginTop:'5rem'}} className="Form">{
            mainInfo.map((object) => (
                <div class="card" style={{width: "25rem",marginRight:"4rem"}}>
                        <img src={object.img} class="card-img-top" alt="img" style={{height:"15rem"}}/>
                        <div class="card-body">
                            <b><p>{object.HospitalName}</p></b>
                            <p class="card-text">{object.Description}</p>
                            <p class="card-text">{object.location}</p>
                            <p class="card-text">{object.Coutry}</p>
                        </div>
                  </div>
                ))
        }
           
        </div>
     );
}

export default MainSection;