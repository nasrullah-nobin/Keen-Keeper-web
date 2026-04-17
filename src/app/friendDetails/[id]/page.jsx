import FriendsDetails from "@/Components/FriendsDetails/FriendsDetails";

const DetailsPage = async ({ params }) => {
  await new Promise((res) => setTimeout(res, 800));

  const { id } = await params;
  const data = await fetch("https://keen-keeper-smoky.vercel.app/friends.json");
  const friendsData = await data.json();

  const friend = friendsData.find((friend) => friend.id === parseInt(id));
  if (!friend) {
    return <div className="text-center py-20">Friend not found 😢</div>;
  }

  return <FriendsDetails friend={friend}></FriendsDetails>;
};

export default DetailsPage;
