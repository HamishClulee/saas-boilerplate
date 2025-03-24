import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HotelIcon, QrCode, Laptop, Star, Shield, Zap } from "lucide-react";
import { PublicSiteLayout } from "@/templates/public-site.layout";

export default function Home() {
  return (
    <PublicSiteLayout>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-secondary/20">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-heading">
                      Lorem ipsum dolor{" "}
                      <span className="text-primary">sit amet consectetur</span>
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/signup">
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90"
                      >
                        Get Started
                      </Button>
                    </Link>
                    <Link href="/demo">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      >
                        View Demo
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-md overflow-hidden rounded-lg border bg-background p-2 shadow-xl">
                    <div className="flex items-center justify-between border-b p-2">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                        <div className="h-3 w-3 rounded-full bg-green-500" />
                      </div>
                      <div className="flex items-center justify-center rounded-md border bg-background px-2 text-sm">
                        demo.addname.com
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="space-y-4">
                        <div className="h-8 w-3/4 rounded-md bg-primary/20" />
                        <div className="h-24 rounded-md bg-accent/20" />
                        <div className="space-y-2">
                          <div className="h-4 w-full rounded-md bg-muted" />
                          <div className="h-4 w-full rounded-md bg-muted" />
                          <div className="h-4 w-3/4 rounded-md bg-muted" />
                        </div>
                        <div className="flex gap-2">
                          <div className="h-10 w-24 rounded-md bg-primary" />
                          <div className="h-10 w-24 rounded-md bg-accent" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-heading">
                    Ut enim ad minim
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Laptop className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold font-heading">
                    1. Lorem ipsum
                  </h3>
                  <p className="text-muted-foreground">
                    Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <HotelIcon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold font-heading">
                    2. Dolor sit amet
                  </h3>
                  <p className="text-muted-foreground">
                    Consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <QrCode className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold font-heading">
                    3. Consectetur
                  </h3>
                  <p className="text-muted-foreground">
                    Sed ut perspiciatis unde omnis iste natus error
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-heading">
                    Sed ut perspiciatis
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Nemo enim ipsam voluptatem quia voluptas
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="group relative overflow-hidden rounded-lg border p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-primary/10 rounded-bl-full"></div>
                  <Star className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold font-heading mb-2">
                    Lorem ipsum dolor
                  </h3>
                  <p className="text-muted-foreground">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam.
                  </p>
                </div>
                <div className="group relative overflow-hidden rounded-lg border p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-accent/10 rounded-bl-full"></div>
                  <Shield className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold font-heading mb-2">
                    Lorem ipsum dolor
                  </h3>
                  <p className="text-muted-foreground">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam.
                  </p>
                </div>
                <div className="group relative overflow-hidden rounded-lg border p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-primary/10 rounded-bl-full"></div>
                  <Zap className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold font-heading mb-2">
                    Lorem ipsum dolor
                  </h3>
                  <p className="text-muted-foreground">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam.
                  </p>
                </div>
                <div className="group relative overflow-hidden rounded-lg border p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-accent/10 rounded-bl-full"></div>
                  <Star className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold font-heading mb-2">
                    Lorem ipsum dolor
                  </h3>
                  <p className="text-muted-foreground">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam.
                  </p>
                </div>
                <div className="group relative overflow-hidden rounded-lg border p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-primary/10 rounded-bl-full"></div>
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold font-heading mb-2">
                    Lorem ipsum dolor
                  </h3>
                  <p className="text-muted-foreground">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam.
                  </p>
                </div>
                <div className="group relative overflow-hidden rounded-lg border p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-accent/10 rounded-bl-full"></div>
                  <Zap className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold font-heading mb-2">
                    Lorem ipsum dolor
                  </h3>
                  <p className="text-muted-foreground">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/20">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-heading">
                  Neque porro quisquam est qui dolorem.
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem.
                </p>
              </div>
              <div className="flex gap-4 lg:justify-end">
                <Link href="/signup">
                  <Button className="bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    View Demo
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PublicSiteLayout>
  );
}
