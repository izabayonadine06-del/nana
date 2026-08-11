import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../app/api/auth/index.js';
import Button from '../component/ui/button.jsx';
import Input from '../component/ui/input.jsx';
import { useAppStore } from '../app/store.jsx';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const { setUser } = useAppStore();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const data = await login({email,password});
            localStorage.setItem('token', data.token)
            setUser(data.user);
            navigate('/users')
            const payload = JSON.parse(atob(data.token.split('.')[1]));
            if (payload.role === 'admin'){
                navigate('/users')
            }else{
              navigate("/");
            }
        }
        catch(error){
            setError(error.message)
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <Button className="w-full" type="submit" disabled={!email || !password}>
                        Login
                    </Button>
                </form>

                <p className="mt-4 text-center text-gray-600">
                    Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;