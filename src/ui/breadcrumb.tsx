"use client";
import Link from "next/link";
import React from "react";

interface Item {
  label: string;
  href?: string;
}
interface BreadcrumbProps {
  items: Item[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => (
  <nav className="text-sm mb-4">
    {items.map((item, idx) => (
      <span key={idx} className="capitalize">
        {item.href ? (
          <Link href={item.href} className="text-blue-600 hover:underline">
            {item.label}
          </Link>
        ) : (
          <span>{item.label}</span>
        )}
        {idx < items.length - 1 && <span> &rarr; </span>}
      </span>
    ))}
  </nav>
);
