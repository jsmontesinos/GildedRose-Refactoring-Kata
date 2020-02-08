export class Good {
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
    goods: Array<Good>;

    constructor(goods = [] as Array<Good>) {
        this.goods = goods;
    }

    processGoods() {
        for (let i = 0; i < this.goods.length; i++) {
            const good = this.goods[i];
            this.updateGoodQuality(good);
            if (good.name != 'Sulfuras, Hand of Ragnaros') {
                good.decreaseSellIn();
            }
        }

        return this.goods;
    }

    private updateGoodQuality(good: Good) {
        if (good.name != 'Aged Brie' && good.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (good.quality > 0) {
                if (good.name != 'Sulfuras, Hand of Ragnaros') {
                    good.decreaseQuality();
                }
            }
        }
        else {
            if (good.quality < 50) {
                good.increaseQuality();
                if (good.name == 'Backstage passes to a TAFKAL80ETC concert') {
                    if (good.sellIn < 11) {
                        good.increaseQuality();
                    }
                    if (good.sellIn < 6) {
                        good.increaseQuality();
                    }
                }
            }
        }
        if (good.sellIn <= 0) {
            if (good.name != 'Aged Brie') {
                if (good.name != 'Backstage passes to a TAFKAL80ETC concert') {
                    if (good.quality > 0) {
                        if (good.name != 'Sulfuras, Hand of Ragnaros') {
                            good.decreaseQuality();
                        }
                    }
                }
                else {
                    good.resetQuality();
                }
            }
            else {
                good.increaseQuality();
            }
        }
    }
}
