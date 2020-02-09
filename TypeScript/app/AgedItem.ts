import { Item } from "./Item";

export class AgedItem extends Item {
    protected updateQuality() {
        this.increaseQuality();
        if (this.sellIn <= 0) {
            this.increaseQuality();
        }
    }
}