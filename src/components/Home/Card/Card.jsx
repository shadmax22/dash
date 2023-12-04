import styles from "./Card.module.css";

export default function Card() {
  return (
    <>
      <a
        href="#"
        class={
          styles.card +
          " block max-w-sm p-6  rounded-lg shadow hover:bg-gray-100  dark:hover:bg-gray-700"
        }
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Travel Page using synamtics tags.
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </a>
    </>
  );
}
