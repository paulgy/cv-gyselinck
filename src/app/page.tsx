import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Competences from "@/components/Competences";
import Experiences from "@/components/Experiences";
import Formations from "@/components/Formations";
import Engagements from "@/components/Engagements";

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-lg my-8 font-sans">
      <Header />
      <main className="mt-8 space-y-12">
        <Profile />
        <Competences />
        <Experiences />
        <Formations />
        <Engagements />
      </main>
    </div>
  );
}
