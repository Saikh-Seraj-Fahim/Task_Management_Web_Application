import HeroSectionLogo from './assets/TaskManagementLogo.png'
export default function HeroSection() {
    return (
        <section className="pb-[114px] pt-20 md:mt-[100px]">
            <div className="container lg:px-20">
                <div className="grid items-center gap-6 md:grid-cols-2">
                    <div className="flex justify-center md:order-2">
                        <img className="max-md:w-full" src={HeroSectionLogo}
                            width="326" height="290" alt="frame" />
                    </div>
                    <div>
                        <h1 className="mb-1.5 text-[56px] font-bold leading-none 
                        text-[#F5BF42] lg:text-[65px]">
                            Task Management Web Application
                        </h1>
                        <p className="text-lg my-2 opacity-60">
                            Effortlessly Add, Delete, Edit and Search your tasks.
                            Seamless Goal Achievement and Stress Free Task Management.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}