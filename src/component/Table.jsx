import React,{useState} from 'react'
import './Table.css';
function Table() {
  const [data, setData] = useState([]);
  function getData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((inf)=>{
      let datas = [...inf]
      if(data==""){
        setData(datas)

      }
      console.log(data)
    });
  }
  
  return (
    <div>
      <button onClick={getData}>click now</button>
      <div>
        <table>
        <tr>
          <th>ID</th>
          <th>USERID</th>
          <th>TITLE</th>
          <th>BODY</th>
          </tr>
          
        {data.map((item,i)=>
        
        <tr><td key={item.id}
        userId={item.userId}
        title={item.title}
         body={item.body}>{item.id}</td>
         <td>{item.userId}</td>
         <td>{item.title}</td>
         <td>{item.body}</td></tr>
        
        )}
         
        </table>
      </div>
    </div>
  )
}

export default Table
