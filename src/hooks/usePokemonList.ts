"use client";
import { useState, useEffect } from "react";
import { PokemonSummary } from "@/types/pokemon";

interface FilterOptions {
    searchTerm: string;
    selectedType: string;
}

export function usePokemonList(
    allList: PokemonSummary[],
    options: FilterOptions
) {
    const { searchTerm, selectedType } = options;
    const [filtered, setFiltered] = useState<PokemonSummary[]>(allList);

    useEffect(() => {
        let list = allList;
        if (selectedType !== "all") {
            list = list.filter((p) => p.types.includes(selectedType));
        }
        if (searchTerm) {
            list = list.filter((p) =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        setFiltered(list);
    }, [allList, searchTerm, selectedType]);

    return filtered;
}