import { errors } from '@strapi/utils';

import type {
  SanitizedTransferToken,
  TransferToken,
  TokenUpdatePayload,
} from '../../server/src/services/transfer/token';

/**
 * GET /transfer/runner/push
 */
export declare namespace RunnerPush {
  export interface Request {
    body: {};
    query: {};
  }

  export interface Response {
    data: {};
    error?: errors.ApplicationError | errors.UnauthorizedError;
  }
}
/**
 * GET /transfer/runner/pull
 */
export declare namespace RunnerPull {
  export interface Request {
    body: {};
    query: {};
  }

  export interface Response {
    data: {};
    error?: errors.ApplicationError | errors.UnauthorizedError;
  }
}

/**
 * GET /transfer/tokens - List all transfer tokens
 */
export declare namespace TokenList {
  export interface Request {
    body: {};
    query: {};
  }

  export interface Response {
    data: SanitizedTransferToken[];
    error?: errors.ApplicationError;
  }
}

/**
 * GET /transfer/tokens/:id - Get a token by ID
 */
export declare namespace TokenGetById {
  export interface Request {
    body: {};
    query: {};
  }

  export interface Params {
    id: string | number;
  }

  export interface Response {
    data: SanitizedTransferToken;
    error?: errors.ApplicationError;
  }
}

/**
 * POST /transfer/tokens - Create a transfer token
 */
export declare namespace TokenCreate {
  export interface Request {
    body: TokenUpdatePayload;
    query: {};
  }

  export interface Response {
    data: TransferToken;
    error?: errors.ApplicationError | errors.YupValidationError;
  }
}

/**
 * PUT /transfer/tokens/:id - Update a token by ID
 */
export declare namespace TokenUpdate {
  export interface Request {
    body: TokenUpdatePayload;
    query: {};
  }

  export interface Params {
    id: string | number;
  }

  export interface Response {
    data: SanitizedTransferToken;
    error?: errors.ApplicationError;
  }
}

/**
 * DELETE /transfer/tokens/:id - Delete a transfer token
 */
export declare namespace TokenRevoke {
  export interface Request {
    body: {};
    query: {};
  }

  export interface Params {
    id: string | number;
  }

  export interface Response {
    data: SanitizedTransferToken;
    error?: errors.ApplicationError;
  }
}

/**
 * POST /transfer/tokens/:id/regenerate - Regenerate a token by ID
 */
export declare namespace TokenRegenerate {
  export interface Request {
    body: {};
    query: {};
  }

  export interface Params {
    id: string | number;
  }

  export interface Response {
    data: TransferToken;
    error?: errors.ApplicationError;
  }
}
