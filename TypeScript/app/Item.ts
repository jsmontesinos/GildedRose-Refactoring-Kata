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
        this.decreaseQuality();
        if (this.sellIn <= 0) {
            this.decreaseQuality();
        }
    }
}
