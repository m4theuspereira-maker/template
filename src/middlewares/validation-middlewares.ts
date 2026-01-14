import { type NextFunction, type Request, type Response } from 'express';
import { z, type ZodSchema } from 'zod'
import { badRequest } from '../controller/handlers/handlers';

interface Validation {
  params?: ZodSchema;
  query?: ZodSchema;
  body?: ZodSchema;
}

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Validator {
  static schema: Validation;

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  static validate(req: Request, res: Response, next: NextFunction, schema: Validation) {
    return this.makeValidation(req, res, next, schema);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  static makeValidation(req: any, res: Response, next: NextFunction, schema: Validation) {
    const errors: any[] = [];

    Object.entries(schema).forEach(([key, validator]) => {
      try {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (validator) {
          req[key] = validator.parse(req[key])
        }
      } catch (error) {
        if (error instanceof z.ZodError) {
          errors.push({ type: `${key} validation`, error: error.errors })
        }
      }
    });

    if (errors.length === 0) {
      next(); return;
    }

    return badRequest(res, JSON.stringify({ message: 'Validation Error', errors }))
  }
}
export class ValidationMiddlewares extends Validator {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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
