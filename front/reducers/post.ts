export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'kelly',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src: 'https://img.etnews.com/photonews/1805/1071765_20180514163107_288_0001.jpg',
        },
        {
          src: 'https://www.apparelnews.co.kr/upfiles/manage/202208/74ead5681e57cd805a6b3ce81b821e23.jpg',
        },
        {
          src: 'https://usefulguide.net/wp-content/uploads/2022/08/img_theme5.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'nero',
          },
          content: '우와~',
        },
        {
          User: {
            nickname: 'hero',
          },
          content: '이야~',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

export type IPostReducerState = typeof initialState;

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: 'kelly',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
