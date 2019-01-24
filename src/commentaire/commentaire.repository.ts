import { EntityRepository, Repository } from "typeorm";
import { commentaire } from "./entity/commentaire.entity";

@EntityRepository(commentaire)
export class CommentaireRepository extends Repository<commentaire> {}
