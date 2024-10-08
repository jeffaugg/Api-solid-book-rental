import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { container } from "tsyringe";

class CreateSpecificationController {
    private createSpecificationUseCase: CreateSpecificationUseCase;

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, description } = req.body;

        const createSpecificationUseCase = container.resolve(
            CreateSpecificationUseCase,
        );

        await createSpecificationUseCase.execute({ name, description });

        return res.status(201).send();
    }
}

export { CreateSpecificationController };
