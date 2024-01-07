import Button from "./ui/button";

export default function About() {
  return (
    <section className="grid place-content-center text-center px-4 my-16 max-w-7xl mx-auto">
      <div className="grid gap-8">
        <div className="space-y-4">
          <h2 className="text-4xl text-shoeDark">About Us</h2>
          <p className="max-w-[68ch] mx-auto leading-0 text-shoeDarkBrown">
            Believing neglected so so allowance existence departure in. In
            design active temper be uneasy. Thirty for remove plenty regard you
            summer though. He preference connection astonished on of ye.
          </p>
        </div>
        <div className="grid justify-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="max-w-md">
              <img
                className="rounded-3xl w-full"
                src="https://images.unsplash.com/photo-1603191659812-ee978eeeef76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>

            <div className="max-w-md">
              <img
                className="rounded-3xl"
                src="https://images.unsplash.com/photo-1603191659812-ee978eeeef76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="max-w-md">
              <img
                className="rounded-3xl w-full"
                src="https://images.unsplash.com/photo-1603191659812-ee978eeeef76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>

            <div className="max-w-md">
              <img
                className="rounded-3xl"
                src="https://images.unsplash.com/photo-1603191659812-ee978eeeef76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>

        <Button className="w-fit lg:w-36 lg:py-3 mx-auto bg-shoeLightOrange rounded-xl">
          Get Started
        </Button>
      </div>
    </section>
  );
}
