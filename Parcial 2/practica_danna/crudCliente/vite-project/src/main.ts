
import './style.css';

(async () => {
  const response = await fetch('http://localhost:3000/api/cliente');
  const data = await response.json();

  let divTable = `<table>`;
  divTable += `<tr><th>CI</th><th>idrol</th><th>nombre</th><th>apellido</th><th>telefono</th><th>correo</th><th>contrasena</th></tr>`;
  data.forEach((cliente: ICliente) => {
    divTable += `<tr><td>${cliente.CI}</td><td>${cliente.idrol}</td><td>${cliente.nombre}</td><td>${cliente.apellido}</td><td>${cliente.telefono}</td><td>${cliente.correo}</td><td>${cliente.contrasena}</td><td><button class="btn btn-delete">Eliminar</button></td><td><button class="btn btn-update">Actualizar</button></td></tr>`;
  });
  divTable += `</table>`;

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = divTable;

  const divButton = `<button class="btn btn-primary" >Agregar</button>`;
  document.querySelector<HTMLDivElement>('#app')!.innerHTML += divButton;

  const btnAgregar = document.querySelector<HTMLButtonElement>('.btn-primary');
  btnAgregar?.addEventListener('click', () => {
    const divForm = `<form>
    <div class="mb-3">
      <label for="CI" class="form-label">CI</label>
      <input type="text" class="form-control" id="CI">
    </div>
    <div class="mb-3">
      <label for="idrol" class="form-label">idrol</label>
      <input type="text" class="form-control" id="idrol">
    </div>
    <div class="mb-3">
      <label for="nombre" class="form-label">nombre</label>
      <input type="text" class="form-control" id="nombre">
    </div>
    <div class="mb-3">
      <label for="apellido" class="form-label">apellido</label>
      <input type="text" class="form-control" id="apellido">
    </div>
    <div class="mb-3">
      <label for="telefono" class="form-label">telefono</label>
      <input type="text" class="form-control" id="telefono">
    </div>
    <div class="mb-3">
      <label for="correo" class="form-label">correo</label>
      <input type="text" class="form-control" id="correo">
    </div>
    <div class="mb-3">
      <label for="contrasena" class="form-label">contrasena</label>
      <input type="text" class="form-control" id="contrasena">
    </div>
    <button type='button' class="btn btn-save">Guardars</button>
    <button type='submit' class="btn btn-cancel">Cancelar</button>
    </form>`;
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;
    const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
    btnSave?.addEventListener('click', async (e) => {
      e.preventDefault();
      const CI = Number(document.querySelector<HTMLInputElement>('#CI')!.value);
      const idrol = Number(document.querySelector<HTMLInputElement>('#idrol')!.value);
      const nombre = document.querySelector<HTMLInputElement>('#nombre')!.value;
      const apellido = document.querySelector<HTMLInputElement>('#apellido')!.value;
      const telefono = document.querySelector<HTMLInputElement>('#telefono')!.value;
      const correo = document.querySelector<HTMLInputElement>('#correo')!.value;
      const contrasena = document.querySelector<HTMLInputElement>('#contrasena')!.value;
      const response = await fetch('http://localhost:3000/api/cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ CI, idrol, nombre, apellido, telefono, correo, contrasena })
      });
      const data = await response.json();
      console.log(data);
      location.reload();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.btn-delete').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
      console.log(id);
      await fetch(`http://localhost:3000/api/cliente/${id}`, {
        method: 'DELETE'
      });
      location.reload();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.btn-update').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
      const response = await fetch(`http://localhost:3000/api/cliente/${id}`);
      const data = await response.json();
      // agregar botón para cancelar
      const btnCancel = `<button class="btn btn-cancel">Cancelar</button>`;
      const divForm = `<form>
      <div class="mb-3">
        <label for="CI" class="form-label">CI</label>
        <input type="text" class="form-control" id="CI" value="${data.CI}">
      </div>
      <div class="mb-3">
        <label for="idrol" class="form-label">idrol</label>
        <input type="text" class="form-control" id="idrol" value="${data.idrol}">
      </div>
      <div class="mb-3">
        <label for="nombre" class="form-label">nombre</label>
        <input type="text" class="form-control" id="nombre" value="${data.nombre}">
      </div>
      <div class="mb-3">
        <label for="apellido" class="form-label">apellido</label>
        <input type="text" class="form-control" id="apellido" value="${data.apellido}">
      </div>
      <div class="mb-3">
        <label for="telefono" class="form-label">telefono</label>
        <input type="text" class="form-control" id="telefono" value="${data.telefono}">
      </div>
      <div class="mb-3">
        <label for="correo" class="form-label">correo</label>
        <input type="text" class="form-control" id="correo" value="${data.correo}">
      </div>
      <div class="mb-3">
        <label for="contrasena" class="form-label">contrasena</label>
        <input type="text" class="form-control" id="contrasena" value="${data.contrasena}">
      </div>
      <button type='submit' class="btn btn-save">Guardar</button>
      ${btnCancel}
      </form>`;
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;
      const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
      btnSave?.addEventListener('click', async (e) => {
        alert("Guard")
        e.preventDefault();
        const CI = Number(document.querySelector<HTMLInputElement>('#CI')!.value);
        const idrol = Number(document.querySelector<HTMLInputElement>('#idrol')!.value);
        const nombre = document.querySelector<HTMLInputElement>('#nombre')!.value;
        const apellido = document.querySelector<HTMLInputElement>('#apellido')!.value;
        const telefono = document.querySelector<HTMLInputElement>('#telefono')!.value;
        const correo = document.querySelector<HTMLInputElement>('#correo')!.value;
        const contrasena = document.querySelector<HTMLInputElement>('#contrasena')!.value;
        const response = await fetch(`http://localhost:3000/api/cliente/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ CI, idrol, nombre, apellido, telefono, correo, contrasena })
        });
        const data = await response.json();
        console.log(data);
        alert(data);
        // reload page
        location.reload();
      });
    });
  });
})();
