const cardsEvents = [
  {
    categories: "Math",
    imgBackground: "img/events/events__img1.png",
    title: "Occaecat Cupidatat",
    date: "5 April, 2020 | 3:00pm - 7:00pm",
  },
  {
    categories: "Physics",
    imgBackground: "img/events/events__img2.png",
    title: "Non Proident",
    date: "10 April, 2020 | 1:00pm - 5:00pm",
  },
  {
    categories: "Informatics",
    imgBackground: "img/events/events__img3.png",
    title: "Sunt in Culpa",
    date: "17 April, 2020 | 4:00pm - 11:00pm",
  },
];

const makeElement = function (tagName, className, text) {
  const element = document.createElement(tagName);

  text ? (element.textContent = text) : "";
  className ? element.classList.add(className) : "";

  return element;
};

function backgroundColorcategories(categories) {
  if (categories == "Math") {
    return "#E3F0FF";
  } else if (categories == "Physics") {
    return "#FFF2DE";
  } else if (categories == "Chemistry") {
    return "#ECFFD7";
  } else if (categories == "Informatics") {
    return "#FFE2E5";
  }
}

const createEventsCard = function (product) {
  const eventsBox = makeElement("div", "events__box");

  const eventsBoxWrapp = makeElement("div", "events__box__wrapp");
  eventsBox.appendChild(eventsBoxWrapp);

  const eventsBoxImage = makeElement("div", "events__box__image");
  eventsBoxImage.style.backgroundImage = `url(${product.imgBackground})`;
  eventsBoxWrapp.appendChild(eventsBoxImage);

  const eventsBoxCategories = makeElement("div", "events__box__сategories");
  eventsBoxCategories.style.backgroundColor = backgroundColorcategories(product.categories);
  eventsBoxImage.appendChild(eventsBoxCategories);

  const eventsCategories = makeElement("h4", "", product.categories);
  eventsBoxCategories.appendChild(eventsCategories);

  const eventsBoxContent = makeElement("div", "events__box__content");
  eventsBoxWrapp.appendChild(eventsBoxContent);

  const eventsBoxContentName = makeElement("div", "events__box__content__name");
  eventsBoxContent.appendChild(eventsBoxContentName);

  const eventsBoxContentTitle = makeElement("h3", "", product.title);
  eventsBoxContentName.appendChild(eventsBoxContentTitle);

  const eventsBoxContentDate = makeElement("h5", "", product.date);
  eventsBoxContentName.appendChild(eventsBoxContentDate);

  const eventsButton = makeElement("button", "btn", "Entoll");
  eventsBoxContent.appendChild(eventsButton);

  return eventsBox;
};

/* Stretch the array */
const cardEventsList = document.querySelector(".events__wrapp");

for (let i = 0; i < cardsEvents.length; i++) {
  const cardItem = createEventsCard(cardsEvents[i]);
  cardEventsList.appendChild(cardItem);
}
