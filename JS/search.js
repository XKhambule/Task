document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.querySelector(".search-bar button");

    // Run search when button is clicked
    searchButton.addEventListener("click", searchSite);

    // Run search when ENTER is pressed
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            searchSite();
        }
    });

    function searchSite() {
        let input = searchInput.value.toLowerCase().trim();
        let items = document.querySelectorAll(".searchable");

        let found = false;

        // If search is empty → show everything again
        if (input === "") {
            items.forEach(item => {
                item.style.display = "block";
            });
            return;
        }

        // Search filter
        items.forEach(item => {
            let text = item.textContent.toLowerCase();

            if (text.includes(input)) {
                item.style.display = "block";
                found = true;
            } else {
                item.style.display = "none";
            }
        });

        // No results message
        if (!found) {
            alert("No results found for: " + input);
        }
    }

});