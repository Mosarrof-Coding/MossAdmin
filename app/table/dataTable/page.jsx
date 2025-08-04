"use client";
import { Check, Download, Search } from "lucide-react";
import { useState } from "react";

const table1Data = [
  [
    "Abram Schleifer",
    "Sales Assistant",
    "Edinburgh",
    57,
    "25 Apr, 2027",
    "$89,500",
  ],
  [
    "Charlotte Anderson",
    "Marketing Manager",
    "London",
    42,
    "12 Mar, 2025",
    "$105,000",
  ],
  [
    "Ethan Brown",
    "Software Engineer",
    "San Francisco",
    30,
    "01 Jan, 2024",
    "$120,000",
  ],
  ["Isabella Davis", "UI/UX Designer", "Austin", 29, "18 Jul, 2025", "$92,000"],
  ["James Wilson", "Data Analyst", "Chicago", 28, "20 Sep, 2025", "$80,000"],
  ["Liam Moore", "DevOps Engineer", "Boston", 33, "30 Oct, 2024", "$115,000"],
  ["Mia Garcia", "Content Strategist", "Denver", 27, "12 Dec, 2027", "$70,000"],
  [
    "Olivia Johnson",
    "HR Specialist",
    "Los Angeles",
    40,
    "08 Nov, 2026",
    "$75,000",
  ],
  [
    "Sophia Martinez",
    "Product Manager",
    "New York",
    35,
    "15 Jun, 2026",
    "$95,000",
  ],
  [
    "William Smith",
    "Financial Analyst",
    "Seattle",
    38,
    "03 Feb, 2026",
    "$88,000",
  ],
];

const Table = ({
  title,
  data,
  headers,
  hasAction = false,
  hasCheckbox = false,
  download = false,
}) => {
  const [tip, setTip] = useState();
  return (
    <section className="mb-10">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-xl">{title}</h2>
        <div className="flex items-center gap-2">
          {download && (
            <button className="flex items-center gap-1 bg-primary px-3 py-1 rounded">
              <Download className="w-4 h-4" /> Download
            </button>
          )}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="py-1 pr-3 pl-8 border rounded text-sm"
            />
            <Search className="top-1.5 left-2 absolute w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="border rounded overflow-auto">
        <table className="min-w-full text-sm">
          <thead className="">
            <tr>
              {hasCheckbox && (
                <th className="px-3 py-2">
                  <input type="checkbox" />
                </th>
              )}
              {headers.map((h, i) => (
                <th key={i} className="px-3 py-2 font-medium text-left">
                  {h}
                </th>
              ))}
              {hasAction && (
                <th className="px-3 py-2 font-medium text-left">Action</th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-t">
                {hasCheckbox && (
                  <td className="px-3 py-2">
                    <input type="checkbox" />
                  </td>
                )}
                {row.map((col, i) => (
                  <td
                    key={i}
                    className="px-3 py-2 text-chart-2 whitespace-nowrap"
                  >
                    {col}
                  </td>
                ))}
                {hasAction && (
                  <td
                    className="relative px-3 py-2"
                    onClick={() => setTip((prev) => !prev)}
                  >
                    --
                    {tip && (
                      <div className="top-0 bottom-0 absolute">
                        <Check size={14} />
                      </div>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-muted-foreground text-sm">
        Showing 1 to {data.length} of {data.length} entries
      </p>
    </section>
  );
};

export default function DataTablesPage() {
  return (
    <div className="p-6">
      <h1 className="mb-4 font-bold text-2xl">Data Tables</h1>

      <Table
        title="Data Table 1"
        headers={["User", "Position", "Office", "Age", "Start Date", "Salary"]}
        data={table1Data}
      />

      <Table
        title="Data Table 2"
        headers={["User", "Position", "Office", "Age", "Start Date", "Salary"]}
        data={table1Data}
        hasAction
      />

      <Table
        title="Data Table 3"
        headers={["User", "Position", "Salary", "Office", "Status"]}
        data={[
          [
            "Lindsey Curtis\ndemoemail@gmail.com",
            "Sales Assistant",
            "$89,500",
            "Edinburgh",
            "Hired",
          ],
          [
            "Kaiya George\ndemoemail@gmail.com",
            "Chief Executive Officer",
            "$105,000",
            "London",
            "In Progress",
          ],
          [
            "Zain Geidt\ndemoemail@gmail.com",
            "Junior Technical Author",
            "$120,000",
            "San Francisco",
            "In Progress",
          ],
          [
            "Abram Schleifer\ndemoemail@gmail.com",
            "Software Engineer",
            "$95,000",
            "New York",
            "Hired",
          ],
          [
            "Carla George\ndemoemail@gmail.com",
            "Integration Specialist",
            "$80,000",
            "Chicago",
            "Pending",
          ],
        ]}
        download
        hasAction
      />

      <Table
        title="Data Table 4"
        headers={["User", "Position", "Salary", "Office", "Status"]}
        data={[
          [
            "Lindsey Curtis\ndemoemail@gmail.com",
            "Sales Assistant",
            "$89,500",
            "Edinburgh",
            "Hired",
          ],
          [
            "Kaiya George\ndemoemail@gmail.com",
            "Chief Executive Officer",
            "$105,000",
            "London",
            "In Progress",
          ],
          [
            "Zain Geidt\ndemoemail@gmail.com",
            "Junior Technical Author",
            "$120,000",
            "San Francisco",
            "In Progress",
          ],
          [
            "Abram Schleifer\ndemoemail@gmail.com",
            "Software Engineer",
            "$95,000",
            "New York",
            "Hired",
          ],
          [
            "Carla George\ndemoemail@gmail.com",
            "Integration Specialist",
            "$80,000",
            "Chicago",
            "Pending",
          ],
        ]}
        hasCheckbox
        hasAction
      />
    </div>
  );
}
