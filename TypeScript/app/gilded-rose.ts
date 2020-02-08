import { Good } from "./Good";

const AGED_BRIE = 'Aged Brie';
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';

export class GildedRose {
    goods: Array<Good>;

    constructor(goods = [] as Array<Good>) {
        this.goods = goods;
    }

    processGoods() {
        for (let i = 0; i < this.goods.length; i++) {
            const good = this.goods[i];
            this.updateGoodQuality(good);
            good.decreaseSellIn();
        }

        return this.goods;
    }

    private updateGoodQuality(good: Good) {
        if (good.name != AGED_BRIE && good.name != BACKSTAGE_PASSES) {
            good.decreaseQuality();
        }
        else {
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
        if (good.sellIn <= 0) {
            if (good.name != AGED_BRIE) {
                if (good.name != BACKSTAGE_PASSES) {
                    good.decreaseQuality();
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
