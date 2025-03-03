import pkg from "jsonwebtoken";
const {sign, verify} = pkg;

export const GenerateToken = ({data, expiresIn}) =>{
    return sign({result: data}, process.env.SECRET_KEY, {expiresIn: expiresIn});
}

export const validateToken = (req, res, next)=>{
    try {
        const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Token is required"
            });
        }
        const decoded = verify(token, process.env.SECRET_KEY);
        if(decoded.result.role !== "admin"){
         return   res.status(403).json({
                success: false,
                message:"You are not authorized to access this resource"
            })
        }
        req.user = decoded.result;
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
}