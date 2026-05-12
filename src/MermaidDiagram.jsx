import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  themeVariables: {
    primaryColor: '#E1F5EE',
    primaryTextColor: '#085041',
    primaryBorderColor: '#1D9E75',
    lineColor: '#9ca3af',
    secondaryColor: '#E6F1FB',
    tertiaryColor: '#EEEDFE',
    background: '#ffffff',
    mainBkg: '#f9fafb',
    nodeBorder: '#d1d5db',
    clusterBkg: '#f3f4f6',
    titleColor: '#111827',
    edgeLabelBackground: '#ffffff',
    fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif",
    fontSize: '13px',
  },
  flowchart: {
    curve: 'basis',
    padding: 20,
  },
});

const DIAGRAM = `flowchart TD
    A([🚀 Start: Sign up for HubSpot]) --> B

    subgraph P1["Phase 1 — CRM Setup"]
        B[Company Profile & Settings] --> C[Custom Contact Properties]
        C --> D[Custom Deal Properties]
        D --> E[Build Pipeline Stages]
        E --> F[Invite Team Members]
    end

    F --> G

    subgraph P2["Phase 2 — Lead Capture"]
        G[Import Expo Leads via CSV] --> H[Connect Website Form]
        H --> I[Manual Entry Template]
        I --> J[Create Lead Intake View]
        J --> K[Test Full Capture Flow]
    end

    K --> L

    subgraph P3["Phase 3 — Follow-up Automation"]
        L[Write 4 Email Templates] --> M[Create Follow-up Workflow]
        M --> N[Add Reply Detection Branch]
        N --> O[Connect Email Inbox]
        O --> P[Set Enrollment Filters]
        P --> Q[Activate Workflow]
    end

    Q --> R{Lead Replied?}
    R -- Yes --> S
    R -- No, went cold --> T

    subgraph P4["Phase 4 — Deal Tracking"]
        S[Auto-create Deal] --> U[Set Amount & Close Date]
        U --> V[Deals Board View]
        V --> W[Log Calls & Meetings]
        W --> X[Revenue Forecast Report]
    end

    subgraph P5["Phase 5 — Re-engagement"]
        T[Cold Lead View] --> Y[Write Re-engagement Email]
        Y --> Z[Re-engagement Workflow]
        Z --> AA{Replied?}
        AA -- Yes --> S
        AA -- No after 90 days --> AB[Archive Contact]
    end

    X --> AC

    subgraph P6["Phase 6 — Pricing Automation"]
        AC[Document Pricing Logic] --> AD[Build Pricing Calculator]
        AD --> AE[Create Quote Template]
        AE --> AF[Quote Generation Workflow]
        AF --> AG[Test with 3 Deal Types]
        AG --> AH[Train Team & Document]
    end

    AH --> AI([✅ Fully Automated CRM])

    style P1 fill:#E1F5EE,stroke:#1D9E75,color:#085041
    style P2 fill:#FAEEDA,stroke:#BA7517,color:#633806
    style P3 fill:#E6F1FB,stroke:#185FA5,color:#0C447C
    style P4 fill:#EEEDFE,stroke:#534AB7,color:#3C3489
    style P5 fill:#FAECE7,stroke:#993C1D,color:#712B13
    style P6 fill:#F1EFE8,stroke:#5F5E5A,color:#444441
    style A fill:#111827,color:#fff,stroke:#111827
    style AI fill:#22c55e,color:#fff,stroke:#16a34a
    style R fill:#fff7ed,stroke:#f97316,color:#9a3412
    style AA fill:#fff7ed,stroke:#f97316,color:#9a3412
`;

let idCounter = 0;

export default function MermaidDiagram() {
  const ref = useRef(null);
  const [svg, setSvg] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const id = `mermaid-crm-${++idCounter}`;
    mermaid
      .render(id, DIAGRAM)
      .then(({ svg: rendered }) => {
        setSvg(rendered);
        setError('');
      })
      .catch((err) => {
        console.error('Mermaid render error:', err);
        setError('Could not render diagram.');
      });
  }, []);

  if (error) return <div className="mermaid-error">{error}</div>;
  if (!svg) return <div className="mermaid-loading">Loading diagram…</div>;

  return (
    <div
      ref={ref}
      className="mermaid-wrap"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
