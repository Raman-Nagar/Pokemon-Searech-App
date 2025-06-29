"use client";
import { useState, useEffect } from "react";
import { fetchTypes } from "@/lib/api";

export function useTypes() {
    const [types, setTypes] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchTypes()
            .then(setTypes)
            .catch((e) => setError(e.message))
            .finally(() => setLoading(false));
    }, []);

    return { types, loading, error };
}