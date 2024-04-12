import { screen, render } from "@testing-library/react"
import Login from "."

describe("Testa o componente de Login", () => {
    
    test("Deve haver um label com o texto 'Email", () => {
        
        render(<Login />)

        const text = screen.getByText('Email')


        expect(text.textContent).toBe
    })


    test("Deve haver um titulo com o nome 'Página de Login'", () => {
        render(<Login />)

        const text = screen.getByRole('heading', {
            name: "Página de Login"
        })

        expect(text).toBeInTheDocument()
    } )

    test("Deve haver apenas dois inputs na página", () => {
        render(<Login />)

        const inputs = screen.getAllByRole('textbox')

        expect(inputs).toHaveLength(2)
    })


    test("Deve haver um input para senha", async () => {

        render(<Login />)


        const inputPassword = await screen.findByPlaceholderText('Insira sua senha')


        expect(inputPassword).toBeInTheDocument()
    })

    test("Deve haver um input para senha", async () => {

        render(<Login />)


        const inputEmail = await screen.findByPlaceholderText('Insira seu Email')


        expect(inputEmail).toBeInTheDocument()
    })


    test("Deve haver um botão escrito 'Entrar'", async () => {

        render(<Login />)

        const button = await screen.findByRole('button', {
            name: "Entrar"
        })

        expect(button).toBeInTheDocument()
    })
})