function openModal() {
  const modal = new bootstrap.Modal(document.getElementById('userModal'));
  modal.show();
}

function closeModal() {
  const modalEl = document.getElementById('userModal');
  const modal = bootstrap.Modal.getInstance(modalEl);
  modal.hide();
}

const ctx = document.getElementById('loginChart').getContext('2d');

const loginChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
    datasets: [{
      label: 'Giriş Sayısı',
      data: [12, 19, 8, 15, 10, 6, 4],
      fill: true,
      borderColor: '#0d6efd',
      backgroundColor: 'rgba(13, 110, 253, 0.1)',
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
