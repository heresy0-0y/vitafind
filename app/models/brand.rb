class Brand < ApplicationRecord
  has_many :supplements

  # third party validation for retail sites ?
end
