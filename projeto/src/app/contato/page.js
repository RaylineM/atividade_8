import Link from "next/link";
export default function Contato() {
return (
<div>
<h2>Entre em Contato</h2>
<form action="#">
<label htmlFor="nome">Nome:</label>
<input type="text" name="nome" required />
<br />
<label htmlFor="email">E-mail:</label>
<input type="email" name="email" required />
<br />
<label htmlFor="telefone">Telefone:</label>
<input type="tel" name="telefone" />
<br />
<label htmlFor="messagem">Mensagem:</label>
<textarea name="messagem" rows="4" required>
</textarea>
<br />
<button type="submit">Enviar</button>
</form>
<Link href="/">retornar para Home</Link>
</div>
)
}