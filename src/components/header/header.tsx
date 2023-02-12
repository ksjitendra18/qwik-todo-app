import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header class=" h-[80px] text-white bg-main py-4 px-4 md:px-9 flex justify-between items-center">
      <h1 class="font-bold text-3xl">
        <Link href="/">Todos</Link>
      </h1>
      <nav>
        <ul class="flex text-xl gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/todos">Todos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
