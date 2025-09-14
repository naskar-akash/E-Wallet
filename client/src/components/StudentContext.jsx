import { createContext,useContext } from "react";

export const StudentContext = createContext();

export const useStudentContext = () => useContext(StudentContext);