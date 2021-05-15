export default function Logo() {
    return (
        <div className="logo">
            <h1>You<span>Tube</span></h1>
            <style jsx>{`
                .logo {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                span {
                    color: #03e36e;
                    font-weight: 600;
                }
            `}</style>
        </div>
    )
}
