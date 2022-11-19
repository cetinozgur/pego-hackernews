import { Entity, Column } from "typeorm";
import Model from "./model.entity";

@Entity()
export class User extends Model {
  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
