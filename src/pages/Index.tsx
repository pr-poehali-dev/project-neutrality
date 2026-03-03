import { ThemeProvider } from "next-themes";
import {
  WaitlistForm,
  WaitlistWrapper,
  MeshGradient,
} from "@/components/waitlist";

const Index = () => {
  const handleSubmit = async (
    email: string
  ): Promise<{ success: boolean; error?: string }> => {
    // Simulate API call
    console.log("Submitting email:", email);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Demo: always succeed
    return { success: true };
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="antialiased max-w-screen min-h-svh bg-slate-1 text-slate-12">
        <MeshGradient
          colors={["#0d0015", "#6600cc", "#ff007a", "#ff6600"]}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <div className="max-w-screen-sm mx-auto w-full relative z-[1] flex flex-col min-h-screen items-center justify-center">
          <div className="px-5 gap-8 flex flex-col">
            <main className="flex justify-center">
              <WaitlistWrapper
                logo={{
                  src: "/logo.svg",
                  alt: "DJ Booking",
                }}
                copyright="© 2026"
                copyrightLink={{ text: "DJ Booking", href: "#" }}
                showThemeSwitcher={true}
              >
                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-3xl font-medium text-slate-12 whitespace-pre-wrap text-pretty">
                    🎧 Забронируй диджея на мероприятие
                  </h1>
                  <p className="text-slate-10 tracking-tight text-pretty">
                    Свадьба, корпоратив, вечеринка — оставь заявку и мы свяжемся с тобой в течение часа.
                  </p>
                </div>
                <div className="px-1 flex flex-col w-full self-stretch">
                  <WaitlistForm
                    onSubmit={handleSubmit}
                    placeholder="Твой email для связи"
                    buttonCopy={{
                      idle: "Забронировать",
                      loading: "Отправка...",
                      success: "Заявка принята!",
                    }}
                  />
                </div>
              </WaitlistWrapper>
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;