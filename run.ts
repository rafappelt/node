#!/usr/bin/env node
// Grab provided args
const [, , ...args] = process.argv;

let app = require("./index.ts");
app.opa(args);
