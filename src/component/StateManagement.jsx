import React, {useState}from 'react'
import Input from './ui/input.jsx'
import Button from './ui/button.jsx'



function StateManagement() {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[submitted,setSubmitted] = useState(false)


    const handleSubmit = () => {
        email.preventDefualt();
        setSubmitted(true)
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-r from-primary-300 to-primary-500">
        <form onSubmit={handleSubmit} 

    className="bg-secondary-50 p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">State Management Demo</h2>
            <Input
            label="Name"
            placeholder="enter your Name"
            value={name}
            onchange={(o) => setEmail(0,target).value}

             />
             <Input
            label="email"
            placeholder="enter your email"
            value={email}
            onchange={(o) => setEmail(0,target).value}

             />
             <button type="submit"disabled={!name || !email }> submit</button>
            {
                submitted&&(
                    <p className='text-sm text-secondary-200 text text-center'>
                        hello,{name}! we get your email:{email}
                    </p>
                )
            }
            </form>
            </div>
  );
}
 export default StateManagement