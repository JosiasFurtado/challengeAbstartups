import React, { useRef } from "react"
import { Form } from "@unform/web"
import Link from "next/link"
import Input from "../Form"
import * as Yup from "yup"
import { toast } from "react-toastify"
import { FaPlusCircle } from "react-icons/fa"

interface Props {
  page: number
  setPage(page: number): void
}

const FormModal: React.FC<Props> = ({ page, setPage }) => {
  const formRef = useRef(null)
  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("O nome é obrigatório"),
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("O e-mail é obrigatório"),
        address: Yup.object().shape({
          street: Yup.string().required("A rua é obrigatória"),
          number: Yup.string(),
        }),
      })
      await schema.validate(data, {
        abortEarly: false,
      })
      console.log(data)
      reset()
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          toast.error(error.message)
        })
      }
    }
  }
  return (
    <div>
      {page === 1 ? (
        <>
          <div className="flex flex-row py-4">
            <div className="flex flex-row items-center">
              <div className="bg-primary-500 flex items-center justify-center h-10 w-10 font-bold rounded-full text-white">
                01
              </div>
              <p className="ml-2 font-bold text-primary-500">Dados Iniciais</p>
            </div>
            <div className="flex flex-row items-center ml-4">
              <div className="bg-gray-500 flex items-center justify-center h-10 w-10 font-bold rounded-full text-white">
                02
              </div>
              <p className="ml-2 font-bold text-gray-500">Endereço</p>
            </div>
            <div className="flex flex-row items-center ml-4">
              <div className="bg-gray-500 flex items-center justify-center h-10 w-10 font-bold rounded-full text-white">
                03
              </div>
              <p className="ml-2 font-bold text-gray-500">Dados Adicionais</p>
            </div>
          </div>
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-primary-500 px-4 py-5 mb-4 rounded-lg text-white max-w-xl"
          >
            <div className="flex flex-row mb-2">
              <div className="w-full">
                <p>CNPJ/Número de inscrição</p>
                <Input name="cnpj" />
              </div>
              <div className="max-w-sm ml-8">
                <p>Data de abertura</p>
                <Input name="abertura" />
              </div>
            </div>
            <div className="mb-2">
              <p>Nome Empresarial</p>
              <Input name="nomeempresarial" />
            </div>
            <div className="flex flex-row mb-2">
              <div className="w-full">
                <p>Nome Fantasia</p>
                <Input name="nomefantasia" />
              </div>
              <div className="max-w-sm ml-8">
                <p>Porte</p>
                <Input name="porte" />
              </div>
            </div>
            <div className="mb-2 ">
              <p>Código e Descrição da Atividade Econômica Principal</p>
              <Input name="atividadeprincipal" />
            </div>
            <div className="mb-2 ">
              <p>Código e Descrição das Atividades Econômicas Secundárias</p>
              <Input name="atividadessecundarias" />
            </div>
            <div className="mb-4 ">
              <p>Código e Descrição da Natureza Juridica</p>
              <Input name="codigogeral" />
            </div>
          </Form>
          <div className="flex items-center justify-between text-primary-500">
            <p className="text-gray-700">
              Atualize os dados e ganhe{" "}
              <strong className="px-1 font-bold text-primary-500 text-xl">
                100pts
              </strong>
              por campo
            </p>
            <button
              type="button"
              onClick={() => setPage(2)}
              className="px-4 py-2 font-bold hover:bg-primary-400 text-white bg-primary-500 rounded-lg"
            >
              Avançar
            </button>
          </div>
        </>
      ) : page === 2 ? (
        <>
          <p className="border-2 border-secondary-500 rounded-lg p-2  text-primary-500">
            <strong className="font-bold">PARABÉNS!</strong> Você ganhou{" "}
            <strong className="font-bold">300 pontos</strong> e subiu{" "}
            <strong className="font-bold">1 posição</strong> no ranking.
          </p>
          <div className="flex flex-row py-4">
            <div className="flex flex-row items-center">
              <div className="bg-gray-500 flex items-center justify-center h-10 w-10 font-bold rounded-full text-white">
                01
              </div>
              <p className="ml-2 font-bold text-gray-500">Dados Iniciais</p>
            </div>
            <div className="flex flex-row items-center ml-4">
              <div className=" bg-primary-500 flex items-center justify-center h-10 w-10 font-bold rounded-full text-white">
                02
              </div>
              <p className="ml-2 font-bold text-primary-500">Endereço</p>
            </div>
            <div className="flex flex-row items-center ml-4">
              <div className="bg-gray-500 flex items-center justify-center h-10 w-10 font-bold rounded-full text-white">
                03
              </div>
              <p className="ml-2 font-bold text-gray-500">Dados Adicionais</p>
            </div>
          </div>
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-primary-500 px-4 py-5 mb-4 rounded-lg text-white max-w-xl"
          >
            <div className="flex flex-row mb-2">
              <div className="w-full">
                <p>Logradouro</p>
                <Input name="logradouro" />
              </div>
              <div className="max-w-sm ml-6">
                <p>Número</p>
                <Input name="numero" />
              </div>
              <div className="max-w-sm ml-6">
                <p>Complemento</p>
                <Input name="complemento" />
              </div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="w-full">
                <p>CEP</p>
                <Input name="cep" />
              </div>
              <div className="max-w-sm ml-6">
                <p>Bairro</p>
                <Input name="bairro" />
              </div>
              <div className="max-w-sm ml-6">
                <p>Cidade</p>
                <Input name="cidade" />
              </div>
              <div className="max-w-sm ml-6">
                <p>UF</p>
                <Input name="uf" />
              </div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="w-full">
                <p>Email</p>
                <Input name="email" />
              </div>
              <div className="max-w-sm ml-6">
                <p>Telefone</p>
                <Input name="telefone" />
              </div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="w-1/2">
                <p>Situação Cadastral</p>
                <Input name="situacaocadastral" />
              </div>
              <div className="w-1/2 ml-6">
                <p>Data do Cadastro</p>
                <Input name="datacadastro" />
              </div>
            </div>
          </Form>
          <div className="flex items-center justify-between text-primary-500">
            <button
              type="button"
              onClick={() => setPage(1)}
              className="px-4 py-2 font-bold hover:bg-gray-100 text-primary-400 bg-gray-300 rounded-lg"
            >
              Voltar
            </button>
            <button
              type="button"
              onClick={() => setPage(3)}
              className="px-4 py-2 font-bold hover:bg-primary-400 text-white bg-primary-500 rounded-lg"
            >
              Avançar
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="border-2 border-secondary-500 rounded-lg p-2  text-primary-500">
            <strong className="font-bold">PARABÉNS!</strong> Você ganhou{" "}
            <strong className="font-bold">100 pontos</strong>.
          </p>
          <div className="flex flex-row py-4">
            <div className="flex flex-row items-center">
              <div className="bg-gray-500 flex items-center justify-center h-10 w-10 font-bold rounded-full text-white">
                01
              </div>
              <p className="ml-2 font-bold text-gray-500">Dados Iniciais</p>
            </div>
            <div className="flex flex-row items-center ml-4">
              <div className="bg-gray-500 flex items-center justify-center h-10 w-10 font-bold rounded-full text-white">
                02
              </div>
              <p className="ml-2 font-bold text-gray-500">Endereço</p>
            </div>
            <div className="flex flex-row items-center ml-4">
              <div className="bg-primary-500 flex items-center justify-center h-10 w-10 font-bold rounded-full text-white">
                03
              </div>
              <p className="ml-2 font-bold text-primary-500">
                Dados Adicionais
              </p>
            </div>
          </div>
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-primary-500 px-4 py-2 mb-4 rounded-lg text-white max-w-xl"
          >
            <div className="flex flex-row mb-2">
              <div className="w-full">
                <p>Público-alvo</p>
                <Input name="alvo" />
              </div>
              <div className="w-full ml-6">
                <p>Modelo de Receita</p>
                <Input name="modeloreceita" />
              </div>
              <div className="max-w-sm ml-6">
                <p>Momento</p>
                <Input name="momento" />
              </div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="max-w-sm">
                <p>Ano de fundação</p>
                <Input name="anodefundacao" />
              </div>
              <div className="w-full ml-6">
                <p>Tamanho do time</p>
                <Input name="time" />
              </div>
            </div>
            <div className="mb-2">
              <p>Slogan</p>
              <Input name="slogan" />
            </div>
            <div className="flex flex-row mb-2">
              <div className="max-w-sm">
                <p>Mercado</p>
                <Input name="mercado" />
              </div>
              <div className=" w-full ml-6">
                <p>Site</p>
                <Input name="site" />
              </div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="w-1/2">
                <p>Facebook</p>
                <Input name="facebook" />
              </div>
              <div className="w-1/2 ml-6">
                <p>Instagram</p>
                <Input name="instagram" />
              </div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="w-1/2">
                <p>Linkedin</p>
                <Input name="linkedin" />
              </div>
              <div className="w-1/2 ml-6">
                <p>Outros Links</p>
                <Input name="outros" />
              </div>
            </div>
            <div className="mb-2">
              <p>Sobre a empresa</p>
              <Input name="sobre" />
            </div>
            <div className="flex flex-row mb-2">
              <div className="w-1/2">
                <p>Fundador</p>
                <Input name="fundador" />
              </div>
              <div className="w-full ml-6">
                <p>Upload Foto do Fundador</p>
                <div className="flex flex-row items-center">
                  <Input name="fotofundador" />
                  <FaPlusCircle className="text-secondary-400 mx-2" size={30} />
                </div>
              </div>
            </div>
          </Form>
          <div className="flex items-center justify-between text-primary-500">
            <button
              type="button"
              onClick={() => setPage(2)}
              className="px-4 py-2 font-bold hover:bg-gray-100 text-primary-400 bg-gray-300 rounded-lg"
            >
              Voltar
            </button>
            <button
              type="button"
              className="px-4 py-2 font-bold hover:bg-primary-400 text-white bg-primary-500 rounded-lg"
            >
              <Link href="/home">Avançar</Link>
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default FormModal
