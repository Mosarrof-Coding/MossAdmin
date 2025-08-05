"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const FormElements = () => {
  const [date, setDate] = useState();

  return (
    <div className="p-3 md:p-5">
      <h1 className="mb-6 font-semibold text-xl">Forms Elements</h1>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        {/* Default Input */}
        <div>
          <Label className="mb-2" htmlFor="default">
            Default Input
          </Label>
          <Input id="default" placeholder="Input" />
        </div>

        {/* Input with Placeholder */}
        <div>
          <Label className="mb-2" htmlFor="email">
            Input with Placeholder
          </Label>
          <Input id="email" placeholder="info@gmail.com" />
        </div>

        {/* Select Input */}
        <div>
          <Label className="mb-2">Select Input</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="one">Option 1</SelectItem>
              <SelectItem value="two">Option 2</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Password Input */}
        <div>
          <Label className="mb-2" htmlFor="password">
            Password Input
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        {/* Time Picker Placeholder */}
        <div>
          <Label className="mb-2">Time Picker Input</Label>
          <Input type="time" />
        </div>

        {/* Input with Payment */}
        <div>
          <Label className="mb-2" htmlFor="card">
            Input with Payment
          </Label>
          <Input id="card" placeholder="Card number" />
        </div>

        {/* Another Select Input */}
        <div>
          <Label className="mb-2">Select Input</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="one">Option 1</SelectItem>
              <SelectItem value="two">Option 2</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Multi Select Placeholder (demo purposes) */}
        <div>
          <Label className="mb-2">Multiple Select Options</Label>
          <div className="space-y-1">
            <Checkbox id="opt1" />
            <Label className="mb-2" htmlFor="opt1">
              Option 1
            </Label>
            <Checkbox id="opt3" defaultChecked />
            <Label className="mb-2" htmlFor="opt3">
              Option 3
            </Label>
          </div>
        </div>

        {/* Selected Values Placeholder */}
        <div>
          <Label className="mb-2">Selected Values:</Label>
          <p>Option 1, Option 3</p>
        </div>

        {/* Textarea */}
        <div className="col-span-1 md:col-span-2">
          <Label className="mb-2">Description</Label>
          <Textarea placeholder="Enter your message" />
        </div>
        <div className="col-span-1 md:col-span-2">
          <Label className="mb-2">Description</Label>
          <Textarea placeholder="Enter your message" />
        </div>
        <div className="col-span-1 md:col-span-2">
          <Label className="mb-2">Description</Label>
          <Textarea placeholder="Enter your message" />
          <p className="mt-1 text-destructive text-sm">
            Please enter a valid message.
          </p>
        </div>

        {/* Input States */}
        <div>
          <Label className="mb-2">Email</Label>
          <Input placeholder="Enter your email" />
        </div>
        <div>
          <Label className="mb-2">Email (Success)</Label>
          <Input placeholder="Enter your email" className="border-green-500" />
          <p className="text-green-600 text-sm">This is a success message.</p>
        </div>
        <div>
          <Label className="mb-2">Email (Disabled)</Label>
          <Input disabled value="disabled@example.com" />
        </div>

        {/* Input Groups (simulated) */}
        <div>
          <Label className="mb-2">Email</Label>
          <div className="flex">
            <span className="bg-muted px-3 border border-r-0 rounded-l-md">
              m@
            </span>
            <Input placeholder="gmail.com" className="rounded-l-none" />
          </div>
        </div>

        <div>
          <Label className="mb-2">Phone</Label>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-20">
                <SelectValue placeholder="US" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">+1</SelectItem>
                <SelectItem value="ca">+1 (CA)</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="+1 555-555" />
          </div>
        </div>

        <div>
          <Label className="mb-2">Website</Label>
          <div className="flex">
            <span className="bg-muted px-3 border border-r-0 rounded-l-md">
              http://
            </span>
            <Input placeholder="www.tailadmin.com" className="rounded-l-none" />
          </div>
        </div>

        {/* Copyable URL */}
        <div>
          <Label className="mb-2">Website</Label>
          <div className="flex">
            <Input value="www.tailadmin.com" readOnly />
            <Button className="ml-2">Copy</Button>
          </div>
        </div>

        {/* File Input */}
        <div>
          <Label className="mb-2" htmlFor="file">
            Upload File
          </Label>
          <Input id="file" type="file" />
        </div>

        {/* Checkbox */}
        <div className="space-y-2">
          <Label className="mb-2">Checkbox</Label>
          <Checkbox id="default" />
          <Label className="mb-2" htmlFor="default">
            Default
          </Label>
          <Checkbox id="checked" defaultChecked />
          <Label className="mb-2" htmlFor="checked">
            Checked
          </Label>
          <Checkbox id="disabled" disabled />
          <Label className="mb-2" htmlFor="disabled">
            Disabled
          </Label>
        </div>

        {/* Radio Buttons */}
        <div>
          <Label className="mb-2">Radio Buttons</Label>
          <RadioGroup defaultValue="option1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option1" id="r1" />
              <Label className="mb-2" htmlFor="r1">
                Option 1
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option2" id="r2" />
              <Label className="mb-2" htmlFor="r2">
                Option 2
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Toggle */}
        <div>
          <Label className="mb-2">Toggle Switch</Label>
          <Switch />
        </div>
        {/* Date Picker */}
        <div>
          <Label className="mb-2">Date Picker Input</Label>
          <div className="p-2 border rounded-md">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md w-full"
            />
          </div>
        </div>

        {/* Dropzone Placeholder */}
        <div className="col-span-1 md:col-span-2 p-4 border-2 border-dashed rounded-md text-center">
          <p>Drag & Drop Files Here</p>
          <p className="mt-2 text-muted-foreground text-sm">
            Drag and drop your PNG, JPG, WebP, SVG images here or browse
          </p>
          <Button className="mt-3">Browse File</Button>
        </div>
      </div>
    </div>
  );
};
export default FormElements;
