import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Customer,
  User1,
} from '../models';
import {CustomerRepository} from '../repositories';

export class CustomerUser1Controller {
  constructor(
    @repository(CustomerRepository) protected customerRepository: CustomerRepository,
  ) { }

  @get('/customers/{id}/user1s', {
    responses: {
      '200': {
        description: 'Array of Customer has many User1',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User1)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<User1>,
  ): Promise<User1[]> {
    return this.customerRepository.user1s(id).find(filter);
  }

  @post('/customers/{id}/user1s', {
    responses: {
      '200': {
        description: 'Customer model instance',
        content: {'application/json': {schema: getModelSchemaRef(User1)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Customer.prototype.cid,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User1, {
            title: 'NewUser1InCustomer',
            exclude: ['Uid1'],
            optional: ['customerId']
          }),
        },
      },
    }) user1: Omit<User1, 'Uid1'>,
  ): Promise<User1> {
    return this.customerRepository.user1s(id).create(user1);
  }

  @patch('/customers/{id}/user1s', {
    responses: {
      '200': {
        description: 'Customer.User1 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User1, {partial: true}),
        },
      },
    })
    user1: Partial<User1>,
    @param.query.object('where', getWhereSchemaFor(User1)) where?: Where<User1>,
  ): Promise<Count> {
    return this.customerRepository.user1s(id).patch(user1, where);
  }

  @del('/customers/{id}/user1s', {
    responses: {
      '200': {
        description: 'Customer.User1 DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(User1)) where?: Where<User1>,
  ): Promise<Count> {
    return this.customerRepository.user1s(id).delete(where);
  }
}
