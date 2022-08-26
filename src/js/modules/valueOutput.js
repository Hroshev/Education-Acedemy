const cardsProduct = [
  {
    categories: "Math",
    imgBackground: "img/courses/courses__1.png",
    course: "Ipsum dolor sit amet consectetur",
    lecturer: "Donat Twerski",
    imgLecture: "img/courses/user/DonatTwerski.png",
    price: 24,
  },
  {
    categories: "Physics",
    imgBackground: "img/courses/courses__2.png",
    course: "Sed do eiusmod tempor",
    lecturer: "Ohta Kin",
    imgLecture: "img/courses/user/OhtaKin.png",
    price: 24,
  },
  {
    categories: "Chemistry",
    imgBackground: "img/courses/courses__3.png",
    course: "Labore et dolore magna",
    lecturer: "Alicia Puma",
    imgLecture: "img/courses/user/AliciaPuma.png",
    price: 15,
  },
  {
    categories: "Informatics",
    imgBackground: "img/courses/courses__4.png",
    course: "Commodo consequat",
    lecturer: "Francisco Maia",
    imgLecture: "img/courses/user/FranciscoMaia.png",
    price: 7,
  },
  {
    categories: "Math",
    imgBackground: "img/courses/courses__5.png",
    course: "Ullamco laboris nisi ut aliquip",
    lecturer: "Yolanda Barrueco",
    imgLecture: "img/courses/user/YolandaBarrueco.png",
    price: 30,
  },
  {
    categories: "Chemistry",
    imgBackground: "img/courses/courses__6.png",
    course: "Quis nostrud exercitation",
    lecturer: "Edward Lindgren",
    imgLecture: "img/courses/user/EdwardLindgren.png",
    price: 22,
  },
  {
    categories: "Math",
    imgBackground: "img/courses/courses__7.png",
    course: "Enim ad minim veniam",
    lecturer: "Joslin Rodgers",
    imgLecture: "img/courses/user/JoslinRodgers.png",
    price: 18,
  },
];

const makeElement = function (tagName, className, text) {
  const element = document.createElement(tagName);

  text ? (element.textContent = text) : "";
  className ? element.classList.add(className) : "";

  return element;
};

function backgroundColorcategories(categories){
  if(categories == "Math"){
    return "#E3F0FF"
  }
  else if(categories == "Physics"){
    return "#FFF2DE"
  }
  else if(categories == "Chemistry"){
    return "#ECFFD7"
  }
  else if(categories == "Informatics"){
    return "#FFE2E5"
  }
}

const createCard = function (product) {

  const coursesBox = makeElement("div", "courses__box");
  coursesBox.style.backgroundImage = `url(${product.imgBackground})`;

  const coursesBoxCourses = makeElement("div", "courses__box-courses");
  coursesBoxCourses.style.backgroundColor = backgroundColorcategories(product.categories);
  coursesBox.appendChild(coursesBoxCourses);

  const categories = makeElement("h4", "", product.categories);
  coursesBoxCourses.appendChild(categories);

  const coursesBoxContent = makeElement("div", "courses__box-content");
  coursesBox.appendChild(coursesBoxContent);

  const course = makeElement("h5", "", product.course);
  console.log(product[0])
  coursesBoxContent.appendChild(course);

  const coursesBoxContentWrapp = makeElement("div", "courses__box-content-wrapp");
  coursesBoxContent.appendChild(coursesBoxContentWrapp);

  const coursesBoxContentLecturer = makeElement("div", "courses__box-content-lecturer");
  coursesBoxContentWrapp.appendChild(coursesBoxContentLecturer);

  const imgLecture = makeElement("img");
  imgLecture.src = product.imgLecture;
  coursesBoxContentLecturer.appendChild(imgLecture);

  const lecturer = makeElement("p", "", product.lecturer);
  coursesBoxContentLecturer.appendChild(lecturer);

  const coursesBoxContentPrice = makeElement("div", "courses__box-content-price");
  coursesBoxContentWrapp.appendChild(coursesBoxContentPrice);

  const price = makeElement("p", "", "$" + product.price);
  coursesBoxContentPrice.appendChild(price);

  const button = makeElement("a", "btn", "Start Now");
  button.href = "#";
  coursesBoxContentPrice.appendChild(button);

  return coursesBox;
};

//Перебор массива
const cardList = document.querySelector(".courses__wrapp");

for (let i = 0; i < cardsProduct.length; i++) {
  const cardItem = createCard(cardsProduct[i]);
  cardList.appendChild(cardItem);
}