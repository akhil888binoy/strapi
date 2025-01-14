import { EntityService, Common } from '@strapi/types';

import { errors } from '@strapi/utils';

type Entity = EntityService.Result<Common.UID.Schema>;

/**
 * POST /uid/generate
 */
export declare namespace GenerateUID {
  export interface Request {
    body: {
      contentTypeUID: string;
      data: Entity;
      field: string;
    };
    query: {};
  }
  export interface Response {
    data: {
      data: string;
    };
    error?: errors.ApplicationError | errors.YupValidationError;
  }
}

/**
 * POST /uid/check-availability
 */
export declare namespace CheckUIDAvailability {
  export interface Request {
    body: {
      contentTypeUID: string;
      field: string;
      value: string;
    };
    query: {};
  }
  export interface Response {
    data: {
      isAvailable: boolean;
      suggestion: string | null;
    };
    error?: errors.ApplicationError | errors.YupValidationError;
  }
}
