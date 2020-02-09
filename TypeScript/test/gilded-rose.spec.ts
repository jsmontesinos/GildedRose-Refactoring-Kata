import { expect } from 'chai';
import { GildedRose } from '../app/gilded-rose';
import { Item } from "../app/Item";
import { LegendaryItem } from '../app/LegendaryItem';
import { AgedItem } from '../app/AgedItem';
import { PassItem } from '../app/PassItem';
import { ConjuredItem } from '../app/ConjuredItem';

const AGED_BRIE = 'Aged Brie';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';
const FOO = 'foo';
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
const CONJURED = 'Conjured Mana Cake';

describe('Gilded Rose', function () {

    it('should decrease sellin and quality values of products', function() {
        const gildedRose = new GildedRose([ new Item(FOO, 4, 4) ]);
        const items = gildedRose.processItems();
        expect(items[0].sellIn).to.equal(3);
        expect(items[0].quality).to.equal(3);
    });

    it('should decrease quality twice as fast if sell by date has passed', function() {
        const gildedRose = new GildedRose([ new Item(FOO, 1, 4), new Item('foo1', 0, 4) ]);
        const items = gildedRose.processItems();
        expect(items[0].sellIn).to.equal(0);
        expect(items[1].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(3);
        expect(items[1].quality).to.equal(2);
    });

    it('should keep quality over 0', function() {
        const gildedRose = new GildedRose([ new Item(FOO, 1, 0) ]);
        const items = gildedRose.processItems();
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.gte(0);
    });

    it('should increase Aged Brie quality the older it gets', () => {
        const gildedRose = new GildedRose([ new AgedItem(AGED_BRIE, 1, 0) ]);
        const items = gildedRose.processItems();
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(1);
    });

    it('should increase Aged Brie quality by 2 if sellin is less than 0', () => {
        const gildedRose = new GildedRose([ new AgedItem(AGED_BRIE, -1, 2) ]);
        const items = gildedRose.processItems();
        expect(items[0].sellIn).to.equal(-2);
        expect(items[0].quality).to.equal(4);
    });

    it('should keep quality under 50', () => {
        const gildedRose = new GildedRose([ new Item(FOO, 2, 50) ]);
        const items = gildedRose.processItems();
        expect(items[0].sellIn).to.equal(1);
        expect(items[0].quality).to.lte(50);
    });

    it('should keep Sulfuras quality and never sold', () => {
        const gildedRose = new GildedRose([ new LegendaryItem(SULFURAS, 0, 40) ]);
        const items = gildedRose.processItems();
        expect(items[0].sellIn).to.gte(0);
        expect(items[0].quality).to.equal(40);
    });

    it('should increase quality of backstage passes by 3 when sellin is 5 days or less', () => {
        const gildedRose = new GildedRose([ new PassItem(BACKSTAGE_PASSES, 4, 40) ]);
        const items = gildedRose.processItems();
        expect(items[0].sellIn).to.equal(3);
        expect(items[0].quality).to.equal(43);
    });


    it('should increase quality of backstage passes by 2 when sellin is 10 days or less', () => {
        const gildedRose = new GildedRose([ new PassItem(BACKSTAGE_PASSES, 7, 40) ]);
        const items = gildedRose.processItems();
        expect(items[0].sellIn).to.equal(6);
        expect(items[0].quality).to.equal(42);
    });

    it('should increase quality of backstage passes by 1 when sellin is 11 dats or more', () => {
        const gildedRose = new GildedRose([ new PassItem(BACKSTAGE_PASSES, 11, 40) ]);
        const items = gildedRose.processItems();
        expect(items[0].sellIn).to.equal(10);
        expect(items[0].quality).to.equal(41);
    });

    it('should drop quality to 0 of backstage passes when sellin date has passed', () => {
        const gildedRose = new GildedRose([ new PassItem(BACKSTAGE_PASSES, 0, 40) ]);
        const items = gildedRose.processItems();
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
    });

    it('should decrease quality of conjured products twice fast as normal items', () => {
        const gildedRose = new GildedRose([ new ConjuredItem(CONJURED, 10, 40), new ConjuredItem(CONJURED, 0, 40) ]);
        const items = gildedRose.processItems();
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(38);
        expect(items[1].sellIn).to.equal(-1);
        expect(items[1].quality).to.equal(36);
    });
});
