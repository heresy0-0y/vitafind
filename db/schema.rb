# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_09_192054) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "brands", force: :cascade do |t|
    t.string "name"
    t.string "logo_url"
    t.string "about_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "supplements", force: :cascade do |t|
    t.string "name"
    t.bigint "brand_id", null: false
    t.integer "price"
    t.string "retail_url"
    t.string "image_url"
    t.string "nutrition_label_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["brand_id"], name: "index_supplements_on_brand_id"
  end

  create_table "supplements_vitamins", id: false, force: :cascade do |t|
    t.bigint "vitamin_id", null: false
    t.bigint "supplement_id", null: false
    t.index ["supplement_id", "vitamin_id"], name: "index_supplements_vitamins_on_supplement_id_and_vitamin_id"
    t.index ["vitamin_id", "supplement_id"], name: "index_supplements_vitamins_on_vitamin_id_and_supplement_id"
  end

  create_table "vitamins", force: :cascade do |t|
    t.string "name"
    t.integer "weight"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "supplements", "brands"
end