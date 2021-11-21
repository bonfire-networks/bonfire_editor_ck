defmodule Bonfire.Editor.Ck.Bubble do
  use Bonfire.Web, :stateless_component

  prop field_name, :string
  prop content_placeholder, :string
  prop textarea_class, :string
end
