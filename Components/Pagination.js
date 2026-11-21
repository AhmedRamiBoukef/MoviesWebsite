import React, { useState } from "react";
import { useRouter } from "next/router"

export const Pagination = () => {
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const unSelected = "px-3 py-2 leading-tight border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white";
  const selected = "z-10 px-3 py-2 leading-tight border hover:bg-blue-100 hover:text-blue-700 border-gray-700 bg-gray-700 text-white";
  return (
    <nav aria-label="Page navigation example" className="w-full flex justify-center pb-10">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <a
            onClick={() => {setIndex(index-1 <= 0? 0:index-1);}}
            className="block px-3 py-2 ml-0 leading-tight border  rounded-l-lg  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            onClick={() => {router.push(`?genre=${router.query.genre}&index=${index+1}`); console.log(router.query.index);console.log(index);}}
            className={router.query.index == index+1 ?  selected : unSelected}
          >
            {index + 1}
          </a>
        </li>
        <li>
          <a
            onClick={() => router.push(`?genre=${router.query.genre}&index=${index+2}`)}
            className={router.query.index == index+2? selected : unSelected}
          >
            {index + 2}
          </a>
        </li>
        <li>
          <a
            onClick={() => router.push(`?genre=${router.query.genre}&index=${index+3}`)}
            aria-current="page"
            className={router.query.index == index+3? selected : unSelected}
          >
            {index + 3}
          </a>
        </li>
        <li>
          <a
            onClick={() => router.push(`?genre=${router.query.genre}&index=${index+4}`)}
            className={router.query.index == index+4? selected : unSelected}
          >
            {index + 4}
          </a>
        </li>
        <li>
          <a
            onClick={() => router.push(`?genre=${router.query.genre}&index=${index+5}`)}
            className={router.query.index == index+5? selected : unSelected}
          >
            {index + 5}
          </a>
        </li>
        <li>
          <a
            onClick={() => {setIndex(index+1);}}
            className="block px-3 py-2 leading-tight border rounded-r-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};
