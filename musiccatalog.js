document.addEventListener('DOMContentLoaded', () => { 
    const searchBar = document.getElementById('searchBar');
    const searchResults = document.getElementById('searchResults');
    const favoriteButtons = document.querySelectorAll('.favorite-btn');

    // Updated data for search results to include all pieces
    const musicItems = [
        { title: 'Suzuki Violin School, Vol. 1', image: '71tVxfknODL._AC_UF1000,1000_QL80_.jpg', key: 'suzuki_violin_1' },
        { title: 'Suzuki Violin School, Vol. 2', image: 'shopping.webp', key: 'suzuki_violin_2' },
        { title: 'Suzuki Violin School, Vol. 3', image: 'suzuki-suzuki-violin-school-volume-3-violin-part-i.webp', key: 'suzuki_violin_3' },
        { title: 'Suzuki Violin School, Vol. 4', image: 'shopping (1).webp', key: 'suzuki_violin_4' },
        { title: 'Suzuki Violin School, Vol. 5', image: 'shopping (2).webp', key: 'suzuki_violin_5' },
        { title: 'Suzuki Viola School, Vol. 1', image: '00-40685_large.jpg', key: 'suzuki_viola_1' },
        { title: 'Suzuki Viola School, Vol. 2', image: 'shopping (3).webp', key: 'suzuki_viola_2' },
        { title: 'Suzuki Viola School, Vol. 3', image: 'shopping (4).webp', key: 'suzuki_viola_3' },
        { title: 'Suzuki Viola School, Vol. 4', image: 'shopping (6).webp', key: 'suzuki_viola_4' },
        { title: 'Suzuki Viola School, Vol. 5', image: 'shopping (7).webp', key: 'suzuki_viola_5' },
        { title: 'Suzuki Cello School, Vol. 1', image: 'cello1.jpg', key: 'suzuki_cello_1' },
        { title: 'Suzuki Cello School, Vol. 2', image: 'cello2.jpg', key: 'suzuki_cello_2' },
        { title: 'Suzuki Cello School, Vol. 3', image: 'cello3.jpg', key: 'suzuki_cello_3' },
        { title: 'Suzuki Cello School, Vol. 4', image: 'cello4.jpg', key: 'suzuki_cello_4' },
        { title: 'Suzuki Cello School, Vol. 5', image: 'cello5.jpg', key: 'suzuki_cello_5' },
        { title: 'Suzuki Bass School, Vol. 1', image: 'bass1.jpg', key: 'suzuki_bass_1' },
        { title: 'Suzuki Bass School, Vol. 2', image: 'bass2.jpg', key: 'suzuki_bass_2' },
        { title: 'Suzuki Bass School, Vol. 3', image: 'bass3.jpg', key: 'suzuki_bass_3' },
        { title: 'Suzuki Bass School, Vol. 4', image: 'bass4.jpg', key: 'suzuki_bass_4' },
        { title: 'Suzuki Bass School, Vol. 5', image: 'bass5.jpg', key: 'suzuki_bass_5' }
    ];

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        searchResults.innerHTML = '';

        musicItems.forEach(item => {
            if (item.title.toLowerCase().includes(query)) {
                const div = document.createElement('div');
                div.classList.add('music-item');
                div.dataset.title = item.title;
                div.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <button class="favorite-btn">Favorite</button>
                    <button class="view-btn">View</button>
                `;
                searchResults.appendChild(div);

                // Add event listener for the favorite button
                div.querySelector('.favorite-btn').addEventListener('click', () => {
                    addToFavorites(item);
                });

                // Add event listener for the view button
                div.querySelector('.view-btn').addEventListener('click', () => {
                    window.location.href = `viewer.html?piece=${item.key}`;
                });
            }
        });
    });

    favoriteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const item = event.target.closest('.music-item');
            const title = item.dataset.title;
            const imageSrc = item.querySelector('img').src;
            addToFavorites({ title, image: imageSrc });
        });
    });

    function addToFavorites(item) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!favorites.some(fav => fav.title === item.title)) {
            favorites.push(item);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            alert(`${item.title} has been added to your library!`);
        } else {
            alert(`${item.title} is already in your library!`);
        }
    }
});

