"use client";

import React from "react";

const orders = [
  {
    id: 1,
    product: "Golf Driver X100",
    category: "Golf Clubs",
    price: 399.99,
    status: "Delivered",
  },
  {
    id: 2,
    product: "Premium Golf Balls",
    category: "Accessories",
    price: 29.99,
    status: "Processing",
  },
  {
    id: 3,
    product: "Golf Shoes Model A",
    category: "Footwear",
    price: 120.0,
    status: "Shipped",
  },
  {
    id: 4,
    product: "Golf Bag Pro",
    category: "Bags",
    price: 250.0,
    status: "Cancelled",
  },
];

const statusColors = {
  Delivered: "bg-green-100 text-green-800",
  Processing: "bg-yellow-100 text-yellow-800",
  Shipped: "bg-blue-100 text-blue-800",
  Cancelled: "bg-red-100 text-red-800",
};

const RecentOrders = () => (
  <div className="bg-card shadow p-3 md:p-5 rounded-lg overflow-x-auto">
    <h2 className="mb-4 font-semibold text-lg">Recent Orders</h2>
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-border">
          <th className="px-3 py-2 font-medium text-muted-foreground text-sm truncate">
            Product
          </th>
          <th className="px-3 py-2 font-medium text-muted-foreground text-sm truncate">
            Category
          </th>
          <th className="px-3 py-2 font-medium text-muted-foreground text-sm truncate">
            Price
          </th>
          <th className="px-3 py-2 font-medium text-muted-foreground text-sm truncate">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map(({ id, product, category, price, status }) => (
          <tr
            key={id}
            className="hover:bg-muted/30 border-b border-border transition-colors"
          >
            <td className="px-3 py-2 truncate">{product}</td>
            <td className="px-3 py-2 truncate">{category}</td>
            <td className="px-3 py-2 truncate">${price.toFixed(2)}</td>
            <td className="px-3 py-2 truncate">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold truncate ${statusColors[status]}`}
              >
                {status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RecentOrders;
