document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pieceName = urlParams.get('piece');
    const pieceTitleElement = document.getElementById('piece-title');
    const pdfViewerElement = document.getElementById('pdf-viewer');

    // Dummy data for music pieces with valid PDF paths
    const musicPieces = {
        'suzuki_violin_1': {
            title: 'Suzuki Violin School, Vol. 1',
            pdfUrl: 'pdfcoffee.com-suzuki-violin-method-vol-01pdf.pdf' // Replace with actual URL or path to PDF file
        },
        'suzuki_viola_1': {
            title: 'Suzuki Viola School, Vol. 1',
            pdfUrl: 'pdfcoffee.com-suzuki-viola-school-vol-1-revised-editionpdf.pdf' // Replace with actual URL or path to PDF file
    
        }
        // Add more pieces as needed
    };

    if (pieceName && musicPieces[pieceName]) {
        const piece = musicPieces[pieceName];
        pieceTitleElement.textContent = piece.title;

        // Load the PDF in an iframe
        const pdfIframe = document.createElement('iframe');
        pdfIframe.src = piece.pdfUrl;
        pdfIframe.width = '100%';
        pdfIframe.height = '600px';
        pdfIframe.style.border = 'none';

        // Clear any loading text and append the iframe
        pdfViewerElement.innerHTML = '';
        pdfViewerElement.appendChild(pdfIframe);
    } else {
        pieceTitleElement.textContent = 'Piece Not Found';
        pdfViewerElement.innerHTML = '<p>The selected piece could not be loaded. Please try again.</p>';
    }
});
