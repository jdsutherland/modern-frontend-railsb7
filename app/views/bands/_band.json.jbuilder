json.extract!(band, :id, :name, :description, :genere_tags, :created_at, :updated_at)
json.url(band_url(band, format: :json))
