import { NextFunction, Request, Response } from 'express';
import { z, ZodSchema } from 'zod'
import { badRequest } from '../controller/handlers/handlers';

type Validation = {
  params?: ZodSchema;
  query?: ZodSchema;
  body?: ZodSchema;
}

export class Validator {
  static schema: Validation;

  static validate(req: Request, res: Response, next: NextFunction, schema: Validation) {
    return this.makeValidation(req, res, next, schema);
  }

  static makeValidation(req: any, res: Response, next: NextFunction, schema: Validation) {
    const errors: any[] = [];

    Object.entries(schema).forEach(([key, validator]) => {
      try {
        if (validator) {
          req[key] = validator.parse(req[key])
        }
      } catch (error) {
        if (error instanceof z.ZodError) {
          errors.push({ type: `${key} validation`, error: error.errors })
        }
      }
    });

    if (!errors.length) {
      return next();
    }

    return badRequest(res, JSON.stringify({ message: 'Validation Error', errors }))
  }
}
export class ValidationMiddlewares extends Validator {

  static login = (req: Request, res: Response, next: NextFunction) => {
    const schema = {
      body: z.object({
        username: z.string(),
        password: z.string()
      })
    };

    return this.validate(req, res, next, schema);
  };
}
