"use client";
import React, { useContext } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Boxes,
  CalendarDays,
  ChartPie,
  Combine,
  FileText,
  Layers,
  LetterText,
  LogIn,
  Mail,
  MessageSquareText,
  ShieldUser,
  Table2,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Context } from "@/context/Context";

const Sidebar = () => {
  // navigation links
  const pathName = usePathname();
  const linksEcommerce = [
    { href: "/dashboard/ecommerce", label: "Ecommerce" },
    { href: "/dashboard/marketing", label: "Marketing" },
    { href: "/dashboard/crm", label: "Crm" },
    { href: "/dashboard/stocks", label: "Stocks" },
    { href: "/dashboard/sass", label: "Sass" },
  ];
  const linksTasks = [
    { href: "/tasks/list", label: "list" },
    { href: "/tasks/kanban", label: "kanban" },
  ];
  const linksForms = [
    { href: "/forms/formsElements", label: "Forms Elements" },
    { href: "/forms/formLayout", label: "Form Layout" },
  ];
  const linksTable = [
    { href: "/table/basicTable", label: "Basic Table" },
    { href: "/table/dataTable", label: "Data Table" },
  ];
  const linksMixPage = [
    { href: "/MixPage/manager", label: "File Manager" },
    { href: "/mixPage/pricingTable", label: "Pricing Table" },
    { href: "/mixPage/faq", label: "Faq" },
    { href: "/MixPage/blank", label: "Blank" },
    { href: "/mixPage/404", label: "Error 404" },
    { href: "/mixPage/error500", label: "Error 500" },
    { href: "/mixPage/comingSoon", label: "Coming Soon" },
    { href: "/mixPage/Maintenance", label: "Maintenance" },
    { href: "/mixPage/success", label: "Success" },
  ];
  const linksEmail = [
    { href: "/email/inbox", label: "Inbox" },
    { href: "/email/details", label: "Details" },
  ];
  const linksCharts = [
    { href: "/charts/linechart", label: "Line Chart" },
    { href: "/charts/piechart", label: "Pie Chart" },
    { href: "/charts/areachart", label: "Area Chart" },
    { href: "/charts/barChart", label: "Bar Chart" },
    { href: "/charts/radialchart", label: "Radial Chart" },
    { href: "/charts/radar-chart", label: "Radar Chart" },
  ];

  // authentication
  const linksAuths = [
    { href: "/userAuth/signIn", label: "Sign In" },
    { href: "/userAuth/signup", label: "Sign Up" },
    { href: "/userAuth/pasResset", label: "Resset Password" },
    { href: "/userAuth/twostepverify", label: "Two Step Verifications" },
  ];

  const { sidebar, setSidebar, setCurrentNav, active, setActive } =
    useContext(Context);

  return (
    <aside
      className={`h-screen w-full z-50 ${
        sidebar ? "hidden lg:flex" : "lg:hidden flex"
      }
    flex-col bg-sidebar border-r border-border max-w-xs text-sidebar-foreground absolute left-0 top-0 lg:sticky z-10`}
    >
      {/* Top Logo/Header */}
      <header className="flex items-center gap-3 px-4 py-1 md:py-2">
        <Link
          href={"/"}
          className="flex items-center gap-3"
          onClick={() => {
            setCurrentNav(false), setActive(false);
          }}
        >
          <div className="text-3xl lg:text-4xl">💢</div>
          <div>
            <h3 className="font-bold text-2xl lg:text-3xl">MossAdmin</h3>
            <p className="text-[10px] text-chart-3 md:text-xs leading-1 md:leading-normal">
              Next.js E-commerce Dashboard
            </p>
          </div>
        </Link>
        <button
          className="lg:hidden bg-muted hover:bg-muted/80 ms-auto p-0.5 md:p-1 rounded-lg transition-colors cursor-pointer"
          onClick={() => setSidebar(true)}
        >
          <X size={28} color="#fd0333" />
        </button>
      </header>

      {/* Scrollable Nav Content */}
      <nav className="px-4 py-4 overflow-y-auto">
        <Accordion
          type="single"
          // defaultValue="item-1"
          collapsible
          className="space-y-1 w-full"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger
              className="group font-medium"
              onClick={() => setActive("Dashboard")}
            >
              <div className="flex items-center gap-3 font-medium text-lg">
                <ChartPie
                  className={`text-chart-3 group-hover:text-destructive ${
                    active === "Dashboard" ? "text-destructive" : ""
                  }`}
                />
                Dashboard
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed /80">
              <ul className="flex flex-col py-1">
                {linksEcommerce.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setCurrentNav(link)}
                    className={`flex justify-between items-center gap-3 py-1 pr-3 pl-6 rounded text-lg  transition-all duration-300 cursor-pointer hover:tracking-wider ${
                      pathName === link.href
                        ? "text-destructive tracking-wider"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          {/* calender */}
          <AccordionItem value="item-2" onClick={() => setActive("calender")}>
            <Link
              href={"/calender"}
              className="group flex items-center gap-3 py-2 font-medium text-lg cursor-default"
            >
              <CalendarDays
                className={`text-chart-3 group-hover:text-destructive ${
                  active === "calender" ? "text-destructive" : ""
                }`}
              />
              Calander
            </Link>
          </AccordionItem>
          {/* User Profile */}
          <AccordionItem value="item-3 " onClick={() => setActive("Profile")}>
            <Link
              href={"/profile"}
              className="group flex items-center gap-3 py-2 font-medium text-lg cursor-default"
            >
              <ShieldUser
                className={`text-chart-3 group-hover:text-destructive ${
                  active === "Profile" ? "text-destructive" : ""
                }`}
              />
              User Profile
            </Link>
          </AccordionItem>
          {/* tasks */}
          <AccordionItem value="item-4" onClick={() => setActive("Tasks")}>
            <AccordionTrigger className="group font-medium">
              <div className="flex items-center gap-3 font-medium text-lg">
                <Combine
                  className={`text-chart-3 group-hover:text-destructive ${
                    active === "Tasks" ? "text-destructive" : ""
                  }`}
                />
                Tasks
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed /80">
              <ul className="flex flex-col py-1">
                {linksTasks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setCurrentNav(link)}
                    className={`flex justify-between items-center gap-3 py-1 pr-3 pl-6 rounded text-lg  transition-all duration-300 cursor-pointer hover:tracking-wider ${
                      pathName === link.href
                        ? "text-destructive tracking-wider"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          {/* forms */}
          <AccordionItem value="item-5" onClick={() => setActive("Forms")}>
            <AccordionTrigger className="group font-medium">
              <div className="flex items-center gap-3 font-medium text-lg">
                <LetterText
                  className={`text-chart-3 group-hover:text-destructive ${
                    active === "Forms" ? "text-destructive" : ""
                  }`}
                />
                Forms
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed /80">
              <ul className="flex flex-col py-1">
                {linksForms.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setCurrentNav(link)}
                    className={`flex justify-between items-center gap-3 py-1 pr-3 pl-6 rounded text-lg  transition-all duration-300 cursor-pointer hover:tracking-wider ${
                      pathName === link.href
                        ? "text-destructive tracking-wider"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          {/* basic table */}
          <AccordionItem value="item-6" onClick={() => setActive("Tables")}>
            <AccordionTrigger className="group font-medium">
              <div className="flex items-center gap-3 font-medium text-lg">
                <Table2
                  className={`text-chart-3 group-hover:text-destructive ${
                    active === "Tables" ? "text-destructive" : ""
                  }`}
                />
                Tables
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed /80">
              <ul className="flex flex-col py-1">
                {linksTable.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setCurrentNav(link)}
                    className={`flex justify-between items-center gap-3 py-1 pr-3 pl-6 rounded text-lg  transition-all duration-300 cursor-pointer hover:tracking-wider ${
                      pathName === link.href
                        ? "text-destructive tracking-wider"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          {/* pages */}
          <AccordionItem value="item-7" onClick={() => setActive("Pages")}>
            <AccordionTrigger className="group font-medium">
              <div className="flex items-center gap-3 font-medium text-lg">
                <Layers
                  className={`text-chart-3 group-hover:text-destructive ${
                    active === "Pages" ? "text-destructive" : ""
                  }`}
                />
                Pages
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed /80">
              <ul className="flex flex-col py-1">
                {linksMixPage.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setCurrentNav(link)}
                    className={`flex justify-between items-center gap-3 py-1 pr-3 pl-6 rounded text-lg  transition-all duration-300 cursor-pointer hover:tracking-wider ${
                      pathName === link.href
                        ? "text-destructive tracking-wider"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <hr />
          {/* chat */}
          <AccordionItem value="item-8" onClick={() => setActive("Chat")}>
            <Link
              href={"/chatbot"}
              className="group flex items-center gap-3 py-2 font-medium text-lg cursor-default"
            >
              <MessageSquareText
                className={`text-chart-3 group-hover:text-destructive ${
                  active === "Chat" ? "text-destructive" : ""
                }`}
              />
              Chat
            </Link>
          </AccordionItem>

          {/* email */}
          <AccordionItem value="item-9" onClick={() => setActive("Email")}>
            <AccordionTrigger className="group font-medium">
              <div className="flex items-center gap-3 font-medium text-lg">
                <Mail
                  className={`text-chart-3 group-hover:text-destructive ${
                    active === "Email" ? "text-destructive" : ""
                  }`}
                />
                Email
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed /80">
              <ul className="flex flex-col py-1">
                {linksEmail.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setCurrentNav(link)}
                    className={`flex justify-between items-center gap-3 py-1 pr-3 pl-6 rounded text-lg  transition-all duration-300 cursor-pointer hover:tracking-wider ${
                      pathName === link.href
                        ? "text-destructive tracking-wider"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* invoice */}
          <AccordionItem value="item-10" onClick={() => setActive("Invoice")}>
            <Link
              href={"/invoice"}
              className="group flex items-center gap-3 py-2 font-medium text-lg cursor-default"
            >
              <FileText
                className={`text-chart-3 group-hover:text-destructive ${
                  active === "Invoice" ? "text-destructive" : ""
                }`}
              />
              Invoice
            </Link>
          </AccordionItem>
          <hr />

          {/* charts */}
          <AccordionItem value="item-11" onClick={() => setActive("Charts")}>
            <AccordionTrigger className="group font-medium">
              <div className={`flex items-center gap-3 font-medium text-lg`}>
                <ChartPie
                  className={`text-chart-3 group-hover:text-destructive ${
                    active === "Charts" ? "text-destructive" : ""
                  }`}
                />
                Charts
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed /80">
              <ul className="flex flex-col py-1">
                {linksCharts.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setCurrentNav(link)}
                    className={`flex justify-between items-center gap-3 py-1 pr-3 pl-6 rounded text-lg  transition-all duration-300 cursor-pointer hover:tracking-wider ${
                      pathName === link.href
                        ? "text-destructive tracking-wider"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Ui Elements */}
          <AccordionItem value="item-12" onClick={() => setActive("Elements")}>
            <AccordionTrigger className="group font-medium">
              <div className={`flex items-center gap-3 font-medium text-lg`}>
                <Boxes
                  className={`text-chart-3 group-hover:text-destructive ${
                    active === "Elements" ? "text-destructive" : ""
                  }`}
                />
                Ui Elements
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed /80">
              <ul className="flex flex-col py-1">
                {[
                  "Alerts",
                  "Avatar",
                  "Badge",
                  "Breadcrumbs",
                  "Buttons",
                  "Buttons Group",
                  "Cards",
                  "Carousel",
                  "Dropdowns",
                  "Images",
                  "Links",
                  "List",
                  "Modals",
                  "Notification",
                  "Pagination",
                  "Popovers",
                  "Progressbar",
                  "Ribbons",
                  "Spinners",
                  "Tabs",
                  "Tooltips",
                  "Videos",
                ].map((item) => {
                  const slug = item.toLowerCase().replace(/\s+/g, "-"); // Converts "Buttons Group" => "buttons-group"
                  return (
                    <Link
                      key={item}
                      href={`/shadCnUi/${slug}`}
                      className={`flex justify-between items-center gap-3 py-1 pr-3 pl-6 rounded text-lg  transition-all duration-300 cursor-pointer hover:tracking-wider ${
                        pathName === `/shadCnUi/${slug}`
                          ? "text-destructive tracking-wider"
                          : ""
                      }`}
                    >
                      {item}
                    </Link>
                  );
                })}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Authentications*/}
          <AccordionItem
            value="item-13"
            onClick={() => setActive("Authentication")}
          >
            <AccordionTrigger className="group font-medium">
              <div className={`flex items-center gap-3 font-medium text-lg`}>
                <LogIn
                  className={`text-chart-3 group-hover:text-destructive ${
                    active === "Authentication" ? "text-destructive" : ""
                  }`}
                />
                Authentication
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed /80">
              <ul className="flex flex-col py-1">
                {linksAuths.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setCurrentNav(link)}
                    className={`flex justify-between items-center gap-3 py-1 pr-3 pl-6 rounded text-lg  transition-all duration-300 cursor-pointer hover:tracking-wider ${
                      pathName === link.href
                        ? "text-destructive tracking-wider"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-10 mb-4 text-center">
          <h3 className="font-bold text-primary text-xl tracking-tighter">
            Nextjs + Tailwind + ShadCn
          </h3>
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} All rights reserved by Mosharof
            Hossain.
          </p>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
