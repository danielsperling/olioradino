class DropTableContacts < ActiveRecord::Migration[5.2]

  def up
    drop_table :contacts
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
