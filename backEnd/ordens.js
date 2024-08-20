const cors = require("cors");
const express = require("express");
const router = express.Router();
router.use(cors());

const dbknex = require("./data/dg_config");

router.get("/", async (req, res) => {
    try {
        const ordens = await dbknex("ordens").orderBy("id", "desc");
        res.status(200).json(ordens);        
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
});

router.post("/", async (req, res) => {
    const { modelo, serie, tipo, descricao, observacao } = req.body;

    if (!modelo || !serie || !tipo || !descricao || !observacao) {
        res.status(400).json({ msg: "Enviar modelo, serie, tipo, descricao e observacao da OS"});
        return;
    }

    try {
        const novo = await dbknex("ordens").insert({ modelo, serie, tipo, descricao, observacao });
        res.status(201).json({ id: novo[0] });          
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const { modelo, serie, tipo, descricao, observacao } = req.body;
    try {
        await dbknex("ordens").update({ modelo, serie, tipo, descricao, observacao }).where("id", id);
        res.status(200).json();       
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await dbknex("ordens").del().where({ id });
        res.status(200).json();       
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});

router.get("/filtro/:palavra", async (req, res) => {
    const palavra = req.params.palavra;
    try {
        const ordens = await dbknex("ordens")
            .where("id", "like", `%${palavra}%`)
            .orWhere("modelo", "like", `%${palavra}%`);
        res.status(200).json(ordens);        
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});
module.exports = router;