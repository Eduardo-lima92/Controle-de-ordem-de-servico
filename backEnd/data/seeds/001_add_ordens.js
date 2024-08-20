exports.seed = function(knex) {
  return knex("ordens").del()
    .then(function () {
      return knex("ordens").insert([
        {
        modelo: "Imec 12", serie:"bx-23108945", tipo:"preventiva",
        descricao:"Manutenção preventiva", observacao: "no cliente",
        },
        {
          modelo: "sv-300", serie:"aq-65108655", tipo:"corretiva",
          descricao:"Vazamento pneumatico", observacao: "no cliente",
        },
        {
          modelo: "wato ex-65", serie:"ef-54675945", tipo:"preventiva",
          descricao:"Manutenção preventiva", observacao: "no cliente",
        },
        {
          modelo: "central de monitorizacao", serie:"af-54306785", tipo:"corretiva",
          descricao:"reinstalacao do software", observacao: "Localizacao equipamento: A4",
        },
      ])
    })
}
