json.pokemon do 
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type
  json.thumbnail_image_url asset_path("thumbnail_snaps/#{@pokemon.thumbnail_image_url}")
  json.main_image_url asset_path("main_snaps/#{@pokemon.main_image_url}")
end