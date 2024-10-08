import { Category } from "../../infra/typeorm/entity/Category";
import {
    ICategoriesRepository,
    IcreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
    categories: Category[] = [];

    async findByName(name: string): Promise<Category> {
        const category = this.categories.find(
            (category) => category.name === name,
        );
        return category;
    }
    async list(): Promise<Category[]> {
        return this.categories;
    }
    async create({ name, description }: IcreateCategoryDTO): Promise<void> {
        const category = new Category();
        Object.assign(category, {
            name,
            description,
        });

        this.categories.push(category);
    }
}

export { CategoriesRepositoryInMemory };
