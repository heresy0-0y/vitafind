# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Supplement.destroy_all
Brand.destroy_all
Vitamin.destroy_all

Brand.create([{name: 'Hum', about_url: 'https://www.humnutrition.com', logo_url: 'https://cdn.humnutrition.com/v2/v1.108.8/13722bffcdd726c6a3db261c3fd5662a.svg'}, {name: 'Garden of Life', logo_url: 'https://www.gardenoflife.com/media/logo/stores/1/logo-01-min.png', about_url: 'https://www.gardenoflife.com/why-gol'}, {name: 'Ancient Nutrition', about_url: 'https://www.ancientnutrition.com/about', logo_url: 'https://www.ancientnutrition.com/wp-content/uploads/2019/01/Ancient-Nutrition-logo-white.svg'}])
Vitamin.create([{name: 'A'}, {name: 'B-12'}, {name: 'biotin'}, {name: 'B-6'}, {name: 'folate (folic acid)'}, {name: 'thiamin'}, {name: 'riboflavin'}, {name: 'niacin'}, {name: 'pantothenic acid'}, {name: 'C'}, {name: 'D'}, {name: 'E'}, {name: 'K'}, {name: 'choline'}, {name: 'chloride'}, {name: 'calcium'}, {name: 'chromium'}, {name: 'copper'}, {name: 'iodine'}, {name: 'iron'}, {name: 'magnesium'}, {name: 'manganese'}, {name: 'molybdenum'}, {name: 'phosphorus'}, {name: 'potassium'}, {name: 'selenium'}, {name: 'sodium'}, {name: 'zinc'}])