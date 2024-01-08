import express from "express";
let router = express.Router();

import teacherService from "../lgpd-back/services/TeacherService.js";

router.post("/addTeacher", async function(req, res){
    const teacherModel ={
        firtName: req.body.firtName,
        lastName:req.body.lastName,  
        email:req.body.email,
        gender: req.body.gender
    }

    const teacher = await teacherService.saveTeacher(teacherModel);
    return res.status(200).json(teacher);
});

router.get("/getAllTeacher", async function(req, res){
    const allTeachers = await teacherService.getAllTeachers();
    return res.status(200).json(allTeachers);  
});

router.get("/teacher/:id", async function(req, res){
    const Teacher = await teacherService.getTeacherById(req.param.id);
    return res.status(200).json(teacher);  
});

router.get("/deletTeacher/:id", async function(req, res){
    const Teacher = await teacherService.deleteTeacherById(req.param.id);
    return res.status(200).json(teacher);  
});

router.put("/updateTeacher/:id", async function(req, res){
    const teacherModel ={
        firtName: req.body.firtName,
        lastName:req.body.lastName,  
        email:req.body.email,
        gender: req.body.gender
    }

    const teacher = await teacherService.updateTeacherById(req.param.id, teacherModel);
    return res.status(200).json(teacher);
});

export default router;