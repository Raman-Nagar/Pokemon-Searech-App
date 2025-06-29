"use client";
import Link from "next/link";
import React from "react";

interface PokemonFiltersProps {
  types: string[];
  searchTerm: string;
  selectedType: string;
  onSearchChange: (val: string) => void;
  onTypeChange: (val: string) => void;
}

export const PokemonFilters = ({
  types,
  searchTerm,
  selectedType,
  onSearchChange,
  onTypeChange,
}: PokemonFiltersProps) => (
  <div className="flex flex-col sm:flex-row gap-4 mb-6">
    <input
      type="text"
      placeholder="Search Pokémon..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="p-2 border rounded"
    />
    <select
      value={selectedType}
      onChange={(e) => onTypeChange(e.target.value)}
      className="p-2 border rounded capitalize"
    >
      <option value="all">Pokémon Types</option>
      {types.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </select>
    <Link
      href={"/pokemon/favorites"}
      className="border rounded p-2 hover:text-amber-400 transition-all ease-in-out duration-300"
    >
      ★ Favorites
    </Link>
  </div>
);
