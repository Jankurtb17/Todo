import ProjectService from "@/services/project";
import ResponseData from "@/types/response";

interface formType {
  id?: any,
  title: string,
  description: string,
  author: string,
  completed?: boolean,
}

const useProjects = () => {
  const getData = async () => {
    const projects = ProjectService.getProjects()
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        throw e;
      })
    return projects;
  }

  const addProjects = async (title: string, description: string, author: string, completed?: boolean) => {
    const data: formType = {
      title: title,
      description: description,
      author: author,
      completed: completed,
    }
    const projects = ProjectService
    .createProjectApi(data)
      .catch((e) => {
        throw e;
      })
    return projects;
  }
  
  const getProject = async (
      id: any,
    )  => {
    const projects = ProjectService.getProjectApi(id)
      .then((response: ResponseData) => {
        let projects = response.data;
        return projects;
      })
      .catch((e) => {
        throw e;
      })
    return projects
  };

  const deleteProject = async (id: any) => {
    const projects = ProjectService.deleteProjectApi(id)
      .then((response: ResponseData) => {
        return response.data;
      })
      .catch((e) => {
        throw e;
      })
    return projects;
  }

  const updateProject = async (
      id: any, 
      title: string,
      description: string,
      author: string,
      completed?: boolean,
    ) => {
    const data = {
      title: title,
      description: description,
      author: author,
      completed: completed
    }
    const editProject = ProjectService.updateProjectApi(id, data)
    .then((response: ResponseData) => {
      return response;
    })
    .catch((e) => {
      console.log(e.message)
      throw new Error(e);
    })
  return editProject;
  }

  const updateStatus = async (
    id: any, 
    title: string,
    description: string,
    author: string,
    completed: boolean
    ) => {
    const data = {
      title: title,
      description: description,
      author: author,
      completed: completed
    }
    const project = ProjectService.updateProjectApi(id, data)
    .then((response: ResponseData) => {
      return response;
    })
    .catch((e) => {
      throw e;
    })
    return project;
  } 

  return {
    getData,
    addProjects,
    deleteProject,
    getProject,
    updateProject,
    updateStatus
  }
}

export default useProjects;