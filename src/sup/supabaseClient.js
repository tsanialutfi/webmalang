import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jlxsjgypjgttgbgwslno.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpseHNqZ3lwamd0dGdiZ3dzbG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3MjIxMzAsImV4cCI6MjA2MzI5ODEzMH0.uo0cejOREGieLM3W4JK0GeyntDcfB9ZjjnIb9_39c1c'

export const supabase = createClient(supabaseUrl, supabaseKey)
