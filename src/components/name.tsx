import { createSignal } from "solid-js";

const NameTag = () => {

  const [count, setCount] = createSignal(1);

  return (
    <div class="text-white text-2xl">
      <div>
        <h1 class="text-lg font-bold">Aman Varshney</h1>
        <p class="">{count()}</p>
        <button class="active:bg-pink-500" onClick={() => setCount(count() + 1)}>Increment</button>

      </div>
    </div>
  );  
};

export default NameTag;
