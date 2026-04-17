import FriendsDetails from "@/Components/FriendsDetails/FriendsDetails";
import fs from "fs/promises";
import path from "path";

export const metadata = {
  title: "Friends Details",
  description: "Keep Your Friendships Alive",
};

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  
  const filePath = path.join(process.cwd(), "public", "friends.json");
  const file = await fs.readFile(filePath, "utf-8");
  const friendsData = JSON.parse(file);

  const friend = friendsData.find(
    (f) => String(f.id) === String(id)
  );

  if (!friend) {
    return (
      <div className="text-center py-20">
        Friend not found 😢
      </div>
    );
  }

  return <FriendsDetails friend={friend} />;
};

export default DetailsPage;