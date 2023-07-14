import { Requisition } from "../models"
import { RequisitionItem, RequisitionItemCreationAttributes } from "../models/RequisitionItem"

export const requisitionItemService = {

  createItem: async (requisitionId:number, attributes: RequisitionItemCreationAttributes) => {
    const requisitionStatus = await Requisition.findOne({
      where: {
        id: requisitionId
      }
    })

    if (requisitionStatus!.requisitionStatusId === 1) {      
      const requisitionItem = await RequisitionItem.create(attributes)
    
      return requisitionItem
    } else {
      throw new Error('Criacão não permitida para items de requisições onde o status é diferente de "em aprovação".') 
    }
  },

  update: async (id: number, attributes: {
    taxItemNumberId: number,
    quantity: number,
    unitOfMeasurementId: number,
    unitPrice: number,
    name: string,
    observation: string
  }) => {
    const requisitionItemToUpdate = await RequisitionItem.findByPk(id)

    if (!requisitionItemToUpdate) throw new Error('Item de Requisição não existente!')

    const requisitionStatus = await Requisition.findOne({
      where: {
        id: requisitionItemToUpdate.requisitionId
      }
    })

    if (requisitionStatus!.requisitionStatusId === 1) {
      const [affectedRows, updatedRequisitionItem] = await RequisitionItem.update(attributes, {
        where: {
          id
        },
        returning: true
      })
  
      return updatedRequisitionItem
    } else {
      throw new Error('Alteração não permitida para items de requisições onde o status é diferente de "em aprovação".') 
    }
  },

  findItem: async (requisitionId: number, sequence: number) => {
    const requisitionItem = await RequisitionItem.findOne({
      where: {
        requisitionId,
        sequence
      }
    })

    if (!requisitionItem) throw new Error('Item de Requisição não existente!')

    return requisitionItem
  }
}
