import express from "express";
let router = express.Router();

import evaluationService from "../lgpd-back/services/EvaluationService.js";

router.post("/addEvaluation", async function(req, res){
    const evaluationModel ={
        firtName: req.body.firtName,
        lastName:req.body.lastName,  
        email:req.body.email,
        gender: req.body.gender
    }

    const evaluation = await evaluationService.saveEvaluation(evaluationModel);
    return res.status(200).json(evaluation);
});

router.get("/getAllEvaluation", async function(req, res){
    const allEvaluations = await evaluationService.getAllEvaluations();
    return res.status(200).json(allEvaluations);  
});

router.get("/evaluation/:id", async function(req, res){
    const evaluation = await evaluationService.getEvaluationById(req.param.id);
    return res.status(200).json(evaluation);  
});

router.get("/deleteEvaluation/:id", async function(req, res){
    const evaluation = await evaluationService.deleteEvaluationById(req.param.id);
    return res.status(200).json(evaluation);  
});

router.put("/updateEvaluation/:id", async function(req, res){
    const evaluationModel ={
        firtName: req.body.firtName,
        lastName:req.body.lastName,  
        email:req.body.email,
        gender: req.body.gender
    }

    const evaluation = await evaluationService.updateEvaluationById(req.param.id, evaluationModel);
    return res.status(200).json(evaluation);
});

export default router;