const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 4,
        fullName: "Ilya",
        location: { city: "Moscow", country: "Russia" },
        status: "привет",
        isFollowed: false,
        photoUrl: "https://slovnet.ru/wp-content/uploads/2018/12/2-18.jpg",
      },
      {
        id: 5,
        fullName: "Amir",
        location: { city: "Masdar", country: "Emirates" },
        status: "مرحبا",
        isFollowed: false,
        photoUrl:
          "https://i.pinimg.com/originals/5c/4b/4c/5c4b4c5ae28db1a0ba8535f5c3315a97.jpg",
      },
      {
        id: 6,
        fullName: "John",
        location: { city: "New-York", country: "USA" },
        status: "hi there",
        isFollowed: false,
        photoUrl: "https://fight.ru/wp-content/uploads/2020/03/dzhona-sina.jpg",
      },
    ]);
  }

  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img src={user.photoUrl} width="100" height="100" />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.city}</div>
              <div>{user.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
