const AGED_BRIE = 'Aged Brie';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';

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
            if (good.name != SULFURAS) {
                good.decreaseSellIn();
            }
        }

        return this.goods;
    }

    private updateGoodQuality(good: Good) {
        if (good.name != AGED_BRIE && good.name != BACKSTAGE_PASSES) {
            if (good.quality > 0) {
                if (good.name != SULFURAS) {
                    good.decreaseQuality();
                }
            }
        }
        else {
            if (good.quality < 50) {
                good.increaseQuality();
                if (good.name == BACKSTAGE_PASSES) {
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
            if (good.name != AGED_BRIE) {
                if (good.name != BACKSTAGE_PASSES) {
                    if (good.quality > 0) {
                        if (good.name != SULFURAS) {
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
