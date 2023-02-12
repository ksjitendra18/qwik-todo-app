import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section class="h-[calc(100vh-80px)] bg-main text-white flex flex-col gap-7 items-center justify-center">
      <h2 class="text-3xl md:text-5xl  font-extrabold">The best todo app</h2>

      <Link
        href="/todos"
        class="bg-transparent border-2 border-white px-5 py-2 rounded-full"
      >
        Get Started
      </Link>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Todos App",
  meta: [
    {
      name: "description",
      content: "Todo App",
    },
  ],
};
