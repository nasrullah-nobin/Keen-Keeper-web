import Image from "next/image";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const data = await fetch("http://localhost:3000/friends.json");
  const friendsData = await data.json();

  const friend = friendsData.find((friend) => friend.id === parseInt(id));

  return (
    <div>
      <div>
        <div className="bg-white rounded p-6 text-center">
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
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
