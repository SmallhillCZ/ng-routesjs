export class ApiDocumentLink {
  href:string;
  allowed:{ [method:string]: boolean };
  templated?:boolean;
}