import { Item } from "./Item";

export class AgedItem extends Item {
    public updateQuality() {
        this.increaseQuality();
        if (this.sellIn <= 0) {
            this.increaseQuality();
        }
    }
}