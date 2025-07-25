export function Formulario() {
    return (
      <div className="flex flex-col items-center">
        <form className="flex flex-col gap-4 w-[476px] font-semibold text-sm">
          <p className="mt-11 mb-4 text-center text-xl text-[var(--cor-azul-marinho)]">Crie o seu perfil</p>
  
          <input
            className="border-none h-[63px] w-full px-4 rounded-[20px] bg-[var(--cor-rosa-pastel)] text-white placeholder-white outline-none"
            type="text"
            placeholder="Nome"
          />
          <input
            className="border-none h-[63px] w-full px-4 rounded-[20px] bg-[var(--cor-rosa-pastel)] text-white placeholder-white outline-none"
            type="number"
            placeholder="Idade"
          />
          <input
            className="border-none h-[63px] w-full px-4 rounded-[20px] bg-[var(--cor-rosa-pastel)] text-white placeholder-white outline-none"
            type="email"
            placeholder="Email"
          />
          <input
            className="border-none h-[63px] w-full px-4 rounded-[20px] bg-[var(--cor-rosa-pastel)] text-white placeholder-white outline-none"
            type="password"
            placeholder="Senha"
          />
  
          <button
            className="w-[476px] h-[63px] bg-[var(--cor-rosa)] text-white rounded-[20px] text-lg uppercase font-bold mx-auto"
            type="submit"
          >
            Criar Conta
          </button>
  
          <p className="mt-3.5 mb-5 text-center text-xs text-[var(--cor-azul-marinho)]">
            Já tem uma conta CoincSmart? <a className="text-[var(--cor-azul)] underline font-bold" href="#">Faça login</a>
          </p>
        </form>
      </div>
    );
  }