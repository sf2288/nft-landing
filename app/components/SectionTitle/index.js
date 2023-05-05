import Link from 'next/link';
import React from 'react';

export default function SectionTitle({ title }) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl">{title}</h1>
      <div className="gradient_text">
        <Link href="#">View All</Link>
      </div>
    </div>
  );
}
