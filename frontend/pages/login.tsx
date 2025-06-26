import { useState } from 'react';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (err: any) {
      // If login fails, try creating the account
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        router.push('/');
      } catch (createErr: any) {
        setError('Login failed. Please check credentials.');
      }
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <div className="max-w-sm w-full bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Login or Sign Up</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Continue
        </button>

        {error && <p className="text-red-600 mt-3 text-sm">{error}</p>}
      </div>
    </main>
  );
}
