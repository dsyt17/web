"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
let courses = [
    { id: 1, title: "frontend" },
    { id: 2, title: "backend" },
    { id: 3, title: "fullstack" },
];
app.use(express_1.default.json());
// app.use("./images/favicon.ico", express.static("images/favicon.ico"));
app.get("/", (req, res) => {
    res.json({ message: "Dsyt API here!" });
});
app.get("/courses", (req, res) => {
    const foundCourses = req.query.title
        ? courses.filter((c) => c.title.indexOf(req.query.title) > -1)
        : courses;
    res.json(foundCourses);
});
app.get("/courses/:id", (req, res) => {
    const id = req.params.id;
    const course = courses.find((c) => c.id === +id);
    if (course) {
        res.json(course);
        return;
    }
    else {
        res.json({ message: `course ${id} not found` });
    }
});
app.post("/courses", (req, res) => {
    if (!req.body.title || !req.body.id) {
        res.sendStatus(400);
        return;
    }
    else {
        const newCourse = {
            id: req.body.id,
            title: req.body.title,
        };
        courses.push(newCourse);
        res.status(201).json({ status: "Cousre added!", newCourse });
    }
});
app.delete("/courses/:id", (req, res) => {
    const id = req.params.id;
    const courseToDelete = courses.find((c) => c.id === +id);
    if (courseToDelete) {
        courses = courses.filter((c) => c.id !== +id);
        res.sendStatus(204);
        return;
    }
    else {
        res.status(404).json({ status: `Cousre ${id} can't exist!` });
    }
});
app.put("/courses/:id", (req, res) => {
    if (!req.body.title) {
        res.sendStatus(400);
        return;
    }
    const id = req.params.id;
    const course = courses.find((c) => c.id === +id);
    if (course) {
        course.title = req.body.title;
        res.status(201).json({ message: `course ${id} updated`, course });
        return;
    }
    else {
        res.status(404).json({ message: `course ${id} not found` });
    }
});
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
