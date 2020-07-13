class ContactsController < ApplicationController
  def new
    @contact = Contact.new
    @maps = Map.geocoded # returns flats with coordinates

    @markers = @maps.map do |map|
      {
        lat: map.latitude,
        lng: map.longitude,
        name: map.name,
        infoWindow: render_to_string(partial: "/contacts/map_box", locals: { map: map }),
        image_url: helpers.asset_url('olive-oil.png')
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
