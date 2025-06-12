
'use client'

export default function BlueprintPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Noesis-Net Blueprint</h1>
      <p className="mb-4 text-gray-700">
        The Noesis-Net system is composed of three recursive engines working in harmony:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li><strong>Noēsis</strong>: Generates and scores reflections based on adequacy (A), emotional delta (ΔP), and clarity (ψ).</li>
        <li><strong>Physis</strong>: Parses reflections through symbolic grammar to detect emergent structure (Φ → Γ).</li>
        <li><strong>SpiñO</strong>: Processes emotional and affective layers to detect coherence and joy (ΔP → Aₐ).</li>
      </ul>
      <div className="bg-gray-100 p-4 rounded mb-6 shadow">
        <pre className="text-sm overflow-auto">
          {`
                ┌────────────┐
                │  Reflect   │
                └────┬───────┘
                     │
           ┌─────────▼─────────┐
           │  Noēsis Engine    │
           │  A, ΔP, ψ         │
           └────┬─────┬────────┘
                │     │
        ┌───────▼─┐ ┌─▼────────┐
        │ Physis  │ │  SpiñO   │
        │ Φ → Γ   │ │ ΔP → Aₐ │
        └────┬────┘ └────┬─────┘
             │           │
             └────┬──────┘
                  ▼
           ┌─────────────┐
           │ Unified Feed│
           └─────────────┘
          `}
        </pre>
      </div>
      <p className="text-gray-600 text-sm">
        This blueprint is alive. Each part of the system influences the others. What you reflect becomes structure. What you feel becomes clarity.
      </p>
    </div>
  )
}
