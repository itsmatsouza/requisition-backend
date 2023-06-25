import { User } from "../models";
import { UserCreationAttributes } from "../models/User";

export const userService = {
  findByEmail: async (email: string) => {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    return user;
  },

  create: async (attributes: UserCreationAttributes) => {
    const user = await User.create(attributes);

    return user;
  },

  // update: async (
  //   id: number,
  //   attributes: {
  //     firstName: string;
  //     lastName: string;
  //     phone: string;
  //     birth: Date;
  //     email: string;
  //   }
  // ) => {
  //   const [affectedRows, updatedUsers] = await User.update(attributes, {
  //     where: {
  //       id: id,
  //     },
  //     returning: true,
  //   });

  //   return updatedUsers[0];
  // },

  getInApprovalRequisitionsList: async (id: number) => {
    const userWithRequisitionInApproval = await User.findByPk(id, {
      include: {
        association: 'Requisitions',
        attributes: [
          'id',
          'name',
          ['department_id', 'departmentId'],
          ['requisition_status_id', 'requisitionStatusId'],
          ['project_id', 'projectId'],
          'description',
          ['attachment_url', 'attachmentUrl']
        ],
        include: [{
          association: 'requisitionItems',
          attributes: [
            'id',
            'name',
            ['tax_item_number_id', 'taxItemNumberId'],
            'quantity',
            ['unit_of_measurement_id', 'unitOfMeasurementId'],
            ['unit_price', 'unitPrice'],
            'observation'
          ]
        }], 
        through: {
          as: 'inApproval',
          attributes: [
            ['updated_at', 'updatedAt']
          ]
        }
      },
    })

    if (!userWithRequisitionInApproval) throw new Error('Usuario nao encontrado')

    return userWithRequisitionInApproval
  },

  getInvolvedList: async (id: number) => {
    const userWithInvolvedApproval = await User.findByPk(id, {
      include: {
        association: 'Requisitions',
        attributes: [
          'id',
          'name',
          ['department_id', 'departmentId'],
          ['requisition_status_id', 'requisitionStatusId'],
          ['project_id', 'projectId'],
          'description',
          ['attachment_url', 'attachmentUrl']
        ],
        include: [{
          association: 'requisitionItems',
          attributes: [
            'id',
            'name',
            ['tax_item_number_id', 'taxItemNumberId'],
            'quantity',
            ['unit_of_measurement_id', 'unitOfMeasurementId'],
            ['unit_price', 'unitPrice'],
            'observation'
          ]
        }], 
        through: {
          as: 'involved',
          attributes: [
            ['updated_at', 'updatedAt']
          ]
        }
      },
    })

    if (!userWithInvolvedApproval) throw new Error('Usuario nao encontrado')

    return userWithInvolvedApproval
  }
}
