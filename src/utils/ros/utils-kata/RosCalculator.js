import { Product } from "./Product";

export class RosCalculator {
    /**
     * 
     * @param {[Product]} list 
     */
    calculate(list) {
        let total = 0;
        list.forEach((e) => total += e.getTotalPrice())
        return total;
    }
}
