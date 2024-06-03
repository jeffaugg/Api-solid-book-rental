import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entity/User";

interface IUserRepostory {
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
}

export { IUserRepostory };
