type RequestBody = { [key: string]: number | string | Date };

type BaseParams = {
  body: RequestBody;
  table: string;
};

type CreateParams = {
  body: RequestBody;
  table: string;
};

type PatchParams = BaseParams & {
  id: number;
};

type CustomPatchParams = BaseParams & {
  updateColumn: string;
  updateValue: number | string | Date;
};

type UpsertParams = {
  table: string;
  values: { [key: string]: number | string | Date };
};

export {
  type RequestBody,
  type BaseParams,
  type CreateParams,
  type PatchParams,
  type CustomPatchParams,
  type UpsertParams,
};
