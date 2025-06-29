import React from "react";
import { fetchPokemonDetail } from "@/lib/api";
import { Metadata } from "next";
import PokemonDetailView from "@/view/pokemon-detail-view";

interface Props {
  params: Promise<{ name: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  return { title: name };
}

export default async function PokemonDetailPage({ params }: Props) {
  const { name } = await params;
  const detail = await fetchPokemonDetail(name);
  return (
   <PokemonDetailView data={detail} />
  );
}
