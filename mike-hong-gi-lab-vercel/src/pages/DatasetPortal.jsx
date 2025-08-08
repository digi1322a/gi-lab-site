
import React, { useState } from "react";

export default function DatasetPortal() {
  const sampleData = [
    { id: "DOG-001", species: "Dog", condition: "Healthy", date: "01/15/2025", study: "Canine Gut Health Study", link: "#" },
    { id: "CAT-014", species: "Cat", condition: "IBD", date: "12/05/2024", study: "Feline IBD Microbiome Project", link: "#" }
  ];

  const [search, setSearch] = useState("");

  const filteredData = sampleData.filter((row) =>
    Object.values(row).some((value) =>
      value.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Texas A&M GI Laboratory — Microbiome Lab</h1>
          <a href="/" className="bg-[#500000] text-white px-4 py-2 rounded">Back to Home</a>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-extrabold text-[#500000]">Public Microbiome Datasets</h2>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-md p-2 border rounded w-full"
          />
        </div>
        <div className="mt-6 overflow-x-auto bg-white rounded-lg shadow-sm">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-[#500000] text-white">
              <tr>
                <th className="px-4 py-3">Sample ID</th>
                <th className="px-4 py-3">Species</th>
                <th className="px-4 py-3">Condition</th>
                <th className="px-4 py-3">Collection Date</th>
                <th className="px-4 py-3">Study</th>
                <th className="px-4 py-3">Download</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((row, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50 transition">
                    <td className="px-4 py-3 font-medium">{row.id}</td>
                    <td className="px-4 py-3">{row.species}</td>
                    <td className="px-4 py-3">{row.condition}</td>
                    <td className="px-4 py-3">{row.date}</td>
                    <td className="px-4 py-3">{row.study}</td>
                    <td className="px-4 py-3">
                      <a href={row.link} target="_blank" className="bg-[#500000] text-white px-3 py-1 rounded">Download</a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-4 py-6 text-center text-gray-500">
                    No matching samples found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
