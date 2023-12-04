import { faAdd, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./index.module.css";
export default function List({ name, data, footer }) {
  return (
    <>
      <div class="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow sm:p-5 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            {name}
          </h5>
          {/* <a
            href="#"
            class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            View all
          </a> */}
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            {data.map((i) => {
              return (
                <>
                  <li
                    class="py-0 sm:py-2"
                    key={i.id}
                    onClick={i.click ?? (() => {})}
                  >
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <FontAwesomeIcon icon={i.icon}></FontAwesomeIcon>
                      </div>
                      <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {i.title}
                        </p>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
          <ul>
            <li className="p-2">{footer ?? ""}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
