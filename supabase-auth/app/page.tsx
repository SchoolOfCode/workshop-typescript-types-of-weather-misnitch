import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Index() {
  const supabase = createClient();

  const { data: notes } = await supabase.from("notes").select();

  console.log(notes);

  return (
    <>
      {notes?.map((note) => {
        return <h1>{note.title}</h1>;
      })}
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Next steps</h2>
        {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
      </main>
    </>
  );
}
