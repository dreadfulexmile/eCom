import React from 'react'
import { cn } from '@/lib/utils'

function CategoryButton({category, selectedCategoryID, onClick}) {
  return (
    <button
      onClick={onClick}
      className={cn('border rounded-full px-4 py-2 transition-colors',{
        "bg-black text-white": selectedCategoryID === category._id,
        "bg-white border-black text-black":
          selectedCategoryID !== category._id,
      })}>
        {category.name}
     </button>
  );
}

export default CategoryButton;
