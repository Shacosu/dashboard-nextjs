"use client"
import '../styles/globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html className="dark">
      <head />
      <body>
      <nav className="grid grid-cols-12 container mx-auto p-2">
          <div className="col-span-2">
            <Link className="col-span-2" href="/">Titulo</Link>
          </div>
          <div className="col-end-12 gap-3 grid grid-flow-col">
            <Link className="col-span-3 bg-sky-700 p-2 text-white rounded" href="/?collection=1">Anwo</Link>
            <Link className="col-span-3 bg-sky-700 p-2 text-white rounded" href="/?collection=2">Itaka</Link>
            <Link className="col-span-3 bg-sky-700 p-2 text-white rounded" href="/?collection=3">Koslan</Link>
            <Link className="col-span-3 bg-sky-700 p-2 text-white rounded" href="/?collection=6">Ventus</Link>
          </div>
      </nav>
        <div>
          {children}
        </div>
        </body>
    </html>
  )
}
