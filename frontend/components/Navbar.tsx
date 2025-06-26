import { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserEmail(user?.email ?? null);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/login');
  };

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-gray-100 shadow">
      <h1 className="text-lg font-bold text-blue-700 cursor-pointer" onClick={() => router.push('/')}>
        📘 Roadmap App
      </h1>

      <div className="flex items-center gap-4 text-sm">
        {userEmail && (
          <span className="text-gray-700 hidden sm:inline">👋 {userEmail}</span>
        )}
        <button
          onClick={() => router.push('/')}
          className="text-gray-800 hover:underline"
        >
          Home
        </button>
        <button
          onClick={handleLogout}
          className="text-red-600 font-semibold hover:underline"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
