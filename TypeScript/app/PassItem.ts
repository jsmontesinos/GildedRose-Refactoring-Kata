import { Item } from "./Item";

export class PassItem extends Item {
    public updateQuality() {
        this.increaseQuality();
        if (this.sellIn < 11) {
            this.increaseQuality();
        }
        if (this.sellIn < 6) {
            this.increaseQuality();
        }
        if (this.sellIn <= 0) {
            this.resetQuality();
        }
    }
}