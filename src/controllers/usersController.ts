import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { userService } from "../services/userService";

export const usersController = {

  // GET /users/current/approval

  approval: async (req: AuthenticatedRequest, res: Response) => {
    const {id} = req.user!
  
    try {
      const inApproval = await userService.getInApprovalRequisitionsList(id)
      return res.json(inApproval)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  }

}