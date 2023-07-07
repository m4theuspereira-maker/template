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
      const { status, text } = await supertest(app).get("/").send();

      expect({ status, text }).toStrictEqual({
        status: 200,
        text: "I'm working"
      });
    });
  });
});
