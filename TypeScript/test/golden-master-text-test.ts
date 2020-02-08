import { GildedRose } from '../app/gilded-rose';
import { Good } from "../app/Good";
import { LegendaryGood } from '../app/SulfurasGood';

const goods = [
    new Good("+5 Dexterity Vest", 10, 20), //
    new Good("Aged Brie", 2, 0), //
    new Good("Elixir of the Mongoose", 5, 7), //
    new LegendaryGood("Sulfuras, Hand of Ragnaros", 0, 80), //
    new LegendaryGood("Sulfuras, Hand of Ragnaros", -1, 80),
    new Good("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new Good("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new Good("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    // this conjured item does not work properly yet
    new Good("Conjured Mana Cake", 3, 6)];


const gildedRose = new GildedRose(goods);
var days: number = 15;
for (let i = 0; i < days; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    goods.forEach(element => {
        console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);

    });
    console.log();
    gildedRose.processGoods();
}