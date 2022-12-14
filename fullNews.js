//Load Full news
const loadDetails = async (newsID) => {
    const url = `https://openapi.programming-hero.com/api/news/${newsID}`;
    const res = await fetch(url)
        .catch(error => console.log(error));
    const details = await res.json();
    displayDetails(details.data[0]);
}
const displayDetails = (news) => {
    const { image_url, title, details, author, total_view } = news;
    const modalbody = document.getElementById('modal-body');
    modalbody.innerHTML = '';
    const newsContainer = document.createElement('div');
    newsContainer.innerHTML = `
        <div class="card mb-5 border-0 p-3">
            <div class="row g-0">
                <div class="col-12">
                    <img src="${isAvailable(image_url)}" class="img-fluid rounded h-100" alt="...">
                </div>
                <div class="col-12">
                    <div class="card-body border-0">
                        <h3 class="card-title">${isAvailable(title)}</h3>
                        <p class="card-text">${isAvailable(details)}</p>
                        <div class="row">
                            <div class="col-8 d-flex align-items-center">
                                <img src="${isAvailable(author.img)}" alt="" class="img-fluid rounded-circle"
                                    height="50" width="50">
                                <div class="ms-2">
                                    <h6>${isAvailable(author.name)}</h6>
                                    <p class="mb-0">${isAvailable(author.published_date)}</p>
                                </div>
                            </div>
                            <div class="col-4 d-flex align-items-center justify-content-center">
                                <img src="images/carbon_view.png" alt="" height="20">
                                <p class="ms-3 mb-0 fw-bold">${isAvailable(total_view)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    modalbody.appendChild(newsContainer);
}