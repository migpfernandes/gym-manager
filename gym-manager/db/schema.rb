# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150509144556) do

  create_table "class_types", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "class_types", ["name"], name: "index_class_types_on_name", unique: true

  create_table "comments", force: true do |t|
    t.string   "body"
    t.integer  "upvotes"
    t.integer  "post_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "comments", ["post_id"], name: "index_comments_on_post_id"

  create_table "posts", force: true do |t|
    t.string   "title"
    t.string   "link"
    t.integer  "upvotes"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "students", force: true do |t|
    t.string   "name"
    t.date     "birthDate"
    t.decimal  "weight"
    t.decimal  "height"
    t.string   "idDocument"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "students", ["idDocument"], name: "index_students_on_idDocument", unique: true

  create_table "students_workgroups", id: false, force: true do |t|
    t.integer "student_id"
    t.integer "workgroup_id"
  end

  add_index "students_workgroups", ["student_id", "workgroup_id"], name: "index_students_workgroups_on_student_id_and_workgroup_id"

  create_table "trainers", force: true do |t|
    t.string   "name"
    t.string   "idDocument"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "trainers", ["idDocument"], name: "index_trainers_on_idDocument", unique: true

  create_table "trainers_workgroups", id: false, force: true do |t|
    t.integer "trainer_id"
    t.integer "workgroup_id"
  end

  add_index "trainers_workgroups", ["trainer_id", "workgroup_id"], name: "index_trainers_workgroups_on_trainer_id_and_workgroup_id"

  create_table "work_groups", force: true do |t|
    t.string   "name"
    t.integer  "classtype_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "work_groups", ["classtype_id"], name: "index_work_groups_on_classtype_id"
  add_index "work_groups", ["name"], name: "index_work_groups_on_name", unique: true

end
