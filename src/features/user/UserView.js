import React, { useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './UserSlice'

export default function UserView() {
  const [products,setProducts] = useState([]);
  const user = useSelector((state) => state.user);
  // setProducts(user.products.results);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  let data=[];
  let results = user.products.results
  if(results!==undefined){
    data.push(results.results);
    setProducts(data);
    console.log(data);
  }
  // console.log(results);
  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && products.length>0?
      products.map(each=>{
        <h1>{each.name}</h1>
      }):null}
    </div>
  )
}
