import { Item } from "./Item";

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    processItems() {
        this.items.forEach(item => item.addDay());

        return this.items;
    }
}
