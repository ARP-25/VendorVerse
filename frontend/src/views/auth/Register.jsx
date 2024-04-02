import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { register } from '../../utils/auth'
import { useAuthStore } from '../../store/auths'

function Register() {

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn());

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/')
        }
    }, [isLoading]);  // Adding isLoggedIn as a dependency


    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const {error} = await register(fullname, email, mobile, password, password2)
        if (error) {
            alert(JSON.stringify(error))
        }
        else {
            navigate('/')
        }
    }

    return (
        <>
            <div>Register</div>
            <br />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Full Name'
                    name=""
                    id=""
                    onChange={(e) => setFullname(e.target.value)}
                / >
                <br />
                <br />
                <input
                    type="Email"
                    placeholder='Email'
                    name=""
                    id=""
                    onChange={(e) => setEmail(e.target.value)}

                / >
                <br />
                <br />
                <input
                    type="number"
                    placeholder='Mobile Number'
                    name=""
                    id=""
                    onChange={(e) => setMobile(e.target.value)}

                / >
                <br />
                <br />
                <input
                    type="password"
                    placeholder='enter password'
                    name=""
                    id=""
                    onChange={(e) => setPassword(e.target.value)}
                / >
                <br />
                <br />
                <input
                    type="password"
                    placeholder='confirm password'
                    name=""
                    id=""
                    onChange={(e) => setPassword2(e.target.value)}
                / >
                <br />
                <br />
                <button type='submit'>Register</button>
            </form>
        </>
    )
}

export default Register