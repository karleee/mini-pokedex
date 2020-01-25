@pokemon.each do | poke |
  json.set! poke.id do 
    json.extract! poke, :id, :name
    json.thumbnail_image_url asset_path("thumbnail_snaps/#{poke.thumbnail_image_url}")
    json.main_image_url asset_path("main_snaps/#{poke.main_image_url}")
  end
end