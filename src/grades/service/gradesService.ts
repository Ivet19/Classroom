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

type GradeFullData = {
  id: number;
  studentId: number;
  studentName: string;
  studentLastName: string;
  courseId: number;
  courseName: string;
  value: number;
};

export const getGradeFullData = (grade: Grade): GradeFullData => {
  const student = students.find((student) => student.id === grade.studentId);
  const studentName = student?.name;
  const studentLastName = student?.lastName;
  const course = courses.find((course) => course.id === grade.courseId);
  const courseName = course?.name;

  const gradeFullData: GradeFullData = Object.assign(grade, {
    studentName: studentName!,
    studentLastName: studentLastName!,
    courseName: courseName!,
  });

  return gradeFullData;
};

// Crea una función para eliminar una nota de la lista de notas
// La función debe recibir un array de notas y el id de la nota a eliminar
// export const deleteGrade =

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
