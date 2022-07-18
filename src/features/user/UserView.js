import React, { useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './UserSlice'
import Card from '../card/Card'
import './user.css';

export default function UserView() {
  const {products,loading} = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  // console.log(loading)
  return(
    <div>
         <h2>List of Users</h2>
         {loading&&<p>Loading...</p>}
         <div className='cards-container'>
         {products!==undefined&&products.map(each=>(
            <Card details={each} key={each.id}/>
         ))}
         </div>
         
     </div>
   )
}
