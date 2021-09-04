import { getCustomRepository } from "typeorm";
import UsersRepository from "../repositories/UsersRepository";


export default class UsersService {

    public async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository);

        const usersExists = await usersRepository.findOne({
            email
        });

        if (usersExists) {
            return usersExists;
        }

        const users = usersRepository.create({
            email
        })

        await usersRepository.save(users)

        return users;
    }
}