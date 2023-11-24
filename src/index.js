
window.onload = function() {
    var queryString = window.location.search;

    var urlParams = new URLSearchParams(queryString);

    var category = urlParams.get('category');

   console.log("Category selected: " + category);
};
