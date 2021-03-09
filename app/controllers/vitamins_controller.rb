class VitaminsController < ApplicationController
  before_action :set_vitamin, only: [:show, :update, :destroy]

  # GET /vitamins
  def index
    @vitamins = Vitamin.all

    render json: @vitamins
  end
end
