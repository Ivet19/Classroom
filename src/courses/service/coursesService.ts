import { showErrorModal } from "../../dom/index.js";
import { courses } from "../../index.js";
import { Course } from "../../types";
import { generateId } from "../../utils.js";

export const getCoursesTotal = (courses: Course[]): number => {
  const coursesTotal = courses.length;
  return coursesTotal;
};

// Crea una función para añadir un curso a la lista de cursos
// La función debe recibir un array de cursos y el nombre del curso a añadir
// Si el curso ya existe en la lista, muestra un error con showErrorModal
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

// Crea una función para eliminar un curso de la lista de cursos
// La función debe recibir un array de cursos y el id del curso a eliminar
// export const deleteCourse =

// Crea una función para obtener las opciones de cursos para rellenar un select
// La función debe recibir un array de cursos
// La función debe devolver un array de objetos con dos propiedades: id y name
// La propiedad id debe ser el id del curso
// La propiedad name debe ser el nombre del curso
// export const getCoursesOptions =
