import supertest from "supertest";
import { server } from "../src/index";

describe("example route", () => {
  afterAll(() => {
    server.close();
  });

  describe(`I'm working`, () => {
    test(`
    should return the message
    status: 200
    POST route:/
    `, async () => {
      const { status, text } = await supertest(server).get("/").send();

      expect({ status, text }).toStrictEqual({
        status: 200,
        text: "I'm working"
      });
    });
  });
});
