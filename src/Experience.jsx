import "./experience.css";

export default function Experience() {
  return (
    <section className="section">
      <h2>Experience & Impact</h2>

      <div className="exp-card">
        <h3>MOURITech</h3>
        <span className="role">Senior Salesforce Developer · 2021 – Present</span>
        <ul>
          <li>Delivered end-to-end Salesforce CRM implementations</li>
          <li>Built scalable LWCs and Apex for enterprise clients</li>
          <li>Implemented Sales Cloud, Service Cloud, and CPQ solutions</li>
        </ul>
      </div>

      <div className="exp-card highlight">
        <h3>Samsara (IoT Solutions)</h3>
        <span className="role">Salesforce Developer</span>
        <ul>
          <li>
            Built <strong>15+ interactive LWCs</strong> for CPQ guided selling
          </li>
          <li>
            Reduced quote generation time by <strong>40%</strong>
          </li>
          <li>Implemented 20+ Flows (Screen, Record, Scheduled)</li>
          <li>Optimized approval workflows for discounts and renewals</li>
        </ul>
      </div>

      <div className="exp-card">
        <h3>Advance Auto Parts</h3>
        <span className="role">Software Developer 2 · 2023</span>
        <ul>
          <li>Developed LWCs to enhance UI/UX</li>
          <li>Integrated Salesforce with inventory systems</li>
          <li>Resolved 50+ production issues</li>
        </ul>
      </div>

      <div className="exp-card">
        <h3>SI Group</h3>
        <span className="role">Salesforce Admin / Developer</span>
        <ul>
          <li>Implemented 25+ custom objects and automation</li>
          <li>Built reusable Custom Metadata & Settings</li>
          <li>Migrated legacy data using Data Loader</li>
        </ul>
      </div>
    </section>
  );
}
