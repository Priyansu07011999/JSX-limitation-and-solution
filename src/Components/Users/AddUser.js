import React,{useState} from 'react'
import './AddUser.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
// import UserList from './UserList'
import ErrorModel from '../UI/ErrorModel'
import Wrappers from '../Helpers/Wrappers'


function AddUser(props) {
  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault()
    if(userName.trim().length === 0 || userAge.trim().length === 0){
        setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).',
          });
        return;
    }
    if (+userAge < 1){
        setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (> 0).',
          });
        return
    }
    props.onAdd(userName, userAge)
    setUserName('')
    setUserAge('')
  }

  const userNameHandler = (e) => {
    setUserName(e.target.value)
  }

  const userAgeHandler = (e) => {
    setUserAge(e.target.value)
  }
  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrappers>
    {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
    <Card className='input'>
    <form onSubmit={addUserHandler}>
        <label htmlFor='userName'>User Name</label>
        <input type="text" id="username" value={userName} onChange={userNameHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input type="number"  id='age' value={userAge} onChange={userAgeHandler}/>
        <Button type= 'submit'>Add User</Button>
    </form>

    </Card>
    </Wrappers>
  )
}

export default AddUser

