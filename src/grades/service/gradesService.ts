import { courses, students } from "../../index.js";
import { showErrorModal } from "../../dom/index.js";
import { Grade } from "../../types";
import { generateId } from "../../utils.js";

export const getGradesTotal = (grades: Grade[]): number => {
  const gradesTotal = grades.length;
  return gradesTotal;
};

// Crea una función para obtener los datos completos de una nota
// La función debe recibir una nota
// La función debe devolver un objeto con las mismas propiedades de la nota
// más las propiedades studentName, studentLastName y courseName
// export const getGradeFullData =

// Crea una función para eliminar una nota de la lista de notas
// La función debe recibir un array de notas y el id de la nota a eliminar
// export const deleteGrade =

// Crea una función para crear una nueva nota
// La función debe recibir un array de notas, el id del estudiante, el id del curso y el valor de la nota
// Si la nota ya existe, muestra un error con showErrorModal
export const addGrade = (
  grades: Grade[],
  studentId: number,
  courseId: number,
  number: number
): void => {
  const newGrade: Grade = {
    id: generateId(grades),
    studentId: studentId,
    courseId: courseId,
    value: number,
  };

  if (
    grades.some(
      (grade) => grade.studentId === studentId && grade.courseId === courseId
    )
  ) {
    showErrorModal("Ya existe una nota para este estudiante de este curso");
    return;
  }

  grades.push(newGrade);
};
