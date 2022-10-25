import { useState,useEffect } from "react";
import Data from "./Data";
const Form = () => {
  const [form, setForm] = useState({
    id:"",
    completed:false,
    firstName:"",
    lastName:"",
    email:"",
    password:""
  })

  const [data,setData]=useState([]);
  const handleSubmit = (e) =>{
    e.preventDefault();
    data.push({...form})
    console.log("giden veri",data);
    localStorage.setItem("data",JSON.stringify(data));
    setForm({
      id:"",
    completed:false,
    firstName:"",
    lastName:"",
    email:"",
    password:""
    })
  }

    useEffect (()=>{
      const newData = JSON.parse(localStorage.getItem("data"))||[];
      console.log("gelen veri",newData)
      setData(newData)
    },[])

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label ">First name {form.firstName}</label>
          <input type="text" className="form-control" id="firstname" name="firstname" value={form.firstName} onChange={(e)=>setForm({...form, firstName:e.target.value,id:Math.floor(Math.random()*1000)})} />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">Last name</label>
          <input type="text" className="form-control" id="lastname" name="firstname" value={form.lastName} onChange={(e)=>setForm({...form, lastName:e.target.value})}  />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-mail {form.email}</label>
          <input type="email" className="form-control" id="email" name="firstname"  value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
        </div>                                                                                          
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="firstname" value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <Data data={data} setData={setData} />
      </>
  )
}

export default Form