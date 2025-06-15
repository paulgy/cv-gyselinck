import Header from "@/components/Header";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Activities from "@/components/Activities";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="font-sans bg-gray-50">
      <div className="container mx-auto max-w-5xl p-8 md:p-12 bg-white shadow-lg my-8">
        <Header />
        <Education />
        <Experience />
        <Activities />
        <Skills />
      </div>
    </main>
  );
}
