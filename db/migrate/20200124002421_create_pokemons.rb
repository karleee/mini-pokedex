class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.string :name, null: false
      t.integer :attack, null: false
      t.integer :defense, null: false 
      t.string :poke_type, null: false 
      t.string :moves, null: false, array: true
      t.string :thumbnail_image_url, null: false 
      t.string :main_image_url, null: false
      t.timestamps
    end
  end
end
