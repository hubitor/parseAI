// var net = new brain.NeuralNetwork({
//   hiddenLayers: [195, 512, 256, 128, 7],
//   learningRate: 0.6 // global learning rate, useful when training using streams
// });




// net.train([{input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
//            {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
//            {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}]);





let htmlparser = require("htmlparser2");

let parser = new htmlparser.Parser();

parser.write("<h1>Test</h1>");
parser.end();