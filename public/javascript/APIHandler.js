class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then((response) => {
        let allChars = response.data;

        const charContainer = document.querySelector(`.characters-container`);
        charContainer.innerHTML = ``;

        for (let i = 0; i < allChars.length; i++) {
          const oneChar = document.createElement(`div`);
          oneChar.classList.add('character-info');

          oneChar.innerHTML = `<div class="name">Name:${allChars[i].name}</div>
          <div class="occupation">Occupation:${allChars[i].occupation}</div>
          <div class="cartoon">Is a ${allChars[i].cartoon} cartoon</div>
          <div class="weapon">Weapon: ${allChars[i].weapon}</div>`;

          charContainer.appendChild(oneChar);
        }
      })
      .catch((err) => console.log(err));
  }

  getOneRegister(id) {
    axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then((response) => {
        const oneCharacter = response.data;

        const charContainer = document.querySelector(`.characters-container`);
        charContainer.innerHTML = ``;

        const oneChar = document.createElement(`div`);
        oneChar.classList.add('character-info');

        oneChar.innerHTML = `<div class="name">Name:${oneCharacter.name}</div>
          <div class="occupation">Occupation:${oneCharacter.occupation}</div>
          <div class="cartoon">Is a ${oneCharacter.cartoon} cartoon</div>
          <div class="weapon">Weapon: ${oneCharacter.weapon}</div>`;

        charContainer.appendChild(oneChar);
      })
      .catch((err) => console.log(err));
  }

  createOneRegister(newCharInfo) {
    axios
      .post(`${this.BASE_URL}/characters`, newCharInfo)
      .then(() => {
        this.getFullList();
        document.getElementById('new-character-form').reset();
      })
      .catch((err) => console.log(err));
  }

  updateOneRegister(id, updateCharInfo) {
    axios
      .put(`${this.BASE_URL}/characters/${id}`, updateCharInfo)
      .then(() => {
        document.getElementById('edit-character-form').reset();
        this.getFullList();
      })
      .catch((err) => console.log(err));
  }

  deleteOneRegister(id) {
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(() => {
        this.getFullList();
      })
      .catch((err) => console.log(err));
  }
}
