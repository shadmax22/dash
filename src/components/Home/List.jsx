import { faAdd, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function List() {
  return (
    <>
      <div class="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow sm:p-5 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Your WorkSpace
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
            <li class="py-0 sm:py-2">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    FILE 1
                  </p>
                </div>
              </div>
            </li>

            <li class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    FILE 2
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li className="p-2">
              <b className="mt-3 text-xs font-sans flex gap-2 items-center justify-center">
                <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>CREATE NEW
              </b>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
