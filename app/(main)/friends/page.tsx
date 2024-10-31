"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FriendList } from "@/components/friends/friend-list";
import { dummyFriends } from "@/lib/dummy-data";
import { Search } from "lucide-react";

export default function FriendsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFriends = dummyFriends.filter((friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container max-w-2xl py-4">
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search friends..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      <FriendList friends={filteredFriends} />
    </div>
  );
}