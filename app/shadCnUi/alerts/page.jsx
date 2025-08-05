"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const AlertsPage = () => {
  return (
    <div className="space-y-4 mx-auto p-3 md:p-5 w-full">
      <div className="space-y-1">
        <h1 className="font-bold text-3xl tracking-tight">Alerts</h1>
        <p className="text-muted-foreground">
          ShadCN Alert Components with various types
        </p>
      </div>

      {/* ✅ Success Alert */}
      <div className="space-y-4">
        <h2 className="font-semibold text-xl">Success Alert</h2>
        <Alert
          variant="default"
          className="bg-green-100/50 border-green-500 text-green-800"
        >
          <CheckCircle className="w-5 h-5 text-green-600" />
          <AlertTitle>Success Message</AlertTitle>
          <AlertDescription>
            Be cautious when performing this action.
          </AlertDescription>
        </Alert>
        <Alert
          variant="default"
          className="bg-green-100/50 border-green-500 text-green-800"
        >
          <CheckCircle className="w-5 h-5 text-green-600" />
          <AlertTitle>
            <div className="flex justify-between items-center">
              Success Message
              <Link
                href="#"
                className="inline-flex items-center gap-1 text-green-700 text-sm hover:underline"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AlertTitle>
          <AlertDescription>
            Be cautious when performing this action.
          </AlertDescription>
        </Alert>
      </div>

      {/* ✅ Warning Alert */}
      <div className="space-y-4">
        <h2 className="font-semibold text-xl">Warning Alert</h2>
        <Alert
          variant="default"
          className="bg-yellow-100/50 border-yellow-500 text-yellow-900"
        >
          <AlertTriangle className="w-5 h-5 text-yellow-600" />
          <AlertTitle>Warning Message</AlertTitle>
          <AlertDescription>
            Be cautious when performing this action.
          </AlertDescription>
        </Alert>
        <Alert
          variant="default"
          className="bg-yellow-100/50 border-yellow-500 text-yellow-900"
        >
          <AlertTriangle className="w-5 h-5 text-yellow-600" />
          <AlertTitle>
            <div className="flex justify-between items-center">
              Warning Message
              <Link
                href="#"
                className="inline-flex items-center gap-1 text-yellow-800 text-sm hover:underline"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AlertTitle>
          <AlertDescription>
            Be cautious when performing this action.
          </AlertDescription>
        </Alert>
      </div>

      {/* ✅ Error Alert */}
      <div className="space-y-4">
        <h2 className="font-semibold text-xl">Error Alert</h2>
        <Alert
          variant="default"
          className="bg-red-100/50 border-red-500 text-red-800"
        >
          <XCircle className="w-5 h-5 text-red-600" />
          <AlertTitle>Error Message</AlertTitle>
          <AlertDescription>
            Be cautious when performing this action.
          </AlertDescription>
        </Alert>
        <Alert
          variant="default"
          className="bg-red-100/50 border-red-500 text-red-800"
        >
          <XCircle className="w-5 h-5 text-red-600" />
          <AlertTitle>
            <div className="flex justify-between items-center">
              Error Message
              <Link
                href="#"
                className="inline-flex items-center gap-1 text-red-800 text-sm hover:underline"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AlertTitle>
          <AlertDescription>
            Be cautious when performing this action.
          </AlertDescription>
        </Alert>
      </div>

      {/* ✅ Info Alert */}
      <div className="space-y-4">
        <h2 className="font-semibold text-xl">Info Alert</h2>
        <Alert
          variant="default"
          className="bg-blue-100/50 border-blue-500 text-blue-900"
        >
          <Info className="w-5 h-5 text-blue-600" />
          <AlertTitle>Info Message</AlertTitle>
          <AlertDescription>
            Be cautious when performing this action.
          </AlertDescription>
        </Alert>
        <Alert
          variant="default"
          className="bg-blue-100/50 border-blue-500 text-blue-900"
        >
          <Info className="w-5 h-5 text-blue-600" />
          <AlertTitle>
            <div className="flex justify-between items-center">
              Info Message
              <Link
                href="#"
                className="inline-flex items-center gap-1 text-blue-800 text-sm hover:underline"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AlertTitle>
          <AlertDescription>
            Be cautious when performing this action.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};
export default AlertsPage;
