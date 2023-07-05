import { Request, Response } from "express";
import { requisitionService } from "../services/requisitionService";
import { AuthenticatedRequest } from "../middlewares/auth";
import { getPaginationParams } from "../helpers/getPaginationParams";

export const requisitionController = {

  //POST /requisitions/create
  create: async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.user!
    const {
      name,
      departmentId,
      projectId,
      description,
      attachmentUrl,
    } = req.body;

    try {
      const requisition = await requisitionService.create({
        name,
        userId: Number(id),
        departmentId,
        requisitionStatusId: 1,
        projectId,
        description,
        attachmentUrl,
      });

      return res.status(201).json(requisition);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  // GET /requisitions/:id
  show: async (req: AuthenticatedRequest, res: Response) => {
    const id = req.params.id;

    try {
      const requisition = await requisitionService.getRequisition(Number(id));
      return res.json(requisition);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  // GET /requisitions/search

  search: async (req: Request, res: Response) => {
    const { name } = req.query;
    const [page, perPage] = getPaginationParams(req.query);

    try {
      // o TS identifica que qualquer name que nao seja uma string, nao passsara do if abaixo, por isso o erro do metodo findByName nao aparece mais
      if (typeof name !== "string")
        throw new Error("name param must be of type string");
      const requisition = await requisitionService.findByName(
        name,
        page,
        perPage
      );
      return res.json(requisition);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
