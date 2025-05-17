export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      demo: {
        Row: {
          created_at: string | null
          id: number
          value: string
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          value: string
        }
        Update: {
          id: number
          value: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}