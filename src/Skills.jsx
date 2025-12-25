import "./skills.css";

const skills = [
  "Lightning Web Components",
  "Apex",
  "Salesforce CPQ",
  "Flows",
  "SOQL / SOSL",
  "REST APIs",
  "GitHub",
  "VS Code",
  "Sales Cloud",
  "Service Cloud",
];

export default function Skills() {
  return (
    <section className="section light">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className="skill-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
