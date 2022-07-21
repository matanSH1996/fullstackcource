class AppError extends Error {
    constructor(message, statusCode){
        super()
        this.message = message
        this.statusCode = statusCode
    }
}

//extends allow to insert more classes under anothr class, in this case we inserted AppError into JS "Error" class.
//classes contain constructors.
//in order to create instance which belong to another class, we need to use "super()" function.

//The super keyword in JavaScript acts as a reference variable to the parent class. It is mainly used when we want to access a variable, method, or constructor in the base class from the derived class
//Error class is the father class and AppError is the son.

module.exports = AppError