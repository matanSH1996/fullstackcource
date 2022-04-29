function getRequestDate(req, res, next){
    let date = new Date()

    req.currentDate = date
    //^we can define parameters to contain data with "req." in this case, we made parameter named "currentDate", which contains our parameter information - "date"
    // console.log(`the request has made in ${date}`)
    next()
}

module.exports = getRequestDate