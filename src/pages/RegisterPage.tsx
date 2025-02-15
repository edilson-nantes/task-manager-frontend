import { RegisterForm } from "../components/RegisterForm";

export function RegisterPage() {
    return (
        <div className="w-screen h-screen bg-orange-200 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative text-slate-500">
                    <h1 className="text-3xl text-slate-500 font-bold text-center">
                        Cadastro
                    </h1>
                </div>

                <RegisterForm />
            </div>
        </div>
    )
}