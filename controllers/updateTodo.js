const Todo = require("../models/Todo");

exports.updateTodo = async(req,res) => {

    try {
        const {id} = req.params;
        const {title,descriptions}= req.body;

        const todo = await Todo.finfByIdAndUpdate(
            {_id:id},
            {title,descriptions,updateAt:Date.now()},
        )

        res.status(200).json({
            success:true,
            data:todo,
            message: `Updated Successfully`,
        })

}
catch(err) {
    console.error(err);
    res.status(500)
    .json({
        success:false,
        error:err.message,
        message:'Server Error',
    });
}
}