
'use client'

export default function AboutPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Noesis-Net</h1>
      <p className="mb-4 text-gray-700">
        <strong>Noesis-Net</strong> is a recursive epistemic hub — a digital mindspace where reflection, emotion,
        and symbolic emergence converge. It is not a social network. It is not a product. It is a system.
      </p>
      <p className="mb-4 text-gray-700">
        Noesis-Net unifies three core engines:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li><strong>Noēsis</strong> – the core reflection engine, tracking adequacy (A), emotional clarity (ΔP), and causal truth (ψ)</li>
        <li><strong>Physis</strong> – the symbolic emergence layer, where grammar, form, and structure unfold from natural logic</li>
        <li><strong>SpiñO</strong> – the emotional coherence assistant, measuring joy, sadness, and affective alignment</li>
      </ul>
      <p className="mb-4 text-gray-700">
        Each module is autonomous yet integrated. You may reflect, feel, or code — the system listens and grows.
      </p>
      <p className="text-sm text-gray-500">
        Visit <a className="text-blue-600" href="/blueprint">/blueprint</a> to explore the full recursive architecture.
      </p>
    </div>
  )
}
