export const phases = [
  {
    id: 0,
    label: "Phase 1",
    name: "CRM setup",
    goal: "Build the foundation — contacts, fields, pipeline",
    badge: "Foundation",
    badgeColor: "background:#E1F5EE;color:#085041",
    numColor: "background:#9FE1CB;color:#085041",
    tipColor: "border-color:#1D9E75;background:#E1F5EE;color:#085041",
    steps: [
      {
        title: "Sign up & access HubSpot CRM",
        desc: "Go to hubspot.com and create a free account. The free tier covers contacts, deals, and basic automation — enough for all phases.",
        tip: "Use a company email, not personal. This helps with email deliverability later.",
      },
      {
        title: "Set up your company profile",
        desc: "Go to Settings → Account Defaults. Fill in company name, currency (INR if India-based), time zone, and logo.",
        tip: "Set currency now — you can't easily change it after deals are created.",
      },
      {
        title: "Create custom contact properties",
        desc: "Settings → Properties → Contact Properties → Create. Add: Expo Source (dropdown: Expo Name, Website, Referral), Lead Status (dropdown: New, Contacted, Cold, Re-engaged).",
        tip: "Keep dropdown values short. You'll filter reports by these later.",
      },
      {
        title: "Create custom deal properties",
        desc: "Settings → Properties → Deal Properties → Create. Add: Lead Source (same values as above), Quoted Amount.",
        tip: "Linking deal + contact source lets you see which expo gives the best ROI.",
      },
      {
        title: "Build your pipeline stages",
        desc: "CRM → Deals → Manage Pipelines → Add Stage. Create: New Lead → Contacted → Interested → Proposal Sent → Negotiation → Closed Won → Closed Lost.",
        tip: "Add a % probability to each stage. HubSpot uses this to forecast revenue automatically.",
      },
      {
        title: "Invite your team",
        desc: "Settings → Users & Teams → Invite User. Assign roles: Sales Rep (standard), Manager (reports access).",
        tip: "Set up at least one manager account so someone can see the full pipeline.",
      },
    ],
  },
  {
    id: 1,
    label: "Phase 2",
    name: "Lead capture",
    goal: "Get every lead into HubSpot — no lead falls through",
    badge: "Capture",
    badgeColor: "background:#FAEEDA;color:#633806",
    numColor: "background:#FAC775;color:#633806",
    tipColor: "border-color:#BA7517;background:#FAEEDA;color:#633806",
    steps: [
      {
        title: "Import expo leads via CSV",
        desc: "CRM → Contacts → Import → File → Map columns: First Name, Last Name, Email, Phone, Company, Expo Source. Run import.",
        tip: "Clean the CSV first — remove duplicates, fix phone formats. Bad data now = bad reports forever.",
      },
      {
        title: "Connect your website form",
        desc: "If using HubSpot forms: Marketing → Forms → Create Form → Embed on your site. Map form fields to contact properties including Lead Source = Website.",
        tip: "Add a hidden field for Lead Source so every web lead is auto-tagged.",
      },
      {
        title: "Set up manual entry template",
        desc: "CRM → Contacts → Create Contact. Build a saved view with your custom fields visible so your team fills everything in consistently.",
        tip: "Pin the view for your team — Settings → Saved views → Pin to sidebar.",
      },
      {
        title: "Create a lead intake view",
        desc: "CRM → Contacts → Add Filter: Lead Status = New. Save as 'New Leads'. This is your daily inbox.",
        tip: "Sort by Create Date descending. Assign this view as the team's morning starting point.",
      },
      {
        title: "Test the full capture flow",
        desc: "Submit a test form, import a 1-row CSV, manually create one contact. Confirm all three appear in the New Leads view with correct properties.",
        tip: "If any field is missing, fix the mapping now — before real leads come in.",
      },
    ],
  },
  {
    id: 2,
    label: "Phase 3",
    name: "Follow-up automation",
    goal: "Never forget a follow-up — the system does it for you",
    badge: "Core",
    badgeColor: "background:#E6F1FB;color:#0C447C",
    numColor: "background:#B5D4F4;color:#0C447C",
    tipColor: "border-color:#185FA5;background:#E6F1FB;color:#0C447C",
    steps: [
      {
        title: "Write your 4 email templates",
        desc: "Marketing → Email → Create Email → Save as Template. Write: Day 1 (intro + value), Day 3 (follow-up + case study), Day 7 (different angle), Day 14 (last nudge + CTA).",
        tip: "Keep Day 1 under 100 words. Shorter = higher reply rate. Save each as a draft template, not a campaign.",
      },
      {
        title: "Create the follow-up workflow",
        desc: "Automation → Workflows → Create → Contact-based. Trigger: Lead Status = Contacted. Add delay (1 day) → Send Email (Day 1 template) → Delay (2 days) → Send Day 3 → Delay (4 days) → Send Day 7 → Delay (7 days) → Send Day 14.",
        tip: "Use 'business days' for delays — sending on weekends hurts open rates.",
      },
      {
        title: "Add a reply detection branch",
        desc: "In the same workflow, after each email step, add an IF/THEN branch: If contact replied → Set Lead Status = Replied → End workflow. This stops follow-ups the moment someone responds.",
        tip: "HubSpot detects replies automatically via email integration — connect your Gmail/Outlook first.",
      },
      {
        title: "Connect your email inbox",
        desc: "Settings → Integrations → Email → Connect Inbox. This syncs sent/received emails and powers reply detection in your workflow.",
        tip: "Use your personal work email here, not a shared inbox. Shared inboxes break reply tracking.",
      },
      {
        title: "Set workflow enrollment filters",
        desc: "In the workflow, set re-enrollment: Allow contacts to re-enroll. Condition: Lead Status changes to Contacted. This lets old leads restart the sequence after re-engagement.",
        tip: "Test with a fake contact first — run through all 4 emails manually to check timing and content.",
      },
      {
        title: "Turn on the workflow",
        desc: "Review → Activate. Monitor for the first 48 hours: check Workflow History for errors, check that reply detection stops the sequence correctly.",
        tip: "Check spam folders on your test. If Day 1 lands in spam, adjust subject line before going live.",
      },
    ],
  },
  {
    id: 3,
    label: "Phase 4",
    name: "Deal tracking",
    goal: "See exactly where every rupee sits in your pipeline",
    badge: "Revenue",
    badgeColor: "background:#EEEDFE;color:#3C3489",
    numColor: "background:#CECBF6;color:#3C3489",
    tipColor: "border-color:#534AB7;background:#EEEDFE;color:#3C3489",
    steps: [
      {
        title: "Create a deal when lead replies",
        desc: "Add a step to your workflow: when Lead Status = Replied → Create Deal → Associate with contact → Set Deal Stage = Interested → Assign to lead owner.",
        tip: "Auto-creating the deal ensures nothing slips. Sales reps should never create deals manually from scratch.",
      },
      {
        title: "Set deal amount and close date",
        desc: "When a deal is created, the rep opens it and fills: Amount (estimated), Close Date (realistic), Deal Source (from contact).",
        tip: "Even rough estimates help. A ₹0 pipeline is useless for forecasting — push for a number.",
      },
      {
        title: "Build your deals board view",
        desc: "CRM → Deals → Board View. You should see columns: Interested, Proposal Sent, Negotiation, Closed Won, Closed Lost. Drag cards across as deals progress.",
        tip: "Do a weekly 15-min pipeline review — just drag any stale deals forward or mark lost. Keeps data clean.",
      },
      {
        title: "Set up deal activity logging",
        desc: "In each deal, log calls and meetings: Deal → Log Activity → Call / Meeting. Add notes on what was discussed.",
        tip: "Log immediately after the call. Memory fades fast. Future you will thank present you.",
      },
      {
        title: "Create a revenue forecast view",
        desc: "Reports → Create Report → Pipeline → Forecast. Set date range = this month + next month. This shows expected revenue weighted by deal probability.",
        tip: "Share this report with management weekly. It replaces the manual spreadsheet everyone hates updating.",
      },
    ],
  },
  {
    id: 4,
    label: "Phase 5",
    name: "Re-engagement",
    goal: "Recover revenue from leads you had written off",
    badge: "Recovery",
    badgeColor: "background:#FAECE7;color:#712B13",
    numColor: "background:#F5C4B3;color:#712B13",
    tipColor: "border-color:#993C1D;background:#FAECE7;color:#712B13",
    steps: [
      {
        title: "Create a Cold Lead view",
        desc: "CRM → Contacts → Add Filter: Lead Status = Cold. Save as 'Cold Leads'. This is your re-engagement pool.",
        tip: "Sort by Last Activity Date ascending — oldest cold leads first. They've had the longest cooling period.",
      },
      {
        title: "Write a re-engagement email",
        desc: "This email should feel different — longer gap, different angle. Options: new case study, price drop, new feature, or simply 'checking in'. Subject: 'Still relevant for you?'",
        tip: "Reference something specific from your last conversation if notes exist. Personalization triples reply rates.",
      },
      {
        title: "Build the re-engagement workflow",
        desc: "Automation → Workflows → Create. Trigger: Lead Status = Cold AND Last Activity Date > 60 days ago. Action: Send re-engagement email → Wait 14 days → If no reply → Send second email → Wait 14 days → If still no reply → Set Status = Archived.",
        tip: "Set a 90-day cap. If 3 touches with 60+ days between don't work, archive them cleanly.",
      },
      {
        title: "Add a re-enroll path back to main sequence",
        desc: "If reply detected in re-engagement workflow → Set Lead Status = Replied → Enroll in Deal creation workflow (Phase 4 step 1).",
        tip: "This closes the loop — a recovered cold lead should flow into the deal pipeline exactly like a fresh reply.",
      },
      {
        title: "Schedule a monthly cold lead review",
        desc: "Set a recurring calendar reminder: first Monday of each month. Review the Cold Leads view. Manually read 5–10 profiles for personalization opportunities before the workflow fires.",
        tip: "The workflow handles volume. Your personal touch handles the high-value ones.",
      },
    ],
  },
  {
    id: 5,
    label: "Phase 6",
    name: "Pricing automation",
    goal: "Remove pricing bottleneck — anyone can quote",
    badge: "Future",
    badgeColor: "background:#F1EFE8;color:#444441",
    numColor: "background:#D3D1C7;color:#444441",
    tipColor: "border-color:#5F5E5A;background:#F1EFE8;color:#444441",
    steps: [
      {
        title: "Document your current pricing logic",
        desc: "Before automating, write down every variable that affects price: project size, timeline, services included, client type, extras. Be exhaustive.",
        tip: "Interview whoever currently prices deals. Price logic often lives only in one person's head.",
      },
      {
        title: "Build a pricing calculator in HubSpot",
        desc: "Settings → Properties → Deal Properties → Create calculated property. Formula: Base Rate × Size Multiplier + Add-on costs. Map each input to a deal property.",
        tip: "Start with your 3 most common deal types. Don't try to capture every edge case in version 1.",
      },
      {
        title: "Create a quote template",
        desc: "Sales → Quotes → Create Quote Template. Use your deal properties as merge tags: {{deal.amount}}, {{deal.close_date}}, {{contact.firstname}}.",
        tip: "Get your quote template reviewed by a lawyer once. Boilerplate terms save disputes later.",
      },
      {
        title: "Add a quote generation workflow",
        desc: "Automation → Workflows. Trigger: Deal Stage = Proposal Sent. Action: Generate Quote from template → Send to contact email → Log activity.",
        tip: "The rep still reviews before sending — add an approval step if deal value is above a threshold.",
      },
      {
        title: "Test with 3 real deal types",
        desc: "Run your 3 most common deal types through the calculator. Compare output to what you'd have quoted manually. Adjust formula until outputs match.",
        tip: "This calibration step is critical. Launch only when calculator matches manual pricing within 5%.",
      },
      {
        title: "Train your team & document",
        desc: "Record a 10-min Loom walkthrough of the pricing tool. Add it to your HubSpot team wiki (or a pinned note in Slack). Run one live demo with the team.",
        tip: "Automation only works if people trust it. The Loom builds that trust faster than any written doc.",
      },
    ],
  },
];
