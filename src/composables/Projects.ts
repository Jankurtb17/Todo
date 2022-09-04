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
    id: string,
    title: string,
    description: string,
    completed: boolean,
  ) => {
    const projects = axios.post(url, {
      id: id,
      title: title,
      description: description,
      completed: completed
    })
      .catch((e) => {
        throw e;
      })
    return projects;
  }
  
  const getProject = async (
      id: any
    )  => {
    const projects = axios.get(url)
      .then((response) => {
        let projects = response.data;
        const getProject = projects.find((item:any) => item.id === id)
        return getProject;
      })
      .catch((e) => {
        throw e;
      })
    return projects
  };

  const deleteProject = async (id: any) => {
    const projects = axios.delete(url+id)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        throw e;
      })
    return projects;
  }

  const updateProject = async (id: any, 
      title: string,
      description: string
    ) => {
    const editProject = axios.put(url+id, {
      title: title,
      description: description
    })
    .then((response) => {
      return response;
    })
    .catch((e) => {
      throw e;
    })
  return editProject;
  }

  return {
    getData,
    addProjects,
    deleteProject,
    getProject,
    updateProject
  }
}

export default useProjects;