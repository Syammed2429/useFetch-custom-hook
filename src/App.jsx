import { useState, useEffect } from 'react'
import './App.css'
import { useFetch } from './util/useFetch'


//If the data is taking time to load through then the delay the render 
// const useDelay = (value) => {
//   const [delay, setDelay] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDelay(true)
//     }, value * 1000);
//     return () => clearTimeout(timer);

//   }, [value]);
//   return delay;
// }

function App() {

  //Send the url to the useFetch custom hook
  const { loading, data, error } = useFetch(process.env.REACT_APP_API)

  // const two = useDelay(2)

  //If data is still fetching through the API then do the following 

  if (loading) {
    return "loading";
  } else if (error) {
    return "error";
  }



  return (
    <div className="App">
      <h1>Hooks</h1>
      <div >
        {data.map((e) => (
          <div className="h1" key={e.id}>
            <img src={e.avatar} alt="Profile" />
            <div> {e.first_name} {e.last_name}</div>
            <div> {e.email}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
