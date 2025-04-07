import React, { useState } from "react";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    skills: ["", "", "", "", "", ""],
    experience: [
      { company: "", role: "", duration: "", details: ["", ""] },
      { company: "", role: "", duration: "", details: ["", ""] },
    ],
    education: { degree: "", college: "", year: "" },
  });

  const handleChange = (e, key, index, subIndex) => {
    const value = e.target.value;
    const updatedForm = { ...formData };

    if (key === "skills") {
      updatedForm.skills[index] = value;
    } else if (key === "experience") {
      if (subIndex !== undefined) {
        updatedForm.experience[index].details[subIndex] = value;
      } else {
        updatedForm.experience[index][e.target.name] = value;
      }
    } else if (key === "education") {
      updatedForm.education[e.target.name] = value;
    } else {
      updatedForm[e.target.name] = value;
    }

    setFormData(updatedForm);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg my-8 space-y-6">
      {/* Header */}
      <div className="text-center">
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="text-3xl font-bold text-center w-full border-b p-2 mb-1"
        />
        <input
          name="role"
          placeholder="Role (e.g. Web Developer)"
          value={formData.role}
          onChange={handleChange}
          className="text-gray-600 text-center w-full mb-1"
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="text-sm text-center text-gray-500 w-full"
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="text-sm text-center text-gray-500 w-full"
        />
        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="text-sm text-center text-gray-500 w-full"
        />
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Professional Summary</h2>
        <textarea
          name="summary"
          placeholder="Write a brief summary..."
          value={formData.summary}
          onChange={handleChange}
          className="w-full border p-2 rounded-md text-gray-700"
        />
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills</h2>
        <div className="grid grid-cols-2 gap-2">
          {formData.skills.map((skill, i) => (
            <input
              key={i}
              placeholder={`Skill ${i + 1}`}
              value={skill}
              onChange={(e) => handleChange(e, "skills", i)}
              className="border p-2 rounded-md"
            />
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Work Experience</h2>
        {formData.experience.map((exp, i) => (
          <div key={i} className="mb-4">
            <input
              name="role"
              placeholder="Role"
              value={exp.role}
              onChange={(e) => handleChange(e, "experience", i)}
              className="w-full border p-2 mb-1"
            />
            <input
              name="company"
              placeholder="Company Name"
              value={exp.company}
              onChange={(e) => handleChange(e, "experience", i)}
              className="w-full border p-2 mb-1"
            />
            <input
              name="duration"
              placeholder="Duration (e.g. Jan 2023 - Present)"
              value={exp.duration}
              onChange={(e) => handleChange(e, "experience", i)}
              className="w-full border p-2 mb-2"
            />
            {exp.details.map((point, j) => (
              <input
                key={j}
                placeholder={`Detail ${j + 1}`}
                value={point}
                onChange={(e) => handleChange(e, "experience", i, j)}
                className="w-full border p-2 mb-1"
              />
            ))}
          </div>
        ))}
      </div>

      {/* Education */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Education</h2>
        <input
          name="degree"
          placeholder="Degree (e.g. B.Tech in CS)"
          value={formData.education.degree}
          onChange={(e) => handleChange(e, "education")}
          className="w-full border p-2 mb-1"
        />
        <input
          name="college"
          placeholder="College/University Name"
          value={formData.education.college}
          onChange={(e) => handleChange(e, "education")}
          className="w-full border p-2 mb-1"
        />
        <input
          name="year"
          placeholder="Year (e.g. 2023)"
          value={formData.education.year}
          onChange={(e) => handleChange(e, "education")}
          className="w-full border p-2"
        />
      </div>
    </div>
  );
};

export default Home;
