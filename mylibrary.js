document.addEventListener('DOMContentLoaded', () => {
    const libraryContent = document.getElementById('libraryContent');

    function loadLibrary() {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (favorites.length === 0) {
            libraryContent.innerHTML = '<p>Nothing here, go favorite something!</p>';
        } else {
            libraryContent.innerHTML = ''; // Clear any existing content
            favorites.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('music-item');
                div.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <button class="remove-btn">Remove</button>
                `;
                libraryContent.appendChild(div);

                // Add event listener for the remove button
                div.querySelector('.remove-btn').addEventListener('click', () => {
                    removeFromFavorites(item.title);
                });
            });
        }
    }

    function removeFromFavorites(title) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites = favorites.filter(fav => fav.title !== title);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`${title} has been removed from your library!`);
        loadLibrary();
    }

    loadLibrary();
});
