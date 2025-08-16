const salesService = require("../services/salesServices")

const createSale = async (req, res) => {
    try {
        const { amount } = req.body
        const newSaleId = await salesService.createSale(amount)
        res.status(201).json({id: newSaleId, message: "Venda criada com sucesso"})
    } catch (error){
        console.error("Errro ao criar venda: ", error)
        res.status(500).json({error: "Erro interno do servidor"})
    }
}


const getSales = async (req, res) =>{
    try{
        const sales = await salesService.getSales()
        res.json(sales)
    } catch (error){
        console.error("Erro ao buscar vendas: ", error)
        res.status(500).json({error: "Erro interno do servidor"})
    }
}

module.exports = {createSale, getSales}