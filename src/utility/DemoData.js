const imageSize = 50;
export const products = [
    {
        id: 1,
        name: 'Coffee',
        description: 'Coffee is a brewed drink prepared from roasted coffee beans, which are the seeds of berries from the Coffea plant. Coffee is brewed by diluting a large amount of nearly boiling water with the coffee beans, then forcing the liquid through a filter to form the beverage.',
        urlSlug: 'coffee',
        price: '$100',
        image: `https://via.placeholder.com/${imageSize}`,
        sku: 'coffee-1',
        category: 'Beverages',
        mpn: 'coffee-1',
        brand: 'Nestle',
    },
    {
        id: 2,
        name: 'Tea',
        description: 'Tea is a beverage made from Camellia sinensis leaves, the leaves of a tea plant. The plant is native to China and the leaves are harvested from there for tea.',
        urlSlug: 'tea',
        price: '$200',
        image: `https://via.placeholder.com/${imageSize}`,
        sku: 'tea-2',
        category: 'Beverages',
        mpn: 'tea-2',
        brand: 'Red Label',
    },
    {
        id: 3,
        name: 'Vanilla Ice Cream', 
        description: 'Vanilla ice cream is a flavoring of vanilla, milk, and sugar, typically used in desserts, and is made by mixing milk and sugar with vanilla. Vanilla ice cream is typically served in a cone or a small ice cream scoop.',
        urlSlug: 'vanilla-ice-cream',
        price: '$300',
        image: `https://via.placeholder.com/${imageSize}`,
        sku: 'vanilla-ice-cream-3',
        category: 'Desserts',
        mpn: 'vanilla-ice-cream-3',
        brand: 'Mother Dairy',
    },
    {
        id: 4,
        name: 'Mango Shake',
        description: 'Mango shake is a sweet dessert made from mashed ripe mangoes, coconut milk, and sugar. It is often served with a variety of toppings, such as whipped cream, fruit, and chocolate.',
        urlSlug: 'mango-shake',
        price: '$400',
        image: `https://via.placeholder.com/${imageSize}`,
        sku: 'mango-shake-4',
        category: 'Beveres',
        mpn: 'mango-shake-4',
        brand: 'Nestle'
    },
];

export const restaurant = {
    id: 1,
    name: 'Fastor Cafe',
    about: 'Multi cuisine cafe with a great view of the city. Perfect for a date night! We have a great selection of food and drinks. We are open from 7am to 10pm. We are located at the corner of the street.',
    images: [
        `https://via.placeholder.com/${imageSize}`,
        `https://via.placeholder.com/${imageSize}`,
    ],
    address: {
        street: 'Fastor Street',
        city: 'New Delhi',
        state: 'Delhi',
        zip: '110006',
    },
    priceRange: '$$',
    display_phone: '123-456-7890',
    email: 'email@example.com',
    geo: {
        lat: '28.7031851',
        lng: '77.1917404',
    },
    menu: "https://via.placeholder.com/200"
};