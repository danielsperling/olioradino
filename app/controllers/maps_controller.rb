class MapsController < ApplicationController
  def index
    @maps = Map.geocoded # returns flats with coordinates

    @markers = @maps.map do |map|
      {
        lat: map.latitude,
        lng: map.longitude
      }
    end
  end
end
