import Button from "./ui/button";

export default function CTA() {
  return (
    <div className="md:mx-12 lg:mx-28">
      <section className="bg-shoeOrange/75 max-w-4xl mx-auto w-full grid relative place-content-center rounded-xl shadow-sm min-h-[200px]">
        <div className="sm:space-y-4 lg:space-y-6 space-y-6 z-[5] p-6 py-8 lg:py-12">
          <h2 className="text-4xl text-center tracking-tight lg:text-5xl text-shoeBackground">
            Subscribe to our Newsletter
          </h2>
          <div className="inputContainer relative flex flex-col sm:flex-row bg-shoeBackground rounded-lg sm:p-2 lg:p-3 p-4 gap-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Type your email here"
              className="ctainput flex-1 px-4 rounded-md leading-7"
            />
            <Button className="uppercase tracking-wider hover:shadow-md lg:w-36 lg:py-3">
              join us
            </Button>
          </div>
        </div>

        <div className="ctaBg absolute inset-0" />
      </section>
    </div>
  );
}
