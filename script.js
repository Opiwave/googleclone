document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const luckyBtn = document.getElementById('luckyBtn');

    function searchGoogle() {
        const query = input.value.trim();
        if (query) {
            const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.location.href = url;
        }
    }

    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchGoogle();
        }
    });

    searchBtn.addEventListener('click', searchGoogle);
    luckyBtn.addEventListener('click', searchGoogle); // Comportamiento idéntico por simplicidad
});