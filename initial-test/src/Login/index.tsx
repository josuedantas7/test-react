const Login = () => {
  return (
    <div className="w-[50%] mx-auto">
        <h1 className="text-center mt-20 text-2xl font-bold">Página de Login</h1>
        <label className="w-full space-y-0.5">
            <h1 className="font-semibold">Email</h1>
            <input type="text" className="w-full border border-zinc-500 rounded-md" placeholder="Insira seu Email" />
        </label>
        <label className="w-full space-y-0.5">
            <h1 className="font-semibold">Senha</h1>
            <input type="text" className="w-full border border-zinc-500 rounded-md" placeholder="Insira sua senha" />
        </label>
        <button className="w-full bg-green-500 rounded-md">Entrar</button>
    </div>
  )
}

export default Login
