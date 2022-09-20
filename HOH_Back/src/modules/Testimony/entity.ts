import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "../User/entity";

@Entity("testimonytest")
export class Testimony extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;     
    
    @Column({
        default: null,
        nullable: false,
        length: 45,
    })
    last_name: string;

    @Column({
        default: null,
        nullable: false,
        length: 45,
    })
    first_name: string;

    @Column({
        default: null,
        nullable: false,
        length: 400,
    })
    opinion: string;

    @Column({
        default: null,
        nullable: false,
        length: 20,
    })
    role: string;

    @ManyToOne(() => User, (user) => user.testimonies)
    @JoinColumn({
      name: "admin_id",
    })
    author: User;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
