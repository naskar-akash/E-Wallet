import React from "react";
import { useStudentContext } from "./StudentContext";
import { set } from "react-hook-form";

const FilterStudents = () => {
  const { students, setStudents } = useStudentContext();

  const handleNameFilter = (e) => {
    const searchtext = e.target.value;
    const result = students.filter((student) =>
      student.name.toLowerCase().includes(searchtext.toLowerCase())
    );
    setStudents(result);
  };

  const handleStatusFilter = (e) => {
    const status = e.target.value;
    
    if (status === "all") {
      // setStudents(students);
    }
    else {
      const result = students.filter((student) =>
        student.status.toLowerCase() === status.toLowerCase()
      );
      setStudents(result);
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-between max-h-screen">
      <div className="flex flex-col gap-2 mb-4">
        <h2 className="text-xl text-gray-100 mb-2">Filter by Name:</h2>
        <input
          onChange={handleNameFilter}
          className="px-3 py-2 bg-neutral-200 rounded-sm outline-none"
          type="text"
          name="nameFilter"
          placeholder="Search here..."
        />
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <h2 className="text-xl text-gray-100 mb-2">Filter by Class:</h2>
        <div className="flex gap-4">
          <label className="text-lg text-gray-200 font-semibold">
            <input type="radio" name="statusFilter" value="all" onChange={handleStatusFilter} />
            All
          </label>
          <label className="text-lg text-gray-200 font-semibold">
            <input type="radio" name="statusFilter" value="paid" onChange={handleStatusFilter} />
            Paid
          </label>
          <label className="text-lg text-gray-200 font-semibold">
            <input type="radio" name="statusFilter" value="pending" onChange={handleStatusFilter} />
            Pending
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterStudents;
