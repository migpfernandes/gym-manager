class CreateClasstypes < ActiveRecord::Migration
  def self.up
    create_table :classtypes do |t|
      t.string :name

      t.timestamps
    end
    add_index :classtypes, :name, unique: true
  end

  def self.down
  	drop_table :classtypes
  end
end
