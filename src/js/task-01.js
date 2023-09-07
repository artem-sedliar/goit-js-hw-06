const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Количество категорий: ${categoryItems.length}`);

categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector('h2');

  const categoryItemsCount = categoryItem.querySelectorAll('ul > li');

  console.log(`${categoryTitle.textContent}: ${categoryItemsCount.length} элементов`);
});
