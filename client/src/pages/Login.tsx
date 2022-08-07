import { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client';

import { LOGIN, SIGNUP } from '../utils/mutations';
import Auth from '../utils/auth'

import ContentContainer from '../components/ContentContainer';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const Login = () => {
    if(Auth.loggedIn()) window.location.assign('/applied')

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ''
    })
    const [signupForm, setSignupForm] = useState({
        username: "",
        password: '',
        email: ''
    })
    const [login] = useMutation(LOGIN);
    const [addUser] = useMutation(SIGNUP);

    const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value
        })
    };

    const handleSignupChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignupForm({
            ...signupForm,
            [name]: value
        })
    };

    const handleLogin = async (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { data: { login: loginData } } = await login({
                variables: {...loginForm}
            })
            Auth.login(loginData.token);
            window.location.assign('/tracker')
        } catch (e) {
            console.error(e)
        }

    };

    const handleSignup = async(e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { data: { addUser: signupData } } = await addUser({
                variables: {...signupForm}
            })
            Auth.login(signupData.token);
            window.location.assign('/tracker')
        } catch (e) {
            console.error(e);
        }
    };

    return(
        <ContentContainer className='gray-bg p-5'>
            <div className="flex">
                <div className="login w-1/2 p-5">
                    <h3 className='text-xl text-center'>Login</h3>
                    <form action="#" className="flex flex-col" onSubmit={handleLogin}>
                        <TextInput onChange={handleLoginChange} labelTitle='username'/>
                        <TextInput onChange={handleLoginChange} labelTitle='password'/>
                        <Button text="login" type="submit" classes="blue"/>
                    </form>
                </div>
                <div className="signup w-1/2 p-5">
                    <h3 className='text-xl text-center'>Signup</h3>
                    <form action="#" className="flex flex-col" onSubmit={handleSignup}>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" className="border border-gray-400"  onChange={handleSignupChange} />
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" className="border border-gray-400"  onChange={handleSignupChange} />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" className="border border-gray-400"  onChange={handleSignupChange} />
                        <button type='submit' className="border border-gray-400 mt-5 w-1/4 mx-auto">sign up</button>
                    </form>
                </div>
            </div>
        </ContentContainer>
    )
};

export default Login;