import Link from 'next/link'
import supabase from '../../../utils/supabase'

export default async function Posts() {
  const { data: parts_925 } = await supabase.from('parts_925').select('*')

  if (!parts_925) {
    return <p>No posts found.</p>
  }

  return parts_925.map((part_925) => (
    <p>
      {JSON.stringify(part_925)}
    </p>
  ))
}