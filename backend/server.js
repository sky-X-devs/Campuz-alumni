const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const mentors = [
  {
    id: 1,
    name: "Amit Sharma",
    batch: 2019,
    role: "Software Engineer",
    company: "Google",
    skills: ["React", "Node.js", "System Design"],
    location: "Bangalore"
  },
  {
    id: 2,
    name: "Neha Verma",
    batch: 2018,
    role: "Data Scientist",
    company: "Microsoft",
    skills: ["Python", "ML", "AI"],
    location: "Hyderabad"
  },
  {
    id: 3,
    name: "Rahul Mehta",
    batch: 2020,
    role: "Product Manager",
    company: "Amazon",
    skills: ["Product Strategy", "UX", "Leadership"],
    location: "Bangalore"
  },

  // 🔥 Newly Added Mentors
  {
    id: 4,
    name: "Priya Singh",
    batch: 2017,
    role: "Backend Engineer",
    company: "Flipkart",
    skills: ["Java", "Spring Boot", "Microservices"],
    location: "Bangalore"
  },
  {
    id: 5,
    name: "Ankit Patel",
    batch: 2016,
    role: "DevOps Engineer",
    company: "IBM",
    skills: ["AWS", "Docker", "Kubernetes"],
    location: "Pune"
  },
  {
    id: 6,
    name: "Sneha Kulkarni",
    batch: 2021,
    role: "UI/UX Designer",
    company: "Swiggy",
    skills: ["Figma", "UX Research", "Design Systems"],
    location: "Bangalore"
  },
  {
    id: 7,
    name: "Rohit Jain",
    batch: 2015,
    role: "Tech Lead",
    company: "Paytm",
    skills: ["Node.js", "Scalability", "Architecture"],
    location: "Noida"
  }
];

app.get("/api/mentors", (req, res) => {
  res.json(mentors);
});

app.listen(5000, () =>
  console.log(" Server running on port 5000")
);
