import { ApiDocumentLink } from './link';
import { ApiDocumentAction } from './action';

export class ApiDocument {
  _links?:{
    self: ApiDocumentLink,
    [link:string]:ApiDocumentLink
  };
  _actions?:{
    [link:string]:ApiDocumentAction
  };
}