"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";

import { Breadcrumb } from "@/ui/breadcrumb";
import { PokemonDetail, Types } from "@/types/pokemon";
import Button from "@/ui/button";

interface PokemonDataViewProps {
  data: PokemonDetail;
}

export default function PokemonDataView({ data }: PokemonDataViewProps) {
  const [index, setIndex] = useState(0);
  const baseStats = {
    ...data,
    types: data.types.map((obj: Types) => obj.type.name),
    spritesArray: Object.values(data.sprites).filter(
      (str) => typeof str === "string"
    ) as string[],
  };

  const { name, id, weight, height, types, spritesArray } = baseStats;
  const src = spritesArray[index];

  const prev = useCallback(() => setIndex((i) => i - 1), []);

  const next = useCallback(() => setIndex((i) => i + 1), []);

  return (
    <main className="px-4 py-6 max-w-4xl mx-auto">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: name }]} />

      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-6">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold uppercase">
            {name}: #{id}
          </h1>
        </div>

        <div className="flex space-x-2">
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            Weight: {weight}
          </span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            Height: {height}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {types.map((t: string) => (
          <span
            key={t}
            className={`px-3 py-1 rounded-full text-sm capitalize ${
              t === "grass"
                ? "bg-green-200 text-green-800"
                : t === "fire"
                ? "bg-red-200 text-red-800"
                : t === "water"
                ? "bg-blue-200 text-blue-800"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-center mb-8">
        <Button
          btnText="←"
          handleClick={prev}
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-900 font-bold"
          disabled={index === 0}
        />
        <div className="mx-4 w-40 h-40 relative">
          <Image
            src={src}
            alt={`${name} sprite`}
            fill
            className="object-contain"
          />
        </div>
        <Button
          btnText="→"
          handleClick={next}
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-900 font-bold"
          disabled={index === spritesArray.length - 1}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {data.stats.map(({ base_stat, stat }) => {
          const label = stat.name
            .replace(/-/g, " ")
            .toUpperCase()
            .toUpperCase();
          const value = base_stat;
          return (
            <div
              key={stat.name}
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg"
            >
              <span className="text-xs text-gray-500">{label}</span>
              <span className="text-xl font-semibold">{value}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
