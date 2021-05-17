const UserInfo = ({ name, login, avatar_url, location, public_repos }) => {
  return (
    <div>
      <h4>
        {name} (@{login})
      </h4>
      <img src={avatar_url} alt={login} height='100' />
      <dl>
        <dt>Location</dt>
        <dd>{location}</dd>
        <dt>Repositories</dt>
        <dd>{public_repos}</dd>
      </dl>
    </div>
  );
};

export default UserInfo;
