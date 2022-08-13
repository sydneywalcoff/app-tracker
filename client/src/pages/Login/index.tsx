import { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client';

import { LOGIN, SIGNUP } from '../../utils/mutations';
import Auth from '../../utils/auth'

import ContentContainer from '../../components/ContentContainer';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

import './assets/style.css';

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
            <div className="flex flex-col items-center md:items-start md:justify-around md:flex-row">
                <div className="login p-5">
                    <h2 className='text-center'>Login</h2>
                    <form action="#" className="flex flex-col" onSubmit={handleLogin}>
                        <TextInput onChange={handleLoginChange} labelTitle='username'/>
                        <TextInput onChange={handleLoginChange} labelTitle='password'/>
                        <Button text="login" type="submit" classes="blue mx-auto mt-4 md:mt-auto"/>
                    </form>
                </div>
                <div className="signup p-5">
                    <h2 className='text-center'>Signup</h2>
                    <form action="#" className="flex flex-col" onSubmit={handleSignup}>
                        <TextInput labelTitle='email' onChange={handleSignupChange} />
                        <TextInput labelTitle='username' onChange={handleSignupChange} />
                        <TextInput labelTitle='password' onChange={handleSignupChange} />
                        <Button text="signup" type="submit" classes="blue mx-auto mt-4 md:mt-auto" />
                    </form>
                </div>
            </div>
        </ContentContainer>
    )
};

export default Login;