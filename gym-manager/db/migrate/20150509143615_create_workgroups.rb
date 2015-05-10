class CreateWorkgroups < ActiveRecord::Migration
  def self.up
    create_table :workgroups do |t|
      t.string :name

      t.timestamps
    end
    add_index :workgroups, :name, unique: true
    add_reference :workgroups, :classtype, index: true
  end

  def self.down
  	drop_table :workgroups
  end
end
