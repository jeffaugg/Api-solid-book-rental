import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UserRepository";
import { AppError } from "../../../erros/AppError";

export async function ensureAdmin(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const { id } = request.user;

    const usersRepository = new UserRepository();
    const user = await usersRepository.findById(id);

    if (!user.isAdmin) {
        throw new AppError("Usuário não é um administrador ");
    }

    return next();
}
