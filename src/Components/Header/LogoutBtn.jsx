import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

const LogoutBtn = () => {
    const [username, setUsername] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        authService.getCurrentUser().then(user => {
            setUsername(user.name) // Assuming 'user.name' contains the username
        }).catch(err => {
            console.error('Failed to fetch user', err)
        })
    }, [])

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            navigate('/login')
        })
    }

    return (
        <div>
            <button
                className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                onClick={logoutHandler}
            >
                Logout
            </button>
            <p className='text-center'>{username}</p>
        </div>
    )
}

export default LogoutBtn

/*
import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'


const LogoutBtn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        authService.logout().then(()=>{
            dispatch(logout())
            navigate('/login')
        })

    }
  return (
    <div>
     <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
    </div>
  )
}

export default LogoutBtn
*/