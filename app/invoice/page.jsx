"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Printer, CreditCard, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const invoices = [
  { id: "#348", name: "Zain Geidt", thumb: "https://i.pravatar.cc/150?img=1" },
  {
    id: "#982",
    name: "Carla George",
    thumb: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "#289",
    name: "Abram Schleifer",
    thumb: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "#522",
    name: "Lincoln Donin",
    thumb: "https://i.pravatar.cc/150?img=4",
  },
];

export default function InvoicePage() {
  const selected = invoices[0]; // Default selection

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-wrap justify-between gap-8">
        <h2 className="font-semibold text-2xl">Invoices</h2>
        <p className="text-muted-foreground xl">
          <Link href={"/"}>Home</Link>{" "}
          <ChevronRight className="inline-block" size={18} />{" "}
          <span className="font-semibold text-chart-2">Invoices</span>
        </p>
      </div>

      <Input
        type="search"
        placeholder="Search Invoice..."
        className="max-w-sm"
      />

      <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
        <div className="space-y-4">
          {invoices.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 hover:shadow p-4 border rounded-xl"
            >
              <Image
                src={item.thumb}
                width={48}
                height={48}
                alt={item.name}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-muted-foreground text-sm">ID: {item.id}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6 col-span-2 shadow-sm p-6 border rounded-xl">
          <h3 className="mb-2 font-semibold text-xl">Invoice</h3>
          <div className="text-muted-foreground text-sm">
            ID : {selected.id}
          </div>

          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2">
            <div>
              <h4 className="font-medium">From</h4>
              <p>{selected.name}</p>
              <p>1280, Clair Street,</p>
              <p>Massachusetts, New York - 02543</p>
              <p className="mt-2 text-sm">
                Issued On:{" "}
                <span className="font-medium text-foreground">
                  11 March, 2027
                </span>
              </p>
            </div>
            <div>
              <h4 className="font-medium">To</h4>
              <p>Albert Word</p>
              <p>355, Shobe Lane</p>
              <p>Colorado, Fort Collins - 80543</p>
              <p className="mt-2 text-sm">
                Due On:{" "}
                <span className="font-medium text-foreground">
                  16 March, 2027
                </span>
              </p>
            </div>
          </div>

          <table className="mt-6 border border-muted rounded-md w-full overflow-hidden text-sm">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="p-2 border">#</th>
                <th className="p-2 border text-left">Product</th>
                <th className="p-2 border">Quantity</th>
                <th className="p-2 border">Unit Cost</th>
              </tr>
            </thead>
            <tbody>
              {Array(4)
                .fill(null)
                .map((_, i) => (
                  <tr key={i} className="even:bg-muted/30">
                    <td className="p-2 border text-center">{i + 1}</td>
                    <td className="p-2 border">TailGrids</td>
                    <td className="p-2 border text-center">1</td>
                    <td className="p-2 border text-center">$48</td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="flex justify-end space-y-1 text-sm text-right">
            <div>
              <p>
                Sub Total amount:{" "}
                <span className="font-medium text-foreground">$3,098</span>
              </p>
              <p>
                Vat (10%):{" "}
                <span className="font-medium text-foreground">$312</span>
              </p>
              <p className="font-bold text-foreground text-lg">Total: $3,410</p>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline" className="gap-2">
              <Printer className="w-4 h-4" />
              Print
            </Button>
            <Button className="gap-2">
              <CreditCard className="w-4 h-4" />
              Proceed to Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
