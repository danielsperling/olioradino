class PagesController < ApplicationController

  def home
  end

  def about
  end

  def products
  end

  def contact
    @contact = Page.new(params[:page])
  end

  def create
    @contact = Page.new(params[:page])
    @contact.request = request
    respond_to do |format|
      if @contact.deliver
        # re-initialize Home object for cleared form
        @contact = Page.new
        format.html { render 'index'}
        format.js   { flash.now[:success] = @message = "Thank you for your message. I'll get back to you soon!" }
      else
        format.html { render 'index' }
        format.js   { flash.now[:error] = @message = "Message did not send." }
      end
    end
  end
end
