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
                description: 'Luctus. Lectus consequat posuere sollicitudin. Euismod ullamcorper consequat ultrices magnis pellentesque maecenas fringilla ridiculus hac vitae per volutpat nec ullamcorper nulla etiam convallis cursus porta imperdiet enim ac rhoncus litora conubia lorem urna, mus. Mollis quisque habitant est. Ante mus urna turpis vehicula elit, bibendum dis nascetur nascetur mattis nibh nec vivamus, venenatis Blandit sem mus aliquam suspendisse ac vulputate lorem faucibus pulvinar lacinia natoque ante curabitur magnis ullamcorper dui enim. Id feugiat augue. Lobortis ridiculus potenti. Sollicitudin. Mauris. Bibendum ante. Ad elit. Gravida sodales imperdiet Luctus porttitor pharetra laoreet scelerisque sapien vivamus consequat dictum maecenas nibh. Phasellus sociis. Molestie.',
                price: '1.99',
                belongsTo: [0, 1]
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'Luctus. Lectus consequat posuere sollicitudin. Euismod ullamcorper consequat ultrices magnis pellentesque maecenas fringilla ridiculus hac vitae per volutpat nec ullamcorper nulla etiam convallis cursus porta imperdiet enim ac rhoncus litora conubia lorem urna, mus. Mollis quisque habitant est. Ante mus urna turpis vehicula elit, bibendum dis nascetur nascetur mattis nibh nec vivamus, venenatis Blandit sem mus aliquam suspendisse ac vulputate lorem faucibus pulvinar lacinia natoque ante curabitur magnis ullamcorper dui enim. Id feugiat augue. Lobortis ridiculus potenti. Sollicitudin. Mauris. Bibendum ante. Ad elit. Gravida sodales imperdiet Luctus porttitor pharetra laoreet scelerisque sapien vivamus consequat dictum maecenas nibh. Phasellus sociis. Molestie.',
                price: '1.99',
                belongsTo: [0, 6]
            },
            {
                _id: 2,
                title: 'Fullstack Development',
                description: 'Luctus. Lectus consequat posuere sollicitudin. Euismod ullamcorper consequat ultrices magnis pellentesque maecenas fringilla ridiculus hac vitae per volutpat nec ullamcorper nulla etiam convallis cursus porta imperdiet enim ac rhoncus litora conubia lorem urna, mus. Mollis quisque habitant est. Ante mus urna turpis vehicula elit, bibendum dis nascetur nascetur mattis nibh nec vivamus, venenatis Blandit sem mus aliquam suspendisse ac vulputate lorem faucibus pulvinar lacinia natoque ante curabitur magnis ullamcorper dui enim. Id feugiat augue. Lobortis ridiculus potenti. Sollicitudin. Mauris. Bibendum ante. Ad elit. Gravida sodales imperdiet Luctus porttitor pharetra laoreet scelerisque sapien vivamus consequat dictum maecenas nibh. Phasellus sociis. Molestie.',
                price: '1.99',
                belongsTo: [0, 2, 4]
            },
            {
                _id: 3,
                title: 'User Interface Design',
                description: 'Luctus. Lectus consequat posuere sollicitudin. Euismod ullamcorper consequat ultrices magnis pellentesque maecenas fringilla ridiculus hac vitae per volutpat nec ullamcorper nulla etiam convallis cursus porta imperdiet enim ac rhoncus litora conubia lorem urna, mus. Mollis quisque habitant est. Ante mus urna turpis vehicula elit, bibendum dis nascetur nascetur mattis nibh nec vivamus, venenatis Blandit sem mus aliquam suspendisse ac vulputate lorem faucibus pulvinar lacinia natoque ante curabitur magnis ullamcorper dui enim. Id feugiat augue. Lobortis ridiculus potenti. Sollicitudin. Mauris. Bibendum ante. Ad elit. Gravida sodales imperdiet Luctus porttitor pharetra laoreet scelerisque sapien vivamus consequat dictum maecenas nibh. Phasellus sociis. Molestie.',
                price: '1.99',
                belongsTo: [0, 2, 5]
            },
            {
                _id: 4,
                title: 'JavaScript Design',
                description: 'Luctus. Lectus consequat posuere sollicitudin. Euismod ullamcorper consequat ultrices magnis pellentesque maecenas fringilla ridiculus hac vitae per volutpat nec ullamcorper nulla etiam convallis cursus porta imperdiet enim ac rhoncus litora conubia lorem urna, mus. Mollis quisque habitant est. Ante mus urna turpis vehicula elit, bibendum dis nascetur nascetur mattis nibh nec vivamus, venenatis Blandit sem mus aliquam suspendisse ac vulputate lorem faucibus pulvinar lacinia natoque ante curabitur magnis ullamcorper dui enim. Id feugiat augue. Lobortis ridiculus potenti. Sollicitudin. Mauris. Bibendum ante. Ad elit. Gravida sodales imperdiet Luctus porttitor pharetra laoreet scelerisque sapien vivamus consequat dictum maecenas nibh. Phasellus sociis. Molestie.',
                price: '1.99',
                belongsTo: [0, 2]
            },
            {
                _id: 5,
                title: 'User Experience Design',
                description: 'Luctus. Lectus consequat posuere sollicitudin. Euismod ullamcorper consequat ultrices magnis pellentesque maecenas fringilla ridiculus hac vitae per volutpat nec ullamcorper nulla etiam convallis cursus porta imperdiet enim ac rhoncus litora conubia lorem urna, mus. Mollis quisque habitant est. Ante mus urna turpis vehicula elit, bibendum dis nascetur nascetur mattis nibh nec vivamus, venenatis Blandit sem mus aliquam suspendisse ac vulputate lorem faucibus pulvinar lacinia natoque ante curabitur magnis ullamcorper dui enim. Id feugiat augue. Lobortis ridiculus potenti. Sollicitudin. Mauris. Bibendum ante. Ad elit. Gravida sodales imperdiet Luctus porttitor pharetra laoreet scelerisque sapien vivamus consequat dictum maecenas nibh. Phasellus sociis. Molestie.',
                price: '1.99',
                belongsTo: [0, 5]
            },
            {
                _id: 6,
                title: 'Advanced OOP',
                description: 'Luctus. Lectus consequat posuere sollicitudin. Euismod ullamcorper consequat ultrices magnis pellentesque maecenas fringilla ridiculus hac vitae per volutpat nec ullamcorper nulla etiam convallis cursus porta imperdiet enim ac rhoncus litora conubia lorem urna, mus. Mollis quisque habitant est. Ante mus urna turpis vehicula elit, bibendum dis nascetur nascetur mattis nibh nec vivamus, venenatis Blandit sem mus aliquam suspendisse ac vulputate lorem faucibus pulvinar lacinia natoque ante curabitur magnis ullamcorper dui enim. Id feugiat augue. Lobortis ridiculus potenti. Sollicitudin. Mauris. Bibendum ante. Ad elit. Gravida sodales imperdiet Luctus porttitor pharetra laoreet scelerisque sapien vivamus consequat dictum maecenas nibh. Phasellus sociis. Molestie.',
                price: '1.99',
                belongsTo: [0, 1, 6]
            }
        ]
    })
}