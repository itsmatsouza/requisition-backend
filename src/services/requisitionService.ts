import { InApproval } from "../models/InApproval";


export const requisitionService = {
  setInApproval: async (userId:number, requisitionId: number) => {

    const inApproval = await InApproval.create({
      userId, 
      requisitionId
    })

    return inApproval
  },

  getInApproval: async (userId: number, requisitionId: number) => {
    const inApproval = await InApproval.findOne({
      where: {
        userId: userId,
        requisitionId: requisitionId
      }
    })

    return inApproval
  }

}
