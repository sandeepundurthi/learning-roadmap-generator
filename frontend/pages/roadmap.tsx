import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../utils/api';
import { auth, db } from '../lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export default function RoadmapPage() {
  const router = useRouter();
  const { skills, target_role } = router.query;

  const [roadmap, setRoadmap] = useState<any>(null);
  const [progress, setProgress] = useState<{ [key: string]: boolean }>({});
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserId(user.uid);
      const ref = doc(db, 'roadmaps', user.uid);
      getDoc(ref).then((docSnap) => {
        if (docSnap.exists()) {
          setProgress(docSnap.data().progress || {});
        }
      });
    }
  }, []);

  useEffect(() => {
    if (skills && target_role) {
      api
        .post('/roadmap/', {
          skills: JSON.parse(skills as string),
          target_role,
        })
        .then((res) => {
          setRoadmap(res.data.roadmap);
        });
    }
  }, [skills, target_role]);

  const handleCheck = async (itemKey: string) => {
    const updated = { ...progress, [itemKey]: !progress[itemKey] };
    setProgress(updated);
    localStorage.setItem('roadmap_progress', JSON.stringify(updated));

    if (userId) {
      const ref = doc(db, 'roadmaps', userId);
      await setDoc(ref, { progress: updated }, { merge: true });
    }
  };

  const totalItems = roadmap ? Object.values(roadmap).flat().length : 0;
  const completedItems = Object.values(progress).filter(Boolean).length;

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Learning Roadmap</h1>
        <p className="text-gray-600">
          ✅ {completedItems} / {totalItems} completed
        </p>
      </div>

      {!roadmap && <p className="text-gray-600">Loading...</p>}

      {roadmap &&
        Object.entries(roadmap).map(([section, items]: any) => (
          <div
            key={section}
            className="mb-6 p-4 border rounded-xl bg-white shadow-sm"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              {section}
            </h2>
            <ul className="space-y-1">
              {items.map((item: string, idx: number) => {
                const key = `${section}_${item}`;
                return (
                  <li key={idx} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={progress[key] || false}
                      onChange={() => handleCheck(key)}
                      className="accent-blue-600"
                    />
                    <span className="text-gray-800">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
    </main>
  );
}
