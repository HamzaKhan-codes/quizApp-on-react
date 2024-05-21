function HButton(props: {
    className?: string,
    btnLabel?: string,
    onClick?: any,
}) {
    const { className, btnLabel, onClick } = props
    return <>
        <button onClick={onClick} className={className} > {btnLabel}</button>
    </>
}

export default HButton