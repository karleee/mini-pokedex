# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Pokemon.destroy_all

  pokemon = {
    '1' => {
      'name' => 'Bulbasaur',
      'attack' => 49,
      'defense' => 49,
      'poke_type' => 'grass',
      'moves' => [
        'tackle',
        'vine whip'
      ]
    },
    '2' => {
      'name' => 'Ivysaur',
      'attack' => 62,
      'defense' => 63,
      'poke_type' => 'grass',
      'moves' => [
        'tackle',
        'vine whip',
        'razor leaf'
      ]
    },
    '3' => {
      'name' => 'Venusaur',
      'attack' => 82,
      'defense' => 83,
      'poke_type' => 'grass',
      'moves' => [
        'tackle',
        'vine whip',
        'razor leaf'
      ]
    },
    '4' => {
      'name' => 'Charmander',
      'attack' => 52,
      'defense' => 43,
      'poke_type' => 'fire',
      'moves' => [
        'scratch',
        'ember',
        'metal claw'
      ]
    },
    '5' => {
      'name' => 'Charmeleon',
      'attack' => 64,
      'defense' => 58,
      'poke_type' => 'fire',
      'moves' => [
        'scratch',
        'ember',
        'metal claw',
        'flamethrower'
      ]
    },
    '6' => {
      'name' => 'Charizard',
      'attack' => 84,
      'defense' => 78,
      'poke_type' => 'fire',
      'moves' => [
        'flamethrower',
        'wing attack',
        'slash',
        'metal claw'
      ]
    },
    '7' => {
      'name' => 'Squirtle',
      'attack' => 48,
      'defense' => 65,
      'poke_type' => 'water',
      'moves' => [
        'tackle',
        'bubble',
        'water gun'
      ]
    },
    '8' => {
      'name' => 'Wartortle',
      'attack' => 63,
      'defense' => 80,
      'poke_type' => 'water',
      'moves' => [
        'tackle',
        'bubble',
        'water gun',
        'bite'
      ]
    },
    '9' => {
      'name' => 'Blastoise',
      'attack' => 83,
      'defense' => 100,
      'poke_type' => 'water',
      'moves' => [
        'hydro pump',
        'bubble',
        'water gun',
        'bite'
      ]
    },
    '10' => {
      'name' => 'Caterpie',
      'attack' => 30,
      'defense' => 35,
      'poke_type' => 'bug',
      'moves' => [
        'tackle'
      ]
    },
    '11' => {
      'name' => 'Metapod',
      'attack' => 20,
      'defense' => 55,
      'poke_type' => 'bug',
      'moves' => [
         'tackle',
         'string shot',
         'bug bite'
      ]
    },
    '12' => {
      'name' => 'Butterfree',
      'attack' => 45,
      'defense' => 50,
      'poke_type' => 'bug',
      'moves' => [
        'confusion',
        'gust',
        'psybeam',
        'silver wind'
      ]
    },
    '13' => {
      'name' => 'Weedle',
      'attack' => 35,
      'defense' => 30,
      'poke_type' => 'bug',
      'moves' => [
        'poison sting'  
      ]
    },
    '14' => {
      'name' => 'Kakuna',
      'attack' => 25,
      'defense' => 50,
      'poke_type' => 'bug',
      'moves' => [
        'poison sting',
        'string shot',
        'bug bite'
      ]
    },
    '15' => {
      'name' => 'Beedrill',
      'attack' => 150,
      'defense' => 40,
      'poke_type' => 'bug',
      'moves' => [
         'twineedle',
         'fury attack',
         'rage',
         'pursuit'
      ]
    },
    '16' => {
      'name' => 'Pidgey',
      'attack' => 45,
      'defense' => 40,
      'poke_type' => 'normal',
      'moves' => [
        'tackle',
        'gust'
      ]
    },
    '17' => {
      'name' => 'Pidgeotto',
      'attack' => 60,
      'defense' => 55,
      'poke_type' => 'normal',
      'moves' => [
        'tackle',
        'gust',
        'wing attack'
      ]
    },
    '18' => {
      'name' => 'Pidgeot',
      'attack' => 80,
      'defense' => 75,
      'poke_type' => 'normal',
      'moves' => [
        'tackle',
        'gust',
        'wing attack'
      ]
    },
    '19' => {
      'name' => 'Rattata',
      'attack' => 56,
      'defense' => 35,
      'poke_type' => 'normal',
      'moves' => [
        'tackle',
        'hyper fang'
      ]
    },
    '20' => {
      'name' => 'Raticate',
      'attack' => 81,
      'defense' => 60,
      'poke_type' => 'normal',
      'moves' => [
        'tackle',
        'hyper fang'
      ]
    },
    '21' => {
      'name' => 'Spearow',
      'attack' => 60,
      'defense' => 30,
      'poke_type' => 'normal',
      'moves' => [
        'peck'
      ] 
    },
    '22' => {
      'name' => 'Fearow',
      'attack' => 90,
      'defense' => 65,
      'poke_type' => 'normal',
      'moves' => [
         'peck',
         'drill peck'
      ],
    },
    '23' => {
      'name' => 'Ekans',
      'attack' => 60,
      'defense' => 44,
      'poke_type' => 'poison',
      'moves' => [
         'poison sting',
         'bite'
      ],
    },
    '24' => {
      'name' => 'Arbok',
      'attack' => 85,
      'defense' => 69,
      'poke_type' => 'poison',
      'moves' => [
         'poison sting',
         'bite',
         'acid'
      ],
    },
    '25' => {
      'name' => 'Pikachu',
      'attack' => 55,
      'defense' => 40,
      'poke_type' => 'electric',
      'moves' => [
        'growl',
        'electro ball',
        'feint'
      ]
    } 
  }

  pokemon = pokemon.map do |num, stats|
    stats['thumbnail_image_url'] = "#{num}.png"
    stats['main_image_url'] = "#{num}.gif"
    stats
  end

  Pokemon.create!(pokemon)
end
