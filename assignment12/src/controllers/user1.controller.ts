import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {User1} from '../models';
import {User1Repository} from '../repositories';

export class User1Controller {
  constructor(
    @repository(User1Repository)
    public user1Repository : User1Repository,
  ) {}

  @post('/user1s')
  @response(200, {
    description: 'User1 model instance',
    content: {'application/json': {schema: getModelSchemaRef(User1)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User1, {
            title: 'NewUser1',
            
          }),
        },
      },
    })
    user1: User1,
  ): Promise<User1> {
    return this.user1Repository.create(user1);
  }

  @get('/user1s/count')
  @response(200, {
    description: 'User1 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(User1) where?: Where<User1>,
  ): Promise<Count> {
    return this.user1Repository.count(where);
  }

  @get('/user1s')
  @response(200, {
    description: 'Array of User1 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(User1, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(User1) filter?: Filter<User1>,
  ): Promise<User1[]> {
    return this.user1Repository.find(filter);
  }

  @patch('/user1s')
  @response(200, {
    description: 'User1 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User1, {partial: true}),
        },
      },
    })
    user1: User1,
    @param.where(User1) where?: Where<User1>,
  ): Promise<Count> {
    return this.user1Repository.updateAll(user1, where);
  }

  @get('/user1s/{id}')
  @response(200, {
    description: 'User1 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(User1, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(User1, {exclude: 'where'}) filter?: FilterExcludingWhere<User1>
  ): Promise<User1> {
    return this.user1Repository.findById(id, filter);
  }

  @patch('/user1s/{id}')
  @response(204, {
    description: 'User1 PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User1, {partial: true}),
        },
      },
    })
    user1: User1,
  ): Promise<void> {
    await this.user1Repository.updateById(id, user1);
  }

  @put('/user1s/{id}')
  @response(204, {
    description: 'User1 PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() user1: User1,
  ): Promise<void> {
    await this.user1Repository.replaceById(id, user1);
  }

  @del('/user1s/{id}')
  @response(204, {
    description: 'User1 DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.user1Repository.deleteById(id);
  }
}
