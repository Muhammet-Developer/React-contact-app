
const Modal = ({data,setData,form2,setForm2}) => {
  const handleSave = (id)=>{
    const newList =[];
    data.map(person=>{
      if(person.id==id){
        newList.push({...person,firstName:form2.firstName,lastName:form2.lastName,email:form2.email,
        password:form2.password})
      }
      else{
        newList.push(person)
      }
      localStorage.setItem("data",JSON.stringify(newList));
      setData(newList)
    })
  }
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4df2fcc27dmsh5dc1f67cc98dbcep14ccdejsn709507fbbe12',
      'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
    }
  };
  
  fetch('https://moviesminidatabase.p.rapidapi.com/genres/', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  return (
    <div>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
            <div className="mb-3">
                  <label htmlFor="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    value={form2.firstName}
                    onChange={(e) =>
                      setForm2({
                        ...form2,
                        firstName: e.target.value,
                      })
                    }
                  />
                  <div className="mb-3">
                  <label htmlFor="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    value={form2.lastName}
                    onChange={(e) =>
                      setForm2({
                        ...form2,
                        lastName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={form2.email}
                    onChange={(e) =>
                      setForm2({ ...form2, email: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={form2.password}
                    onChange={(e) =>
                      setForm2({
                        ...form2,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>handleSave(form2.id)}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;