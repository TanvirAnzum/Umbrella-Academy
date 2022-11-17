const baseUrl = "https://e-learning-platform-server.vercel.app";

export const getCourses = async (id = -1) => {
  if (id !== -1) {
    const response = await fetch(`${baseUrl}/courses/${id}`);
    const data = await response.json();
    return data;
  } else {
    const response = await fetch(`${baseUrl}/courses`);
    const data = await response.json();
    return data;
  }
};
