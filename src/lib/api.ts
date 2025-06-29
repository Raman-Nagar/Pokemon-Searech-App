import { PokemonSummary, PokemonDetail, Types } from "@/types/pokemon";

const API_BASE = "https://pokeapi.co/api/v2";

export async function fetchTypes(): Promise<string[]> {
    const res = await fetch(`${API_BASE}/type`);
    if (!res.ok) throw new Error("Failed to fetch types");
    const data = await res.json();

    return data.results.map((t: { name: string }) => t.name);
}

export async function fetchPokemonList(limit = 150): Promise<PokemonSummary[]> {
    const res = await fetch(`${API_BASE}/pokemon?limit=${limit}`);
    if (!res.ok) throw new Error("Failed to fetch Pokémon list");
    const data = await res.json();

    const details: PokemonSummary[] = [];
    for (const p of data.results as { name: string; url: string }[]) {
        try {
            const detailRes = await fetch(`${API_BASE}/pokemon/${p.name}`);
            if (!detailRes.ok) throw new Error(`Failed to fetch detail for ${p.name}`);
            const detailJson = await detailRes.json();
            details.push({
                name: p.name,
                url: `${API_BASE}/pokemon/${p.name}`,
                spriteUrl: detailJson.sprites.front_default,
                types: detailJson.types.map((t: Types) => t.type.name),
            });
        } catch (err) {
            console.error(`Error loading ${p.name}:`, err);
        }
    }

    return details;
}

export async function fetchPokemonDetail(name: string): Promise<PokemonDetail> {
    const res = await fetch(`${API_BASE}/pokemon/${name}`);
    if (!res.ok) throw new Error("Failed to fetch Pokémon detail");
    return res.json();
}