class AddImageIdToBook2s < ActiveRecord::Migration[5.2]
  def change
    add_column :book2s, :image_id, :string
  end
end
