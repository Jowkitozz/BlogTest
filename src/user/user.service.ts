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
   * Supprime un utilisateur
   *
   * @param email - user id
   * @returns Resolves with User
   */
  async delete(email: string): Promise<boolean> {
    const userDB = await this.getByEmail(email);
    // const userDBAdmin = await this.getAdmin(email);
    if (userDB) {
      this.userRepository.remove([userDB]);
      return true;
    }
    return false;
  }

  /**
   * Vérifie si l'utilisateur est bien un admin
   *
   * @param user - user id
   * @returns Resolves with User
   */
  // async getAdmin(user: any): Promise<boolean> {
  //   return this.userRepository.findOne({
  //     where: { admin: "true", email: this.getByEmail }
  //   });
  // }

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
   * Returns a user identified by its id
   *
   * @param id - user id
   * @returns Resolves with User
   */
  async getById(id: string) {
    return this.userRepository.findOne(id);
  }

  /**
   * Récupère les informations d'un utilisateur après sa connexion
   *
   * @param user - user id
   * @returns Resolves with User
   */
  async getInfo(user: any) {
    const userDB = await this.getByEmail(user.email);
    if (userDB) {
      if (user.password === userDB.password) {
        return "y";
      }
      return null;
    }
    return null;
  }

  /**
   * Effectue la connexion d'un utilisateur
   *
   * @param user - user
   * @returns Resolves with User
   */
  async login(user: any) {
    const userDB = await this.getByEmail(user.email);
    // tslint:disable-next-line:no-console
    console.log(userDB);
    if (userDB) {
      if (user.password === userDB.password) {
        return "trededededue";
      }
      return "faedededlse";
    }
    return "faedededlse";
  }

  /**
   * Retourne la liste des utilisateurs
   *
   * @param user - user id
   * @returns Resolves with User
   */
  // async userList(user: any): Promise<boolean> {
  //   const userDBAdmin = await this.getAdmin(email);
  //   if (userDBAdmin) {
  //     this.userRepository.findAll(attribute: ["id", "firstName", "lastName", "admin"]);
  //     return true;
  //   }
  //   return false;
  // }
}
