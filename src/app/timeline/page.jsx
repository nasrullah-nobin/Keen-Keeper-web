"use client";
import { FriendContext } from "@/Components/FriendsProvider/FriendsProvider";
import { useContext } from "react";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { MdOutlineAddIcCall } from "react-icons/md";

const TimelinePage =  () => {

  const { timeline, friends } = useContext(FriendContext);
  if (timeline.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 px-6 bg-white rounded-xl shadow-sm">
      
        <div className="text-5xl mb-4">📭</div>

        
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          No interactions yet
        </h2>

        
        <p className="text-gray-500 max-w-md leading-relaxed">
          No interactions recorded yet. Call, text or video your friends to
          start building your timeline.
        </p>

       
        <div className="flex gap-3 mt-6">
          <button className="px-4 py-2 rounded-lg bg-[#244D3F] text-white hover:opacity-90">
            📞 Call
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#7E35E1] text-white hover:opacity-90">
            💬 Text
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#37A163] text-white hover:opacity-90">
            🎥 Video
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="py-20 w-7xl mx-auto space-y-3">
      <h6 className="text-5xl font-bold">Timeline </h6>

      <select defaultValue="Filter timeline" className="select">
        <option disabled={true}>Filter timeline</option>
        <option>Call</option>
        <option>Text</option>
        <option>Video</option>
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
