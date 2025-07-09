import { useEffect, useState } from "react"
import axios from "axios"

export function BuscaCep() {
    const [cep, setCep] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [bairro, setBairro] = useState("")
    const [localidade, setLocalidade] = useState("")
    const [estado, setEstado] = useState("")
    const [uf, setUf] = useState("")

    useEffect(() => {
        if (cep.length === 8) {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then((response) => {
                    setLogradouro(response.data.logradouro)
                    setBairro(response.data.bairro)
                    setLocalidade(response.data.localidade)
                    setEstado(response.data.uf)
                    setUf(response.data.uf)
                })
        }
    }, [cep]) 

    return (
        <div className="">
            <h2 className="text-center text-lg text-azul-marinho font-semibold">Informações residenciais</h2>

            <div>
                <input className="mt-2 border-none w-full px-4 rounded-[10px] bg-[var(--cor-bege)] text-[var(--cor-azul-marinho)] outline-none" type="number" id="cep" placeholder="Digite seu CEP" onChange={(input) => setCep(input.target.value)} />

                {cep.length === 8 && ( 
                    <>
                        <h3>Seu endereço:</h3>
                        <ul>
                            <li>Rua: {logradouro}</li>
                            <li>Bairro: {bairro}</li>
                            <li>Cidade: {localidade}</li>
                            <li>Estado: {estado}</li>
                            <li>UF: {uf}</li>
                        </ul>
                    </>
                )}
            </div>
        </div>
    )
}