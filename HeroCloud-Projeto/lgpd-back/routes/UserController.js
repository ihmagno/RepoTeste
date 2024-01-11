import express from "express";
import userService from "../services/UserService.js";
import multer from "multer";
import process from "process"

let router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, "./images")
    },
    filename: function (req, file, callback){
        callback(null, req.body.firstName+"_"+req.body.lastName+"_"+Date.now()+file.originalname);
    }
});

const upload = multer({storage: storage}).single('file');

//salvar usuário 
router.post("/addUser", async function(req, res){
    const userModel ={
        firtName: req.body.firtName,
        lastName:req.body.lastName,  
        email:req.body.email,
        gender: req.body.gender,
        profile_picture: req.file.path
    }

    const user = await userService.saveUser(userModel);
    return res.status(200).json(user);
});

//buscar todos usuários
router.get("/getAllUser", async function(req, res){
    const allUsers = await userService.getAllUsers();
    return res.status(200).json(allUsers);  
});

//buscar por id
router.get("/user/:id", async function(req, res){
    const user = await userService.getUserById(req.param.id);
    return res.status(200).json(user);  
});

//deletar usuário por id
router.get("/deletUser/:id", async function(req, res){
    const user = await userService.deleteUserById(req.param.id);
    return res.status(200).json(user);  
});

// atualizar usuário por id
router.put("/updateUser/:id", async function(req, res){
    const userModel ={
        firtName: req.body.firtName,
        lastName:req.body.lastName,  
        email:req.body.email,
        gender: req.body.gender,
        profile_picture: req.file.path
    }

    const user = await userService.updateUserById(req.param.id, userModel);
    return res.status(200).json(user);
});

export default router;