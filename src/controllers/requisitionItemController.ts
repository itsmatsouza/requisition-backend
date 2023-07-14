import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { requisitionItemService } from "../services/requisitionItemService";
import { RequisitionItem } from "../models";

export const requisitionItemController = {

  //POST /requisitions/items/create
  create: async (req: AuthenticatedRequest, res: Response) => {
    const {
      requisitionId,
      taxItemNumberId,
      quantity,
      unitOfMeasurementId,
      unitPrice,
      name,
      observation
    } = req.body

    const sequence = await RequisitionItem.findAll({
      where: {
        requisitionId
      }
    })

    try {
      const requisitionItem = await requisitionItemService.createItem(Number(requisitionId), {
        sequence: sequence.length + 1,
        requisitionId,
        taxItemNumberId,
        quantity,
        unitOfMeasurementId,
        unitPrice,
        name,
        observation
      })

      return res.status(201).json(requisitionItem);

    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  // PUT /requisitions/items/:id/update
  update: async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params 
    const {
      taxItemNumberId,
      quantity,
      unitOfMeasurementId,
      unitPrice,
      name,
      observation
    } = req.body

    try {
      const updatedRequisitionItem = await requisitionItemService.update(Number(id), {
        taxItemNumberId,
        quantity,
        unitOfMeasurementId,
        unitPrice,
        name,
        observation
      })

      return res.json(updatedRequisitionItem)

    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }



  }
}