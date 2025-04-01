const ctx = document.getElementById("myChart").getContext("2d");

const gradientBlue = ctx.createLinearGradient(0, 0, 0, 400);
gradientBlue.addColorStop(0, "#4745a42f");
gradientBlue.addColorStop(1, "#4745a400");

const gradientYellow = ctx.createLinearGradient(0, 0, 0, 400);
gradientYellow.addColorStop(0, "#f8cd7031");
gradientYellow.addColorStop(1, "#f8cd7000");

const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Label 2",
        data: [2800, 480, 4000, 1900, 8600, 2700, 2400],
        borderColor: "#f9ba33",
        backgroundColor: gradientYellow,
        tension: 0.3,
        borderWidth: 4,
        fill: true,
        pointStyle: false,
      },
      {
        label: "Label 1",
        data: [6500, 18900, 8000, 18100, 15600, 15500, 16660, 20000],
        borderColor: "#4745a4",
        backgroundColor: gradientBlue,
        tension: 0.3,
        borderWidth: 3,
        fill: true,
        pointStyle: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }, // No top label
    },
    scales: {
      y: {
        beginAtZero: true,
        border: {
          display: false,
          color: "#EBEBEB",
          dash: [18, 18],
        },
        ticks: {
          callback: (value) => value / 1000 + "k",
          values: [0, 1000, 5000, 10000, 15000, 20000],
          stepSize: 5000,
          suggestedMax: 20000,
          color: "#999999",
          font: { family: "'Plus Jakarta Sans', sans-serif", size: 14 },
        },
      },
      x: {
        grid: {
          display: false, // No vertical grid lines
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#999999",
          font: { family: "'Plus Jakarta Sans', sans-serif", size: 14 },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "nearest",
    },
  },
});
