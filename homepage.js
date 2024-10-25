document.getElementById('logoutButton').addEventListener('click', function() {
    window.location.href = 'index.html';
});
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const searchResults = document.getElementById('searchResults');
    const instrumentButtons = document.querySelectorAll('.instruments button');

    let selectedInstrument = null;

    instrumentButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            selectedInstrument = event.target.getAttribute('data-instrument');
            alert(`Selected instrument: ${selectedInstrument}`);
        });
    });

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        searchResults.innerHTML = '';

        // Dummy data for search results
        const musicItems = [
            { title: 'Suzuki Violin School, Vol. 1', image: 'images/suzuki_violin_1.jpg' },
            { title: 'Suzuki Viola School, Vol. 1', image: 'images/suzuki_viola_1.jpg' },
            { title: 'Double Bass Scales', image: 'images/double_bass_scales.jpg' },
            { title: 'Cello Basics', image: 'images/cello_basics.jpg' },
            { title: 'Harp Methods', image: 'images/harp_methods.jpg' }
            // Add more items as needed
        ];

        musicItems.forEach(item => {
            if (item.title.toLowerCase().includes(query)) {
                const div = document.createElement('div');
                div.classList.add('music-item');
                div.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <h3>${item.title}</h3>
                `;
                searchResults.appendChild(div);
            }
        });
    });
});

