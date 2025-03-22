// На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей.
//   Вывести на экран: имя, e-mail, телефон и название компании пользователя.
//   Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах.
//   Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий.
//   Для реализации трех запросов воспользоваться Promise.all().
//   (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId).
//       Пример:
//       1.  name: Leanne Graham
//           email: Sincere@april.biz
//           phone: 1-770-736-8031 x56442
//           company: Romaguera-Crona
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)
//       __________________________________

//       2.  name: Ervin Howell
//           email: Shanna@melissa.tv
//           phone: 010-692-6593 x09125
//           company: Deckow-Crist
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)


async function getUserInfo() {
    try {
      const [users, albums, photos] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
          data.json()
        ),
        fetch("https://jsonplaceholder.typicode.com/albums").then((data) =>
          data.json()
        ),
        fetch("https://jsonplaceholder.typicode.com/photos").then((data) =>
          data.json()
        ),
      ]);
      users.forEach((user, index) => {
        let resultString = ``;
  
        const usersAlbums = albums.filter((album) => user.id === album.userId);
        resultString += `${index +1}.\tname: ${user.name}\n\temail: ${user.email}\n\tphone: ${user.phone}\n\tcompany: ${user.company.name}\n\talbums:\n`;
  
        const userAlbumsInfo = usersAlbums.map((album) => {
          const countPhoto = photos.filter(
            (photo) => photo.albumId === album.id
          ).length;
          return `${album.title} (${countPhoto} photos)`;
        });
  
        userAlbumsInfo.forEach(
          (albumInfo) => (resultString += `\t  ${albumInfo}\n`)
        );
        console.log(resultString);
      });
    } catch(err) {
      console.error(err);
    }
  }
  
  getUserInfo();
  