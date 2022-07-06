let table;

function preload() {
  table = loadTable('./assets/csv/mesh.csv', 'csv');
}

function setup() {
  createCanvas(window.innerWidth - 1, window.innerHeight - 5, WEBGL);
  createEasyCam();
  document.oncontextmenu = function() { return false; }
}

function draw() {
  background(51);
  // noStroke();
  // fill(255);
  stroke(175);
  for(let a = 1; a < table.getRowCount(); a = a + 10) {
    point(table.getString(a, 0) * 100, table.getString(a, 1) * 100, table.getString(a, 2) * 100 )
  }
}