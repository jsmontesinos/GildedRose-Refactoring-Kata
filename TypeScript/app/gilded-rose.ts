import { Item } from "./Item";

const AGED_BRIE = 'Aged Brie';
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    processItems() {
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            this.updateItemQuality(item);
            item.decreaseSellIn();
        }

        return this.items;
    }

    private updateItemQuality(item: Item) {
        if (item.name != AGED_BRIE && item.name != BACKSTAGE_PASSES) {
            item.decreaseQuality();
        }
        else {
            item.increaseQuality();
            if (item.name == BACKSTAGE_PASSES) {
                if (item.sellIn < 11) {
                    item.increaseQuality();
                }
                if (item.sellIn < 6) {
                    item.increaseQuality();
                }
            }
        }
        if (item.sellIn <= 0) {
            if (item.name != AGED_BRIE) {
                if (item.name != BACKSTAGE_PASSES) {
                    item.decreaseQuality();
                }
                else {
                    item.resetQuality();
                }
            }
            else {
                item.increaseQuality();
            }
        }
    }
}
