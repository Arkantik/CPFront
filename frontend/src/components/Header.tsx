import Link from "next/link";

export default function Header() {
  return (
    <header className="header bg-pink-600 text-white text-center p-4">
      <h1 className="text-2xl font-bold mb-4">Checkpoint : frontend</h1>
      <Link href="/">Countries</Link>
    </header>
  );
}
