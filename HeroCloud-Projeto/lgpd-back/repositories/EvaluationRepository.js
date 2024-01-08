import Evaluation from "../models/Evaluation.js"

const saveEvaluation = async(EvaluationModel)=>{
    const save = await Evaluation.create(EvaluationModel);
    return save
}

const getAllEvaluation = async()=>{
    return await Evaluation.findAll({
        order: [
            ['id', 'ASC']
        ]
    })
}

const getEvaluationById = async(id)=>{
    return await Evaluation.findByPk(id)
}

const deleteEvaluationById = async(id)=>{
    return await Evaluation.destroy({where: {id: id}});
}

const updateEvaluationById = async(id, EvaluationModel)=>{
    try {
        const result = await User.update(EvaluationModel, {where: {id: id}});
        if(result[0]===1){
            return{message: "user update with sucess"};
        }
        else{
            return{message: "can not find $(id) to update", status: 404};
        }
    } catch(error){
        console.error();
    }
}

const factory ={
    saveEvaluation,
    getAllEvaluation,
    getEvaluationById,
    deleteEvaluationById,
    updateEvaluationById
}

export default factory;