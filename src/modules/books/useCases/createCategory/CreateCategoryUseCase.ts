import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { AppError } from "../../../../shared/erros/AppError";

interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateCategoryUseCase {
    private categoriesRepository: ICategoriesRepository;
    constructor(
        @inject("CategoriesRepository")
        categoriesRepository: ICategoriesRepository,
    ) {
        this.categoriesRepository = categoriesRepository;
    }

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists =
            await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new AppError("A categoria já existe");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
