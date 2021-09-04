import { getCustomRepository, Repository } from "typeorm";
import Users from "../entities/Users";
import UsersRepository from "../repositories/UsersRepository";


export default class UsersService {
    private usersRepository: Repository<Users>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository)
    }

    public async create(email: string) {
        const usersExists = await this.usersRepository.findOne({
            email
        });

        if (usersExists) {
            return usersExists;
        }

        const users = this.usersRepository.create({
            email
        })

        await this.usersRepository.save(users)

        return users;
    }
}