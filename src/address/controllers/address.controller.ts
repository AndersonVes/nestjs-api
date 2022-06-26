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
import { Address } from '../models/address.interface';
import { AddressService } from '../services/address.service';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Post()
  create(@Body() address: Address): Observable<Address> {
    return this.addressService.createAddress(address);
  }

  @Get()
  findAll(): Observable<Address[]> {
    return this.addressService.findAllAddresses();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() address: Address,
  ): Observable<UpdateResult> {
    return this.addressService.updatePost(id, address);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.addressService.deletePost(id);
  }
}
