import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import data from "../src/assests/data";
import {useState} from 'react';


const App = () => {

  const [page, setPage] = useState(1);
  const userPerPage = 5;    // her sayfa da 5 adet resim olsun

  const indexOfLastUser = page * userPerPage;
  const indexOfFirtsUser = indexOfLastUser - userPerPage;

  const currentUsers = data.slice(indexOfFirtsUser, indexOfLastUser)

  return(
    <div className="App">
    <Header from={indexOfFirtsUser + 1} to={indexOfFirtsUser + currentUsers.length} />
    {currentUsers.map((item)=> <Main key={item.id}{...item}/>)}
    <Button total={Math.ceil(data.length / userPerPage)} page={page} setPage={setPage}/>
    </div>
  )
}

export default App;