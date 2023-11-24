
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
].map(file => 'sidur/vorur/${file}');

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