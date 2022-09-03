//Load news
const loadNews = async (catID) => {
    isLoading(true);
    const url = `https://openapi.programming-hero.com/api/news/category/${catID}`;
    const res = await fetch(url)
    const newses = await res.json();
    displaynewses(newses.data);
}
//display news news
const displaynewses = (newses) => {
    const newsContainer = document.getElementById('all-news');
    newsContainer.innerHTML = '';
    //Count news with category
    const message = document.getElementById('message');
    const totalNews = newses.length;
    if (totalNews > 0) {
        message.innerText = `${totalNews} items found`;
    }
    else {
        message.innerText = `No Item found`;
        const notFound = document.createElement('div')
        notFound.innerHTML = `<img src="images/product-not-found.jpg" class="img-fluid rounded h-100" alt="...">`
        newsContainer.appendChild(notFound)
    }
    newses.forEach(news => {
        const newsitem = document.createElement('div');
        newsitem.innerHTML = `
        <div class="card mb-5 border-0 shadow rounded p-3" onclick="loadDetails('${news._id}')" data-bs-toggle="modal" data-bs-target="#fullNews">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${news.image_url}" class="img-fluid rounded h-100" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body border-0">
                        <h3 class="card-title">${news.title}</h3>
                        <p class="card-text">${news.details.slice(0 - 200)}...</p>
                        <div class="row">
                            <div class="col-4 d-flex align-items-center">
                                <img src="${news.author.img}" alt="" class="img-fluid rounded-circle" height="50" width="50">
                                <div class="ms-2">
                                    <h6>${news.author.name}</h6>
                                    <p class="mb-0">${news.author.published_date}</p>
                                </div>
                            </div>
                            <div class="col-2 d-flex align-items-center justify-content-center">
                                <img src="images/carbon_view.png" alt="" height="20">
                                <p class="ms-3 mb-0 fw-bold">${news.total_view}</p>
                            </div>
                            <div class="col-3 d-flex align-items-center justify-content-center">
                                <img src="images/Group 116134.png" alt="" class="img-fluid">
                            </div>
                            <div class="col-3 d-flex align-items-center justify-content-end">
                                <img src="images/bi_arrow-right-short.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        newsContainer.appendChild(newsitem);
    });
    isLoading(false);
}

// Loading Spinner
const isLoading = (loading) => {
    const spinnerContainer = document.getElementById('spinner');
    if (loading) {
        spinnerContainer.classList.remove('d-none');
    }
    else {
        spinnerContainer.classList.add('d-none');
    }
}
loadNews('08');