import { Response } from "express";
import { requisitionService } from "../services/requisitionService";
import { AuthenticatedRequest } from "../middlewares/auth";

export const requisitionController = {

    // GET /requisitions/:id/inapproval
    getInApproval: async (req: AuthenticatedRequest, res: Response) => {
      const userId = req.user!.id
      const requisitionId = req.params.id
      
      try {
        const inapproval = await requisitionService.getInApproval(Number(userId), Number(requisitionId))
        return res.json(inapproval)
      } catch (err) {
        if (err instanceof Error) {
          return res.status(400).json({ message: err.message });
        }
      }
    }

}