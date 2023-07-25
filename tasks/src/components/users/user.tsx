interface Props {
  user: User;
}

const User: React.FC<Props> = ({ user }) => {
  return <div className="user">{user.realName}</div>;
};

export default User;
