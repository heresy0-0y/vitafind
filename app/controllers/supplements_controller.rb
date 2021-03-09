class SupplementsController < ApplicationController
  before_action :set_supplement, only: [:show, :update, :destroy]

  # GET /supplements
  def index
    @supplements = Supplement.all

    render json: @supplements
  end

  # GET /supplements/1
  def show
    render json: @supplement, include: :vitamins
  end

  # POST /supplements
  def create
    @supplement = Supplement.new(supplement_params)

    if @supplement.save
      render json: @supplement, status: :created, location: @supplement
    else
      render json: @supplement.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /supplements/1
  def update
    if @supplement.update(supplement_params)
      render json: @supplement
    else
      render json: @supplement.errors, status: :unprocessable_entity
    end
  end

  # DELETE /supplements/1
  def destroy
    @supplement.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_supplement
      @supplement = Supplement.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def supplement_params
      params.require(:supplement).permit(:name, :brand_id, :price, :retail_url, :image_url, :nutrition_label_url)
    end
end
