export class Item {
    readonly name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    public decreaseQuality() {
        this.quality = Math.max(0, this.quality - 1);
    }

    public increaseQuality() {
        this.quality = Math.min(50, this.quality + 1);
    }

    public resetQuality() {
        this.quality = 0;
    }

    public decreaseSellIn() {
        this.sellIn = this.sellIn - 1;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            this.updateItemQuality(this.items[i]);
        }

        return this.items;
    }

    private updateItemQuality(item: Item) {
        if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
                if (item.name != 'Sulfuras, Hand of Ragnaros') {
                    item.decreaseQuality();
                }
            }
        }
        else {
            if (item.quality < 50) {
                item.increaseQuality();
                if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                    if (item.sellIn < 11) {
                        item.increaseQuality();
                    }
                    if (item.sellIn < 6) {
                        item.increaseQuality();
                    }
                }
            }
        }
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.decreaseSellIn();
        }
        if (item.sellIn < 0) {
            if (item.name != 'Aged Brie') {
                if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
                    if (item.quality > 0) {
                        if (item.name != 'Sulfuras, Hand of Ragnaros') {
                            item.decreaseQuality();
                        }
                    }
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
