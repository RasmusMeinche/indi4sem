export default function glass( {overskrift, tekst, pris} ){
return (
<div className="glass-card flex w-full justify-center">
    <div>
        <h1>{overskrift}</h1>
        <p>{tekst}</p>
        <p>{pris}</p>
    </div>
</div>
)
}