export default function User({ user }) {
    const {
      avatar_url,
      followers,
      following,
      public_repos,
      name,
      login,
      created_at
    } = user;
  
    const createdDate = new Date(created_at);
  
    return (
      <div className="user">
        <img src={avatar_url} className="image" alt="User" />
        <div>
          <a className="link-name" href={`https://github.com/${login}`}>{name || login}</a>
          <p>
            {name} joined GitHub Community on{" "}
            {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
              month: "short",
            })} ${createdDate.getFullYear()}`}
          </p>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Public Repos</th>
                    <th>Folowers</th>
                    <th>Following</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{public_repos}</td>
                    <td>{followers}</td>
                    <td>{following}</td>
                </tr>
            </tbody>
        </table>
      </div>
    );
  }