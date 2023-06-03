import supabase from '../../../../utils/supabase'
import { notFound } from 'next/navigation'

export const revalidate = 0

export async function generateStaticParams() {
  const { data: part_925 } = await supabase.from('parts_925').select('id')

  return part_925?.map(({ id }) => ({
    id,
  }))
}

export default async function Post({ params: { id } }: { params: { id: string } }) {
  const { data: part_925 } = await supabase.from('parts_925').select().match({ id }).single()

  if (!part_925) {
    notFound()
  }

  return <pre>{JSON.stringify(part_925, null, 2)}</pre>
}