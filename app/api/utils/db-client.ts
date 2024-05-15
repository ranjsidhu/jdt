const { createClient } = require("@supabase/supabase-js");

const { DB_URL, DB_API_ANON_KEY } = process.env;
const client = createClient(DB_URL, DB_API_ANON_KEY);

type CreateParams = {
  body: { [key: string]: number | string | Date };
  table: string;
};

type PatchParams = {
  body: { [key: string]: number | string | Date };
  table: string;
  id: number;
};

const create = async ({ body, table }: CreateParams) => {
  const { data, error } = await client.from(table).insert(body).select();
  return { data, error };
};

const update = async ({ body, table, id }: PatchParams) => {
  const { data, error } = await client
    .from(table)
    .update({ ...body, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select();
  return { data, error };
};

export { client, create, update };
