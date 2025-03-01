import { courses, grades } from "../../index.js";
import { CourseStats } from "../../types";

export const getCourseStats = (courseId: number): CourseStats => {
  const courseGrades = grades.filter((grade) => grade.courseId === courseId);

  const studentsCount = courseGrades.length;
  const passedCount = courseGrades.filter((grade) => grade.value >= 5).length;
  const failedCount = courseGrades.filter((grade) => grade.value < 5).length;

  const passedCountPercentage = (passedCount / studentsCount) * 100;
  const failedCountPercentage = (failedCount / studentsCount) * 100;

  const averageGrade =
    courseGrades.reduce((sum, grade) => sum + grade.value, 0) /
    courseGrades.length;

  const gradesValues = courseGrades.map((grade) => grade.value);
  const highestGradeValue = Math.max(...gradesValues);
  const highestGrade = courseGrades.find(
    (grade) => grade.value === highestGradeValue
  );
  const highestGradeStudentId = highestGrade?.studentId;

  const courseStats: CourseStats = {
    courseId: courseId,
    studentsCount: studentsCount,
    passedCount: passedCount,
    passedCountPercentage: passedCountPercentage,
    failedCount: failedCount,
    failedCountPercentage: failedCountPercentage,
    averageGrade: averageGrade,
    highestGrade: highestGradeValue,
    highestGradeStudentId: highestGradeStudentId!,
  };

  return courseStats;
};
