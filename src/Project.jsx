import "./project.css";

export default function Project() {
  return (
    <section className="section light">
      <h2>Personal Project</h2>

      <div className="project-card">
        <h3>Apex Phantom Beta</h3>
        <p className="tagline">
          VS Code Extension · Salesforce Developer Tool
        </p>

        <p>
          Apex Phantom Beta is a VS Code extension that allows Salesforce
          developers to test Apex code blocks with simulated data without
          performing real DML operations on the org.
        </p>

        <ul>
          <li>⚡ Simulates Apex execution safely</li>
          <li>🧪 No real DML or org data impact</li>
          <li>🧩 Improves local development & testing speed</li>
        </ul>

        <div className="project-actions">
          <a
            href="https://github.com/RazzDino/Apex-Phantom-Beta-"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
