/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  await knex('mascotes').del()
  await knex('mascotes').insert([
    {id: 1,nome: 'Galo Doido', clube: 'Atlético-Mineiro',  },
    {id: 2,nome: 'Guerreirinho', time: 'Fluminense'},
    {id: 3,nome: 'Super-Man', time: 'Bahia'}
  ]);
};
