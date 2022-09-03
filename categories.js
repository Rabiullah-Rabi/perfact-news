//Load category
const loadCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url)
    const categories = await res.json();
    displayCategories(categories.data.news_category);
}
//display news category
const displayCategories = (categories) => {
    const categoryLists = document.getElementById('category-list');
    categories.forEach(category => {
        const listItem = document.createElement('li');
        listItem.classList.add('nav-item');
        listItem.innerHTML = `
        <a class="nav-link text-center fw-bold " href="#" onclick="loadNews('${category.category_id}')">${category.category_name}</a>
        `
        categoryLists.appendChild(listItem);
    });
}
loadCategory();