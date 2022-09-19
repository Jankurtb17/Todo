import http from "@/http-common"

class ProjectForm {
  id?: any
  title!: string
  description!: string
  completed?: boolean
}


class ProjectService {
  getProjects(): Promise<any> {
    return http.get("/projects");
  }

  getProjectApi(id: any): Promise<any> {
    return http.get(`/projects/${id}`)
  }

  createProjectApi(ProjectForm: ProjectForm): Promise<any> {
    return http.post("/projects", ProjectForm);
  }

  updateProjectApi(id: any, ProjectForm: ProjectForm): Promise<any> {
    return http.put(`/projects/${id}`, ProjectForm)
  }

  deleteProjectApi(id: any): Promise<any> {
    return http.delete(`/projects/${id}`)
  }
}

export default new ProjectService();