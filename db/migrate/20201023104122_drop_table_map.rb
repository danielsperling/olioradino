class DropTableMap < ActiveRecord::Migration[5.2]

  def up
    drop_table :maps
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
