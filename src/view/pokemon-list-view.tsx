"use client";
import React, { useState } from "react";
import { PokemonSummary } from "@/types/pokemon";
import { usePokemonList } from "@/hooks/usePokemonList";
import { PokemonFilters } from "@/components/PokemonFilters";
import { PokemonCard } from "@/components/PokemonCard";

interface PokemonListViewProps {
  types: string[];
  allPokemon: PokemonSummary[];
}

export default function PokemonListView({
  types,
  allPokemon,
}: PokemonListViewProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const filtered = usePokemonList(allPokemon, { searchTerm, selectedType });

  return (
    <main className="p-6">
      <PokemonFilters
        types={types}
        searchTerm={searchTerm}
        selectedType={selectedType}
        onSearchChange={setSearchTerm}
        onTypeChange={setSelectedType}
      />
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filtered.map((p) => (
          <PokemonCard key={p.name} pokemon={p} />
        ))}
      </div>
    </main>
  );
}
