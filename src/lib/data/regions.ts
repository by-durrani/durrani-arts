"use server";

import { HttpTypes } from "@medusajs/types";
import { SINGLE_REGION } from "@lib/mock-data";

export const listRegions = async (): Promise<HttpTypes.StoreRegion[]> => {
  return [SINGLE_REGION];
};

export const retrieveRegion = async (
  _id: string
): Promise<HttpTypes.StoreRegion> => {
  return SINGLE_REGION;
};

export const getRegion = async (
  _countryCode: string
): Promise<HttpTypes.StoreRegion | null> => {
  return SINGLE_REGION;
};
