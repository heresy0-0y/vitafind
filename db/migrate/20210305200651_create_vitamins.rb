class CreateVitamins < ActiveRecord::Migration[6.1]
  def change
    create_table :vitamins do |t|
      t.string :name
      t.integer :weight

      t.timestamps
    end
  end
end
