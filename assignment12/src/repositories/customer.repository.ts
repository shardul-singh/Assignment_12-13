import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {PostgresSqlDataSource} from '../datasources';
import {Customer, CustomerRelations, User1} from '../models';
import {User1Repository} from './user1.repository';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.cid,
  CustomerRelations
> {

  public readonly user1: HasOneRepositoryFactory<User1, typeof Customer.prototype.cid>;

  public readonly user1s: HasManyRepositoryFactory<User1, typeof Customer.prototype.cid>;

  constructor(
    @inject('datasources.PostgresSql') dataSource: PostgresSqlDataSource, @repository.getter('User1Repository') protected user1RepositoryGetter: Getter<User1Repository>,
  ) {
    super(Customer, dataSource);
    this.user1s = this.createHasManyRepositoryFactoryFor('user1s', user1RepositoryGetter,);
    this.registerInclusionResolver('user1s', this.user1s.inclusionResolver);
    this.user1 = this.createHasOneRepositoryFactoryFor('user1', user1RepositoryGetter);
    this.registerInclusionResolver('user1', this.user1.inclusionResolver);
  }
}
