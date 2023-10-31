import React from 'react'

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10">

        
    
      <form className="row g-3 needs-validation mt-5" novalidate>
        <div className="col-md-4">
          <label for="validationCustom01" className="form-label">Ismi</label>
          <input type="text" className="form-control" id="validationCustom01" value="A.Muhammad" required />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <div className="col-md-4">
          <label for="validationCustom02" className="form-label">Familiya</label>
          <input type="text" className="form-control" id="validationCustom02" value="Mirsaliyev" required />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <div className="col-md-4">
          <label for="validationCustomUsername" className="form-label">Username</label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
            <div className="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <label for="validationCustom03" className="form-label">City</label>
          <input type="text" className="form-control" id="validationCustom03" required />
          <div className="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        
       
        
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    
      </div>
    </div>
    </div>
  )
}

export default Contact
