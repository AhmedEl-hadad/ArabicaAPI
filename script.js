// Dataset data
const datasets = [
    {
        directory: 'data/ecommerce',
        files: 13,
        records: 960,
        summary: '12 category files × 40 items + all-products.json (480-item aggregate).'
    },
    {
        directory: 'data/users',
        files: 1,
        records: 100,
        summary: 'User profiles with avatars, roles, addresses, and join dates.'
    },
    {
        directory: 'data/companies',
        files: 1,
        records: 50,
        summary: 'Regional companies with industries, headcounts, and social links.'
    },
    {
        directory: 'data/cars',
        files: 1,
        records: 30,
        summary: 'Dealership-ready inventory with specs and photos.'
    },
    {
        directory: 'data/orders',
        files: 2,
        records: 45,
        summary: 'Orders plus line items for checkout/cart flows.'
    },
    {
        directory: 'data/reviews',
        files: 3,
        records: 45,
        summary: 'Product, company, and user review feeds.'
    },
    {
        directory: 'data/real-estate',
        files: 3,
        records: 95,
        summary: 'Properties, agents, and location metadata.'
    },
    {
        directory: 'data/jobs',
        files: 3,
        records: 80,
        summary: 'Job listings, hiring companies, and job categories.'
    },
    {
        directory: 'data/education',
        files: 3,
        records: 70,
        summary: 'Schools, teachers, and courses.'
    },
    {
        directory: 'data/events',
        files: 2,
        records: 45,
        summary: 'Events linked to venues.'
    },
    {
        directory: 'data/recipes',
        files: 2,
        records: 80,
        summary: 'Recipes plus ingredient catalogues.'
    },
    {
        directory: 'data/misc',
        files: 2,
        records: 60,
        summary: 'FAQs and quick tips for filler sections.'
    }
];

// Populate dataset table
function populateDatasetTable() {
    const tbody = document.getElementById('dataset-table-body');
    if (!tbody) return;

    datasets.forEach(dataset => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><code>${dataset.directory}</code></td>
            <td>${dataset.files}</td>
            <td>${dataset.records}</td>
            <td>${dataset.summary}</td>
        `;
        tbody.appendChild(row);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    populateDatasetTable();
});

