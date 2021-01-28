function graduate(credential) {
  return function (fullName) {
    return `${credential} ${fullName}`;
  };
}

const medicalSchool = graduate('M.D.');

const lawSchool = graduate('Esq.');

console.log(medicalSchool('Lucca Rizzi'));
console.log(lawSchool('Lucca Rizzi'));
