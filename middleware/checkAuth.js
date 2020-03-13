const jwt = require('jsonwebtoken');


module.exports = (req , res , next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token,'air_port@123');
        req.clientId = decoded.clientId;
        next();
    }catch (error){
        return res.status(401).json({
            message:'Failed'
        })
    }
};