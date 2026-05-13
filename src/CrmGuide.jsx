import { useState } from 'react';
import { phases } from './phases';
import './CrmGuide.css';

function BulbIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ verticalAlign: '-2px', marginRight: '4px', flexShrink: 0 }}
      aria-hidden="true"
    >
      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 6L15 17H9l-.7-2C6.3 13.7 5 11.5 5 9a7 7 0 0 1 7-7z" />
    </svg>
  );
}

function CircleCheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export default function CrmGuide() {
  const [current, setCurrent] = useState(0);
  const [done, setDone] = useState(() => {
    const d = {};
    phases.forEach((p) => { d[p.id] = new Array(p.steps.length).fill(false); });
    return d;
  });

  const p = phases[current];
  const total = p.steps.length;
  const completed = done[p.id].filter(Boolean).length;
  const pct = total ? Math.round((completed / total) * 100) : 0;

  function toggleDone(i) {
    setDone((prev) => {
      const next = { ...prev, [p.id]: [...prev[p.id]] };
      next[p.id][i] = !next[p.id][i];
      return next;
    });
  }

  return (
    <div className="crm-wrap">
      <h2 className="sr-only">HubSpot CRM implementation guide — 6 phases with step-by-step instructions</h2>

      {/* Phase tabs */}
      <div className="phase-tabs">
        {phases.map((ph, i) => (
          <button
            key={ph.id}
            className={`ptab${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
          >
            {ph.label}: {ph.name}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="progress-label">{completed} of {total} steps completed</div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: pct + '%' }} />
      </div>

      {/* Phase card */}
      <div className="phase-card">
        <div className="phase-header">
          <div>
            <div className="phase-badge" style={parseStyle(p.badgeColor)}>{p.badge}</div>
          </div>
          <div>
            <div className="phase-title">{p.name}</div>
            <div className="phase-goal">{p.goal}</div>
          </div>
        </div>

        {/* Alerts */}
        {p.alerts && p.alerts.length > 0 && (
          <div className="alerts">
            {p.alerts.map((a, i) => (
              <div key={i} className={`alert alert-${a.type}`} dangerouslySetInnerHTML={{ __html: a.text }} />
            ))}
          </div>
        )}

        <div className="steps">
          {p.steps.map((s, i) => (
            <div
              key={i}
              className={`step${done[p.id][i] ? ' done' : ''}`}
              onClick={() => toggleDone(i)}
            >
              <div className="step-num" style={parseStyle(p.numColor)}>{i + 1}</div>
              <div className="step-body">
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
                <div className="step-tip" style={parseTipStyle(p.tipColor)}>
                  <BulbIcon />
                  {s.tip}
                </div>
              </div>
              <div
                className={`step-check${done[p.id][i] ? ' checked' : ''}`}
                title="Mark complete"
              >
                {done[p.id][i] ? <CircleCheckIcon /> : <CircleIcon />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Convert "background:#xxx;color:#yyy" string to a React style object */
function parseStyle(str) {
  const style = {};
  str.split(';').forEach((part) => {
    const [k, v] = part.split(':');
    if (k && v) {
      const key = k.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      style[key] = v.trim();
    }
  });
  return style;
}

/** Tip style needs border-left + background + color */
function parseTipStyle(str) {
  const style = parseStyle(str);
  // border-color from the string becomes borderLeft
  if (style.borderColor) {
    style.borderLeftColor = style.borderColor;
    delete style.borderColor;
  }
  return style;
}
