import profileReducer, {
  addPost,
  addPostMessage,
  setUserProfile,
  setUserStatus,
} from "../profile-reducer";

describe("profileReducer test", () => {
  let state = {
    postData: [
      {
        id: 1,
        message: "Hi there, how are you ?",
        likeCounter: 40,
        dislikeCounter: 20,
      },
      {
        id: 2,
        message: "It`s my first post",
        likeCounter: 30,
        dislikeCounter: 10,
      },
    ],
    newPostText: "",
    profile: null,
    userStatus: "",
  };

  it("ADD-POST action succeeded", () => {
    let action = addPost();

    let newState = profileReducer(state, action);

    expect(newState.postData).toStrictEqual([
      {
        id: 1,
        message: "Hi there, how are you ?",
        likeCounter: 40,
        dislikeCounter: 20,
      },
      {
        id: 2,
        message: "It`s my first post",
        likeCounter: 30,
        dislikeCounter: 10,
      },
      {
        id: 5,
        message: "",
        likeCounter: 0,
        dislikeCounter: 0,
      },
    ]);
  });

  it("ADD-POST-MESSAGE action succeeded", () => {
    let action = addPostMessage("test succeeded");

    let newState = profileReducer(state, action);

    expect(newState.newPostText).toBe("test succeeded");
  });

  it("SET-USER-PROFILE action succeeded", () => {
    let action = setUserProfile({
      userId: "",
      lookingForAJob: "",
      lookingForAJobDescription: "",
      fullName: "",
      contacts: "",
      github: "",
      vk: "",
      facebook: "",
      instagram: "",
      twitter: "",
      website: "",
      youtube: "",
      mainLink: "",
      photos: {
        small: "",

        large: "",
      },
    });

    let newState = profileReducer(state, action);

    expect(newState.profile).toStrictEqual({
      userId: "",
      lookingForAJob: "",
      lookingForAJobDescription: "",
      fullName: "",
      contacts: "",
      github: "",
      vk: "",
      facebook: "",
      instagram: "",
      twitter: "",
      website: "",
      youtube: "",
      mainLink: "",
      photos: {
        small: "",

        large: "",
      },
    });
  });

  it("SET-USER-STATUS action succeeded", () => {
    let action = setUserStatus("test succeeded");

    let newState = profileReducer(state, action);

    expect(newState.userStatus).toBe("test succeeded");
  });
});
