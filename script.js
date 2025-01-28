// Fetch data from the API
async function fetchData() {
    const apiUrl = 'https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.records && data.records.length > 0) {
            displayTable(data.records);
            displayChart(data.records);
        } else {
            document.getElementById('data-container').innerHTML = '<p>No data available.</p>';
        }
    } catch (error) {
        document.getElementById('data-container').innerHTML = '<p>Error loading data. Please try again later.</p>';
        console.error('Error fetching data:', error);
    }
}

// Display data in a table
function displayTable(records) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table headers
    thead.innerHTML = `
        <tr>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
            <th>Station</th>
            <th>Last Update</th>
            <th>Pollutant ID</th>
            <th>Min Value</th>
            <th>Max Value</th>
            <th>Avg Value</th>
        </tr>
    `;

    // Create table rows
    records.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.country || 'N/A'}</td>
            <td>${record.state || 'N/A'}</td>
            <td>${record.city || 'N/A'}</td>
            <td>${record.station || 'N/A'}</td>
            <td>${record.last_update || 'N/A'}</td>
            <td>${record.pollutant_id || 'N/A'}</td>
            <td>${record.min_value || 'N/A'}</td>
            <td>${record.max_value || 'N/A'}</td>
            <td>${record.avg_value || 'N/A'}</td>
        `;
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    const container = document.getElementById('data-container');
    container.innerHTML = '';
    container.appendChild(table);
}

// Display data in a chart
function displayChart(records) {
    const labels = records.map(record => record.station || 'Unknown');
    const avgValues = records.map(record => parseFloat(record.avg_value) || 0);

    const ctx = document.getElementById('pollutantChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Average Pollutant Value',
                data: avgValues,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Stations'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Average Value'
                    }
                }
            }
        }
    });
}

// Initialize
fetchData();
