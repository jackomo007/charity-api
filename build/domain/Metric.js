"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metric = void 0;
class Metric {
    constructor(label, type, value) {
        this.label = label;
        this.type = type;
        this.value = value;
        if (!label) {
            throw new Error("Metric must have a label.");
        }
        if (type < 0) {
            throw new Error("Metric type must be a non-negative integer.");
        }
        if (value < 0) {
            throw new Error("Metric value must be a non-negative number.");
        }
    }
}
exports.Metric = Metric;
