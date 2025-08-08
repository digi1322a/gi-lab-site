
import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#500000] text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Texas A&M GI Laboratory — Microbiome Lab</h1>
        <p>Research led by Dr. Mike Hong</p>
      </header>
      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mt-4">Welcome</h2>
        <p className="mt-2">
          This is the official website of the Texas A&M GI Laboratory Microbiome research team.
        </p>
        <Link to="/datasets" className="mt-4 inline-block bg-[#500000] text-white px-4 py-2 rounded">
          View Datasets
        </Link>
      </main>
    </div>
  );
}
