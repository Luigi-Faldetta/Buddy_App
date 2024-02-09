import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

import Navbar from "./_components/navbar";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from BuddyApp" });
  const session = await getServerAuthSession();
  console.log("session:", session?.user);

  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <video
            autoPlay
            loop
            muted
            src="/_import_8614f0198d20807.91890252.mp4"
            className="absolute left-0 top-0 -z-10 h-screen w-screen object-cover"
          ></video>
          <p className="text-2xl text-white">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.email}</span>}
            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div>

        <CrudShowcase />
      </main>
    </div>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
