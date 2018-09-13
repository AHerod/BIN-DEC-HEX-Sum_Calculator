import { DecCalculator } from "./DecCalculator";
class HexCalculator extends  DecCalculator{
  constructor(settings) {
    super(settings);
    console.log( this.getName() );
  }
}

export { HexCalculator };
