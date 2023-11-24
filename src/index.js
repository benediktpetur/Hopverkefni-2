
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
