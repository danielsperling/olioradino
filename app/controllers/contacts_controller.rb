class ContactsController < ApplicationController

  def new
    @contact = Contact.new
    @address = Address.geocoded # returns flats with coordinates

    @markers = @address.map do |address|
      {
        lat: flat.latitude,
        lng: flat.longitude
      }
    end
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:error] = nil
      # redirect_to :controller => "contacts", :action => "new"
    else
      flash.now[:error] = 'Cannot send message.'
      render :new
    end
  end
end



