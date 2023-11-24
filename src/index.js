
window.onload = function() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var category = urlParams.get('category');

    console.log("Category selected: " + category);

    
    document.getElementById('searchForm').onsubmit = function() {
        
        var searchQuery = document.getElementById('searchInput').value;
        console.log("Search Query: " + searchQuery);


        return false; 
    };
};

function filterItems(query) {
    var items = document.getElementsByClassName('item');
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var category = item.getAttribute('data-category');
        if (category.toLowerCase().includes(query)) {
            item.style.display = ''; 
        } else {
            item.style.display = 'none'; 
        }
    }
}
const files = [
    "hattur.html", "hlaupavesti.html", "hufa.html", "jakki.html",
    "ledurjakki.html", "naerbuxur.html", "nike.html", "peysa.html",
    "skirta.html", "skor.html", "sokkar.html", "ull.html"
].map(file => '/sidur/vorur/${file}');

document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchQuery = e.target.value.toLowerCase();
    const filteredFiles = files.filter(file => file.toLowerCase().includes(searchQuery));

    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    filteredFiles.forEach(file => {
        const link = document.createElement('a');
        link.href = file;
        link.textContent = file;
        link.style.display = 'block';

        resultsContainer.appendChild(link);
    });
});
document.getElementById('searchInput').addEventListener('input', function(e) {
    var searchQuery = e.target.value.toLowerCase(); 
    searchWebsite(searchQuery); 
});

var websiteContent = [
    { title: "index", content: "heimasíða", url: "index.html" },
    { title: "category", content: "Leita", url: "/sidur/category.html" },
    { title: "hattur", content: "Hattur", url: "/sidur/vorur/hattur.html" },
    { title: "Hlaupavesti", content: "Hlaupavesti", url: "/sidur/vorur/halupavesti.html" },
    { title: "Hufa", content: "hufa", url: "/sidur/vorur/hufa.html" },
    { title: "Jakki", content: "jakki", url: "/sidur/vorur/jakki.html" },
    { title: "Leðurjakki", content: "ledurjakki", url: "/sidur/vorur/ledurjakki.html" },
    { title: "Nærbuxur", content: "naerbuxur", url: "/sidur/vorur/naerbuxur.html" },
    { title: "Nike galli", content: "nike galli", url: "/sidur/vorur/nike.html" },
    { title: "Peysa", content: "peysa", url: "/sidur/vorur/peysa.html" },
    { title: "Skirta", content: "skirta", url: "/sidur/vorur/skirta.html" },
    { title: "Skór", content: "skor", url: "/sidur/vorur/skor.html" },
    { title: "Sokkar", content: "sokkar", url: "/sidur/vorur/sokkar.html" },
    { title: "Ullarpeysa", content: "ullarpeysa", url: "/sidur/vorur/ull.html" },

   
];

function searchWebsite(query) {
    var results = [];
    if (query.length > 0) {
        results = websiteContent.filter(function(page) {
            return page.content.toLowerCase().includes(query) || page.title.toLowerCase().includes(query);
        });
    }
    displayResults(results);
}
function displayResults(results) {
    var resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; 

    results.forEach(function(page) {
        var resultItem = document.createElement('div');
        resultItem.innerHTML = `<a href="${page.url}">${page.title}</a>`;
        resultsContainer.appendChild(resultItem);
    });
}