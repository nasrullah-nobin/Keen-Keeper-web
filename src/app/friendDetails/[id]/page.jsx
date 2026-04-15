
import FriendsProvider from "@/Components/FriendsProvider/FriendsProvider";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FiArchive } from "react-icons/fi";
import { IoCall } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { PiVideoCameraBold } from "react-icons/pi";
import { RiDeleteBin5Line, RiNotificationSnoozeLine } from "react-icons/ri";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const data = await fetch("http://localhost:3000/friends.json");
  const friendsData = await data.json();

  const friend = friendsData.find((friend) => friend.id === parseInt(id));
  if (!friend) {
    notFound();
  }

  return (
    <div className="grid grid-cols-5 max-w-7xl mx-auto py-20 gap-6">
      <div className="col-span-2 space-y-3.5">
        <div className="bg-white rounded p-6 text-center space-y-3.5">
          <Image
            src={friend.picture}
            alt={friend.name}
            width={80}
            height={80}
            className="rounded-full mx-auto"
          ></Image>
          <h3 className="text-2xl font-semibold">{friend.name}</h3>
          <div
            className={`badge text-white font-medium ${friend.status === "on-track" ? "bg-[#244D3F]" : friend.status === "overdue" ? "bg-[#EF4444]" : friend.status === "almost due" ? "bg-[#EFAD44]" : ""}`}
          >
            {friend.status}
          </div>
          <div className="flex gap-1 items-center justify-center font-medium">
            {friend.tags.map((t, ind) => (
              <div key={ind} className="badge bg-[#CBFADB]">
                {t}
              </div>
            ))}
          </div>
          <p>{friend.bio}</p>
          <p>Preferred: {friend.email}</p>
        </div>
        <div className="flex flex-col space-y-3.5">
          <button className="btn">
            <RiNotificationSnoozeLine /> Snooze 2 weeks
          </button>
          <button className="btn">
            <FiArchive /> Archive
          </button>
          <button className="btn text-red-600">
            <RiDeleteBin5Line />
            Delete
          </button>
        </div>
      </div>
      <div className="text-center col-span-3 grid grid-cols-3 gap-6">
        <div className="rounded p-8 bg-white">
          <p className="font-semibold text-3xl">{friend.days_since_contact}</p>
          <p className="text-lg">Days Since Contact</p>
        </div>
        <div className="rounded p-8 bg-white">
          <p className="font-semibold text-3xl">{friend.goal}</p>
          <p className="text-lg">Goal (Days)</p>
        </div>
        <div className="rounded p-8 bg-white">
          <p className="font-semibold text-3xl">{friend.next_due_date}</p>
          <p className="text-lg">Next Due</p>
        </div>
        <div className="flex justify-between bg-white rounded p-6 col-span-3 text-left">
          <div>
            <p className="font-medium text-xl text-[#244D3F]">
              Relationship Goal
            </p>
            <p>
              Connect every{" "}
              <span className="font-bold text-lg">{friend.goal} days</span>
            </p>
          </div>
          <button className="btn">Edit</button>
        </div>
        <div className="bg-white rounded p-6 col-span-3 text-left space-y-3">
          <p className="text-xl font-medium text-[#244D3F]">Quick Check-In</p>
          <div className="flex justify-center items-center gap-6 text-center">
            <div className="bg-[#E9E9E9] p-4 rounded w-full flex flex-col gap-2 items-center cursor-pointer">
              <IoCall />
              <p>Call</p>
            </div>
            <div className="bg-[#E9E9E9] p-4 rounded w-full flex flex-col gap-2 items-center cursor-pointer">
              <MdOutlineTextsms />
              <p>Text</p>
            </div>
            <div className="bg-[#E9E9E9] p-4 rounded w-full flex flex-col gap-2 items-center cursor-pointer">
              <PiVideoCameraBold />
              <p>Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
