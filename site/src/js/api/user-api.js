import { wait } from '../utils.js';

const mockUser = {
  id: 1,
  name: 'User'
};

const mockData = [
  {
    id: 1,
    name: 'Post 1'
  },
  {
    id: 2,
    name: 'Post 2'
  }
];

class UserApi {
  getUser() {
    return new Promise(async resolve => {
      await wait();
      resolve(mockUser);
    });
  }

  getUserPosts(userId) {
    return new Promise(async (resolve, reject) => {
      if (!userId) {
        reject(new Error('Id пользователья не указано'));
      }

      await wait();
      resolve(mockData);
    });
  }
}

const userApi = new UserApi();
export default userApi;
