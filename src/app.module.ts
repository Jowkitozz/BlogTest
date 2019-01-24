import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CommentaireController } from "./commentaire/commentaire.controller";
import { CommentaireModule } from "./commentaire/commentaire.module";
import { CommentaireService } from "./commentaire/commentaire.service";
import { UserModule } from "./user/user.module";

@Module({
  imports: [UserModule, CommentaireModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
