
'use client'

export default function PhysisPage() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Physis – Symbolic Grammar Engine</h1>
      <p className="mb-4 text-gray-700">
        Interact with the symbolic structures of thought through the Physis engine.
      </p>
      <div className="w-full aspect-video border rounded overflow-hidden shadow">
        <iframe
          src="https://huggingface.co/spaces/Erezul77/Physis"
          className="w-full h-full"
          allow="clipboard-write"
        />
      </div>
      <p className="mt-4 text-sm text-gray-500">
        If the embedded app doesn’t load, you can open it directly:
        <a href="https://huggingface.co/spaces/Erezul77/Physis" target="_blank" className="text-blue-600 ml-2">
          huggingface.co/spaces/Erezul77/Physis
        </a>
      </p>
    </div>
  )
}
