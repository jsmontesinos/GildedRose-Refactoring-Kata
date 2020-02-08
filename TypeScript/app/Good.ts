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
