
'use client'
import { useState } from 'react'
import { uploadToIPFS } from '@/lib/ipfs'
import { saveReflectionToFirestore } from '@/lib/firestore'
import { pushToChain } from '@/lib/blockchain/pushToChain'

export default function ReflectPage() {
  const [text, setText] = useState('')
  const [adequacy, setAdequacy] = useState(0.8)
  const [emotion, setEmotion] = useState(0.5)
  const [clarity, setClarity] = useState(0.6)
  const [onChain, setOnChain] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = async () => {
    setStatus('Uploading to IPFS...')
    const cid = await uploadToIPFS(text)
    setStatus('Saving to Firestore...')
    await saveReflectionToFirestore({ cid, adequacy, emotion, clarity, text })
    if (onChain) {
      setStatus('Pushing to blockchain...')
      await pushToChain(cid, adequacy)
    }
    setStatus('Reflection submitted successfully.')
    setText('')
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Reflect</h1>
      <textarea
        className="w-full border p-2 rounded mb-2"
        rows={6}
        placeholder="Write your reflection..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="mb-2">
        <label className="block">Adequacy (A):</label>
        <input type="number" step="0.01" min="0" max="1" value={adequacy} onChange={(e) => setAdequacy(parseFloat(e.target.value))} />
      </div>
      <div className="mb-2">
        <label className="block">Emotion (ΔP):</label>
        <input type="number" step="0.01" min="0" max="1" value={emotion} onChange={(e) => setEmotion(parseFloat(e.target.value))} />
      </div>
      <div className="mb-2">
        <label className="block">Clarity (ψ):</label>
        <input type="number" step="0.01" min="0" max="1" value={clarity} onChange={(e) => setClarity(parseFloat(e.target.value))} />
      </div>
      <div className="mb-2">
        <label>
          <input type="checkbox" checked={onChain} onChange={(e) => setOnChain(e.target.checked)} />
          <span className="ml-2">Submit to blockchain (optional)</span>
        </label>
      </div>
      <button className="bg-black text-white px-4 py-2 rounded" onClick={handleSubmit}>Submit</button>
      <p className="mt-4 text-sm text-gray-600">{status}</p>
    </div>
  )
}
