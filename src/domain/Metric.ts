export class Metric {
  label: string;
  type: number;
  value: number;

  constructor(label: string, type: number, value: number) {
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
