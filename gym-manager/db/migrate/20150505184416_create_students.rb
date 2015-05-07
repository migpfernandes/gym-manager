class CreateStudents < ActiveRecord::Migration
  def self.up
    create_table :students do |t|
      t.timestamps null: false
      t.string :ccid
      t.string :name
      t.integer :age
      t.integer :weight
      t.decimal :height
    end
    add_index :students, :ccid
  end

  def self.down
    drop_table :students
  end
end
