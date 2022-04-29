const Login = () => {

    return(
        <section className="flex flex-col w-full">
            <div className="flex flex-col p-5 m-auto w-[65%] h-[65%] border border-gray-600">
                <h2 className="text-center p-5 text-3xl">Login / Sign Up!</h2>
                <div className="flex pt-5">
                    <div className="flex flex-col w-1/2 p-5">
                        <h3 className='text-xl text-center'>Login</h3>
                        <div className="flex flex-col">
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" className="border border-gray-400"/>
                            <label htmlFor="email">Password:</label>
                            <input type="password" id="password" name="password" className="border border-gray-400"/>
                        </div>
                        <button className="border border-gray-400 mt-5 w-1/4 mx-auto">login</button>
                    </div>
                    <div className="flex flex-col w-1/2 p-5">
                        <h3 className='text-xl text-center'>Signup</h3>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" name="email" className="border border-gray-400"/>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" className="border border-gray-400"/>
                            <label htmlFor="email">Password:</label>
                            <input type="password" id="password" name="password" className="border border-gray-400"/>
                        </div>
                        <button className="border border-gray-400 mt-5 w-1/4 mx-auto">sign up</button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Login;