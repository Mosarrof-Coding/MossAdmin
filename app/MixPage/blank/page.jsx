"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

const BlankPage = () => {
  return (
    <div className="p-3 md:p-5">
      <Card className="bg-muted/40 border-2 border-muted-foreground/20 border-dashed rounded-2xl">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="font-semibold text-primary text-xl">
            This Page is Blank
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-muted-foreground">
            You can use this as a starter for a new module or feature in your
            dashboard.
          </p>
          <Button className="bg-primary mx-auto text-white">
            <Plus className="mr-2 w-4 h-4" />
            Add Something New
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlankPage;
