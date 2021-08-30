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
  Role,
} from '../models';
import {User1Repository} from '../repositories';

export class User1RoleController {
  constructor(
    @repository(User1Repository)
    public user1Repository: User1Repository,
  ) { }

  @get('/user1s/{id}/role', {
    responses: {
      '200': {
        description: 'Role belonging to User1',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Role)},
          },
        },
      },
    },
  })
  async getRole(
    @param.path.number('id') id: typeof User1.prototype.Uid1,
  ): Promise<Role> {
    return this.user1Repository.role(id);
  }
}
