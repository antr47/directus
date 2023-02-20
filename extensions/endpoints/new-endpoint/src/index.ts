import { defineEndpoint } from "@directus/extensions-sdk";
import { HomeController } from "./controller/home.controller";

export default defineEndpoint((router, context) => {
  //console.log({context: context})
  //console.log({context: context.exceptions})
  // 'services',
  // 'exceptions',
  // 'env',
  // 'database',
  // 'emitter',
  // 'logger',
  // 'getSchema'
  // "0": "ForbiddenException",
  // "1": "GraphQLValidationException",
  // "2": "HitRateLimitException",
  // "3": "IllegalAssetTransformation",
  // "4": "InvalidConfigException",
  // "5": "InvalidCredentialsException",
  // "6": "InvalidIPException",
  // "7": "InvalidOTPException",
  // "8": "InvalidPayloadException",
  // "9": "InvalidProviderException",
  // "10": "InvalidQueryException",
  // "11": "InvalidTokenException",
  // "12": "MethodNotAllowedException",
  // "13": "RangeNotSatisfiableException",
  // "14": "RouteNotFoundException",
  // "15": "ServiceUnavailableException",
  // "16": "TokenExpiredException",
  // "17": "UnprocessableEntityException",
  // "18": "UnsupportedMediaTypeException",
  // "19": "UserSuspendedException",
  // "20": "UnexpectedResponseException",
  // "21": "BaseException",

  new HomeController({
    router: router,
    contextApp: context,
  });
});
