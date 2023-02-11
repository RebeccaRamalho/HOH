import { Entity, Column, BaseEntity, PrimaryColumn, Generated, JoinTable, ManyToMany, ManyToOne, CreateDateColumn, JoinColumn, UpdateDateColumn } from "typeorm";


import User  from "../User/entity";

@Entity()
export class Article extends BaseEntity {
  @JoinTable()
  @PrimaryColumn({ type: "uuid", unique: true })
  @Generated("uuid") id: string;

  @Column({
    type:'varchar',
    default: null,
    length: 45,
  })
  title: string;

  @Column("longtext")
  img: string;

  @Column({
  })
  resume_article: string;

  @Column({
    default: null,
    nullable: false,
    length: 255,
  })
  content_article: string;

  @Column({
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
