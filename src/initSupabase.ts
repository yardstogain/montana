import { SUPABASE_URL, SUPABASE_KEY } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.log("No Supabase creds, check .env");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  localStorage: AsyncStorage as any,
  detectSessionInUrl: false,
});
