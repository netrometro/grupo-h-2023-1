import api from "./api";

export type UpdateProps = {
  nome: string;
  beneficios: string;
  status: boolean;
  id: string;
};

export type CreateProps = {
  nome: string;
  beneficios: string;
  status: boolean;
};

export type ShowProps = {
  postId: string;
  nome: string;
};

export type IndexProps = {
  id: string;
  nome: string;
  beneficios: string;
  status: boolean;
};

export default {
  async index(): Promise<IndexProps[]> {
    try {
      const response = await api.get(`/`);
      return response.data;
    } catch (error) {
      return [];
    }
  },

  async create(input: CreateProps) {
    try {
      const response = await api.post(`/`, input);
      return response.data;
    } catch (error) {
      return {};
    }
  },

  async update(update: UpdateProps) {
    try {
      const response = await api.put(`/${update.id}`, update);
      return response.data;
    } catch (error) {
      return {};
    }
  },

  async delete(id: string) {
    try {
      await api.delete(`/${id}`);
      console.log("deletado");
      return "sucesso";
    } catch (error) {
      console.log(error);
      return "erro";
    }
  },
};
