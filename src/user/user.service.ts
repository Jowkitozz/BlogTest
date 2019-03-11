import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./entity/user.entity";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository
  ) {}

  /**
   * Returns a user identified by its id
   *
   * @param id - user id
   * @returns Resolves with User
   */
  async getById(id: string) {
    return this.userRepository.findOne(id);
  }

    /**
   * Récupère les informations d'un utilisateur grâce à son email
   *
   * @param email - user id
   * @returns Resolves with User
   */
  async getByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  /**
   * Effectue la connexion d'un utilisateur
   *
   * @param user - user
   * @returns Resolves with User
   */
  async login(user: any): Promise<boolean> {
    const userDB = await this.getByEmail(user.email);
    if (userDB) {
      if (user.password === userDB.password) {
        return true;
      }
      return false;
    }
    return false;
  }
}
