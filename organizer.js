let persons = [
  { itsMe: true, admin: false, name: "Ravel" },
  { itsMe: true, admin: true, name: "Jorge" },
  { itsMe: true, admin: false, name: "Neia" },
  { itsMe: false, admin: true, name: "Miguel" },
  { itsMe: true, admin: false, name: "Eliza" },
];

const lista = (list) => {
  list.sort((a, b) => {
    if (a.itsMe === true && b.itsMe === false) {
      return -1;
    }
  });
  console.log(list); // Mostrar lista ordenada por itsMe

  list.sort((a, b) => {
    if (a.admin === true && b.admin === false) {
      return -1;
    }
  });
  console.log(list); // Mostrar lista ordenada por admin
};

lista(persons);
