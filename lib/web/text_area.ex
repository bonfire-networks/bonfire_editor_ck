defmodule Bonfire.Editor.Ck.TextArea do
  use Bonfire.Web, :stateless_component

  prop field_name, :string
  prop content_placeholder, :string
end
