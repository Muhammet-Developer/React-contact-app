import { useState,useEffect } from "react";
import Data from "./Data";
const Form = () => {
  const myStyle = {
    backgroundColor:"#DC3545",

  }
  const [form, setForm] = useState({
    id:"",
    completed:false,
    firstName:"",
    lastName:"",
    email:"",
    password:""
  })
  const[btnOn,setBtnOn]=useState(false)
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
    <div className="" style={myStyle}>
      <h2 className="text-center">Task Tracker</h2>
      <div className="text-center"> 
      <button type="button" className="btn btn-warning text-center" onClick={()=>setBtnOn(!btnOn)}>Close Add Task Bar</button>
      </div>
{!btnOn && (

  <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label fw-bolder fs-5">First Name </label>
          <input required type="text" className="form-control w-75 mx-auto" id="firstname" name="firstname" value={form.firstName} onChange={(e)=>setForm({...form, firstName:e.target.value,id:Math.floor(Math.random()*1000)})} />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label fw-bolder fs-5 ms-1">Last Name</label>
          <input required type="text" className="form-control mx-auto w-75" id="lastname" name="firstname" value={form.lastName} onChange={(e)=>setForm({...form, lastName:e.target.value})}  />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bolder fs-5 ms-1">E-mail </label>
          <input required type="email" className="form-control mx-auto w-75" id="email" name="firstname"  value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
        </div>                                                                                          
        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-bolder fs-5 ms-1">Password</label>
          <input required type="password" className="form-control mx-auto w-75" id="password" name="firstname" value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})}/>
        </div>
        <div className="text-center">
        <button type="submit" className="btn btn-primary mb-2">Submit</button>
        </div>
      </form>
      )}
      <Data data={data} setData={setData} />
      </div>
  )
}

export default Form
