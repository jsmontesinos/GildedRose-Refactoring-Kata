const AGED_BRIE = 'Aged Brie';
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';

export class Item {
    readonly name: string;
    sellIn: number;
    quality: number;
    
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    
    protected decreaseQuality() {
        this.quality = Math.max(0, this.quality - 1);
    }
    
    protected increaseQuality() {
        this.quality = Math.min(50, this.quality + 1);
    }
    
    protected resetQuality() {
        this.quality = 0;
    }
    
    public decreaseSellIn() {
        this.sellIn = this.sellIn - 1;
    }

    public updateQuality() {
        if (this.name != AGED_BRIE && this.name != BACKSTAGE_PASSES) {
            this.decreaseQuality();
        }
        else {
            this.increaseQuality();
            if (this.name == BACKSTAGE_PASSES) {
                if (this.sellIn < 11) {
                    this.increaseQuality();
                }
                if (this.sellIn < 6) {
                    this.increaseQuality();
                }
            }
        }
        if (this.sellIn <= 0) {
            if (this.name != AGED_BRIE) {
                if (this.name != BACKSTAGE_PASSES) {
                    this.decreaseQuality();
                }
                else {
                    this.resetQuality();
                }
            }
            else {
                this.increaseQuality();
            }
        }
    }
}
