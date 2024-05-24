import { ModeToggle } from "../components/theme-button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Vortex AI
      <ModeToggle/>
    </main>
  );
}
