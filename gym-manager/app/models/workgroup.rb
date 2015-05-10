class Workgroup < ActiveRecord::Base
  belongs_to :classtype

  has_and_belongs_to_many :students
  has_and_belongs_to_many :trainers

  def as_json(options = {})
  	super(options.merge({:include => {:students => {}, :trainers => {}, :classtype => {}}}))
  end
end
