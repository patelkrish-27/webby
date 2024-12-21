const trialMiddleware = (req,res,next)=> {console.log("just structuring project");
    next()
}

module.exports = trialMiddleware