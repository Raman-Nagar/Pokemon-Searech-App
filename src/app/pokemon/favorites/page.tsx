import React from "react";
import { Metadata } from "next";
import FavoritePokemonListView from "@/view/favorite-pokemon-list-view";

export const metadata: Metadata = {
  title: 'Favorite Pokémon',
};
export default function FavoritePokemonPage() {

  return (
    <FavoritePokemonListView />
  );
}