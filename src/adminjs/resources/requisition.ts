import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";

export const requisitionResourceOptions: ResourceOptions = {
  navigation: "Fluxos",
  editProperties: [
    "name",
    "userId",
    "departmentId",
    "requisitionStatusId",
    "projectId",
    "description",
    "attachmentUpload",
  ],
  filterProperties: [
    "name",
    "userId",
    "departmentId",
    "requisitionStatusId",
    "projectId",
    "description",
    "attachmentUpload",
  ],
  listProperties: [
    "id",
    "name",
    "userId",
    "departmentId",
    "requisitionStatusId",
    "projectId",
    "description",
    "attachmentUpload",
  ],
  showProperties: [
    "id",
    "name",
    "userId",
    "departmentId",
    "requisitionStatusId",
    "projectId",
    "description",
    "attachmentUrl",
    "createdAt",
    "updatedAt",
  ],
};

// Modulo para anexar fotos e videos
export const requisitionResourceFeatures: FeatureType[] = [
  uploadFileFeature({
    provider: {
      local: {
        bucket: path.join(__dirname, "..", "..", "..", "uploads"),
      },
    },
    properties: {
      key: "attachmentUrl",
      file: "attachmentUpload",
    },
    uploadPath: (record, filename) =>
      `attachment/requisition-${record.get("id")}/${filename}`,
  }),
];
