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
      clicks: {
        Row: {
          city: string | null
          country: string | null
          created_at: string | null
          id: number
          ip: string | null
          link_id: number
          user_agent: string | null
        }
        Insert: {
          city?: string | null
          country?: string | null
          created_at?: string | null
          id?: number
          ip?: string | null
          link_id: number
          user_agent?: string | null
        }
        Update: {
          city?: string | null
          country?: string | null
          created_at?: string | null
          id?: number
          ip?: string | null
          link_id?: number
          user_agent?: string | null
        }
      }
      links: {
        Row: {
          created_at: string | null
          id: number
          key: string
          long_url: string | null
          total_clicks: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          key: string
          long_url?: string | null
          total_clicks?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          key?: string
          long_url?: string | null
          total_clicks?: number | null
          user_id?: string | null
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
