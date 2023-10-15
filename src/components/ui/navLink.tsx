import useRipple from "use-ripple-hook";

type NavLinksProps = {
  title: string;
};

export default function NavLink({ title }: NavLinksProps) {
  const [ripple, event] = useRipple({ color: "rgb(17, 8, 6, 0.15)" });
  return (
    <li>
      <a
        ref={ripple}
        onMouseDown={event}
        href="#"
        className="hover:bg-shoeGray/20 capitalize transition-all duration-300 ease-in-out px-2 py-1.5 rounded-md"
      >
        {title}
      </a>
    </li>
  );
}
