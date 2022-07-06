const {Schema , model} = require("mongoose")

const LOWEST_RATING = 0
const HIGHEST_RATING = 10

const reviewSchema = new Schema({
    book_genre: {
        type : String,
        required : [true, `book must have a genre`]
    }, main_characters: {
        type : String
    }, general_information_about_the_book: {
        type : String
    }, favorite_quote: {
        type : String
    } , rating: {
        type : Number,
        required : [true, `book must get rating`],
        min:[LOWEST_RATING, `rating cannot be less than ${LOWEST_RATING}, recieved {VALUE}`],
        max:[HIGHEST_RATING, `rating cannot exceed ${HIGHEST_RATING}, recieved {VALUE}`]
    }
})

const Review = model('Review', reviewSchema )
module.exports = Review

