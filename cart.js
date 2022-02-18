///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const cartMap = cart.map(function(cost){
    return cost.price
})
// console.log(cartMap)

const summedPrice = cartMap.reduce(function(acc, curr){
    return acc + curr
})
// const summedPrice = cart.reduce(/* CALLBACK HERE */)
// console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    return 
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    The object will contain the name of the item, the cost of the item,
    discounts added to the item, and what sides are included with the item
    
    Why included:
    Name is needed to show the customer the item they are ordering
    Cost is to show how much they are paying for the item
    Discounts are included to show the customer if the item is on sale
        or a coupon was able to the price. Who doesn't love a good deal?
    Sides are shown so the customer knows what is going along with the item
        they ordered and allows them to change it before checkout
    
    Data types:
    Name will be string- shown as a string because it will be display
        the product name
    Cost will be number -- price are typically display as a number
    Discounts will be a boolean -- it will display whether or not the customer
        has a dicount added to the order. If true, it will display the discounts.
        If false, it will not display anything for the discount section
    Sides will be a string- written as a string because it could more than 
        one word 


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customCart = {
    name: "Western Burger",
    cost: 14.99,
    discount: true,
    sides: "Sweet Potatoes fries"
}
