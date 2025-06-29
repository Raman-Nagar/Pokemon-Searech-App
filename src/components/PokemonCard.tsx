"use client";
import Link from "next/link";
import React from "react";
import { PokemonSummary } from "@/types/pokemon";
import Image from "next/image";
import { useFavorites } from "@/context/FavoritesContext";
import Button from "@/ui/button";

interface PokemonCardProps {
  pokemon: PokemonSummary;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFav = !!favorites.find(({ name }) => name === pokemon.name);

  return (
    <div className="border rounded-lg p-8 flex flex-col items-center relative">
      <Button
        btnText={isFav ? "★" : "☆"}
        handleClick={() => toggleFavorite(pokemon)}
        className={`absolute top-1 sm:top-2 right-2 ${
          isFav ? "text-amber-400" : ""
        }`}
      />

      <Link
        href={`/pokemon/${pokemon.name}`}
        className="border rounded-lg p-4 hover:shadow-lg flex flex-col items-center"
      >
        <Image
          className="dark:invert w-20 h-20"
          src={pokemon.spriteUrl}
          alt={pokemon.name}
          width={180}
          height={38}
        />
        <h3 className="capitalize mt-2">{pokemon.name}</h3>
        <div className="mt-1 text-xs text-gray-600">
          {pokemon.types.join(", ")}
        </div>
      </Link>
    </div>
  );
};
