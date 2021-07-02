class Book2sController < ApplicationController

   def create
    # １. データを新規登録するためのインスタンス作成
    book = Book.new(list_params)
    # ２. データをデータベースに保存するためのsaveメソッド実行
    book.save
    # ３. トップ画面へリダイレクト
    redirect_to books_path
   end

  private
  # ストロングパラメータ
  def list_params
    params.permit(:title, :body, :image)
  end

end
