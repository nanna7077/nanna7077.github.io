export default function HireMeFooter() {
    return (
        <div className="w-full h-18 p-2 flex justify-center items-center text-white gap-4 fixed bottom-0 bg-[rgba(246,148,251,.2)] cursor-pointer" onClick={() => window.location.href = "/contact?subject=Ready%20to%20Hire"}>
            <h1 className="font-bold">Hire me</h1>
            Dedicated to driving innovation and results — ready to bring my passion to your team.
        </div>
    )
}