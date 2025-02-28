import { showErrorModal } from "../../dom/index.js";
import { students } from "../../index.js";
import { Student } from "../../types.js";
import { generateId } from "../../utils.js";

export const getStudentsTotal = (students: Student[]): number => {
  const studentsTotal = students.length;
  return studentsTotal;
};

export const addStudent = (
  students: Student[],
  name: string,
  lastName: string,
  age: number,
  email: string,
  phoneNumber: string
): void => {
  const newStudent: Student = {
    id: generateId(students),
    name: name,
    lastName: lastName,
    age: age,
    email: email,
    phoneNumber: phoneNumber,
  };

  if (
    students.some(
      (student) =>
        student.email === newStudent.email &&
        student.phoneNumber === newStudent.phoneNumber
    )
  ) {
    showErrorModal("Este estudiante ya está creado.");
    return;
  }

  students.push(newStudent);
};

export const deleteStudent = (students: Student[], studentId: number): void => {
  const toDeleteStudentPosition = students.findIndex(
    (student) => student.id === studentId
  );

  students.splice(toDeleteStudentPosition, 1);
};

type StudentOptions = {
  id: number;
  name: string;
  lastName: string;
};

export const getStudentsOptions = (students: Student[]): StudentOptions[] => {
  const studentsOptions: StudentOptions[] = students.map((student) => {
    return {
      id: student.id,
      name: student.name,
      lastName: student.lastName,
    };
  });
  return studentsOptions;
};

export const getStudentNameById = (
  students: Student[],
  studentId: number
): string => {
  const student = students.find((student) => student.id === studentId);
  const studentName = student?.name;

  return studentName!;
};
