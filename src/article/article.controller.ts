import { Body, Controller, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { ArticleService } from "./article.service";

@Controller("article")
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post(":delete")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Supprimé"
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: "Pas supprimé"
  })
  async getById(@Param("id") id: string) {
    return this.articleService.getById(id);
  }
}
