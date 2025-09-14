import ClientWrapper from "./dashboard/ClientWrapper";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col items-center sm:items-start">
        <ClientWrapper />
      </main>
    </div>
  );
}
