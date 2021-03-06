import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL, SET_CART_PRODUCTS, ADD_CART_PRODUCT, AUTHENTITCATE_USER } from './types';

export function signIn({ email, password }) {
    return ({
        type: AUTHENTITCATE_USER,
        payload: {
            user: {
                _id: 0,
                name: 'This Guy',
                address: '1234 Guy Lives here',
                cartProducts: []
            }
        }
    })
}
export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: 'JavaScript in the Browser',
                    description: 'Id feugiat augue. Lobortis ridiculus potenti. Sollicitudin. Mauris. Bibendum ante. Ad elit. Gravida sodales imperdiet Luctus porttitor pharetra laoreet scelerisque sapien vivamus consequat dictum maecenas nibh. Phasellus sociis. Molestie.',
                    price: '1.99',
                    belongsTo: [0, 1],
                    imageUrl: 'http://via.placeholder.com/80x80'
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'Id feugiat augue. Lobortis ridiculus potenti. Sollicitudin. Mauris. Bibendum ante. Ad elit. Gravida sodales imperdiet Luctus porttitor pharetra laoreet scelerisque sapien vivamus consequat dictum maecenas nibh. Phasellus sociis. Molestie.',
                    price: '1.99',
                    belongsTo: [0, 6],
                    imageUrl: 'http://via.placeholder.com/80x80'
                },
                quantity: 1
            }
        ]
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 8.02,
                orderNumber: 'Aooorerdsasd',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 8.02,
                orderNumber: 'Ao0orerdsasd',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 2,
                total: 8.02,
                orderNumber: 'Ao2orerdsasd',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 3,
                total: 8,
                orderNumber: 'Aooorerdsasd',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 4,
                total: 8.02,
                orderNumber: 'Aooorerdsasd',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 5,
                total: 8.2,
                orderNumber: 'Aooorerdsasd',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 6,
                total: 8.22,
                orderNumber: 'Aooorerdsasd',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 7,
                total: 8.02,
                orderNumber: 'Aooorerdsasd',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
        ]
    })
}