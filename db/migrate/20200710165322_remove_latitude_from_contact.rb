class RemoveLatitudeFromContact < ActiveRecord::Migration[5.2]
  def change
    remove_column :contacts, :latitude, :float
  end
end
