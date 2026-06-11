// ─── Types ───────────────────────────────────────────────────────────────────

export interface RepairService {
  serviceName: string;
  serviceDescription: string | null;
  price: number;
}

export interface PhoneModel {
  name: string;
  slug: string;
  repairServices: RepairService[];
  brand: { name: string };
}

export interface Brand {
  name: string;
  models: { name: string; slug: string }[];
}

// ─── Queries ─────────────────────────────────────────────────────────────────

export const GET_BRANDS = `
  query GetBrands {
    brands(first: 1000) {
      name
      models(first: 1000) {
        name
        slug
      }
    }
  }
`;

export const GET_BRAND_WITH_MODELS = `
  query GetBrandWithModels($name: String!) {
    brand(where: { name: $name }) {
      name
      models(first: 1000) {
        name
        slug
      }
    }
  }
`;

export const GET_MODEL_WITH_REPAIRS = `
  query GetModelWithRepairs($slug: String!) {
    model(where: { slug: $slug }) {
      name
      slug
      brand {
        name
      }
      repairServices(first: 1000) {
        serviceName
        serviceDescription
        price
      }
    }
  }
`;

export const GET_ALL_MODEL_PATHS = `
  query GetAllModelPaths {
    models(first: 1000) {
      slug
      brand {
        name
      }
    }
  }
`;