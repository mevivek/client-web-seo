export const restaurantJsonLd = restaurant => ({
    '@context': 'http://schema.org',
    '@type': 'Restaurant',
    name: restaurant.name,
    image: restaurant.images,
    url: restaurant.url,
    telephone: restaurant.display_phone,
    address: {
        '@type': 'PostalAddress',
        streetAddress: restaurant.address.street,
        addressLocality: restaurant.address.city,
        addressRegion: restaurant.address.state,
        postalCode: restaurant.address.zip,
        addressCountry: 'INDIA'
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: restaurant.geo.lat,
        longitude: restaurant.geo.lng
    },
    menu: restaurant.menu_url,
    priceRange: restaurant.priceRange,
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            opens: "10:00AM",
            closes: "21:00PM"
        }
    ]
});

export const productJsonLd = product => ({
    '@context': 'http://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description,
    sku: product.sku,
    mpn: product.mpn,
    brand: {
        '@type': 'Brand',
        name: product.brand
    },
    offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: product.price,
        priceValidUntil: '2020-12-31',
        itemCondition: 'http://schema.org/NewCondition',
        availability: 'http://schema.org/InStock',
        seller: {
            '@type': 'Organization',
            name: 'Brand Name'
        }
    },
    review: {
        '@type': 'Review',
        reviewRating: {
            '@type': 'Rating',
            ratingValue: '4',
            bestRating: '5'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4',
            reviewCount: '23'
        }
    }
});