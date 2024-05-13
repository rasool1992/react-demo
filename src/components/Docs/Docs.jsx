import { NavLink, Outlet } from "react-router-dom";
export default function Docs() {
  return (
    <>
      <div className="pt-[61px] flex">
        <div className="w-1/4 bg-red-600">
          <ul className="flex flex-col">
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="get-more">get more</NavLink>
            </li>
          </ul>
        </div>
        <div className="w-full bg-purple-500">
          <Outlet />
        </div>
      </div>
    </>
  );
}
