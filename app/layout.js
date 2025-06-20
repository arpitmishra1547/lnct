import "./globals.css";



export const metadata = {
  title: "Lnct-web",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased min-h-screen bg-white overflow-x-hidden"
      >
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent m-auto" />
        {/* <div className="border-2 border-white/20 rounded-2xl backdrop-blur-md bg-black/30 mx-8 my-4 min-h-[90vh] w-[95%] relative overflow-hidden"> */}
          {/* <div className="relative h-full w-full bg-slate-950">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          </div> */}
          <main className="relative z-10">
            {children}
          </main>
        {/* </div> */}
        

  

      </body>
    </html>
  );
}
