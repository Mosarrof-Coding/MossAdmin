"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FormLayout = () => {
  return (
    <div className="space-y-6 mx-auto p-3 md:p-5 w-full">
      <h1 className="mb-6 font-semibold text-xl">Forms Layout</h1>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="gap-4 grid grid-cols-1 md:grid-cols-2">
          <div>
            <Label className="mb-2" htmlFor="firstName">
              First Name
            </Label>
            <Input id="firstName" placeholder="Musharof" />
          </div>
          <div>
            <Label className="mb-2" htmlFor="lastName">
              Last Name
            </Label>
            <Input id="lastName" placeholder="Chowdhury" />
          </div>
          <div>
            <Label className="mb-2" htmlFor="email">
              Email
            </Label>
            <Input id="email" type="email" placeholder="example@email.com" />
          </div>
          <div>
            <Label className="mb-2" htmlFor="phone">
              Phone
            </Label>
            <Input id="phone" type="tel" placeholder="+8801XXXXXXXXX" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Address</CardTitle>
        </CardHeader>
        <CardContent className="gap-4 grid grid-cols-1 md:grid-cols-2">
          <div>
            <Label className="mb-2" htmlFor="country">
              Country
            </Label>
            <Input id="country" placeholder="United States" />
          </div>
          <div>
            <Label className="mb-2" htmlFor="city">
              City/State
            </Label>
            <Input id="city" placeholder="Phoenix, Arizona" />
          </div>
          <div>
            <Label className="mb-2" htmlFor="postal">
              Postal Code
            </Label>
            <Input id="postal" placeholder="ERT 2489" />
          </div>
          <div>
            <Label className="mb-2" htmlFor="taxId">
              Tax ID
            </Label>
            <Input id="taxId" placeholder="AS4568384" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>More Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="mb-2" htmlFor="bio">
              Bio
            </Label>
            <Textarea id="bio" placeholder="Team Manager" />
          </div>

          <div>
            <Label className="mb-2">Gender</Label>
            <RadioGroup defaultValue="male" className="flex gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="r1" />
                <Label className="mb-2" htmlFor="r1">
                  Male
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="r2" />
                <Label className="mb-2" htmlFor="r2">
                  Female
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="r3" />
                <Label className="mb-2" htmlFor="r3">
                  Other
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label className="mb-2" htmlFor="terms">
              Accept Terms and Conditions
            </Label>
          </div>

          <Button type="submit">Submit</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormLayout;
