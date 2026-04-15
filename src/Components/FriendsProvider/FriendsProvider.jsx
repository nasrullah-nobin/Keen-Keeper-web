"use client";
import React, { createContext, useEffect, useState } from "react";

export const FriendContext = createContext();
const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
   const [timeline,setTimeline]=useState([]);

  useEffect(() => {
    const friendFetch = async () => {
      try {
        const res = await fetch("/friends.json");
        const data = await res.json();
        setFriends(data)
      } catch (error) {
        console.error("Failed to fetch Friends", error);
      } finally {
        setLoading(false);
      }
    };
    friendFetch()
  },[]);
  return (
    <FriendContext.Provider
      value={{ friends, setFriends, loading, setLoading,timeline,setTimeline}}
    >
      {children}
    </FriendContext.Provider>
  );
};

export default FriendsProvider;
