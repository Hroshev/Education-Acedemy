const cardsBlog = [
  {
    imgBackground: "img/blog/blog__image1.png",
    title: "Changes it into something better",
    subTitle: "Develops in us a perspective of looking at life. It helps us build opinions and have points of view on things in life.",
    date: "20 Mar, 2022",
  },
  {
    imgBackground: "img/blog/blog__image2.png",
    title: "Develops in us a perspective of looking at life",
    date: "15 Mar, 2022",
  },
  {
    imgBackground: "img/blog/blog__image3.png",
    title: "Build opinions and have points of view",
    date: "12 Mar, 2022",
  },
  ];
  

  /* Function create element */
  const makeElement = function (tagName, className, text) {
    const element = document.createElement(tagName);
  
    text ? (element.textContent = text) : "";
    className ? element.classList.add(className) : "";
  
    return element;
  };
  

  const createBlog = function (product) {
  
    const blogBox = makeElement("div", "blog__box");
    blogBox.style.backgroundImage = `url(${product.imgBackground})`;

    const blogBoxContent = makeElement("div", "blog__box__content");
    blogBox.appendChild(blogBoxContent);

    const blogBoxTitle = makeElement("div", "blog__box__title");
    blogBoxContent.appendChild(blogBoxTitle);

    const title = makeElement("h4", "", product.title);
    blogBoxTitle.appendChild(title);

    const subTitle = makeElement("p", "", product.subTitle);
    blogBoxTitle.appendChild(subTitle);

    const blogBoxDate = makeElement("div", "blog__box__date");
    blogBoxContent.appendChild(blogBoxDate);

    const date = makeElement("h5", "", product.date);
    blogBoxDate.appendChild(date);
  
    return blogBox;
  };
  
/* Output array elements */
const cardListBlog  = document.querySelector(".blog__wrapp");
let currentIndex = 0;
let currentLimit = 3; //How many items to display
for (currentIndex; currentIndex <= currentLimit - 1 && currentIndex < cardsBlog.length; currentIndex++) {
  const cardItemBlog = createBlog(cardsBlog[currentIndex]);
  cardListBlog.appendChild(cardItemBlog);
}

  /* Function show the item when clicked */
function ShowElement() {
  currentLimit += currentIndex;
  for (currentIndex; currentIndex <= currentLimit && currentIndex < cardsBlog.length; currentIndex++) {
    const cardItemBlog = createBlog(cardsBlog[currentIndex]);
    cardListBlog.appendChild(cardItemBlog);
};
}

/* Button */
const button = document.querySelector('.blog__button__bottom')
button.onclick = () => {
  ShowElement()
}
  
  /* Style first box */
  const firstBox = document.querySelector(".blog__box")
  firstBox.classList.add("blog__first__box")
  
  const blogContent = document.querySelector(".blog__box__content")
  blogContent.classList.add("blog__first__box__content")
  
  const blogTitle = document.querySelector(".blog__box__title")
  blogTitle.classList.add("blog__first__box__title")
  
  const blogDate = document.querySelector(".blog__box__date")
  blogDate.classList.add("blog__first__box__date")