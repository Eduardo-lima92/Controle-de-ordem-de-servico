exports.up = function(knex) {
    return knex.schema.createTable("ordens", (table) => {
        table.increments();
        table.string("modelo", 80).notNullable();
        table.string("serie", 15).notNullable();
        table.string("tipo", 20).notNullable();
        table.string("descricao", 100).notNullable();
        table.string("observacao", 80).notNullable();
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("ordens");
  
};
