class CreateTrainersWorkGroups < ActiveRecord::Migration
  def self.up
    create_table :trainers_workgroups, :id => false do |t|
        t.references :trainer
        t.references :workgroup
    end
    add_index :trainers_workgroups, [:trainer_id, :workgroup_id]
  end

  def self.down
    drop_table :trainers_workgroups
  end
end
