import http from "@/http-common"

class ProjectForm {
  _id?: any
  title!: string
  description!: string
  author!: string
  completed?: boolean
}

class ProjectService extends ProjectForm{
  getProjects(): Promise<any> {
    return http.get("/");
  }

  getProjectApi(_id: any): Promise<any> {
    return http.get(`/${_id}`)
  }

  createProjectApi(ProjectForm: ProjectForm): Promise<any> {
    return http.post("/", ProjectForm);
  }

  updateProjectApi(_id: any, ProjectForm: ProjectForm): Promise<any> {
    return http.put(`/${_id}`, ProjectForm)
  }

  deleteProjectApi(_id: any): Promise<any> {
    return http.delete(`/${_id}`)
  }
}

export default new ProjectService();