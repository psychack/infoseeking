
const width = window.innerWidth;
const height = window.innerHeight -100;

const graphWidth = 700;
const graphHeight = 600;

let y = 350;
let x = 0;
const xMargin = 14;
let trace = [[x,y]];


const canvas = SVG()
    .addTo('body')
    .size(width, height)
    .viewbox(-25, -25, graphWidth+50, graphHeight+50)

const yBar = canvas.line(0, -50, 0, graphHeight)
    .stroke({color: 'black', width:2, opacity: 1})
    .move(0, 50)

const xBar = canvas.line(0, 0, graphWidth, 0)
    .stroke({color: 'black', width:2, opacity: 1})
    .move(0, 350)

const yLabel = canvas.text('Global market value')
    .rotate(-90)
    .move(-350, -100)
    .font({
        family: 'sans-serif',
        size: 25
    })

const upperTick = canvas.line(-10, -100, 10, -70)
    .stroke({color: 'black', width: 2, opacity:1})
    .move(0, 50)

const lowerTick = canvas.line(10, -10, -10, 20)
    .stroke({color: 'black', width: 2, opacity:1})
    .move(0, 595)

for (let t=1; t<=50; t++) {
    let fluc = Math.random()*60- 30;
    y -= fluc;2
    x += xMargin;
    let dataPoint = [x,y];
    trace.push(dataPoint);
}


for (let i=1; i<=50; i++) {
    setTimeout(() => {
        let poly = canvas.polyline(trace.slice(0, i+1)).fill('none').stroke({
            color: '#EFE933',
            opacity: 1,
            width: 8
        })
        console.log(poly)
    }, 2300*i);
}

console.log(trace)

