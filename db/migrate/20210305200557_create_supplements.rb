class CreateSupplements < ActiveRecord::Migration[6.1]
  def change
    create_table :supplements do |t|
      t.string :name
      t.references :brand, null: false, foreign_key: true
      t.integer :price
      t.string :retail_url
      t.string :image_url
      t.string :nutrition_label_url

      t.timestamps
    end
  end
end
