"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusList } from "@/components/status/status-list";
import { dummyStatuses } from "@/lib/dummy-data";
import { ImagePlus } from "lucide-react";

export default function StatusPage() {
  const [newStatus, setNewStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newStatus.trim()) {
      // Implement status posting logic here
      setNewStatus("");
    }
  };

  return (
    <div className="container max-w-2xl py-4">
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div className="flex space-x-2">
          <Input
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            placeholder="What's on your mind?"
            className="flex-1"
          />
          <Button type="button" variant="outline" size="icon">
            <ImagePlus className="h-4 w-4" />
          </Button>
          <Button type="submit">Post</Button>
        </div>
      </form>
      <StatusList statuses={dummyStatuses} />
    </div>
  );
}