import ReactDOM from "react-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useEffect } from "react";
import { closeModal } from "../../redux/slices/modalSlice";
export default function Modal() {
  const productModalId = document.getElementById("product-modal");

  const modal = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  if (!productModalId) return;

  useEffect(() => {
    let modalTimeout: number;
    if (modal.open) {
      modalTimeout = setTimeout(() => {
        dispatch(closeModal());
      }, 500);
    }

    return () => clearTimeout(modalTimeout);
  }, [modal.open]);

  return ReactDOM.createPortal(
    <div
      id="toast-success"
      className={`${
        !modal.open ? "-translate-y-full top-0 opacity-0 z-[-1]" : " opacity-1 z-[999] "
      } flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 top-1/3 bg-white rounded-lg shadow transition-all duration-500 dark:text-gray-400 dark:bg-gray-800 fixed left-1/2 -translate-x-1/2 -translate-y-1/2`}
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        <span className="sr-only">Check icon</span>
      </div>
      <div className="ml-3 text-sm font-normal"> {modal.message}</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-success"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>,
    productModalId
  );
}
