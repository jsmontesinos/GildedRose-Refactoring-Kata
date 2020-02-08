import { Item } from "./Item";

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    processItems() {
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            item.updateQuality();
            item.decreaseSellIn();
        }

        return this.items;
    }
}
