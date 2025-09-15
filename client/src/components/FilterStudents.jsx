import React from "react";
import { useStudentContext } from "./StudentContext";

const FilterStudents = () => {
  const { nameFilter, setNameFilter, statusFilter, setStatusFilter } =
    useStudentContext();

  const handleRemoveFilter = () => {
    setNameFilter("");
    setStatusFilter("");
  };

  return (
    <div className="flex flex-col gap-4 justify-between max-h-screen">
      <div className="flex flex-col gap-2 mb-4">
        <h2 className="text-xl text-gray-100 mb-2">Filter by Name:</h2>
        <input
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="px-3 py-2 bg-neutral-200 rounded-sm outline-none"
          type="text"
          name="nameFilter"
          placeholder="Search here..."
        />
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <h2 className="text-xl text-gray-100 mb-2">Filter by Status:</h2>
        <select
          name="statusFilter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 bg-neutral-200 rounded-sm outline-none"
        >
          <option value="">--select--</option>
          <option value="paid">Paid</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <div className="flex justify-center mt-4">
      <button onClick={handleRemoveFilter} className="px-3 py-2 bg-rose-500 rounded-lg text-white font-bold hover:bg-rose-600 text-md">Cancel Filter</button>
      </div>
    </div>
  );
};

export default FilterStudents;
