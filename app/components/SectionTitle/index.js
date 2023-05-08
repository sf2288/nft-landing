import Link from 'next/link';
import React from 'react';

export default function SectionTitle({ title }) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-4xl">{title}</h2>
      <Link className="gradient_text font-bold" href="#">
        View All
      </Link>
    </div>
  );
}
