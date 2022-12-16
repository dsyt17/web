import request from "supertest";
import { app } from "../../src";

describe("/course", () => {
  beforeAll(async () => {
    await request(app).delete("/__tests__/data");
  });

  it("should return 200 and message", async () => {
    await request(app).get("/").expect(200, { message: "Dsyt API here!" });
  });

  it("should return 200 and empty array", async () => {
    await request(app).get("/courses").expect(200, []);
  });

  it("should return 404 for non-existing course", async () => {
    await request(app).delete("/courses/999").expect(404);
  });

  it("should'nt create course with incorrect input data", async () => {
    await request(app)
      .post("/courses")
      .send({ title: "created course (bad request)" })
      .expect(400);

    await request(app).get("/courses").expect(200, []);
  });

  let createdCourse: any = null;
  it("should create course with correct input data", async () => {
    const createdResponse = await request(app)
      .post("/courses")
      .send({ id: 22, title: "created course (correct)" })
      .expect(201);

    createdCourse = createdResponse.body;

    expect(createdCourse).toEqual({
      status: "Cousre added!",
      newCourse: {
        id: expect.any(Number),
        title: "created course (correct)",
      },
    });

    await request(app).get("/courses").expect(200, [createdCourse.newCourse]);
  });

  it("should'nd update course with incorrect input data", async () => {
    await request(app)
      .put(`/courses/${createdCourse.newCourse.id}`)
      .send({ id: 22, title111: "updated course (bad reauest)" })
      .expect(400);

    await request(app)
      .get(`/courses/${createdCourse.newCourse.id}`)
      .expect(200, createdCourse.newCourse);
  });

  it("should update course with correct input data", async () => {
    const updatedCourse = await request(app)
      .put(`/courses/${createdCourse.newCourse.id}`)
      .send({ id: 22, title: "updated course (good reauest)" })
      .expect(201);

    await request(app)
      .get(`/courses/${updatedCourse.body.course.id}`)
      .expect(200, updatedCourse.body.course);
  });

  it("should delete course with correct input data", async () => {
    await request(app)
      .delete(`/courses/${createdCourse.newCourse.id}`)
      .expect(204);

    await request(app)
      .get(`/courses/${createdCourse.newCourse.id}`)
      .expect(404);
  });
});
