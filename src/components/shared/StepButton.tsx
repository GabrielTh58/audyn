interface CartButtonProps{
    onClick?: () => void
    children: React.ReactNode
}

export default function StepButton(props: CartButtonProps){
    const { children, onClick: onclick } = props

    return(
        <button
            onClick={onclick}
            className="w-full block text-center cursor-pointer bg-orange-600/90 font-bold text-white
                px-6 py-3 hover:bg-orange-500/90 transition-colors"
        >
            {children}
        </button>
    )
}