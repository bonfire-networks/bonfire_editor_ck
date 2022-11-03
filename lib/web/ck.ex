defmodule Bonfire.Editor.Ck do
  @moduledoc """
  Component for embedding a CKeditor-based rich text editor
  """
  use Bonfire.UI.Common.Web, :stateless_component

  prop field_name, :string
  prop placeholder, :string
  prop content, :string
  prop textarea_class, :css_class
  prop insert_text, :string, default: nil

  # needed by apps to use this editor to know how to process text they receive from it
  def output_format, do: :markdown
end
