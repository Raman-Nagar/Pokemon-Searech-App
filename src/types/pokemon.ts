export interface PokemonSummary {
    name: string;
    url: string;
    spriteUrl: string;
    types: string[];
}

export interface Types { slot: number; type: { name: string; url: string } };

export interface Stats { base_stat: number; stat: { name: string } };

export interface Abilities { ability: { name: string; url: string }; is_hidden: boolean };

export interface PokemonDetail {
    id: number;
    name: string;
    weight: number;
    height: number;
    sprites: {
        front_default: string;
        other?: Record<string, { front_default: string }>;
    };
    types: Types[];
    abilities: Abilities[];
    stats: Stats[];
}