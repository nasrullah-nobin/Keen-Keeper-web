import FriendsDetails from "@/Components/FriendsDetails/FriendsDetails";
import { notFound } from "next/navigation";


const DetailsPage = async ({ params }) => {
  await new Promise((res) => setTimeout(res, 800));

  const { id } = await params;
  const data = await fetch("http://localhost:3000/friends.json");
  const friendsData = await data.json();

  const friend = friendsData.find((friend) => friend.id === parseInt(id));
  if (!friend) {
    notFound();
  }

  return (
   <FriendsDetails friend={friend}></FriendsDetails>
  );
};

export default DetailsPage;
