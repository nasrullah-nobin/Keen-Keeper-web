"use client";
import { FriendContext } from "@/Components/FriendsProvider/FriendsProvider";
import { useContext } from "react";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { MdOutlineAddIcCall } from "react-icons/md";

const TimelinePage = () => {
  const { timeline, friends } = useContext(FriendContext);

  return (
    <div className="py-20 w-7xl mx-auto space-y-3">
      <h6 className="text-5xl font-bold">Timeline </h6>

      <select defaultValue="Filter timeline" className="select">
        <option disabled={true}>Filter timeline</option>
        <option>Crimson</option>
        <option>Amber</option>
        <option>Velvet</option>
      </select>
      {timeline.map((item, index) => {
        const friend = friends.find((f) => f.id == item.friendId);

        return (
          <div key={index} className="bg-white rounded p-4 mb-6">
            <div className="flex items-center gap-3">
              {item.type === "Video" ? (
                <HiOutlineVideoCamera className="text-2xl" />
              ) : item.type === "Text" ? (
                <BsFillChatRightTextFill />
              ) : item.type === "Call" ? (
                <MdOutlineAddIcCall />
              ) : null}

              <div>
                <h1 className="text-lg text-[#64748B]">
                  <span className="font-bold text-black">{item.type}</span> with{" "}
                  {friend?.name}
                </h1>
                <p className="text-lg text-[#64748B]">{item.createdAt}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TimelinePage;
