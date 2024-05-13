import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <header className=" bg-red-400 fixed w-full">
        <div className="container flex items-center justify-between h-[60px]">
          <div className="flex gap-2">
            <img
              className="w-5 h-5"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
              alt=""
            />
            <span className="hidden sm:block">React</span>
          </div>
          <nav>
            <ul className="flex gap-3">
              <li>
                <NavLink to="docs">Docs</NavLink>
              </li>
              <li>
                <NavLink to="tutorial">Tutorial</NavLink>
              </li>
              <li>
                <NavLink to="blog">Blog</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
