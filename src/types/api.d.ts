export interface Startup {
  profile_image: string
  founded_at: string
  id: string
  name: string
  description: string
  tags: string[]
  slug: string
  is_verifeid: 0 | 1
  created_at: string
  updated_at: string
  employees: string
  business_phase: string
  uf: string
  state: string
  city: string
  place: string
  is_active: number
  badges: [
    {
      name: string
      profile_image: string
      segments: {
        primary: string
      } | null
    },
  ]
}
