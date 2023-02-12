import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const handleFormSubmit = (event: FormDataEvent) => {
    console.log("event", event);
  };
  return (
    <form class="mt-3 flex flex-col gap-4" onSubmit$={handleFormSubmit()}>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Enter yout todo"
        class="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      />
      <button class="bg-main rounded-lg w-fit px-5 py-2  text-white">
        Add Todos
      </button>
    </form>
  );
});
