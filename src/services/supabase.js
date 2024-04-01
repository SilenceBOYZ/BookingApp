import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://gzllusuptuoefgggezqa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6bGx1c3VwdHVvZWZnZ2dlenFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMzY5MjMsImV4cCI6MjAyNjYxMjkyM30.6G9uVxnSdISKXyTlBtxyVp5266wUi5P2LmtSkxFwc74'
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;