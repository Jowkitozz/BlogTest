import { Module } from "@nestjs/common";
import { ArticleController } from "./article.controller";
import { ArticleService } from "./article.service";

@Module({
  components: [ArticleService],
  controllers: [ArticleController]
})
export class ArticleModule {}
