import { showErrorModal } from "../../dom/index.js";
import { courses } from "../../index.js";
import { Course } from "../../types";
import { generateId } from "../../utils.js";

export const getCoursesTotal = (courses: Course[]): number => {
  const coursesTotal = courses.length;
  return coursesTotal;
};

export const addCourse = (courses: Course[], courseName: string): void => {
  const newCourse: Course = {
    id: generateId(courses),
    name: courseName,
  };

  if (courses.some((course) => course.name === courseName)) {
    showErrorModal("Este curso ya está creado.");
    return;
  }

  courses.push(newCourse);
};

export const deleteCourse = (courses: Course[], courseId: number): void => {
  const toDeleteCoursePosition = courses.findIndex(
    (course) => course.id === courseId
  );
  courses.splice(toDeleteCoursePosition, 1);
};

// Crea una función para obtener las opciones de cursos para rellenar un select
// La función debe recibir un array de cursos
// La función debe devolver un array de objetos con dos propiedades: id y name
// La propiedad id debe ser el id del curso
// La propiedad name debe ser el nombre del curso
type CoursesOptions = {
  id: number;
  name: string;
};

export const getCoursesOptions = (courses: Course[]): CoursesOptions[] => {
  const coursesOptions: CoursesOptions[] = courses.map((course) => {
    return {
      id: course.id,
      name: course.name,
    };
  });

  return coursesOptions;
};
