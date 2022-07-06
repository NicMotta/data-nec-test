let table;
let pointSize = 10;
let boxSize = 0.25;

function preload() {
  table = loadTable('./assets/csv/mesh.csv', 'csv');
}

function setup() {
  noCanvas();
  console.log('p5');

  const mapaNec = createElement('a-entity').parent('scene')
    .attribute('position', '0 0 0')
    .attribute('rotation', '-90 0 0')

  for(let a = 1; a < table.getRowCount(); a = a+10) {
    // createElement('a-sphere').parent(mapaNec)
    // .attribute('position', `${table.getString(a, 0) * pointSize} ${table.getString(a, 1) * pointSize} ${table.getString(a, 2) * pointSize}`)
    // .attribute('radius', .06)
    // .attribute('color', '#bfbfbf')
    // .attribute('opacity', 1);

    createElement('a-box').parent(mapaNec)
    .attribute('position', `${table.getString(a, 0) * pointSize} ${table.getString(a, 1) * pointSize} ${table.getString(a, 2) * pointSize}`)
    .attribute('depth', table.getString(a, 2) * pointSize * 2)
    .attribute('width', boxSize)
    .attribute('height', boxSize)
    .attribute('wireframe', 'true')
    .attribute('fog', 'true')
  }

}