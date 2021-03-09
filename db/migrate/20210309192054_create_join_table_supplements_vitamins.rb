class CreateJoinTableSupplementsVitamins < ActiveRecord::Migration[6.1]
  def change
    create_join_table :vitamins, :supplements do |t|
      t.index [:vitamin_id, :supplement_id]
      t.index [:supplement_id, :vitamin_id]
    end
  end
end
