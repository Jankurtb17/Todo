import axios from "axios";

const useProjects = () => {
  const url = "http://localhost:3000/projects/"
  const getData = async () => {
    const projects = axios.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        throw e;
      })
    return projects;
  }

  const addProjects = async (
    name: string
  ) => {
    const projects = axios.post(url, {
      name: name
    })
      .catch((e) => {
        throw e;
      })
    return projects;
  }

  const deleteProject = async (id: any) => {
    const projects = axios.delete(url, id)
      .then((response) => {
        return response;
      })
      .catch((e) => {
        throw e;
      })
    return projects;
  }

  return {
    getData,
    addProjects,
    deleteProject
  }
}

export default useProjects;