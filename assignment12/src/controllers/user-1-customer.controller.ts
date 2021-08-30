import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  User1,
  Customer,
} from '../models';
import {User1Repository} from '../repositories';

export class User1CustomerController {
  constructor(
    @repository(User1Repository)
    public user1Repository: User1Repository,
  ) { }

  @get('/user1s/{id}/customer', {
    responses: {
      '200': {
        description: 'Customer belonging to User1',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Customer)},
          },
        },
      },
    },
  })
  async getCustomer(
    @param.path.number('id') id: typeof User1.prototype.Uid1,
  ): Promise<Customer> {
    return this.user1Repository.customer(id);
  }
}
