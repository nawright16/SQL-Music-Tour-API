const stage = require('express').Router()
const db = require('../models')
const { Stage } = db


//CREATE
stage.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new stage',
            data: newStage
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//READ
stage.get('/', async(req,res) => {
    try {
        const foundStage= await Stage.findAll()
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

stage.get('/:id', async(req,res) => {
    try {
        const foundStage= await Stage.findOne({
            where:{stage_id: req.params.id}
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

//UPDATE
stage.put('/:id', async (req, res) => {
    try {
        const updatedStage = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStage} stage`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//DELETE
stage.delete('/:id', async (req, res) => {
    try {
        const deletedStage = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStage} stage`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = stage;