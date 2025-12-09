import Sektionsoverskrift from "./sektionsoverskrift"

export default function Profilkort () {
    return (
        <>
            <section className="py-(--content-padding)">
                <div>
                    < Sektionsoverskrift titel="Vores team"/>
                </div>
                <div className="w-(--content-size) m-auto grid grid-cols-3 items-center gap-8 [&>div]:flex [&>div]:flex-col [&_h1]:text-3xl [&_h1]:font-(--font-weight) [&_p]:text-xl [&_p]:font-medium">
                    <div className="glass-card justify-center items-center">
                        <img src="/profillund.png" alt="" />
                        <h1>Simon Lund</h1>
                        <p>Stifter</p>
                    </div>
                    <div className="glass-card justify-center items-center">
                        <img src="/profilthor.png" alt="" />
                        <h1>Thor Giessing</h1>
                        <p>Stifter</p>
                    </div>
                    <div className="glass-card justify-center items-center">
                        <img src="profilpelle.png" alt="" />
                        <h1>Pelle Boas</h1>
                        <p>Stifter</p>
                    </div>
                </div>
            </section>
        </>
    )
}