import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { userService } from "../services/userService";

export const usersController = {
  
  // GET /users/current/approval

  approval: async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.user!;

    try {
      const inApproval = await userService.getInApprovalRequisitionsList(
        Number(id)
      );
      return res.json(inApproval);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  // GET /users/current/involved
  involved: async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.user!;

    try {
      const involved = await userService.getInvolvedList(
        Number(id)
      );
      return res.json(involved);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};