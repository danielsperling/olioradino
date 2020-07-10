class RemoveLongitudeFromContact < ActiveRecord::Migration[5.2]
  def change
    remove_column :contacts, :longitude, :float
  end
end
