import { courses, students } from "../../index.js";
import { showErrorModal } from "../../dom/index.js";
import { Grade } from "../../types";
import { generateId } from "../../utils.js";

export const getGradesTotal = (grades: Grade[]): number => {
  const gradesTotal = grades.length;
  return gradesTotal;
};

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

export const deleteGrade = (grades: Grade[], gradeId: number): void => {
  const toDeleteGradePosition = grades.findIndex(
    (grade) => grade.id === gradeId
  );

  grades.splice(toDeleteGradePosition, 1);
};

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
