const { createClient } = require("@supabase/supabase-js");

const { DB_URL, DB_API_ANON_KEY } = process.env;
const client = createClient(DB_URL, DB_API_ANON_KEY);

type CreateParams = {
  body: { [key: string]: number | string | Date };
  table: string;
};

const create = async ({ body, table }: CreateParams) => {
  const { data, error } = await client.from(table).insert(body).select();
  return { data, error };
};

export { client, create };
