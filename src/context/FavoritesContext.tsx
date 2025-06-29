"use client";
import { PokemonSummary } from "@/types/pokemon";
import React, { createContext, useContext, useEffect, useState } from "react";

interface FavoritesContextType {
  favorites: PokemonSummary[];
  toggleFavorite: (pokemon: PokemonSummary) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<PokemonSummary[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (pokemon: PokemonSummary) => {
    setFavorites((prev: PokemonSummary[]) =>
      prev.find(({ name }) => name === pokemon.name)
        ? prev.filter((n) => n.name !== pokemon.name)
        : [...prev, pokemon]
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export function useFavorites(): FavoritesContextType {
  const ctx = useContext(FavoritesContext);
  if (!ctx)
    throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
