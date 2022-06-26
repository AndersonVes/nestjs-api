import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { AddressEntity } from '../models/address.entity';
import { Address } from '../models/address.interface';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
  ) {}

  createAddress(address: Address): Observable<Address> {
    return from(this.addressRepository.save(address));
  }

  findAllAddresses(): Observable<Address[]> {
    return from(this.addressRepository.find());
  }

  updatePost(id: number, address: Address): Observable<UpdateResult> {
    return from(this.addressRepository.update(id, address));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.addressRepository.delete(id));
  }
}
