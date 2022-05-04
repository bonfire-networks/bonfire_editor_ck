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
end
