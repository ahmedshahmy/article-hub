// Shared JavaScript functionality

// Helper function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Helper function to get month-year string
function getMonthYear(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });
}

// Helper function to sort articles by date
function sortArticlesByDate(articles) {
    return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Helper function to group articles by month
function groupArticlesByMonth(articles) {
    const grouped = {};
    
    articles.forEach(article => {
        const monthYear = getMonthYear(article.date);
        if (!grouped[monthYear]) {
            grouped[monthYear] = [];
        }
        grouped[monthYear].push(article);
    });
    
    // Sort months in reverse chronological order
    const sortedMonths = Object.keys(grouped).sort((a, b) => {
        const dateA = new Date(a);
        const dateB = new Date(b);
        return dateB - dateA;
    });
    
    const sortedGrouped = {};
    sortedMonths.forEach(month => {
        sortedGrouped[month] = grouped[month];
    });
    
    return sortedGrouped;
}