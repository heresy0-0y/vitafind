class Supplement < ApplicationRecord
  belongs_to :brand
  has_and_belongs_to_many :vitamins
end
