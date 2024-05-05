const { GamesCompleted }= require('../models');

const gamesCompletedData = [
  {
    user_id: 1,
    game_id: 6,
  },
  {
    user_id: 2,
    game_id: 6,
  },
 
  {
    user_id: 3,
    game_id: 5,
  },
 
  {
    user_id: 4,
    game_id: 8,
  },
 
  {
    user_id: 2,
    game_id: 9,
  },
 
];

const seedGamesCompleted = () => GamesCompleted.bulkCreate(gamesCompletedData);

module.exports = seedGamesCompleted;