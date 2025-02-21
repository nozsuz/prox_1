export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          name: string
          created_at: string
          updated_at: string
          points: number
          remaining_analysis: number
          total_analysis: number
        }
        Insert: {
          id: string
          email: string
          name: string
          created_at?: string
          updated_at?: string
          points?: number
          remaining_analysis?: number
          total_analysis?: number
        }
        Update: {
          id?: string
          email?: string
          name?: string
          created_at?: string
          updated_at?: string
          points?: number
          remaining_analysis?: number
          total_analysis?: number
        }
      }
    }
  }
}