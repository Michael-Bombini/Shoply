import React, { useState } from "react";
import { CATEGORIES } from "../../utils/categories";

interface Props {
  setParams: (params: any) => void;
  category: string | null;
}

export default function CategoryFilter({ setParams, category }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    category ? category : ""
  );

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const clickedCategory = event.target.value;
    setSelectedCategory(clickedCategory);
    setParams((prev: any) => {
      prev.set("category", clickedCategory);
      return prev;
    });
  };

  return (
    <>
      {CATEGORIES.map((category) => (
        <label key={category.label} className="flex items-center mx-8 gap-2">
          <input
            className="accent-red-600"
            type="checkbox"
            value={category.value}
            checked={selectedCategory === category.value}
            onChange={handleCheckboxChange}
          />
          {category.label}
        </label>
      ))}
    </>
  );
}
