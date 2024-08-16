import { useState } from "react";
import LoginImage from "../assets/login-image.svg";

import { FaRegEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const [isShow, setIsShow] = useState(false);

    return (
        <main>
            <header>
                <button type='button' className="font-semibold text-black m-8">Kira Takip</button>
            </header>

            <section className="flex mx-[180px] mt-[60px]">
                <aside className="flex flex-col gap-4 w-full">
                    <h1 className="font-semibold text-[50px]">Hoşgeldiniz </h1>
                    <p className="text-lg">Kira Takip Uygulamamız ile kira işlemlerinizi zahmetsizce yönetin. Yenilikçi özelliklerimizle tüm kira süreçlerinizi sorunsuzca takip edin ve yönetin.</p>
                    <p>Üyeliğiniz yoksa <span className="text-[#4D47C3]">yeni üyelik</span>  oluşturun.</p>
                    <div className="flex justify-end">
                        <img src={LoginImage} alt="" width={313} height={556} />
                    </div>
                </aside>
                <aside>
                    <h1 className="text-[30px] mb-7">Giriş Yap</h1>

                    <div className="flex flex-col gap-4 min-w-[370px]">

                        <input
                            placeholder="E-mail"
                            type="email"
                            className="bg-[#F0EFFF] text-[#A7A3FF] placeholder:text-[#A7A3FF] outline-none px-[26px] py-5 rounded-md"

                        />

                        <div className="relative w-full">
                            <input
                                placeholder="Şifre"
                                type={isShow ? 'text' : 'password'}
                                className="bg-[#F0EFFF] w-full text-[#A7A3FF] placeholder:text-[#A7A3FF] outline-none px-[26px] py-5 rounded-md"

                            />

                            <button onClick={() => setIsShow(!isShow)} type="button" className="absolute top-1/2 right-4 -translate-y-1/2">
                                {isShow ? <FaEyeSlash color="#A7A3FF" /> : <FaRegEye color="#A7A3FF" />}
                            </button>
                        </div>

                        <div className="flex justify-end w-full">
                            <button type="button" className="text-[#B0B0B0] text-[13px]">Şifremi unuttum</button>
                        </div>

                        <button type="button" className="bg-[#4D47C3] text-white p-4 rounded-lg hover:bg-[#4D47C3]/90">Giriş</button>
                    </div>
                </aside>

            </section>

        </main>
    )
}

export default Register;