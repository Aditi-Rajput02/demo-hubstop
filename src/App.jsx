import { useState } from 'react'
import CrmGuide from './CrmGuide'
import MermaidDiagram from './MermaidDiagram'
import HubSpotFormModal from './HubSpotFormModal'
import './App.css'

function App() {
  const [view, setView] = useState('guide')
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="app-shell">
      <header className="app-header">
        <span className="app-logo">🟠</span>
        <span className="app-title">HubSpot CRM Phase Guide</span>

        <div className="view-toggle">
          <button
            className={`vtab${view === 'guide' ? ' active' : ''}`}
            onClick={() => setView('guide')}
          >
            📋 Step Guide
          </button>
          <button
            className={`vtab${view === 'diagram' ? ' active' : ''}`}
            onClick={() => setView('diagram')}
          >
            🔀 Flow Diagram
          </button>
        </div>

        <button className="get-started-btn" onClick={() => setShowForm(true)}>
          Get Started ↗
        </button>
      </header>

      <main className="app-main">
        {view === 'guide' ? <CrmGuide /> : <MermaidDiagram />}
      </main>

      {showForm && <HubSpotFormModal onClose={() => setShowForm(false)} />}
    </div>
  )
}

export default App
