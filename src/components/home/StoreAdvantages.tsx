import {
  IconLock,
  IconPackageImport,
  IconPhoneCall,
  IconTruckDelivery,
} from "@tabler/icons-react";

const data = [
  {
    id: 1,
    title: "Frete Grátis",
    description: "Pedidos acima de R$ 200,00",
    icon: <IconTruckDelivery size={28} />,
  },
  {
    id: 2,
    title: "Devolução Garantida",
    description: "Até 30 dias após o recebimento",
    icon: <IconPackageImport size={28} />,
  },
  {
    id: 3,
    title: "Pagamento Seguro",
    description: "Transações protegidas e confiáveis",
    icon: <IconLock size={28} />,
  },
  {
    id: 4,
    title: "Suporte 24/7",
    description: "Atendimento via telefone e e-mail",
    icon: <IconPhoneCall size={28} />,
  },
];

export default function StoreAdvantages() {
  return (
    <section className="w-full py-14 bg-[#f9f9f9]">
      <div className="container px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-zinc-800">
          Vantagens de Comprar Conosco
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center h-full gap-4 p-6 rounded-xl
              bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-orange-500 text-white p-3 rounded-full shadow-md">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg text-center font-semibold text-zinc-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-center text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
