class CreateStudents < ActiveRecord::Migration
  def self.up
    create_table :students do |t|
      t.string :name
      t.date :birthDate
      t.decimal :weight
      t.decimal :height
      t.string :idDocument

      t.timestamps null:false
    end
    add_index :students, :idDocument, unique: true
  end

  def self.down
    drop_table :students
  end
end
