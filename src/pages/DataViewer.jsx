import React from 'react'
import JSONViewer from '../components/JSONViewer'

const sample = {
  "users": [
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" }
  ],
  "meta": { "count": 2 }
}

export default function DataViewer(){
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">JSON Viewer</h2>
      <p className="text-slate-600">Paste JSON, upload a .json file, or start from the sample below.</p>
      <JSONViewer initial={sample} />
    </section>
  )
}