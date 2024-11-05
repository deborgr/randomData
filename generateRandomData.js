const fs = require('fs');
const ITERATION = 1;

function generateDataset(size) {
    const dataset = [];
    for (let i = 0; i < size; i++) {
        const element = {
            id: i,
            x: Math.random(),
            y: Math.random(),
            z: Math.random(),
            value: Math.round(Math.random()) // 0 or 1 as boolean
        };
        dataset.push(element);
    }
    return dataset;
}

const dataset = generateDataset(60);

fs.writeFileSync(`randomData${ITERATION}.json`, JSON.stringify(dataset, null, 2), 'utf-8');

console.log(`Dataset generated and saved to randomData${ITERATION}.json`);