class CreateStudentsWorkgroups < ActiveRecord::Migration
  def self.up
    create_table :students_workgroups, :id => false do |t|
        t.references :student
        t.references :workgroup
    end
    add_index :students_workgroups, [:student_id, :workgroup_id]
  end

  def self.down
    drop_table :students_workgroups
  end
end
