import { html } from "satori-html";

export const templates: Record<string, (data?: Record<string, any>) => any> = {
  default: () => html`<div
    tw="bg-[#030303] flex items-center justify-center w-full h-full"
  >
    <h1 tw="text-neutral-100 text-8xl">Aman Varshney</h1>
  </div>`,
  blog: (data) => html`<div tw="flex flex-col text-neutral-100 items-center justify-center w-full h-full bg-[#030303] px-10">
  <h2 tw="text-6xl text-center font-bold leading-snug">${data?.title}</h2>
  <p tw="text-5xl text-neutral-300">Aman Varshney</p>
</div>`,
};
