import { useRouter } from 'next/router'

export default function Page() {

    const router = useRouter()
    const { id } = router.query

    console.log(id)
    console.log(router.query)

    return (

        <div>Note Page {id}</div>

    )
}