import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// import { Link } from "@builder.io/qwik-city";
import AddTodos from "~/components/addTodos/addTodos";

export default component$(() => {
  //   let showAdd = useSignal(false);
  const showAdd = useStore({ isVisible: false });
  return (
    <div class="p-4 md:p-9">
      <div class="flex gap-5 ">
        <h2 class="text-3xl font-semibold">Your todos</h2>
        <button
          class="bg-main rounded-full px-5 py-2 ml-3 text-white"
          onClick$={() => (showAdd.isVisible = !showAdd.isVisible)}
        >
          {showAdd.isVisible ? "Cancel" : "Add Todos"}
        </button>
      </div>
      {showAdd.isVisible ? <AddTodos /> : null}
    </div>
  );
});

export const head: DocumentHead = {
  title: "All Todos",
  meta: [
    {
      name: "description",
      content: "Todos Page",
    },
  ],
};
