import React from 'react'

function PrettyJSON({data}){
  return (
    <pre className="overflow-auto whitespace-pre-wrap bg-slate-900 text-slate-100 rounded p-4 text-sm" style={{maxHeight: '60vh'}}>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

export default function JSONViewer({initial}){
  const [text, setText] = React.useState(() => initial ? JSON.stringify(initial, null, 2) : '')
  const [parsed, setParsed] = React.useState(initial || null)
  const [error, setError] = React.useState(null)

  function handleParse(){
    try{
      const j = JSON.parse(text)
      setParsed(j)
      setError(null)
    }catch(e){
      setError(e.message)
    }
  }

  function handleFile(e){
    const f = e.target.files?.[0]
    if(!f) return
    const reader = new FileReader()
    reader.onload = () => {
      setText(reader.result)
      setParsed(null)
      setError(null)
    }
    reader.readAsText(f)
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button onClick={handleParse} className="px-4 py-2 bg-indigo-600 text-white rounded">Parse JSON</button>
        <label className="px-4 py-2 border rounded cursor-pointer">
          Upload JSON
          <input type="file" accept="application/json" onChange={handleFile} className="hidden" />
        </label>
        <button onClick={() => { setText(''); setParsed(null); setError(null); }} className="px-4 py-2 border rounded">Clear</button>
      </div>

      <textarea value={text} onChange={e=>setText(e.target.value)} rows={10} className="w-full p-3 rounded border" placeholder="Paste JSON here or upload a file" />

      {error && <div className="text-red-600">JSON error: {error}</div>}

      {parsed ? <PrettyJSON data={parsed} /> : <div className="text-slate-600">Parsed JSON will appear here after you click <strong>Parse JSON</strong>.</div>}
    </div>
  )
}