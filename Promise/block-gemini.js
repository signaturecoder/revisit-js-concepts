import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'

// https://reqres.in/api/users?page=1
// Display first_name and last_name as list items.
// sort the list with first_name
// call the api - no. of times the pages have
// Promise.allSettled([p1, p2]).( data)
function App() {
  const [noofPage, setNoofpage] = useState(1)
  const [userData1, setUserData1] = useState([])
  const [userData2, setUserData2] = useState([])
  const [allUserData, setAllUserData] = useState([])

  const urls = [
    'https://reqres.in/api/users?page=1',
    'https://reqres.in/api/users?page=2',
  ]

  async function fetchData() {
    const [res1, res2] = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json())),
    )
    setUserData1(res1.data)
    setUserData2(res2.data)
  }

  useEffect(() => {
    fetchData()
    
  }, [])
  console.log('userdarta 1 ', userData1)

  return (
    <div>
      <ul>
        {
          [...userData1, ...userData2].map((item) => (
            <li key={item.id}>
              {item.first_name} {item.last_name}
            </li>
          ))}
      </ul>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
