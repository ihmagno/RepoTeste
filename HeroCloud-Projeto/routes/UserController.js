import express from "express";
let router = express.Router();

import userService from "../lgpd-back/services/UserService.js";

router.post("/addUser", async function(req, res){
    const userModel ={
        firtName: req.body.firtName,
        lastName:req.body.lastName,  
        email:req.body.email,
        gender: req.body.gender
    }

    const user = await userService.saveUser(userModel);
    return res.status(200).json(user);
});

router.get("/getAllUser", async function(req, res){
    const allUsers = await userService.getAllUsers();
    return res.status(200).json(allUsers);  
});

router.get("/user/:id", async function(req, res){
    const user = await userService.getUserById(req.param.id);
    return res.status(200).json(user);  
});

router.get("/deletUser/:id", async function(req, res){
    const user = await userService.deleteUserById(req.param.id);
    return res.status(200).json(user);  
});

router.put("/updateUser/:id", async function(req, res){
    const userModel ={
        firtName: req.body.firtName,
        lastName:req.body.lastName,  
        email:req.body.email,
        gender: req.body.gender
    }

    const user = await userService.updateUserById(req.param.id, userModel);
    return res.status(200).json(user);
});

export default router;