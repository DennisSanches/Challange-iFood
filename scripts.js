const ctxReceitas = document.getElementById('receitasChart').getContext('2d');
const receitasChart = new Chart(ctxReceitas, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [{
            label: 'Receitas',
            data: [500, 600, 700, 800, 900],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctxDespesas = document.getElementById('despesasChart').getContext('2d');
const despesasChart = new Chart(ctxDespesas, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [{
            label: 'Despesas',
            data: [400, 450, 600, 650, 700],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctxResumo = document.getElementById('resumoChart').getContext('2d');
const resumoChart = new Chart(ctxResumo, {
    type: 'pie',
    data: {
        labels: ['Receitas', 'Despesas'],
        datasets: [{
            label: 'Resumo',
            data: [3000, 2000],
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
