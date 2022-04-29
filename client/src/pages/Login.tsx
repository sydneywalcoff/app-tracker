import { ChangeEvent, useState } from 'react';

const Login = () => {
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: '',
        email: ''
    })
    const [signupForm, setSignupForm] = useState({
        username: "",
        password: '',
        email: ''
    })
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

    const handleLogin = (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(loginForm)
    };

    const handleSignup = (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(signupForm)
    };

    return(
        <section className="flex flex-col w-full">
            <div className="flex flex-col p-5 m-auto w-[65%] h-[65%] border border-gray-600">
                <h2 className="text-center p-5 text-3xl">Login / Sign Up!</h2>
                <div className="flex pt-5">
                    <div className="flex flex-col w-1/2 p-5">
                        <h3 className='text-xl text-center'>Login</h3>
                        <form action="#" className="flex flex-col" onSubmit={handleLogin}>
                            <label htmlFor="loginUsername">Username:</label>
                            <input type="text" name="username" className="border border-gray-400" onChange={handleLoginChange}/>
                            <label htmlFor="email">Password:</label>
                            <input type="password" name="password" className="border border-gray-400" onChange={handleLoginChange}/>
                            <button type='submit' className="border border-gray-400 mt-5 w-1/4 mx-auto">login</button>
                        </form>
                    </div>
                    <div className="flex flex-col w-1/2 p-5">
                        <h3 className='text-xl text-center'>Signup</h3>
                        <form action="#" className="flex flex-col" onSubmit={handleSignup}>
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email" className="border border-gray-400"  onChange={handleSignupChange} />
                            <label htmlFor="username">Username:</label>
                            <input type="text" name="username" className="border border-gray-400"  onChange={handleSignupChange} />
                            <label htmlFor="email">Password:</label>
                            <input type="password" id="password" name="password" className="border border-gray-400"  onChange={handleSignupChange} />
                            <button type='submit' className="border border-gray-400 mt-5 w-1/4 mx-auto">sign up</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Login;