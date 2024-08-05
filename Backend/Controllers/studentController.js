const stuModel=require("../Models/studentModel");

const stuDataSave=async(req,res)=>{
  
    const {rollno, name, city, fees}=req.body;

    const stuData=await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.status(200).json(stuData); 
}

const stuDataShow=async(req,res)=>{
     const myData= await stuModel.find();
     res.status(200).json(myData);
}

const stuSearch=async(req,res)=>{
    const rno=req.body.rollno;
    const myData=await stuModel.find({rollno:rno})
    res.status(200).json(myData);
}

const stuUpdatePage=async(req,res)=>{
    const myData=await stuModel.find();
    res.status(200).json(myData);
}

const stuDataDelete=async(req,res)=>{
    let mieid=req.body.myid;
    const response=await stuModel.findByIdAndDelete(mieid);
    res.status(200).json(response);
}

const editDisplay=async(req, res)=>{
    const id=req.body.id;
    
    const myData= await stuModel.findById(id);
     
    res.status(200).json(myData);
  
  }
  
  const editDataSave=async(req, res)=>{
    const data=req.body;
    const myans= await stuModel.findByIdAndUpdate(data._id, data);
    
    res.status(200).json(myans)
  }

module.exports={
    stuDataSave,
    stuDataShow,
    stuSearch,
    stuUpdatePage,
    stuDataDelete,
    editDisplay,
    editDataSave
}