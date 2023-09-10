import { Request, Response } from 'express';

export default class ClassesController {
  async index(request: Request, response: Response) {
    return response.send({ msg: 'Hello' });
  }

  async create(request: Request, response: Response) {
    const body = request.body;

    console.log('BODY', body);

    return response.status(201).send();
  }
}
