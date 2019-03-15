import { Component } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm/repository/Repository";
import { Article } from "./entity/article.entity";

@Component()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>
  ) {}

  /**
   * Affiche tout les articles
   *
   * @param id - user id
   * @returns Resolves with User
   */
  async getArticle(author: string) {
    this.articleRepository.findOne({ where: { Auteur: author } });
    return this.articleRepository.find();
  }

  /**
   * Affiche tout les articles
   *
   * @param id - user id
   * @returns Resolves with User
   */
  async getArticleById(id: string) {
    return this.articleRepository.findOne({ where: { id } });
  }

  /**
   * Returns a user identified by its id
   *
   * @param id - user id
   * @returns Resolves with User
   */
  async getById(id: string) {
    return this.articleRepository.findOne(id);
  }
}
