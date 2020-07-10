class AddAddressToMap < ActiveRecord::Migration[5.2]
  def change
    add_column :maps, :address, :string
  end
end
