class CreateTrainers < ActiveRecord::Migration
  def self.up
    create_table :trainers do |t|
      t.string :name
      t.string :idDocument

      t.timestamps null:false
    end
    add_index :trainers, :idDocument, unique: true
  end

  def self.down
  	drop_table :trainers
  end
end
