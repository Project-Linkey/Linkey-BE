import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne } from 'typeorm';
import { CommonPKEntity } from './common/common.entity';
import { UserEntity } from './user.entity';
import { InterestEntity } from './interest.entity';

@Entity('Club')
export class ClubEntity extends CommonPKEntity {
  @Column('varchar', { unique: false, nullable: false })
  name: string;

  @Column('varchar', { unique: false, nullable: true })
  introImg: string;

  @Column('varchar', { unique: false, nullable: true })
  introBio: string;

  @Column('int', { unique: false, nullable: false })
  limitedNum: number;

  @Column('int', { unique: false, nullable: false })
  userId: number;

  @Column('int', { unique: false, nullable: false })
  interestId: number;

  @ManyToOne(() => UserEntity, (user) => user.clubs)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: UserEntity;

  @OneToOne(() => InterestEntity, (interest) => interest.clubs)
  @JoinColumn({ name: 'interestId', referencedColumnName: 'id' })
  interest: InterestEntity;
}
