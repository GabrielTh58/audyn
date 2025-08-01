import Header from "./Header";

interface HeaderCategoryProps {
    category: string
}

export default function SectionHeader({category} : HeaderCategoryProps) {
    const mappingCategories = (category: string) =>{
        return category === 'headphones' ? 'headphones' : category === 'speakers' ? 'Caixas de Som' : 'Fones de Ouvido'
    }
    
    return (
        <header className="w-full flex flex-col items-center  bg-[#0e0e0e] h-46 md:h-80 lg:h-96">
            <Header />
            <div className="flex justify-center h-full items-center">
                <h1 className="capitalize font-bold text-3xl md:text-4xl bg-clip-text text-transparent
                     bg-gradient-to-r from-white to-gray-400">
                    {mappingCategories(category)}
                </h1>
            </div>
      </header>
    )
}