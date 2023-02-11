import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

import { Article } from "../Article/entity";
import { Testimony } from "../Testimony/entity";

@Entity("User")
export  default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  admin_id: number;

  @Column({
 default: null,
    nullable: true,
    length: 45,
    unique: true,
  })
  user_name: string;

  @Column({
    default: null,
    nullable: false,
    length: 45,
    unique: true,
  })
  email: string;

  @Column({
    default: null,
    nullable: false,
    length: 250,
  })
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Article, (article) => article.author)
  articles: Article[];

  @OneToMany(() => Testimony, (testimony) => testimony.author)
  testimonies: Testimony[];
}
