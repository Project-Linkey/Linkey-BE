import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class CommonPKEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date | null;

  // typeorm의 soft delete
  // 삭제여부를 알 수 있는 컬럼에 삭제를 표현하는 방법(실제 DB에는 삭제하지 않음)
  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date | null;
}
