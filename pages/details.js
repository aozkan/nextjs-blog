import Link from 'next/link'

export default function Details() {

    return (
        <div>
            <Link as="/car/bruno" href="/[vehicle]/[person]">
                <a>Navigate to Bruno's Car</a>
            </Link>
        </div>
    )
}