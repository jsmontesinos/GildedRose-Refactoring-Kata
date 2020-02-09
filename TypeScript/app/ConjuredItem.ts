import { Item } from "./Item";

export class ConjuredItem extends Item {
    protected updateQuality() {
        super.updateQuality();
        super.updateQuality();
    }
}