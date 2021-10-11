const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

const showCards = (list) => {
    for (let i = 0; i < list.length; i++) {

        let container = document.querySelector(".container");
        let card = document.createElement("div");
        card.classList.add("card1");
        let imageDiv = document.createElement("div");
        imageDiv.classList.add("imageDiv");
        let robotImage = document.createElement("img");
        robotImage.setAttribute("src", list[i]["image"]);
        let topText = document.createElement("div");
        topText.classList.add("topText");
        topText.innerHTML = list[i]["name"];
        let bottomText = document.createElement("div");
        bottomText.classList.add("bottomText");
        bottomText.innerHTML = list[i]["email"];
        imageDiv.appendChild(robotImage);
        card.appendChild(imageDiv);
        card.appendChild(topText);
        card.appendChild(bottomText);
        container.appendChild(card);
    }
}

const checkFilteredCards = () => {
    let container = document.querySelector(".container");
    container.innerHTML = "";
    let input = document.querySelector("input").value.toLowerCase();
    let robotArray = robots.filter(robot => robot["name"].toLowerCase().includes(input));
    showCards(robotArray);
}

let enter = document.querySelector(".text");
enter.addEventListener("keyup", function(event) {
    if (event.keycode === 13) {
        event.preventDefault();
    }
    checkFilteredCards();
});

checkFilteredCards();