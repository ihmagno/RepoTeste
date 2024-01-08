import express from "express";
let router = express.Router();

import courseService from "../services/CourseService.js";

router.post("/addCourse", async function(req, res){
    const courseModel ={
        firtName: req.body.firtName,
        lastName:req.body.lastName,  
        email:req.body.email,
        gender: req.body.gender
    }

    const course = await courseService.saveCourse(courseModel);
    return res.status(200).json(course);
});

router.get("/getAllCourse", async function(req, res){
    const allEvaluations = await courseService.getAllCourse();
    return res.status(200).json(allEvaluations);  
});

router.get("/course/:id", async function(req, res){
    const course = await courseService.getCourseById(req.param.id);
    return res.status(200).json(course);  
});

router.get("/deleteCourse/:id", async function(req, res){
    const course = await courseService.deleteCourseById(req.param.id);
    return res.status(200).json(course);  
});

router.put("/updateEvaluation/:id", async function(req, res){
    const courseModel ={
        firtName: req.body.firtName,
        lastName:req.body.lastName,  
        email:req.body.email,
        gender: req.body.gender
    }

    const evaluation = await evaluationService.updateEvaluationById(req.param.id, evaluationModel);
    return res.status(200).json(evaluation);
});

export default router;