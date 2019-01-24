import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity()
export class commentaire {
  @Column({ type: "varchar", name: "authorId", length: 100 })
  authorId: string;

  @PrimaryColumn({ type: "varchar", name: "commentaireId", length: 200 })
  commentaireId: string;

  @Column({ type: "varchar", name: "content", length: 100 })
  content: string;

  @CreateDateColumn()
  created: Date;
}
