import { Op } from "sequelize";
import { Department, Requisition } from "../models";
import { InApproval } from "../models/InApproval";
import { Involved } from "../models/Involved";
import { SendTo } from "../models/SendTo";
import { RequisitionCreationAttributes } from "../models/Requisition";
import { RequisitionItem, RequisitionItemCreationAttributes } from "../models/RequisitionItem";

export const requisitionService = {
  create: async (attributes: RequisitionCreationAttributes) => {
    const requisition = await Requisition.create(attributes)
    
    return requisition
  },

  setInvolved: async (userId: number, requisitionId: number) => {
    const involved = await Involved.create({
      userId,
      requisitionId,
    });

    return involved;
  },

  setInApproval: async (userId: number, requisitionId: number) => {
    const approvalAlreadyExists = await InApproval.findOne({
      where: {
        requisitionId,
      },
    });

    if (approvalAlreadyExists) {
      approvalAlreadyExists.userId = userId
      await approvalAlreadyExists.save()
      
    } else {
        const inApproval = await InApproval.create({
          userId,
          requisitionId,
        });
    
        return inApproval;
    }

  },

  sendTo: async (departmentId: number, requisitionId: number) => {
    const departmentOwner = await Department.findOne({
      where: {
        id: departmentId
      }
    })

    const sendTo = await SendTo.create({
      userId: departmentOwner!.userId,
      requisitionId
    })

    return sendTo
  },

  getRequisition: async (id: number) => {
    const requisition = await Requisition.findByPk(id, {
      attributes: [
        "id",
        "name",
        ["department_id", "departmentId"],
        ["requisition_status_id", "requisitionStatusId"],
        ["project_id", "projectId"],
        "description",
        ["attachment_url", "attachmentUrl"],
      ],
      include: [
        {
          association: "requisitionItems",
          attributes: [
            "id",
            "sequence",
            "name",
            ["tax_item_number_id", "taxItemNumberId"],
            "quantity",
            ["unit_of_measurement_id", "unitOfMeasurementId"],
            ["unit_price", "unitPrice"],
            "observation",
          ],
        },
      ],
    });

    const requisitionHistoric = await SendTo.findAll({
      where: {
        requisitionId: id,
      },
    });

    return {
      requisition: requisition,
      historic: requisitionHistoric
    };
  },

  findByName: async (name: string, page: number, perPage: number) => {
    const offset = (page - 1) * perPage;
    const { count, rows } = await Requisition.findAndCountAll({
      attributes: [
        "id",
        "name",
        ["department_id", "departmentId"],
        ["requisition_status_id", "requisitionStatusId"],
        ["project_id", "projectId"],
        "description",
        ["attachment_url", "attachmentUrl"],
      ],
      include: [
        {
          association: "requisitionItems",
          attributes: [
            "id",
            "sequence",
            "name",
            ["tax_item_number_id", "taxItemNumberId"],
            "quantity",
            ["unit_of_measurement_id", "unitOfMeasurementId"],
            ["unit_price", "unitPrice"],
            "observation",
          ],
        },
      ],
      where: {
        name: {
          // Op.iLike ( so funciona no postgres ) tras resultados de pesquisa que contenham o termo, sem diferenciar letras minusculas e maiusculas
          [Op.iLike]: `%${name}%`,
        },
      },
      limit: perPage,
      offset: offset,
    });

    return {
      requisitions: rows,
      page: page,
      perPage: perPage,
      total: count,
    };
  },
};
