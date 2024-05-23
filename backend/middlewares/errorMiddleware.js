

const not_Found =(req,res,next)=>{
    res.status(404).json("no endpoint")
}