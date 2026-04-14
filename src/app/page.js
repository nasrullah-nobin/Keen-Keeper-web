import Friends from "@/Components/AllFriends/Friends";
import Banner from "@/Components/Banner/Banner";


export const metadata = {
  title: "Home | KeenKeeper",
  description: "Keep Your Friendships Alive",
};
export default function Home() {
  return (
  <>
  <Banner></Banner>
 <Friends></Friends>
  </>
  );
}
