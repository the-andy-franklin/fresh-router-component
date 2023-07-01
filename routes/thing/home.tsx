import { PageProps } from "$fresh/server.ts";
import { Sidebar } from "../../components/Sidebar.tsx";

export default function Home(props: PageProps) {
  return (
    <div className="h-screen bg-gray-800 overflow-hidden flex">
      <Sidebar />
      <div className="flex flex-col flex-grow gap-2 justify-center items-center text-white">
        special override page
      </div>
    </div>
  );
}
