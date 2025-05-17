import { createError } from 'h3'
import { Database } from '~~/types/database.types'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event)

  const { data, error } = await client.from('demo').select('id, created_at, value').order('created_at')
  if (error) {
    throw createError({ statusMessage: error.message })
  }

  return data
})