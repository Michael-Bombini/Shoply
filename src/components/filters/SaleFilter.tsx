interface Props {
  setParams: (params: any) => void;
  onSale: string | null;
}

export default function SaleFilter({ setParams, onSale }: Props) {
  return (
    <label className="relative inline-flex items-center mr-5 cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={onSale === "true"}
        onChange={() => {
          setParams((prev: any) => {
            prev.set("onSale", onSale === "true" ? "false" : "true");
            return prev;
          });
        }}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        On Sale
      </span>
    </label>
  );
}
