import supertest from "supertest";
import { app } from "../src/app";
import { describe, test, expect } from "vitest";

describe("example route", () => {
  describe(`I'm working`, () => {
    test(`
    should return the message
    status: 200
    POST route:/
    `, async () => {
      const { status, body } = await supertest(app).get("/").send();

      expect({ status, body }).toStrictEqual({
        status: 200,
        body: { data: "I'm working" }
      });
    });
  });
});
