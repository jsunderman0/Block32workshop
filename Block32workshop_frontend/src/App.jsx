import { useState, useEffect } from 'react'


function App() {
  const [flavors, setFlavors] = useState([]);

  useEffect(() => {
    const fetchFlavors = async () => {
      const response = await fetch('http://localhost:3000/api/ice_cream');
      const flavors = await response.json();
      setFlavors(flavors);
    }
    
    fetchFlavors()
  }, [])

  

  return (
    <>
     <h1> Ice Cream Flavors ({flavors.length})</h1>
     <ul>
      {
        flavors.map((flavor) => {
          return <li key = {flavor.id}> {flavor.name} </li>
        })
      }
     </ul>
    </>
  )
}

export default App
