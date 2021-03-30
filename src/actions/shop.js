import { SET_SHOP_CATEGORIES, SET_NAVBAR_LINKS, SET_SHOP_PRODUCTS, FILTER_PRODUCTS_WITH_CATEGORY_ID, FILTER_PRODUCTS_WITH_QUERY } from './types';

export function filterProductsWithQuery(fields) {
    return ({
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fields
    })
}
export function filterProductsWithCategoryId(_id) {
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}

export function fetchShopCategories() {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'Javascript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Linux'
            },
            {
                _id: 4,
                title: 'Python'
            },
            {
                _id: 5,
                title: 'UML'
            },
            {
                _id: 6,
                title: 'Ruby'
            }
        ]
    })
}

export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'JavaScript in the Browser',
                description: 'Id feugiat augue. Lobortis ridiculus potenti. Sollicitudin. Mauris. Bibendum ante. Ad elit. Gravida sodales imperdiet Luctus porttitor pharetra laoreet scelerisque sapien vivamus consequat dictum maecenas nibh. Phasellus sociis. Molestie.',
                price: '1.99',
                belongsTo: [0, 1]
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'Id feugiat augue. Lobortis ridiculus potenti. Sollicitudin. Mauris. Bibendum ante. Ad elit. Gravida sodales imperdiet Luctus porttitor pharetra laoreet scelerisque sapien vivamus consequat dictum maecenas nibh. Phasellus sociis. Molestie.',
                price: '1.99',
                belongsTo: [0, 6]
            },
            {
                _id: 2,
                title: 'Fullstack Development',
                description: 'Id feugiat augue. Lobortis ridiculus potenti. Sollicitudin. Mauris. Bibendum ante. Ad elit. Gravida sodales imperdiet Luctus porttitor pharetra laoreet scelerisque sapien vivamus consequat dictum maecenas nibh. Phasellus sociis. Molestie.',
                price: '1.99',
                belongsTo: [0, 2, 4]
            },
            {
                _id: 3,
                title: 'User Interface Design',
                description: 'Id feugiat augue. Lobortis ridiculus potenti. Sollicitudin. Mauris. Bibendum ante. Ad elit. Gravida sodales imperdiet Luctus porttitor pharetra laoreet scelerisque sapien vivamus consequat dictum maecenas nibh. Phasellus sociis. Molestie.',
                price: '1.99',
                belongsTo: [0, 2, 5]
            },
            {
                _id: 4,
                title: 'JavaScript Design',
                description: 'Id feugiat augue. Lobortis ridiculus potenti. Sollicitudin. Mauris. Bibendum ante. Ad elit. Gravida sodales imperdiet Luctus porttitor pharetra laoreet scelerisque sapien vivamus consequat dictum maecenas nibh. Phasellus sociis. Molestie.',
                price: '1.99',
                belongsTo: [0, 2]
            },
            {
                _id: 5,
                title: 'User Experience Design',
                description: 'Id feugiat augue. Lobortis ridiculus potenti. Sollicitudin. Mauris. Bibendum ante. Ad elit. Gravida sodales imperdiet Luctus porttitor pharetra laoreet scelerisque sapien vivamus consequat dictum maecenas nibh. Phasellus sociis. Molestie.',
                price: '1.99',
                belongsTo: [0, 5]
            },
            {
                _id: 6,
                title: 'Advanced OOP',
                description: 'Id feugiat augue. Lobortis ridiculus potenti. Sollicitudin. Mauris. Bibendum ante. Ad elit. Gravida sodales imperdiet Luctus porttitor pharetra laoreet scelerisque sapien vivamus consequat dictum maecenas nibh. Phasellus sociis. Molestie.',
                price: '1.99',
                belongsTo: [0, 1, 6]
            }
        ]
    })
}