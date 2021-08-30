import {Entity, hasOne, model, property, hasMany} from '@loopback/repository';
import {User1} from './user1.model';

@model()
export class Customer extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  cid?: number;

  @property({
    type: 'string',
    required: true,
  })
  customer_name: string;

  @property({
    type: 'string',
    required: true,
  })
  customer_website: string;

  @property({
    type: 'string',
    required: true,
  })
  customer_address: string;

  @hasOne(() => User1)
  user1: User1;

  @hasMany(() => User1)
  user1s: User1[];

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;
