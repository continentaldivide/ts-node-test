import { Request, Response } from "express";

const testRoute = (req: Request, res: Response) => {
  res.json({ response: "hello from the API test route!" });
};

export { testRoute };
