import contacts from "./contacts.json";
import { useState } from "react";
import './App.css';


function App() {
  const [currentContacts,setContacts] = useState(contacts.slice(0,5));
  console.log("Pay Attention to this Log:",currentContacts);
  function addRandomContact() {
    let remainingContacts = contacts.filter((contact) =>{
      return !currentContacts.some((remaining) => remaining.id === contact.id)
    })
    console.log(remainingContacts)
    let newArr = [...currentContacts]
    newArr.push(remainingContacts[Math.floor(Math.random() * remainingContacts.length)])

    setContacts(newArr)
    //setContacts(currentContacts + notUsedContacts[Math.floor(Math.random() * notUsedContacts.length)])
    //currentContacts.repeat(Math.round()) + notUsedContacts.repeat(5 - Math.round())
    console.log("Log inside function:",currentContacts);
  }

function sortPopularity() {

    let newArr = [...currentContacts]

    newArr.sort((a,b) => {
      return b.popularity - a.popularity
    })

    setContacts(newArr)
}

function sortByName() {

    let newArr = [...currentContacts]

    newArr.sort((a,b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    })
    setContacts(newArr)
}

function removeContact(contactId) {
    let newArr = [...currentContacts]

    let filteredArray = newArr.filter((contact) => {
      return contact.id !== contactId;
    })

  
      
  

    setContacts(filteredArray);
}


  return (
    <div className="App">
    <h2>IronContacts</h2>
    <button onClick={addRandomContact}>Add Random Contact</button>
    <button onClick={sortPopularity}>Sort Popularity</button>
    <button onClick={sortByName}>Sort by Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentContacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td><img alt="pic" src={contact.pictureUrl}/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && '🏆'}</td>
                <td>{contact.wonEmmy && '🏆'}</td>
                <td><button onClick={() => removeContact(contact.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
        </tfoot>
      </table>
    </div>
  );
}

export default App;