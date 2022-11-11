const database = require("../db/dbconfig");
const Produto = require("../models/produto");

async function gravarProduto(dados) {
  try {
    const novoProduto = await Produto.create({
      codigo: dados.codigo,
      descricao: dados.descricao,
      unidademedida: dados.unidademedida,
      precounid: dados.precounid,
      estoque: dados.estoque,
    });
    return true;
  } catch (error) {
    console.log("Erro ao incluir um produto: "+error)
    return false;
  }
}

async function buscaTodosProdutos() {
  return await Produto.findAll();
}

async function buscaProdutos(codigoProduto) {
  return await Produto.findAll({
    where: {
      codigo: codigoProduto,
    },
  });
}

module.exports = {
  gravarProduto,
  buscaProdutos,
  buscaTodosProdutos,
};
