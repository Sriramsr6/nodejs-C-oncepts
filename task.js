const obj = {
    payment_method: 'cod',
    weightinKgs: 100,
    billing: {    
        first_name: 'John',
        last_name: 'Doe',
        address_1: '969 Market',  
        address_2: '',
        city: 'San Francisco',
        state: 'CA',
        postcode: '94103',
        country: 'US',
    },
    orderPurchases: [
        {
            date: '2020-01-01',
            amount: 100,
        },
        {
            date: '2020-03-02',
            amount: 200,
        },
        {
            date: '2020-02-06',
            amount: 210,
        }
    ]
}


const expectedOutput = {
    paymentMethod: obj.payment_method,
    name: 'John Doe',
    address: '969 Market, San Francisco, CA 94103, US',
    weightinLbs: 0, // kg*2.2406
    customerAgeInDays: 0,
    avgOrderValue: 0, // total/number of orders
    firstOrderDate: '',
    lastOrderDate: '',
}
console.log(obj.billing.first_name+'' +last_name);





