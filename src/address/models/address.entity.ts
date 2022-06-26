import { UserSingleEntity } from 'src/user/models/userSingle.entity';
import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from 'typeorm';

@Entity('address')
export class AddressEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  houseNumber: string;

  @Column({ default: '' })
  street: string;

  @Column({ default: '' })
  district: string;

  @Column({ default: '' })
  city: string;

  @Column({ default: '' })
  state: string;

  @Column({ default: '' })
  cep: string;

  @ManyToOne(() => UserSingleEntity, (user) => user.addresses)
  user: UserSingleEntity;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
