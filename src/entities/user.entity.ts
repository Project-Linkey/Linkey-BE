import { Column, Entity, OneToMany } from 'typeorm';
import { CommonBigPKEntity } from './common/common.entity';

@Entity('User')
export class UserEntity extends CommonBigPKEntity {
  @Column('varchar', { unique: true, nullable: false })
  email: string;

  @Column('varchar', { unique: true, nullable: false })
  password: string;
}
