class VitaminsController < ApplicationController
  before_action :set_vitamin, only: [:show, :update, :destroy]

  # GET /vitamins
  def index
    @vitamins = Vitamin.all

    render json: @vitamins
  end

  # GET /vitamins/1
  def show
    render json: @vitamin
  end

  # POST /vitamins
  def create
    @vitamin = Vitamin.new(vitamin_params)

    if @vitamin.save
      render json: @vitamin, status: :created, location: @vitamin
    else
      render json: @vitamin.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /vitamins/1
  def update
    if @vitamin.update(vitamin_params)
      render json: @vitamin
    else
      render json: @vitamin.errors, status: :unprocessable_entity
    end
  end

  # DELETE /vitamins/1
  def destroy
    @vitamin.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vitamin
      @vitamin = Vitamin.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def vitamin_params
      params.require(:vitamin).permit(:name)
    end
end
