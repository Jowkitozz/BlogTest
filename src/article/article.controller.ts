import { Body, Controller, Post, Res } from "@nestjs/common";
import { ArticleService } from "./article.service";

@Controller("article")
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post("/update")
  update(@Body() updateArticleDto, @Res() res) {
    // console.log("API: update Article....");
    res.jsonp({ success: true });
  }
}
