defmodule Bonfire.Editor.Ck do
  @moduledoc "./README.md" |> File.stream!() |> Enum.drop(1) |> Enum.join()

  use Bonfire.UI.Common.Web, :stateless_component

  prop field_name, :string
  prop placeholder, :string, default: "Type something..."
  prop content, :string
  prop textarea_class, :css_class
  prop insert_text, :string, default: nil

  # needed by apps to use this editor to know how to process text they receive from it
  def output_format, do: :markdown
end
