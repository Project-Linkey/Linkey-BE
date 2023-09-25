import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { CommonPKEntity } from './common/common.entity';
import { ClubEntity } from './club.entity';

@Entity('Interest')
export class InterestEntity extends CommonPKEntity {
  @Column('varchar', { unique: false, nullable: true, default: 0 })
  art: boolean;

  @Column('varchar', { unique: false, nullable: true, default: 0 })
  activity: boolean;

  @Column('varchar', { unique: false, nullable: true, default: 0 })
  foodAndDrink: boolean;

  @Column('varchar', { unique: false, nullable: true, default: 0 })
  hobby: boolean;

  @Column('varchar', { unique: false, nullable: true, default: 0 })
  party: boolean;

  @Column('varchar', { unique: false, nullable: true, default: 0 })
  travel: boolean;

  @Column('varchar', { unique: false, nullable: true, default: 0 })
  improvement: boolean;

  @Column('varchar', { unique: false, nullable: true, default: 0 })
  investment: boolean;

  @OneToMany(() => ClubEntity, (club) => club.interest)
  clubs: ClubEntity;
}
