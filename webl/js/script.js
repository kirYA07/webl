fetch('https://example.com/nonexistent-page')
    .then(response => {
        if (!response.ok) {
            throw new Error('Page not found');
        }
        return response.json();
    })
    .catch(error => console.error('Помилка:', error));
