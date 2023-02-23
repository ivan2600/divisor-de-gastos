users = [
  { name: 'Ivan', saldo: [], total: 0 },
  { name: 'Toto', saldo: [], total: 0 },
  { name: 'Lalo', saldo: [], total: 0 },
  { name: 'Pitu', saldo: [], total: 0 },
  { name: 'Maca', saldo: [], total: 0 },
]

function distribuirGasto(usuario, number0) {
  let porcentaje = number0 / users.length;
  for (let i = 0; i < users.length; i++) {
    if (usuario == i) {
      users[i].saldo.push(porcentaje * (users.length -1));
    } else {
      users[i].saldo.push(porcentaje - (porcentaje * 2));
    }
  }
  console.log(porcentaje);
  console.log(users);
}

distribuirGasto(0, 100);