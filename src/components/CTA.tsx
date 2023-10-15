import Button from "./ui/button";

export default function CTA() {
  return (
    <div className="md:mx-12 lg:mx-28">
      <section className="bg-shoeOrange/75 max-w-4xl mx-auto w-full grid relative place-content-center rounded-xl shadow-sm min-h-[200px]">
        <div className="space-y-6 z-[5] p-6">
          <h2 className="text-4xl text-center tracking-tight lg:text-5xl text-shoeBackground">
            Subscribe to our Newsletter
          </h2>
          <div className="inputContainer relative flex flex-col sm:flex-row bg-shoeBackground rounded-lg p-3 gap-4  max-w-md mx-auto">
            <input
              type="text"
              placeholder="Type your email here"
              className="ctainput flex-1 px-4 rounded-md"
            />
            <Button className="uppercase hover:shadow-md">join us</Button>
          </div>
        </div>

        <div className="ctaBg absolute inset-0" />
      </section>
    </div>
  );
}
