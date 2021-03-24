import $ from 'jquery';
import TabsManager from './tabs.js';
import UserApi from './api/user-api.js';

$(function () {
  $('#carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.carousel-wrapper__prev'),
    nextArrow: $('.carousel-wrapper__next'),
  });

  new TabsManager(document.querySelector('.tabs'));

  function searching() {
    const searchField = document.getElementById('search-filed');
    const usersWrapEl = document.querySelector('.users');

    searchField.addEventListener('keyup', async function() {
      const searchValue = this.value;

      if (searchValue.length > 0) {
        try {
          const result = await search(searchValue);
          
          if (Array.isArray(result)) {
            result.forEach(user => {
              const userEl = createUserEl(user, 'users__item');
              usersWrapEl.append(userEl);
            });
          }
        } catch (error) {
          console.error(error);
        }
      }
    });

    function createUserEl({ name }, className = '') {
      const userEl = document.createElement('div');
      userEl.textContent = name;
      userEl.classList.add(className);
      return userEl;
    }

    async function search(userName) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${userName}`, {
        method: 'POST',
        body: JSON.stringify({
          id: 1,
          name: 'sdasd'
        })
      });

      return response.json();
    }
  }

  searching();
});

// Блокирующий код
/* function task(message) {
  let n = 10000000000;
  while (n > 0){
      n--;
  }
  console.log(message);
}

setTimeout(() => console.log('Set timeout'), 1000);
task('Long task');
*/

/*
console.log('Request data...');

function getUser(callback) {
  setTimeout(() => {
    const user = {
      id: 1,
      name: 'User'
    };

    callback(user);
  }, 3000);
}

function getUserPosts(userId, callback) {
  if (!userId) {
    throw new Error('Id пользователья не указано');
  }

  setTimeout(() => {
    const data = [
      {
        id: 1,
        name: 'Post 1'
      },
      {
        id: 2,
        name: 'Post 2'
      }
    ];

    callback(data);
  }, 3000);
}

getUser(({ id }) => {
  getUserPosts(id, posts => {
    console.log(id, posts);
  });
});
*/
// getUser()
//   .then(user => {
//     getUserPosts(user.id)
//       .then(posts => console.log(posts));
//   });

/*
let loading = true;

getUser()
  .then(user => getUserPosts())
  .catch(error => {
    console.error(error);
    return getUserPosts(232);
  })
  .then(posts => console.log(posts))
  .finally(() => loading = false);
*/

(async () => {

  let loading = true;

  try {
    const user = await UserApi.getUser();
    const userTasks = await UserApi.getUserPosts(user.id);

    console.log(user, userTasks);
  } catch (error) {
    console.error(error);
  } finally {
    loading = false;
  }

  // const user1Req = getUser();
  // const user2Req = getUser();

  // const [user, user2] = await Promise.all([user1Req, user2Req]);
  // console.log(user, user2);

})();