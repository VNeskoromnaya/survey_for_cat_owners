/*
2. Помните наше практическое задание с опросником для владельцев котиков? Он нам снова пригодится! Напишите класс `Cat` со свойствами, соответствующими полям вашего опросника (например, кличка, корм и пр.), и по нажатию на кнопку "Ок" создайте экземпляр этого класса, заполнив его свойства ответами из опросника. В этом классе будут только свойства и конструктор, без методов. Выведите результат (заполненный объект класса `Cat`) в консоль при помощи console.log.
*/
const catName = document.querySelector("#catName");
const catAge = document.querySelector("#catAge");
const breed = document.querySelector("#breed");
const customBreed = document.querySelector("#breedOther");
const foodType = document.getElementsByName("food");
const animalSexValue = document.querySelectorAll('input[name="animalSex"]');
const comment = document.querySelector("#comment");
const btnSubmit = document.querySelector("#btnSubmit");

class Cat {
  constructor(catName, catAge, breed, customBreed, food, animalSex, comment) {
    this.catName = catName;
    this.catAge = catAge;
    this.breed = breed;
    this.breedOther = customBreed;
    this.food = food;
    this.animalSex = animalSex;
    this.comment = comment;
  }
}

btnSubmit.addEventListener("click", () => {
  let foodArr = [];
  for (let i = 0; i < foodType.length; i++) {
    let input = foodType[i];
    if (input.checked) {
      foodArr.push(input.value);
    }
  }

  let animalSex;
  for (let s of animalSexValue) {
    if (s.checked) {
      animalSex = s.value;
    }
  }

  let cat = new Cat(
    catName.value,
    catAge.value,
    breed.value,
    breedOther.value,
    foodArr,
    animalSex,
    comment.value
  );

  console.log(cat);
});
