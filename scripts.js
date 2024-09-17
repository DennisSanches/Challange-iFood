// Exemplo de gráfico com Chart.js
const ctx = document.getElementById('financialChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
            label: 'Financial Overview',
            data: [5000, 7000, 8000, 10000],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    }
});
