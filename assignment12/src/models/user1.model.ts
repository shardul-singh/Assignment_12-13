import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Customer} from './customer.model';
import {Role} from './role.model';

@model()
export class User1 extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Uid1?: number;

  @property({
    type: 'string',
    required: true,
  })
  firstname: string;

  @property({
    type: 'string',
    required: true,
  })
  lastname: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'number',
    required: true,
  })
  phone: number;

  @belongsTo(() => Customer)
  customerId: number;

  @belongsTo(() => Role)
  roleId: number;

  constructor(data?: Partial<User1>) {
    super(data);
  }
}

export interface User1Relations {
  // describe navigational properties here
}

export type User1WithRelations = User1 & User1Relations;
