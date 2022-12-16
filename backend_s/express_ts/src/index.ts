import express, { Request, response, Response } from "express";
import { CourseCreateModel } from "./models/CourseCreateModel";
import { CourseUpdateModel } from "./models/CourseUpdateModel";
import { CourseViewModel } from "./models/CourseViewModel";
import { GetCourseQueryModel } from "./models/GetCoursesQueryModel";
import { URIParamsCourseModel } from "./models/URIParamsCourseModel";
import {
  CourseType,
  RequestWithBody,
  RequestWithParams,
  RequestWithParamsAndBody,
  RequestWithQuery,
} from "./types";

export const app = express();
const PORT = 3000;

let courses: CourseType[] = [
  { id: 1, title: "frontend", studentsCount: 12 },
  { id: 2, title: "backend", studentsCount: 12 },
  { id: 3, title: "fullstack", studentsCount: 12 },
];

app.use(express.json());
// app.use("./images/favicon.ico", express.static("images/favicon.ico"));

app.get("/", (req, res: Response<Object>) => {
  res.status(200).json({ message: "Dsyt API here!" });
});

app.get(
  "/courses",
  (
    req: RequestWithQuery<GetCourseQueryModel>,
    res: Response<CourseViewModel[]>
  ) => {
    let foundCourses = courses;
    req.query.title &&
      (foundCourses = courses.filter(
        (c) => c.title.indexOf(req.query.title as string) > -1
      ));

    res.json(
      foundCourses.map((viewCourse) => {
        return {
          id: viewCourse.id,
          title: viewCourse.title,
        };
      })
    );
  }
);

app.get(
  "/courses/:id",
  (
    req: RequestWithParams<URIParamsCourseModel>,
    res: Response<CourseViewModel>
  ) => {
    const id = req.params.id;
    const course = courses.find((c) => c.id === +id);
    if (course) {
      res.json({ id: course.id, title: course.title });
      return;
    } else {
      res.sendStatus(404);
    }
  }
);

app.post(
  "/courses",
  (
    req: RequestWithBody<CourseCreateModel>,
    res: Response<{ status: string; newCourse: CourseViewModel }>
  ) => {
    if (!req.body.title || !req.body.id) {
      res.sendStatus(400);
      return;
    } else {
      const newCourse: CourseType = {
        id: +req.body.id,
        title: req.body.title,
        studentsCount: 1,
      };
      courses.push(newCourse);
      res.status(201).json({
        status: "Cousre added!",
        newCourse: { id: newCourse.id, title: newCourse.title },
      });
    }
  }
);

app.delete(
  "/courses/:id",
  (
    req: RequestWithParams<URIParamsCourseModel>,
    res: Response<{ status: string }>
  ) => {
    const id = req.params.id;
    const courseToDelete = courses.find((c) => c.id === +id);
    if (courseToDelete) {
      courses = courses.filter((c) => c.id !== +id);
      res.sendStatus(204);
      return;
    } else {
      res.status(404).json({ status: `Cousre ${id} can't exist!` });
    }
  }
);

app.put(
  "/courses/:id",
  (
    req: RequestWithParamsAndBody<URIParamsCourseModel, CourseUpdateModel>,
    res: Response<{ message: string; course: CourseViewModel }>
  ) => {
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
    } else {
      res.status(404);
    }
  }
);

app.delete("/__tests__/data", (req, res) => {
  courses = [];
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
