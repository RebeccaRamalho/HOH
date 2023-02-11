import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Generated,
  JoinTable,
  PrimaryColumn,
} from "typeorm";
import  User  from "../User/entity";

@Entity("testimony")
export class Testimony extends BaseEntity{
    @JoinTable()
    @PrimaryColumn({ type: "uuid", unique: true })
    @Generated("uuid") id: string;  
    
    @Column({
        type:'varchar',
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
    //Not null

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
