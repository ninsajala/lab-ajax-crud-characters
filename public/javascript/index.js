const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document
    .getElementById('fetch-all')
    .addEventListener('click', function (event) {
      charactersAPI.getFullList();
    });

  document
    .getElementById('fetch-one')
    .addEventListener('click', function (event) {
      let id = document.getElementById(`character-id-input`).value;
      charactersAPI.getOneRegister(id);
    });

  document
    .getElementById('delete-one')
    .addEventListener('click', function (event) {
      let id = document.getElementById(`character-id-delete-input`).value;
      charactersAPI.deleteOneRegister(id);
    });

  document
    .getElementById('edit-character-form')
    .addEventListener('submit', function (event) {
      const id = document.getElementById('update-id-input').value;
      const name = document.getElementById('update-name-input').value;
      const occupation = document.getElementById('update-occupation-input')
        .value;
      const weapon = document.getElementById('update-weapon-input').value;
      const cartoon = document.getElementById('update-cartoon-input').value;

      const updateCharacterInfo = {
        name,
        occupation,
        weapon,
        cartoon,
      };

      charactersAPI.updateOneRegister(id, updateCharacterInfo);
    });

  document
    .getElementById('new-character-form')
    .addEventListener('submit', function (event) {
      const name = document.getElementById('new-name-input').value;
      const occupation = document.getElementById('new-occupation-input').value;
      const weapon = document.getElementById('new-weapon-input').value;
      const cartoon = document.getElementById('new-cartoon-input').value;

      const newCharacterInfo = {
        name,
        occupation,
        weapon,
        cartoon,
      };

      charactersAPI.createOneRegister(newCharacterInfo);
    });
});
