import Link from 'next/link'
import Home from './page'
export default function NotFound() {
return (
<Home>
<h2>Não encontrado</h2>
<p>Não foi possível encontrar o recurso solicitado</p>
<Link href="/">retornar para Home</Link>
</Home>
)
}