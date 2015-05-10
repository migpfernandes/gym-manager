class CreateWorkgroups < ActiveRecord::Migration
  def self.up
    create_table :workgroups do |t|
      t.string :name
      t.references :classtype, index: true

      t.timestamps
    end
    add_index :workgroups, :name, unique: true
  end

  def self.down
  	drop_table :workgroups
  end
end
