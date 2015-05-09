class CreateClassTypes < ActiveRecord::Migration
  def self.up
    create_table :class_types do |t|
      t.string :name

      t.timestamps
    end
    add_index :class_types, :name, unique: true
  end

  def self.down
  	drop_table :class_types
  end
end
