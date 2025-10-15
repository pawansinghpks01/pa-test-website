import React from 'react'

export default function Home(){
  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight">Beautiful landing for your project</h1>
          <p className="mt-4 text-lg text-slate-600">This is the combined single React app that contains your responsive landing page and a separate JSON viewer page. It's modular and ready to expand.</p>
          <div className="mt-6 flex gap-3">
            <a href="/viewer" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow">Open JSON Viewer</a>
            <a href="#features" className="inline-block px-6 py-3 border rounded-lg">See features</a>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="font-semibold">Highlights</h3>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li>✅ Tailwind CSS layout & utility-first styling</li>
            <li>✅ React Router for navigation</li>
            <li>✅ JSON Viewer as separate route (`/viewer`)</li>
            <li>✅ GH Pages deploy ready</li>
          </ul>
        </div>
      </div>

      <div id="features" className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h4 className="font-semibold mb-2">Modular Components</h4>
          <p className="text-sm text-slate-600">Component-first design for easier growth.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h4 className="font-semibold mb-2">Responsive</h4>
          <p className="text-sm text-slate-600">Looks good on phones, tablets and desktop.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h4 className="font-semibold mb-2">Ready to Deploy</h4>
          <p className="text-sm text-slate-600">One command to build and deploy to GitHub Pages.</p>
        </div>
      </div>
    </section>
  )
}