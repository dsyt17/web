import express from "express";

const app = express();
const PORT = 3000;

const courses = [
  { id: 1, title: "frontend" },
  { id: 2, title: "backend" },
  { id: 3, title: "fullstack" },
];

app.use(express.json());
// app.use("./images/favicon.ico", express.static("images/favicon.ico"));

app.get("/courses", (req, res) => {
  const foundCourses = req.query.title
    ? courses.filter((c) => c.title.indexOf(req.query.title as string) > -1)
    : courses;

  res.json(foundCourses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((c) => c.id === +id);
  if (course) {
    res.json(course);
    return;
  } else {
    res.json({ message: `course ${id} not found` });
  }
});

app.post("/courses", (req, res) => {
  if (!req.body.title || !req.body.id) {
    res.sendStatus(400);
    return;
  } else {
    const newCourse = {
      id: req.body.id,
      title: req.body.title,
    };
    courses.push(newCourse);
    res.json({ status: "Cousre was added!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
