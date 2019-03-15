import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res
} from "@nestjs/common";
import { ApiResponse, ApiUseTags } from "@nestjs/swagger";
import { ArticleService } from "./article.service";

@ApiUseTags("Article")
@Controller("article")
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get("article/:author")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "OK"
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: "Pas OK"
  })
  async getArticle(@Param("author") author: string) {
    return this.articleService.getArticle(author);
  }

  @Get("articleId/:id")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "OK"
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: "Pas OK"
  })
  async getArticleById(@Param("id") id: string) {
    return this.articleService.getArticleById(id);
  }

  @Post(":id")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "OK"
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: "Pas OK"
  })
  async getById(@Param("id") id: string) {
    return this.articleService.getById(id);
  }
}
