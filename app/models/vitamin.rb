class Vitamin < ApplicationRecord
  has_and_belongs_to_many :supplements
end
