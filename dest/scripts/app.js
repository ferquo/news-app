(async function () {
    const url = 'https://newsapi.org/v2/top-headlines?' +
         'country=ro&' +
        'apiKey=98c77b1144744d2a964e22b99c53181c';
    const req = new Request(url);
    const news = await fetch(req).then((response) => { return response.json() });

    const articlesSection = document.getElementById("news-container");

    for (const article of news.articles) {
        let articleNode = document.createElement('article');
        console.log(article);
        if (article.urlToImage) {
            let imageWrapper = document.createElement('div');
            let imageNode = document.createElement('img');
            imageNode.setAttribute("src", article.urlToImage);
            imageWrapper.appendChild(imageNode);
            articleNode.appendChild(imageWrapper);
        }
        let contentWrapper = document.createElement("a");
        contentWrapper.setAttribute("href", article.url);
        contentWrapper.setAttribute("target", "_blank");

        let titleNode = document.createElement("h2");
        titleNode.appendChild(document.createTextNode(article.title));
        contentWrapper.appendChild(titleNode);

        if (article.description) {
            let descriptionNode = document.createElement("p");
            descriptionNode.appendChild(document.createTextNode(article.description));
            contentWrapper.appendChild(descriptionNode);
        }

        let sourceNode = document.createElement("span");
        sourceNode.appendChild(document.createTextNode("Sursă: "));
        let sourceName = document.createElement("b");
        sourceName.appendChild(document.createTextNode(article.source.name));
        sourceNode.appendChild(sourceName);
        contentWrapper.appendChild(sourceNode);

        articleNode.appendChild(contentWrapper);
        articlesSection.appendChild(articleNode);
    }
})();
