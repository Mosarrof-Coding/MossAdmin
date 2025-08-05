"use client";

import React, { useState } from "react";
import {
  MoreVertical,
  BadgeCheck,
  Clock,
  XCircle,
  Megaphone,
} from "lucide-react";

const BasicTables = () => {
  const users = [
    {
      user: "Lindsey Curtis",
      role: "Web Designer",
      project: "Agency Website",
      team: [1, 2, 3],
      status: "Active",
      budget: "$3.9K",
    },
    {
      user: "Kaiya George",
      role: "Project Manager",
      project: "Technology",
      team: [1, 2],
      status: "Pending",
      budget: "$24.9K",
    },
    {
      user: "Zain Geidt",
      role: "Content Writing",
      project: "Blog Writing",
      team: [1],
      status: "Active",
      budget: "$12.7K",
    },
    {
      user: "Abram Schleifer",
      role: "Digital Marketer",
      project: "Social Media",
      team: [1, 2, 3],
      status: "Cancel",
      budget: "$2.8K",
    },
    {
      user: "Carla George",
      role: "Front-end Developer",
      project: "Website",
      team: [1, 2, 3],
      status: "Active",
      budget: "$4.5K",
    },
  ];

  const orders = {
    ids: ["DE124321", "DE124322", "DE124323", "DE124324", "DE124325"],
    customers: [
      { name: "John Doe", email: "johndoe@gmail.com" },
      { name: "Jane Smith", email: "janesmith@gmail.com" },
      { name: "Michael Brown", email: "michaelbrown@gmail.com" },
      { name: "Alice Johnson", email: "alicejohnson@gmail.com" },
      { name: "Robert Lee", email: "robertlee@gmail.com" },
    ],
    products: [
      "Software License",
      "Cloud Hosting",
      "Web Domain",
      "SSL Certificate",
      "Premium Support",
    ],
    values: ["$18,50.34", "$12,99.00", "$9,50.00", "$2,30.45", "$15,20.00"],
    statuses: ["Complete", "Pending", "Cancel", "Pending", "Complete"],
    dates: [
      "2024-06-15",
      "2024-06-18",
      "2024-06-20",
      "2024-06-25",
      "2024-06-30",
    ],
  };

  const getInitials = (name) => {
    const parts = name.split(" ");
    return parts.map((p) => p[0]).join("");
  };

  const transactions = [
    {
      name: "Bought PYPL",
      date: "Nov 23, 01:00 PM",
      price: "$2,567.88",
      category: "Finance",
      status: "Success",
    },
    {
      name: "Bought AAPL",
      date: "Nov 23, 01:00 PM",
      price: "$2,567.88",
      category: "Finance",
      status: "Pending",
    },
    {
      name: "Sell KKST",
      date: "Nov 23, 01:00 PM",
      price: "$2,567.88",
      category: "Finance",
      status: "Success",
    },
    {
      name: "Bought FB",
      date: "Nov 23, 01:00 PM",
      price: "$2,567.88",
      category: "Finance",
      status: "Success",
    },
    {
      name: "Sell AMZN",
      date: "Nov 23, 01:00 PM",
      price: "$2,567.88",
      category: "Finance",
      status: "Failed",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const statusColor = {
    Success: "text-green-600",
    Pending: "text-yellow-500",
    Failed: "text-red-500",
  };

  const campaigns = [
    {
      name: "Wilson Gouse",
      campaign: "Grow your brand by...",
      type: "Ads campaign",
      status: "Success",
    },
    {
      name: "Wilson Gouse",
      campaign: "Make Better Ideas...",
      type: "Ads campaign",
      status: "Pending",
    },
    {
      name: "Wilson Gouse",
      campaign: "Increase your website tra...",
      type: "Ads campaign",
      status: "Success",
    },
    {
      name: "Wilson Gouse",
      campaign: "Grow your brand by...",
      type: "Ads campaign",
      status: "Failed",
    },
    {
      name: "Wilson Gouse",
      campaign: "Grow your brand by...",
      type: "Ads campaign",
      status: "Success",
    },
    {
      name: "Wilson Gouse",
      campaign: "Grow your brand by...",
      type: "Ads campaign",
      status: "Success",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Success":
        return "bg-green-100 text-green-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Failed":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };
  return (
    <div className="space-y-16 p-4">
      {/* Table 1 */}
      <section>
        <h2 className="mb-4 font-semibold text-foreground text-xl">
          Basic Table 1
        </h2>
        <div className="w-full overflow-y-auto">
          <table className="bg-card border min-w-full text-foreground text-sm text-left">
            <thead className="bg-muted/40">
              <tr className="text-muted-foreground">
                <th className="px-3 py-2 truncate">User</th>
                <th className="px-3 py-2 truncate">Project Name</th>
                <th className="px-3 py-2 truncate">Team</th>
                <th className="px-3 py-2 truncate">Status</th>
                <th className="px-3 py-2 truncate">Budget</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-muted/10 border-b transition"
                >
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      <div className="flex justify-center items-center bg-muted rounded-full w-8 h-8 font-bold text-foreground text-xs truncate">
                        {getInitials(item.user)}
                      </div>
                      <div>
                        <div className="font-medium truncate">{item.user}</div>
                        <div className="text-muted-foreground text-xs truncate">
                          {item.role}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-2 truncate">{item.project}</td>
                  <td className="px-3 py-2 truncate">
                    {item.team.map((n) => `Team member ${n}`).join(", ")}
                  </td>
                  <td
                    className={`py-2 px-3 font-medium truncate ${
                      statusColor[item.status]
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="px-3 py-2 truncate">{item.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Table 2 */}
      <section>
        <h2 className="mb-4 font-semibold text-foreground text-xl">
          Basic Table 2 - Recent Orders
        </h2>
        <div className="w-full overflow-y-auto">
          <table className="bg-card border min-w-full text-foreground text-sm">
            <thead className="bg-muted/40 text-muted-foreground">
              <tr>
                <th className="px-3 py-2 truncate">Deal ID</th>
                <th className="px-3 py-2 truncate">Customer</th>
                <th className="px-3 py-2 truncate">Product/Service</th>
                <th className="px-3 py-2 truncate">Deal Value</th>
                <th className="px-3 py-2 truncate">Close Date</th>
                <th className="px-3 py-2 truncate">Status</th>
                <th className="px-3 py-2 truncate">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.ids.map((id, i) => {
                const { name, email } = orders.customers[i];
                return (
                  <tr
                    key={id}
                    className="hover:bg-muted/10 border-b transition"
                  >
                    <td className="px-3 py-2">{id}</td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-2">
                        <div className="flex justify-center items-center bg-primary rounded-full w-8 h-8 font-semibold text-white text-xs truncate">
                          {getInitials(name)}
                        </div>
                        <div>
                          <div className="font-medium truncate">{name}</div>
                          <div className="text-muted-foreground text-xs truncate">
                            {email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-2 truncate">{orders.products[i]}</td>
                    <td className="px-3 py-2 truncate">{orders.values[i]}</td>
                    <td className="px-3 py-2 truncate">{orders.dates[i]}</td>
                    <td
                      className={`py-2 px-3 font-medium truncate ${
                        statusColor[orders.statuses[i]]
                      }`}
                    >
                      {orders.statuses[i]}
                    </td>
                    <td className="px-3 py-2">
                      <MoreVertical className="w-4 h-4 text-muted-foreground truncate" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      {/* transations */}
      <section className="space-y-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <h2 className="font-semibold text-foreground text-xl">
            Basic Table 3 - Latest Transactions
          </h2>

          <input
            type="text"
            placeholder="Search..."
            className="bg-background px-3 py-1.5 border rounded-md w-64 text-foreground text-sm"
          />
        </div>
        {/* Table 3 */}
        <div className="w-full overflow-y-auto">
          <table className="bg-card border min-w-fulll text-foreground text-sm">
            <thead className="bg-muted/40 text-muted-foreground">
              <tr>
                <th className="px-3 py-2">Brand</th>
                <th className="px-3 py-2">Name</th>
                <th className="px-3 py-2">Date</th>
                <th className="px-3 py-2">Price</th>
                <th className="px-3 py-2">Category</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr
                  key={index}
                  className="hover:bg-muted/10 border-b transition"
                >
                  <td className="px-3 py-2">
                    <div className="flex justify-center items-center bg-muted rounded-full w-8 h-8 font-bold text-foreground text-xs">
                      B
                    </div>
                  </td>
                  <td className="px-3 py-2 truncate">{tx.name}</td>
                  <td className="px-3 py-2 truncate">{tx.date}</td>
                  <td className="px-3 py-2 truncate">{tx.price}</td>
                  <td className="px-3 py-2 truncate">{tx.category}</td>
                  <td
                    className={`py-2 px-3 font-medium ${
                      statusColor[tx.status]
                    }`}
                  >
                    {tx.status}
                  </td>
                  <td className="px-3 py-2">
                    <MoreVertical className="w-4 h-4 text-muted-foreground" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex justify-center md:justify-end items-center gap-2 pt-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="bg-background disabled:opacity-50 px-3 py-1.5 border rounded text-foreground"
          >
            Previous
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1.5 rounded border ${
                currentPage === page
                  ? "bg-primary text-white"
                  : "bg-background text-foreground"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="bg-background disabled:opacity-50 px-3 py-1.5 border rounded text-foreground"
          >
            Next
          </button>
        </div>
      </section>
      <section>
        <div className="shadow-sm rounded-2xl">
          <div className="flex justify-between items-center gap-5 mb-4">
            <h2 className="font-semibold text-xl">
              Basic Table 4 - Featured Campaigns
            </h2>
            <div className="relative">
              <button onClick={() => toggleMenu("global")}>
                <MoreVertical className="w-5 h-5" />
              </button>
              {openMenuIndex === "global" && (
                <div className="right-0 z-10 absolute flex flex-col gap-2 bg-card shadow mt-2 p-3 border rounded">
                  <button className="block w-full text-left truncate">
                    View More
                  </button>
                  <button className="block w-full text-left truncate">
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="w-full overflow-y-auto">
            <table className="divide-y divide-muted/50 min-w-full text-sm">
              <thead className="bg-muted/20 text-muted-foreground">
                <tr>
                  <th className="py-3 font-medium text-left">Products</th>
                  <th className="py-3 font-medium text-left">Campaign</th>
                  <th className="py-3 font-medium text-left">Status</th>
                </tr>
              </thead>
              <tbody className="bg-background divide-y divide-muted/50">
                {campaigns.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-muted/10 transition-colors"
                  >
                    {/* Products column */}
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex justify-center items-center bg-muted rounded-full w-10 h-10 font-semibold text-muted-foreground text-xs">
                          U
                        </div>
                        <span className="font-medium text-foreground truncate">
                          {item.name}
                        </span>
                      </div>
                    </td>

                    {/* Campaign column */}
                    <td className="p-3">
                      <div className="flex items-start gap-2">
                        <Megaphone className="mt-1 w-4 h-4 text-primary" />
                        <div>
                          <div className="font-medium text-foreground truncate">
                            {item.campaign}
                          </div>
                          <div className="text-muted-foreground text-xs truncate">
                            {item.type}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Status column */}
                    <td className="p-3">
                      <span
                        className={`inline-flex  items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.status === "Success" && (
                          <BadgeCheck className="w-4 h-4" />
                        )}
                        {item.status === "Pending" && (
                          <Clock className="w-4 h-4" />
                        )}
                        {item.status === "Failed" && (
                          <XCircle className="w-4 h-4" />
                        )}
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BasicTables;
