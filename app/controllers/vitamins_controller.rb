class VitaminsController < ApplicationController
  before_action :vitamin_params, only :create
  # GET /vitamins
  def index
    @vitamins = Vitamin.all

    render json: @vitamins
  end

  def create
    @vitamin = Vitamin.new(vitamin_params)
    if @vitamin.save
      render json: @vitamin, status: :created, location: @vitamin
    else
      render json: @vitamin.errors, status: :unprocessable_entity
    end
  end

  private

  def vitamin_params
    params.require(:vitamin).permit(:name, :weight)
  end
end
