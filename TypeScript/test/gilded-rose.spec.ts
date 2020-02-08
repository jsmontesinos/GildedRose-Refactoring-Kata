import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should lower selling and quality values of products', function() {
        const gildedRose = new GildedRose([ new Item('foo1', 4, 4), new Item('foo2', 5, 6) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(3);
        expect(items[1].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(3);
        expect(items[1].quality).to.equal(5);
    });

});
