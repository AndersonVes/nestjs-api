import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { UserSingleEntity } from '../models/userSingle.entity';
import { UserSingle } from '../models/userSingle.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserSingleEntity)
    private readonly userSingleRepository: Repository<UserSingleEntity>,
  ) {}

  createUserSingle(userSingle: UserSingle): Observable<UserSingle> {
    return from(this.userSingleRepository.save(userSingle));
  }

  findAllUsers(): Observable<UserSingle[]> {
    return from(this.userSingleRepository.find());
  }

  updatePost(id: number, userSingle: UserSingle): Observable<UpdateResult> {
    return from(this.userSingleRepository.update(id, userSingle));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.userSingleRepository.delete(id));
  }
}
