const express = require("express")
const router = express.Router();


router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const listmodel = require("../Models/ListModel");


//api to get tasks
router.get('/gettasks', async (req, res)=>{

    try {
        const data = await listmodel.find({});

        res.status(200).json({data:data})
    } catch (error) {
        res.status(400).json({message:"server error"})
        console.log(error)
    }

})
//api to add tasks
router.post('/addtask', async (req, res)=>{

const task = req.body;


try {
    await listmodel(task).save();
    res.status(200).json({ message: "Task Added" });
} catch (error) {
    res.status(400).json({ message: "Error! Task was not  Added" });
    console.log(error);
}


})

//api to delete the tasks

router.delete('/del/:id', async (req, res)=>{

    try {
        const id = req.params.id;
        await listmodel.findByIdAndDelete(id);

        res.status(200).json({ message: "Deleted Successfully" });
    } catch (error) {
        res.status(404).json({ message: "Cannot Delete", err: error });
        console.log(error)
    }
})


module.exports = router