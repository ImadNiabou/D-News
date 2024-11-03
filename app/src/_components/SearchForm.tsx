"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
const SearchForm = () => {
  const [open, setOpen] = useState(false);
  const handleFormOpen = (e: Event | any) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div>
      <form className="flex items-center gap-2">
        <span>
          <Search onClick={() => setOpen(!open)} />
          {open && (
            <div>
              <div className=" flex absolute -right-[4px] rounded-full mx-4 p-1 top-6 right-50  bg-white">
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none px-2 `y-1"
                />
                <button>
                  <Search onClick={handleFormOpen} />
                </button>
              </div>
            </div>
          )}
        </span>
      </form>
    </div>
  );
};

export default SearchForm;
