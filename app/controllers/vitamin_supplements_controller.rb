class VitaminSupplementsController < ApplicationController
  before_action :set_vitamin

  def add_vitamin_to_supplement
    @supplement = Supplement.find(params[:id])
    @vitamin = Vitamin.create(vitamin_params)
d
    @supplement.vitamins << @vitamin

    render json: @vitamin, include: :vitamins
  end

  private

  def vitamin_params
    params.requi re(:vitamin).permit(:name, :weight)
  end
end
