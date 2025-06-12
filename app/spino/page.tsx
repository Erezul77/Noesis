
'use client'

export default function SpinOPage() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">SpiñO – Emotional Reflection</h1>
      <p className="mb-4 text-gray-700">
        Explore your emotional coherence through guided reflection powered by the SpiñO engine.
      </p>
      <div className="w-full aspect-video border rounded overflow-hidden shadow">
        <iframe
          src="https://spin-o.vercel.app"
          className="w-full h-full"
          allow="clipboard-write"
        />
      </div>
      <p className="mt-4 text-sm text-gray-500">
        If the embedded app doesn’t load, you can open it directly:
        <a href="https://spin-o.vercel.app" target="_blank" className="text-blue-600 ml-2">
          spin-o.vercel.app
        </a>
      </p>
    </div>
  )
}
