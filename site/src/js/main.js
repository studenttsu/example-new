import $ from 'jquery';
import TabsManager from './tabs.js';

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

    function createUserEl({name}, className = '') {
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
