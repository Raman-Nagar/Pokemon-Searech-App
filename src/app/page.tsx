import React from "react";
import { fetchPokemonList, fetchTypes } from "@/lib/api";
import PokemonListView from "@/view/pokemon-list-view";

export default async function PokemonListPage() {
  const types = await fetchTypes();
  const allPokemon = await fetchPokemonList();

  return <PokemonListView types={types} allPokemon={allPokemon} />;
}
