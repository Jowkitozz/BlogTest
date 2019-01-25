import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CommentaireRepository } from "./commentaire.repository";

@Injectable()
export class CommentaireService {
  constructor(
    @Inject(CommentaireRepository)
    private readonly commentaireRepository: CommentaireRepository
  ) {}

  /**
   * Returns a commentaire by its id
   *
   * @param id - commentaireId
   * @returns Resolves with User
   */
  async getById(commentaireId: string) {
    return this.commentaireRepository.findOne(commentaireId);
  }
}
