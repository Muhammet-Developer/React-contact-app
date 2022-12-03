import Delete from "./UTİLS/DeleteIcon";
import Edit from "./UTİLS/EditIcon";
import Modal from "./Modal";
import{useState} from "react";

const Data = ({data,setData}) => {
  const myStyle = {
   color:"white"
   

  }
    const [form2, setForm2] = useState({
        id:"",
        firstName:"",
        lastName:"",
        email:"",
        password:""
      });
      const handleEdit =(person)=>{
        setForm2({
            id:person.id,
            firstName:person.firstName,
            lastName:person.lastName,
            email:person.email,
            password:person.email
        })
      }

    //cross over
const handleClick = (id,completed)=>{
const newData = [];
data.map(item =>{
    if(item.id===id){
        newData.push({...item,completed:!completed})
    }
    else{
        newData.push(item);
    }
    setData(newData);
    localStorage.setItem("data",JSON.stringify(newData))
})
    }
    const handleDelete = (id)=>{
        const newArray = data.filter(item => id != item.id);
        localStorage.setItem("data",JSON.stringify(newArray));
        setData(newArray)
    }

  return (
    <div style={{backgroundColor:"#809CAC"}}>
        <table className="table" >
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Delete</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
    {data.map((person,index) =>{
        const{id,firstName,lastName,email,password,completed}=person
        return(
        <tr  key={index}>
      <th scope="row" style={{color:"white"}} >{id}</th>
      <td className={person.completed ? "text-decoration-line-through " : ""} onClick={()=>handleClick(id,completed)} style={{cursor:"pointer",color:"white"}} >{firstName}</td>
      <td className={person.completed ? "text-decoration-line-through" : ""} onClick={()=>handleClick(id,completed)} style={{cursor:"pointer",color:"white"}}>{lastName}</td>
      <td className={person.completed ? "text-decoration-line-through fs-2" : ""} onClick={()=>handleClick(id,completed)} style={{cursor:"pointer",color:"white"}}>{email}</td>
      <td className={person.completed ? "text-decoration-line-through fs-2" : ""} onClick={()=>handleClick(id,completed)} style={{cursor:"pointer",color:"white"}}>{password}</td>
      <td  style={{cursor:"pointer"}} onClick={()=> handleDelete(id)} ><Delete/></td>
      <td style={{cursor:"pointer"}} onClick={()=>handleEdit(person)}
      data-bs-toggle="modal" data-bs-target="#exampleModal"
      ><Edit/></td>
    </tr>
        )
    })}
    
  </tbody>
</table>
<Modal form2={form2} setForm2={setForm2} data={data} setData={setData}/>
    </div>
  )
}

export default Data
