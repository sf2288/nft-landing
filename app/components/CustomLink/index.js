import Link from 'next/link';

export default function CustomLink({ children, href }) {
  return (
    <Link href={href}>
      {children}
    </Link>
  );
}
