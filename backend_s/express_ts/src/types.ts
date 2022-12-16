import { Request } from "express";

export type CourseType = {
  id: number;
  title: string;
  studentsCount: number;
};

export type RequestWithBody<T> = Request<{}, {}, T, {}>;
export type RequestWithQuery<T> = Request<{}, {}, {}, T>;
export type RequestWithParams<T> = Request<T, {}, {}, {}>;
export type RequestWithParamsAndBody<T, B> = Request<T, {}, B, {}>;
