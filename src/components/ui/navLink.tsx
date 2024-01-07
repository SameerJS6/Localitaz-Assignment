import useRipple from "use-ripple-hook";

type NavLinksProps = {
  title: string;
  href?: string;
};

export default function NavLink({ title, href }: NavLinksProps) {
  const [ripple, event] = useRipple({ color: "rgb(252, 95, 34, 0.25)" });
  return (
    <li>
      <a
        ref={ripple}
        onMouseDown={event}
        href={`#${href}`}
        className="hover:bg-shoeOrange/20 capitalize transition-all duration-300 ease-in-out px-2 py-1.5 rounded-md "
      >
        {title}
      </a>
    </li>
  );
}
