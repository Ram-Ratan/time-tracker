import { Prisma } from "../../../generated/prisma";

export async function extractSchemaMetadata() {
    // Access schema metadata through Prisma's internal DMMF
    const { models, enums } = Prisma.dmmf.datamodel;
    
    // Store metadata for query generation
    return {
        models: models.map(model => ({
          name: model.name,
          fields: model.fields.map(field => ({
            name: field.name,
            type: field.type,
            isRequired: field.isRequired,
            isUnique: field.isUnique,
            relation: field.relationName ? {
              name: field.relationName,
              fields: field.relationFromFields,
              references: field.relationToFields,
            } : null
          }))
        })),
        enums: enums.map(enumItem => ({
          name: enumItem.name,
          values: enumItem.values.map(v => v.name)
        }))
      };
  }
  