export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of the Product'
        },
        {
            name: 'images',
            type: 'array',
            title: 'Product Images',
            of:[{type: 'image'}]
        },
        {
            name: 'sizes',
            type: 'array',
            title: 'Product Size',
            of:[{type: 'string'}]
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description of product'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product Slug',
            options: {
                source: 'name'
            }
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'price_id',
            title: 'Stripe Price ID',
            type: 'string'
        },
        {
            name: 'category',
            title: 'Porduct Category',
            type: 'reference',
            to: [{
                type: 'category'
            }]
        }
    ]
}