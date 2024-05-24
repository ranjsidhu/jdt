const { createClient } = require("@supabase/supabase-js");

const { DB_URL, DB_API_ANON_KEY } = process.env;
const client = createClient(DB_URL, DB_API_ANON_KEY);
const { auth } = client;

export { auth };
