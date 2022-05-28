defmodule Bonfire.Editor.Ck do
  @moduledoc """
  Component for embedding a CKeditor-based rich text editor
  """
  use Bonfire.UI.Common.Web, :stateless_component

  prop field_name, :string
  prop placeholder, :string
  prop content, :string
  prop textarea_class, :string
  prop insert_text, :string

  def output_format, do: :markdown # needed by apps to use this editor to know how to process text they receive from it

end
