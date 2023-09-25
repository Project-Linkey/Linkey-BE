import { Column, CreateDateColumn, Entity, OneToMany } from 'typeorm';
import { CommonPKEntity } from './common/common.entity';
import { ClubEntity } from './club.entity';

@Entity('User')
export class UserEntity extends CommonPKEntity {
  @Column('varchar', { unique: true, nullable: false })
  email: string;

  @Column('varchar', { unique: false, nullable: false })
  password: string;

  @Column('varchar', { unique: false, nullable: true })
  profileImg: string;

  @Column('varchar', { unique: false, nullable: true })
  profileBio: string;

  @Column('varchar', { unique: false, nullable: false })
  gender: string;

  @Column('varchar', { unique: false, nullable: false })
  phone: string;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  dateOfBirth: Date;

  @OneToMany(() => ClubEntity, (club) => club.user)
  clubs: ClubEntity[];
}
