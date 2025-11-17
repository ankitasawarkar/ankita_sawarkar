import Navbar from "./components/navbar/NavBarModel";
import ProfileContent from "./components/profile/Profile";

export default function Home() {
  return (
    <div className="animate-fadeIn">
      <Navbar />
      <ProfileContent />
    </div>
  );
}