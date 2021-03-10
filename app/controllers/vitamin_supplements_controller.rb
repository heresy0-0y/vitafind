class VitaminSupplementsController < ApplicationController
  
  def add_vitamin_to_supplement
    @supplement = Supplement.find(params[:id])
    @vitamin = Vitamin.find(params[:vitamin_id])

    @supplement.vitamins << @vitamin

    render json: @vitamin, include: :vitamins
  end
end
