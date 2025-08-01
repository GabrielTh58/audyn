'use client'
import Input from "./Input";
import InputRadio from "./InputRadio";

export default function FormCheckout() {
  return (
    <form className="flex-1 bg-gray-100 px-6 sm:mx-6 md:mx-0 md:px-12 py-14">
      <div className="flex flex-col gap-6 mb-14">
        <h2 className="font-bold w-full text-xl text-orange-600/80">
          Informações de Contato
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          <Input type="text" placeholder="Alexei Ward" label="Name" />
          <Input type="email" placeholder="alexei@mail.com" label="Email" />
        </div>

        <Input
          type="tel"
          placeholder="(99) 99999-9999"
          label="Telefone"
          className="md:w-1/2"
        />
      </div>

      <div className="flex flex-col gap-6 mb-14">
        <h2 className="font-bold text-xl text-orange-600/80">
          Informações de Envio
        </h2>

        <Input type="text" placeholder="Rua principal 999" label="Endereço" />
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6 w-full">
          <Input type="text" placeholder="Curitiba" label="Cidade" />
          <Input type="text" placeholder="99999-999" label="CEP" />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-xl text-orange-500/80">
          Método de Pagamento
        </h2>

        <div className="flex flex-col gap-4">
          <InputRadio 
            label="Pix"
            name="paymentMethod" 
            value="pix"
            checked
          />
          <InputRadio
            label="Cartão de Crédito"
            name="paymentMethod"
            value="creditCard"
          />
          <InputRadio
            label="Cartão de Débito"
            name="paymentMethod"
            value="debitCard"
          />
          <InputRadio
            label="Boleto Bancário"
            name="paymentMethod"
            value="boleto"
          />
        </div>
      </div>
    </form>
  );
}
