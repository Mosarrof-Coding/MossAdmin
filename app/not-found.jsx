"use client";

import { Ghost, ArrowLeft } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-background px-6 py-12 min-h-screen text-foreground">
      <div className="space-y-6 text-center">
        <div className="flex justify-center">
          <div className="bg-muted shadow-lg p-6 rounded-full">
            <Ghost className="w-12 h-12 text-primary" />
          </div>
        </div>
        <h1 className="font-bold text-4xl sm:text-5xl tracking-tight">
          Oops! Page Not Found
        </h1>
        <p className="mx-auto max-w-xl text-muted-foreground text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 px-6 py-3 rounded-full font-medium text-primary-foreground text-sm transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Decorative 404 */}
      <div className="mt-10 font-extrabold text-muted/20 text-8xl text-center select-none">
        404
      </div>
    </div>
  );
};
export default NotFound;
