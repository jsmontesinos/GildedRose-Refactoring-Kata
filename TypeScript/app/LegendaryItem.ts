import { Item } from './Item';

export class LegendaryItem extends Item {
    protected decreaseQuality() {
        // Sulfuras good does not decreases in quality
    }
    protected decreaseSellIn() {
        // Sulfuras good does not decreases sellIn
    }
}
