//Load category
const loadCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url)
    const categories = await res.json();
    displayCategories(categories.data.news_category);
}
const displayCategories = (categories) => {
    const categoryLists = document.getElementById('category-list');
    categories.forEach(category => {
        const listItem = document.createElement('li');
        listItem.classList.add('nav-item');
        listItem.innerHTML = `
        <a class="nav-link text-secondary fw-bold" href="#">${category.category_name}</a>
        `
        categoryLists.appendChild(listItem);
        // console.log(category.category_name)


    });
}
loadCategory();