
'use client'
import { useEffect, useState } from 'react'
import { getFirestore, collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default function FeedPage() {
  const [reflections, setReflections] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'reflections'), orderBy('timestamp', 'desc'))
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setReflections(data)
    })
    return () => unsub()
  }, [])

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Reflection Feed</h1>
      {reflections.map((r: any) => (
        <div key={r.id} className="border rounded p-4 mb-4 bg-white shadow">
          <p className="text-gray-800 mb-2">{r.text}</p>
          <div className="text-sm text-gray-600 space-x-4">
            <span>🧠 A: {r.adequacy?.toFixed(2)}</span>
            <span>💓 ΔP: {r.emotion?.toFixed(2)}</span>
            <span>✨ ψ: {r.clarity?.toFixed(2)}</span>
            <span className="block mt-1 text-xs">
              🔗 <a className="text-blue-600" href={`https://dweb.link/ipfs/${r.cid}`} target="_blank">View on IPFS</a>
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
