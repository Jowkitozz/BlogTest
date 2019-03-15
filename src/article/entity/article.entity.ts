import { User } from "src/user/entity/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class Article {
  @Column({ type: "varchar", name: "author", length: 200 })
  author: string;

  @Column({ type: "varchar", name: "content", length: 200 })
  content: string;

  @CreateDateColumn({ type: "date", name: "created" })
  created: Date;

  @Column({ type: "varchar", name: "dislikes", length: 200 })
  dislikes: number;

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", name: "likes", length: 200 })
  likes: number;

  @Column({ type: "varchar", name: "pseudoAuthor" })
  pseudoAuthor: User;

  @Column({ type: "varchar", name: "titre", length: 200 })
  titre: string;

  @CreateDateColumn({ type: "varchar", name: "updated", length: 200 })
  updated: Date;
}
