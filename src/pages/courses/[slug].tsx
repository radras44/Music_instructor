import { useRouter } from "next/router"

export default function Guitar () {
    const router = useRouter()
    console.log(router.query)
    return (
        <div>
            {router.query.slug}
        </div>
    )
}