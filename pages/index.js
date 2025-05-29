import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <nav className="space-x-4">
            <Link href="/"><Button variant="ghost">Home</Button></Link>
            <Link href="/about"><Button variant="ghost">About</Button></Link>
            <Link href="/projects"><Button variant="ghost">Projects</Button></Link>
            <Link href="/contact"><Button variant="ghost">Contact</Button></Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm [Your Name]</h2>
          <p className="text-lg text-gray-600">
            A passionate web developer specializing in modern JavaScript frameworks like Next.js.
          </p>
        </section>
        <section className="grid md:grid-cols-3 gap-6">
          <Card><CardContent className="p-4"><h3 className="text-xl font-semibold mb-2">Project A</h3><p className="text-gray-600">Deskripsi singkat tentang Project A.</p></CardContent></Card>
          <Card><CardContent className="p-4"><h3 className="text-xl font-semibold mb-2">Project B</h3><p className="text-gray-600">Deskripsi singkat tentang Project B.</p></CardContent></Card>
          <Card><CardContent className="p-4"><h3 className="text-xl font-semibold mb-2">Project C</h3><p className="text-gray-600">Deskripsi singkat tentang Project C.</p></CardContent></Card>
        </section>
      </main>
      <footer className="bg-white shadow mt-12">
        <div className="container mx-auto px-6 py-6 text-center text-gray-500">
          &copy; {new Date().getFullYear()} [Your Name]. All rights reserved.
        </div>
      </footer>
    </div>
  );
    }
