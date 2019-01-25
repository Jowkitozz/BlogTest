import { Controller, Get, HttpStatus, Param } from "@nestjs/common";
import { ApiResponse, ApiUseTags } from "@nestjs/swagger";
import { CommentaireService } from "./commentaire.service";

@ApiUseTags("Commentaire")
@Controller("commentaire")
export class CommentaireController {
  constructor(private readonly commentaireService: CommentaireService) {}

  @Get(":commentaireId")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Commentaire trouvé et retourné"
  })
  async getById(@Param("commentaireId") commentaireId: string) {
    return this.commentaireService.getById(commentaireId);
  }
}
