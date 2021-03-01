import {useEffect} from 'react'
import Loader from "./Loader/Loader";

function App() {

    useEffect( () => {
        async function fetchMyAPI() {
            const response = await fetch(` http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
            const data =  await response.json()
            console.log(data)
        }
        fetchMyAPI()
    })

  return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
          <Loader/>
      </div>
  );
}

export default App;
