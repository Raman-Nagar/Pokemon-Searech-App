"use client";
import React from "react";
import { Breadcrumb } from "@/ui/breadcrumb";
import { PokemonCard } from "@/components/PokemonCard";
import { useFavorites } from "@/context/FavoritesContext";
import { PokemonSummary } from "@/types/pokemon";

export default function FavoritePokemonListView() {
  const { favorites } = useFavorites();

  return (
    <main className="p-6">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Favorites" }]}
      />
      {favorites.length === 0 ? (
        <p>You have no favorite Pokémon yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {favorites.map((pokemon: PokemonSummary) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      )}
    </main>
  );
}
