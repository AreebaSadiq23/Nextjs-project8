"use client";

import { useState, ChangeEvent } from "react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("#000000");

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setColor(e.target.value);
  };

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(color);
    alert("Copy Successfully!");
  };

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: 'url("/background-image.jpg")', // Add your image path here
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card
        className="w-full max-w-md mx-auto p-8 grid gap-8"
        style={{
          background: "rgba(0, 0, 0, 0.7)", // Dark background with transparency
          color: "white", // White text color
        }}
      >
        <div className="text-center space-y-2">
          <CardTitle style={{ color: "white" }}>Color Picker</CardTitle>
          <CardDescription style={{ color: "white" }}>
            Select a color and copy the hex and RGB values.
          </CardDescription>
        </div>

        <div className="grid gap-4">
          <div
            className="w-full h-48 rounded-lg border-4 border-gray-200 dark:border-gray-800"
            style={{ backgroundColor: color }}
          />
          <div className="grid gap-2 text-center">
            <div className="text-2xl font-semibold" style={{ color: "white" }}>
              {color}
            </div>
            <div
              className="text-gray-500 dark:text-gray-400"
              style={{ color: "white" }}
            >
              RGB: {parseInt(color.slice(1, 3), 16)},{" "}
              {parseInt(color.slice(3, 5), 16)},{" "}
              {parseInt(color.slice(5, 7), 16)}
            </div>
            <Button onClick={copyToClipboard} variant="default" className="w-full">
              Copy to Clipboard
            </Button>
          </div>

          <Input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-full h-16 p-0 border-0 rounded-md cursor-pointer"
          />
        </div>
      </Card>
    </div>
  );
}
