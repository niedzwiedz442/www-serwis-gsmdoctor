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

export const GET_BRANDS = `
  query GetBrands($skip: Int!) {
    brands(first: 100, skip: $skip, orderBy: name_ASC) {
      name
      models(first: 100, orderBy: name_ASC) {
        name
        slug
      }
    }
    brandsConnection {
      aggregate {
        count
      }
    }
  }
`;

export const GET_BRAND_WITH_MODELS = `
  query GetBrandWithModels($name: String!) {
    brand(where: { name: $name }) {
      name
      models(first: 1000, orderBy: name_ASC) {
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

export const GET_ALL_MODELS_WITH_REPAIRS = `
  query GetAllModelsWithRepairs($skip: Int!) {
    models(first: 100, skip: $skip, orderBy: slug_ASC) {
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
    modelsConnection {
      aggregate {
        count
      }
    }
  }
`;

type HygraphQueryFn = <T = Record<string, unknown>>(
  query: string,
  variables?: Record<string, unknown>
) => Promise<T>;

const PAGE_SIZE = 100;

export async function getAllBrandsWithModels(
  hygraphQuery: HygraphQueryFn
): Promise<Brand[]> {
  const all: Brand[] = [];
  let skip = 0;
  let total = Infinity;

  while (skip < total) {
    const data = await hygraphQuery<{
      brands: Brand[];
      brandsConnection: { aggregate: { count: number } };
    }>(GET_BRANDS, { skip });

    all.push(...data.brands);
    total = data.brandsConnection.aggregate.count;
    skip += PAGE_SIZE;
  }

  return all;
}

export async function getAllModelsWithRepairs(
  hygraphQuery: HygraphQueryFn
): Promise<PhoneModel[]> {
  const all: PhoneModel[] = [];
  let skip = 0;
  let total = Infinity;

  while (skip < total) {
    const data = await hygraphQuery<{
      models: PhoneModel[];
      modelsConnection: { aggregate: { count: number } };
    }>(GET_ALL_MODELS_WITH_REPAIRS, { skip });

    all.push(...data.models);
    total = data.modelsConnection.aggregate.count;
    skip += PAGE_SIZE;
  }

  return all;
}