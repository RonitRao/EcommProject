import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://jpxcecsvpzwvcvgyzdxm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpweGNlY3N2cHp3dmN2Z3l6ZHhtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTI0Njc2NiwiZXhwIjoyMDk2ODIyNzY2fQ.8QsLXOoaz2kxpQ1XN_oZhRbUDp6LtUXFgK-V0TQOsdk"
);