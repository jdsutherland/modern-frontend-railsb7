["all", Rails.env].each do |seed|
  seed_file = Rails.root.join("db", "seeds", "#{seed}.rb")

  if File.exists?(seed_file)
    require seed_file

  end
end
