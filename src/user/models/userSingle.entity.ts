import { AddressEntity } from 'src/address/models/address.entity';
import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';

@Entity('user_single')
export class UserSingleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: '', unique: true })
  email: string;

  @Column({ default: '' })
  password: string;

  @Column({ default: '', unique: true })
  cpf: string;

  @Column({ default: '' })
  picPath: string;

  @OneToMany(() => AddressEntity, (address) => address.user)
  addresses: AddressEntity[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
