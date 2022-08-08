const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");

beforeEach(() => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("DB connected");
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Upload tests", () => {
  test("Should not delete file because of wrong id", async () => {
    const id = 2;
    await request(app).delete(`/api/file/${id}`).expect(500);
  });

  test("Should not download file with wrong id", async () => {
    const id = "62ee83f4b4c6e4b74a554f2f";
    await request(app).get(`/api/download/${id}`).expect(400);
  });

  test("Should get all files from database", async () => {
    await request(app).get(`/api/file`).expect(200);
  });

  test("Should get empty arrray because given type is not exists in database", async () => {
    const type = "music";
    const response = await request(app).get(`/api/file/${type}`);
    expect(response.body.length).toEqual(0);
  });
});
