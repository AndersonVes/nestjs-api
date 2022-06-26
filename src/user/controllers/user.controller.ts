import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UserSingle } from '../models/userSingle.interface';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() userSingle: UserSingle): Observable<UserSingle> {
    return this.userService.createUserSingle(userSingle);
  }

  @Get()
  findAll(): Observable<UserSingle[]> {
    return this.userService.findAllUsers();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() userSingle: UserSingle,
  ): Observable<UpdateResult> {
    return this.userService.updatePost(id, userSingle);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.userService.deletePost(id);
  }
}
