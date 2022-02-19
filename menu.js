///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
const pizza = {
    name: "Hawaiian",
    price: 13.99,
    category: "entree",
    popularity: 8,
    rating: 4.5,
    tags: ["kids", "classic", "favorites"]
}


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
// console.log(pizza.rating)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
// console.log(pizza.tags[1])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
let {price} = pizza
// console.log(price)

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
let {category} = pizza
// console.log(category)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
const foodArr = [
    {
        name: 'burger', 
        price: 10.99,
        popularity: 9,
        rating: 5,
        tags: ["kids", "favorites"]
    }, 
    {
        name: 'pasta', 
        price: 8.99,
        popularity: 4,
        rating: 3,
        tags: ["kids", "gluten free option"]

    }, 
    {
        name: 'salad', 
        price: 7.99,
        popularity: 6,
        rating: 4,
        tags: ["gluten free option", "vegetarian"]
    },
    {
       name: 'sandwich' ,
       price: 9.99,
       popularity: 8,
       rating: 5,
       tags: ["kids", "favorites", "gluten free option"]
    },
    {
        name: 'steak', 
        price: 15.99,
        popularity: 8,
        rating: 3,
        tags: ["gluten free option", "favorites"]
    }
]



//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE
//arrow function
// const filteredFood = foodArr.filter((item) => {
//     // console.log(item.tags)
//     return item.tags.includes('kids')
// })
// console.log(filteredFood)

//function declaration
const filteredFood = foodArr.filter(function(elem){
    return elem.tags.includes('favorites')
})
// console.log(filteredFood)
//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type is `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
// function filterByProperty(property, number, type){
//     const filteredArr = foodArr.filter(function(element){
//         if(type === "above") {
//             if(element[property] > number) {
//                 return true
//             }
//         } else if(type === "below") {
//             if(element[property] < number) {
//                 return false
//             }
//         } 
//     }) 
//     return filteredArr
// } 
function filterByProperty(property, number, type){
    const filteredArr = foodArr.filter(function(element){
        if(type === "above") {
            return element[property] > number
        } else if(type === "below") {
            return element[property] < number
            }
        })
        return filteredArr 
    }

/*
Invoke the `filterByProperty` function passing
in a value for each parameter.
                        
You'll have to console.log to see the filtered array
*/
                       
//CODE HERE
console.log(filterByProperty("popularity", 8, 'below'))