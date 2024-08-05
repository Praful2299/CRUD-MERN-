const express=require('express');
const route=express.Router();
const stuController=require("../Controllers/studentController");

route.post("/stusave" ,stuController.stuDataSave);
route.get("/studata", stuController.stuDataShow);

route.post("/stusearch", stuController.stuSearch);
route.get("/stuupdatepage", stuController.stuUpdatePage)

route.post("/studatadelete", stuController.stuDataDelete)

route.post("/editdisplay", stuController.editDisplay);

route.post("/editsave", stuController.editDataSave);

module.exports=route;