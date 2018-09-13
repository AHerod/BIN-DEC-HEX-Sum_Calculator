import { BinaryCalculator } from "./BinaryCalculator";
import { DecCalculator } from "./DecCalculator";
import { HexCalculator } from "./HexCalculator";
import "./style.scss";


$(document).ready(function() {
    const bitCalc = new BinaryCalculator(".binary-calculator");
});

$(document).ready(function() {
  const bitCalc = new DecCalculator(".dec-calculator");
});

$(document).ready(function() {
  const bitCalc = new HexCalculator(".hex-calculator");
});