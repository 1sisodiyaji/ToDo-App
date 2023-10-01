const todo = require("../models/Todo");

exports.deleteTodo = async(req,res) => {

    try{
        const{id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.join({
            success:true,
            message:"Todo DELETED",
        })
    }
    catch(error){
        console.error(error);
        req.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        })
    }

}