import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from "typeorm";
import { User } from "../User/entity";

@Entity("articletest")
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn()
  article_id: number;

  @Column({
    default: null,
    nullable: false,
    length: 45,
  })
  title: string;

  @Column({
    nullable: false,
    length: 45,
  })
  img: string;

  // @Column({
  //   default: null,
  //   nullable: false,
  //   length: 25,
  // })
  // tags: string;

  @Column({
    default: null,
    nullable: false,
    length: 85,
  })
  resume_article: string;

  @Column({
    default: null,
    nullable: false,
    length: 500,
  })
  content_article: string;

  @Column({
    default: null,
    nullable: false,
    length: 45,
  })
  author_article: string;

  @Column({
    default: null,
    nullable: true,
    length: 45,
  })
  video: string;

  @ManyToOne(() => User, (user) => user.articles)
  @JoinColumn({
    name: "admin_id",
  })
  author: User;
  //Not null

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
