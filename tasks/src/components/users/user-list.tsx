import { useAppSelector } from '../../hooks';
import User from './user';

const UserList = () => {
  const users = useAppSelector((state) => state.users.entities);

  return (
    <section className="user-list">
      {users && users.map((user) => <User key={user.id} user={user} />)}
    </section>
  );
};

export default UserList;
