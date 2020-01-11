import React, { useState, ChangeEvent } from 'react';
import './App.css';
const App: React.FC = () => {
  const userList = [
    { id: 1, name: 'salman mustafa' },
    { id: 2, name: 'arvin' }
  ]
  const [user, setUserList] = useState(userList);
  const [name, setName ] = useState('');
  const [showName, setShowName] = useState(false);
  const [randomNameValue, setrandomNameValue] = useState('');
  const onClick = () => {
    setShowName(!showName);
  }
  const handleUse = () => {
    if ( name ) {
      const array =  { id: user.length + 1, name: name }
      setUserList([...user, array]);
      setName('')
    }
    
  };

  const handleInput1Change = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const removeUser = (value: any) => {
    console.log("value'", value);
    const userNew = user.filter(item => item.id != value);
    setUserList([...userNew]);
  }
  const randomName = () => {
    const name = user[Math.floor(Math.random()*user.length)];
   
    setrandomNameValue(name.name)
  }
  return (
    <div className="App container">
      <div className="padding">
        {showName
        ?<div className="left"><input value={name} type="text" className="inpt"
           onChange={handleInput1Change}/>
          <button className="btn btn-primary" onClick={handleUse}>Submit</button></div>
          : ''
        }
        <button className="btn btn-primary" onClick={onClick}>Show Add Name</button>
      </div>
      
      <table className="table">
        <tbody>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
       
        
        {user.map((value, index) => {
          return <tr key={index}>
         <td >{value.id}</td>
         <td >{value.name}</td>
         <td><button className="btn btn-danger" onClick={() => removeUser(value.id)}>remove</button></td>
         </tr>
      })}
        </tbody>
      </table>

      {randomNameValue
      ? randomNameValue: ''

      }
      <button className="btn btn-primary" onClick={randomName}>Pick Random Name</button>
    </div>
  );
}


export default App;
